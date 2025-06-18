import React from 'react';
import Card from '../Components/Card';

const TeamStatus = () => (
  <Card title="Consultant Status">
    <div className="grid grid-cols-3 text-sm gap-2">
      <div>
        <p className="font-semibold">Lead</p>
        <p>4 Active</p>
      </div>
      <div>
        <p className="font-semibold">Analyst</p>
        <p>7 Active</p>
      </div>
      <div>
        <p className="font-semibold">Intern</p>
        <p>2 Active</p>
      </div>
    </div>
  </Card>
);

export default TeamStatus;