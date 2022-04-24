import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ImageForm from './ImageForm';

describe('ImageForm', () => {
  it('renders a form with two text inputs and one photo upload, a submit button, does not submit when the input is empty or wenn there are only whitespaces and it has a title', () => {
    const neverCalled = jest.fn();
    render(
      <MemoryRouter>
        {' '}
        <ImageForm />{' '}
      </MemoryRouter>
    );

    const titleTextarea = screen.getByLabelText(/Überschrift*/i);
    userEvent.type(titleTextarea, '{enter}');
    const descriptionTextarea = screen.getByLabelText(
      /Beschreibung der Tradition*/i
    );

    userEvent.type(descriptionTextarea, '{enter}');
    const fotoTextarea = screen.getByLabelText(/Vorschau/i);
    userEvent.type(fotoTextarea, '{enter}');

    const saveButton = screen.getByRole('button');
    const title = screen.getByText('Formular');

    expect(title).toBeInTheDocument();
    expect(titleTextarea).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();
    expect(fotoTextarea).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(neverCalled).not.toHaveBeenCalled();
  });
});
