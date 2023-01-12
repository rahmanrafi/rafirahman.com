import * as React from "react";

export function TimelineEntry({ resumeData }) {
  if (resumeData?.basics) {
    const basics = resumeData.basics;
    return (
      <div>
        <h1>{basics.name}</h1>
        <h2>{basics.label}</h2>
        <h3>{basics.locationAsString}</h3>
        <div id='links'>
          {basics.profiles.map(link => (
            <li>{link.network}: <a href={link.url}>{link.username}</a></li>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h1> Loading...</h1>
    );
  }
}
