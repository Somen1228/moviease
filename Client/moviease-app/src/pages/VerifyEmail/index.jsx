import React from "react";
import { emailVerification } from "../../calls/users";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

function VerifyEmail() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const response = await emailVerification(values);
    
    if (response.success) {
    console.log(response);
    
      message.success("Email verification successful. Login to continue", 3);
      navigate("/");
    } else {
        console.log("I am at else");
        console.log(response);
        
      message.error(response.message);
    }
  };

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section text-2xl font-bold mb-6">
            <h1>Email Verification</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="OTP"
                htmlFor="otp"
                name="otp"
                className="d-block"
                rules={[{ required: true, message: "OTP is required" }]}
              >
                <Input
                  id="otp"
                  type="number"
                  placeholder="Enter your OTP"
                ></Input>
              </Form.Item>

              <Form.Item className="d-block">
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Verify
                </Button>
              </Form.Item>
            </Form>
            <p className="text-blue-600">Resend OTP</p>
          </section>
        </main>
      </header>
    </>
  );
}

export default VerifyEmail;
