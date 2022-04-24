import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Form from './Form';

describe('Form', () => {
  it('renders a form with three inputs and a submit button, does not submit when the input is empty or wenn there are only whitespaces and it has a title', () => {
    const neverCalled = jest.fn();
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const wordTextarea = screen.getByLabelText(/neues Wort*/i);
    userEvent.type(wordTextarea, '{enter}');

    const exampleTextarea = screen.getByLabelText(/Beispielsatz*/i);
    userEvent.type(exampleTextarea, '{enter}');

    const explanationTextarea = screen.getByLabelText(/Erklärung*/i);
    userEvent.type(explanationTextarea, '{enter}');

    const saveButton = screen.getByRole('button');
    const title = screen.getByText('Erstellen');

    expect(title).toBeInTheDocument();
    expect(wordTextarea).toBeInTheDocument();
    expect(exampleTextarea).toBeInTheDocument();
    expect(explanationTextarea).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(neverCalled).not.toHaveBeenCalled();
  });
});
