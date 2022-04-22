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
    const buttonConfirm = screen.getByText(/Ja/i);
    const buttonCancel = screen.getByText(/Nein/i);

    expect(buttonConfirm).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });

  describe('DeleteMessage', () => {
    it('calls onClick when clicking the cancel or confirm delete button', async () => {
      const cancelBtn = jest.fn();
      const deleteBtn = jest.fn();
      render(
        <MemoryRouter>
          <DeleteMessage
            onConfirmDelete={deleteBtn}
            onCancelDelete={cancelBtn}
          />
        </MemoryRouter>
      );
      const cancelButton = screen.getByRole('button', { name: /nein/i });
      const deleteButton = screen.getByRole('button', { name: /ja/i });

      await userEvent.click(cancelButton);
      await userEvent.click(deleteButton);

      expect(deleteBtn).toHaveBeenCalled();
      expect(cancelBtn).toHaveBeenCalled();
    });
  });
});
