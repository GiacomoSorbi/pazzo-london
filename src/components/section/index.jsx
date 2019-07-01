import React from 'react';

const Section = props => (
  <section id={props.id} className={'section' + props.className || ''}>
    {props.children}
  </section>
);

export default Section;
