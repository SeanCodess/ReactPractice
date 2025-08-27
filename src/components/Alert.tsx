interface AlertProps {
  children: string;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-info" role="alert">
      {children}
    </div>
  );
};

export default Alert;
Alert.defaultProps = {
  children: "Something happened!",
};
