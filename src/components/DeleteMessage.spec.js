import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DeleteMessage from './DeleteMessage';

describe('DeleteMessage', () => {
  it('renders two buttons when showMessage is true', () => {
    render(
      <MemoryRouter>
        <DeleteMessage showMessage={true} />
      </MemoryRouter>
    );
    const buttonConfirm = screen.getByText(/Yes/i);
    const buttonCancel = screen.getByText(/No/i);

    expect(buttonConfirm).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });

  it('calls onClick when clicking the cancel or confirm delete button', () => {
    const cancelBtn = jest.fn();
    const deleteBtn = jest.fn();
    render(
      <MemoryRouter>
        <DeleteMessage onConfirmDelete={deleteBtn} onCancelDelete={cancelBtn} />
      </MemoryRouter>
    );
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    const deleteButton = screen.getByRole('button', { name: /confirm/i });

    userEvent.click(cancelButton);
    userEvent.click(deleteButton);

    expect(deleteBtn).toHaveBeenCalled();
    expect(cancelBtn).toHaveBeenCalled();
  });
});
