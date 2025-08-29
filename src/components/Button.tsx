interface ButtonProps {
  onClick?: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-warning" onClick={onClick}>
      Go back to the start
    </button>
  );
};

export default Button;
