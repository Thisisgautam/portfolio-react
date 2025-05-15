import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const handleClick = () => {
    window.open('https://github.com/Thisisgautam', '_blank'); 
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={handleClick} style={{ cursor: 'pointer' }} className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}