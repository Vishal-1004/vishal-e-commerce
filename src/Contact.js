import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9596988051294!2d80.17691057463199!3d12.974429514817139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f817632892f%3A0x90ba170bc394136e!2sCGRA%20Meenambakkam!5e0!3m2!1sen!2sin!4v1696279918176!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            method="POST"
            action="https://formspree.io/f/xgejpzza"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="User name"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              autoComplete="off"
            />
            <textarea
              placeholder="Enter your message"
              autoComplete="off"
              cols="30"
              rows="10"
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
