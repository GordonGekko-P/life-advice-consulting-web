import Cal from '@calcom/embed-react';

export default function CalBooking() {
  return (
    <Cal
      calLink="paulvonr-protonmail.com/30min"
      style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'hidden' }}
      config={{
        name: 'Life Advice Consulting',
        theme: 'light',
        layout: 'month_view'
      }}
    />
  );
} 