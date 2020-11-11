import React from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

export const AddScheduleDialog = ({
  schedule: {
    form: { title, description, date, location },
    isDialogOpen,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogContent>
        <TextField
          value={title}
          autoFocus
          margin="dense"
          label="Add Title"
          type="text"
          fullWidth
          onChange={(e) => setSchedule({ title: e.target.value })}
        ></TextField>
        <DatePicker
          value={date}
          onChange={(d) => {
            setSchedule({ date: d });
          }}
          variant="inline"
          format="dddd, MMM D"
          animateYearScrolling
          disableToolbar
          fullWidth
        />
        <TextField
          value={location}
          margin="dense"
          label="Location"
          type="text"
          fullWidth
          onChange={(e) => setSchedule({ location: e.target.value })}
        ></TextField>
        <TextField
          value={description}
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          onChange={(e) => setSchedule({ description: e.target.value })}
        ></TextField>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={saveSchedule} color="primary">
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
