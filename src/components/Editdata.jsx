import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Data from "./Data";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 5,
};

export default function Editdata({ detail }) {
  const [fieldname, setFieldname] = React.useState(detail.first_name);
  const [fieldlastname, setFieldlastname] = React.useState(detail.last_name);
  const [fieldage, setFieldage] = React.useState(detail.dob);
  const [fieldgender, setFieldgender] = React.useState(detail.gender);
  const [fieldemail, setFieldemail] = React.useState(detail.email);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function setData(e) {
    e.preventDefault();
    Data[detail.id - 1].first_name = fieldname;
    Data[detail.id - 1].last_name = fieldlastname;
    Data[detail.id - 1].dob = fieldage;
    Data[detail.id - 1].gender = fieldgender;
    Data[detail.id - 1].email = fieldemail;

    navigate(`/persondetail/${detail.id - 1}`);
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="EditdataContainer">
          <form onSubmit={setData}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Name:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="Editdatainput"
                onChange={(e) => setFieldname(e.target.value)}
                value={fieldname}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Last name:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="Editdatainput"
                onChange={(e) => setFieldlastname(e.target.value)}
                value={fieldlastname}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Bob:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="Editdatainput"
                onChange={(e) => setFieldage(e.target.value)}
                value={fieldage}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Gender:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="Editdatainput"
                onChange={(e) => setFieldgender(e.target.value)}
                value={fieldgender}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Email:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="Editdatainput"
                onChange={(e) => setFieldemail(e.target.value)}
                value={fieldemail}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input type="submit" style={{ marginLeft: "40%" }} />
            </Typography>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
