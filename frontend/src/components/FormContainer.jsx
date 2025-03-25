const FormContainer = ({ children }) => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-card">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
