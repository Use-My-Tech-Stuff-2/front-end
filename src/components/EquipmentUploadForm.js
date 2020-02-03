import React, { useState } from "react";
import useUpload from "../hooks/useUpload";
import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Form,
  Label,
  Input,
  FormGroup,
  Card,
  CardTitle,
  Textarea
} from "@bootstrap-styled/v4";
import { useDispatch, useSelector } from "react-redux";
import { FORM_CHANGE, RESET_FORM } from "../reducers";
import { Send } from "../actions/Apicalls";
import Loader from "react-loader-spinner";
import ButtonGroup from "@bootstrap-styled/v4/lib/ButtonGroup";

const UploadInput = props => (
  <input
    type='file'
    accept='image/*'
    name='img-loader-input'
    multiple
    {...props}
  />
);

const EquipmentUploadForm = props => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
    deleteimg
  } = useUpload();

  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);
  const price = useSelector(state => state.item.rentalPrice);
  const [radiobutton, setRadiobutton] = useState(false);

  const handlesubmit = e => {
    e.preventDefault();
    dispatch(Send(item, props.match.params.id));
    dispatch({ type: "RESET_FORM" });
    setTimeout(() => {
      props.history.push("/");
      dispatch({ type: "LOADING_FALSE" });
    }, 200);
  };

  const handlechange = e => {
    e.preventDefault();
    dispatch({ type: FORM_CHANGE, name: e.target.name, value: e.target.value });
  };
  const priceChange = e => {
    dispatch({
      type: "RATE_CHANGE",
      name: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div className='container'>
      {/* ------- FILES UPLOADED MSG ------ */}
      <h1>Product Upload</h1>

      <form className='form' onSubmit={onSubmit}>
        {status === "FILES_UPLOADED" && (
          <div className='success-container'>
            <Modal isOpen={modal}>
              <ModalHeader tag='h2'>
                {item.name} have been Successfully Uploaded
              </ModalHeader>

              <Button color='primary' onClick={() => setModal(false)}>
                Thank You
              </Button>
            </Modal>
          </div>
        )}
        <div>
          <UploadInput className='fileupload' onChange={onChange} />

          <button type='submit'>Submit</button>
        </div>
        {console.log(files, pending, "files")}
        {(status === "LOADED") | (uploading === true) ? (
          <div className='thmbnaildiv'>
            {files.map(({ file, src, id }, index) => (
              <div
                style={{
                  opacity: uploaded[id] ? 0.2 : 1
                }}
                key={`thumb${index}`}
                className='thumbnail-wrapper'>
                <span
                  style={{ marginRight: "1%", color: "red", fontWeight: "800" }}
                  onClick={() => deleteimg(id)}>
                  X
                </span>
                <img className='thumbnail' src={src} alt='' />
                <div className='thumbnail-caption'>{file.name}</div>
              </div>
            ))}
          </div>
        ) : null}
        {uploading === true ? (
          <Loader
            type='Bars'
            color='#00BFFF'
            height={55}
            width={80}
            style={{ position: "absolute", right: "600px" }}
            timeout={3000} //3 secs
          />
        ) : null}
      </form>
      <div className='UploadForm'>
        <Form onSubmit={handlesubmit}>
          <FormGroup>
            <Label>
              <p> Name of Product </p>
              <Input
                required
                type='text'
                name='name'
                value={item.name}
                placeholder=' Product Name'
                onChange={handlechange}
              />
            </Label>
            <Label>
              <p> Description of Product </p>
              <Textarea
                type='text'
                name='description'
                value={item.description}
                placeholder=' The quality of a product description can make or break a sale  '
                onChange={handlechange}
              />
            </Label>
            <Label>
              <p> Product Condition </p>
              <Input
                className='condition'
                type='text'
                name='condition'
                value={item.condition}
                placeholder='Like New/ Good / Fair etc..'
                onChange={handlechange}
              />
            </Label>
            <Label>
              <p> Product Location </p>
              <Input
                type='text'
                name='location'
                value={item.location}
                placeholder='City/State'
                onChange={handlechange}
              />
            </Label>
            <Label>
              <p style={{ textAlign: "center" }}>
                Product Rental Price: <br /> (Can Choose Price per Hour and/or
                Per Day)
              </p>
              {!radiobutton ? (
                <Input
                  type='number'
                  name='hourlyRate'
                  value={price.hourlyRate}
                  placeholder='Price per Hr'
                  onChange={priceChange}
                />
              ) : (
                <Input
                  type='number'
                  name='dailyRate'
                  value={price.dailyRate}
                  placeholder='Price per Day'
                  onChange={priceChange}
                />
              )}
            </Label>
            <ButtonGroup>
              <Button
                style={{ marginRight: "1%" }}
                color='info'
                onClick={() => setRadiobutton(false)}
                active={!radiobutton}>
                Price Per Hr
              </Button>
              {console.log(radiobutton, "rd")}
              <Button
                color='secondary'
                onClick={() => setRadiobutton(true)}
                active={radiobutton}>
                Price Per Day
              </Button>
            </ButtonGroup>
            {console.log(price, "price")}

            <div>
              <button className='btn22' type='submit'>
                Submit
              </button>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default EquipmentUploadForm;
