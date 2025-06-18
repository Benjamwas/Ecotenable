import React from 'react';
import Card from './Card';

const meetings = [
  { date: 'May 19', time: '09:00 AM', topic: 'Client Briefing' },
  { date: 'May 20', time: '11:00 AM', topic: 'Strategy Sync' },
  { date: 'May 21', time: '03:00 PM', topic: 'Performance Review' },
];

const MeetingSchedule = () => (
  <Card title="Upcoming Meetings">
    <ul className="text-sm space-y-2">
      {meetings.map((m, idx) => (
        <li key={idx} className="flex justify-between">
          <span>{m.date}</span>
          <span>{m.time}</span>
          <span>{m.topic}</span>
        </li>
      ))}
    </ul>
  </Card>
);

export default MeetingSchedule;