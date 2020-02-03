import { useCallback, useEffect, useReducer, useRef } from "react";

// mock upload func
const api = {
  uploadFile({ timeout = 550 }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }
};

const logUploadedFile = (num, color = "green") => {
  const msg = `%cUploaded ${num} files.`;
  const style = `color:${color};font-weight:bold;`;
  console.log(msg, style);
};

// Constants
const LOADED = "LOADED";
const INIT = "INIT";
const PENDING = "PENDING";
const FILES_UPLOADED = "FILES_UPLOADED";
const UPLOAD_ERROR = "UPLOAD_ERROR";
const DELETE_FILES = "DELETE_FILES";

const initialState = {
  files: [],
  pending: [],
  next: null,
  uploading: false,
  uploaded: {},
  status: "idle"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return { ...state, files: action.files, status: LOADED };
    case "SUBMIT":
      return { ...state, uploading: true, pending: state.files, status: INIT };
    case "NEXT":
      return {
        ...state,
        next: action.next,
        status: PENDING
      };
    case "FILE_UPLOADED":
      return {
        ...state,
        next: null,
        pending: action.pending,
        uploaded: {
          ...state.uploaded,
          [action.prev.id]: action.prev.file
        }
      };
    case "FILES_ARE_UPLOADED":
      return { ...state, uploading: false, status: FILES_UPLOADED };
    case "ERROR":
      return { ...state, uploadError: action.error, status: UPLOAD_ERROR };
    default:
      return state;

    case DELETE_FILES:
      return {
        ...state,
        files: state.files.filter(item => item.id !== action.payload)
      };
  }
};

const useUpload = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (state.files.length) {
        dispatch({ type: "SUBMIT" });
      } else {
        window.alert("You don't have any files loaded.");
      }
    },
    [state.files.length]
  );

  const onChange = e => {
    if (e.target.files.length) {
      const arrFiles = Array.from(e.target.files);
      const files = arrFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file);
        return { file, id: index, src };
      });
      dispatch({ type: "LOAD", files });
    }
  };

  // Sets the next file when it detects that its ready to go
  useEffect(() => {
    if (state.pending.length && state.next == null) {
      const next = state.pending[0];
      dispatch({ type: "NEXT", next });
    }
  }, [state.next, state.pending]);

  const countRef = useRef(0);

  // Processes the next pending thumbnail when ready
  useEffect(() => {
    if (state.pending.length && state.next) {
      const { next } = state;
      api
        .uploadFile(next)
        .then(() => {
          const prev = next;
          logUploadedFile(++countRef.current);
          const pending = state.pending.slice(1);
          dispatch({ type: "FILE_UPLOADED", prev, pending });
        })
        .catch(error => {
          console.error(error);
          dispatch({ type: "ERROR", error });
        });
    }
  }, [state]);

  // Ends the upload process
  useEffect(() => {
    if (!state.pending.length && state.uploading) {
      dispatch({ type: "FILES_ARE_UPLOADED" });
    }
  }, [state.pending.length, state.uploading]);
  const deleteimg = indx => {
    dispatch({ type: DELETE_FILES, payload: indx });
  };
  return {
    ...state,
    onSubmit,
    onChange,
    deleteimg
  };
};

export default useUpload;
