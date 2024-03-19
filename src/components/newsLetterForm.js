import styled from "styled-components";

const Input = styled.input`
  font: inherit;
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  border: none;
`;
const Button = styled.button`
  font: inherit;
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  border: none;
  background-color: "";
  &:hover {
    background-color: var(--color-primary-300);
  }

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;

function NewsletterForm() {
  return (
    <form>
      <Input
        type="text"
        placeholder="Sign up for newsletter..."
        aria-label="sign up for newsletter"
      />
      <Button>Sign up</Button>
    </form>
  );
}

export default NewsletterForm;
