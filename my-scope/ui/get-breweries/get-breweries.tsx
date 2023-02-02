import React, { useState, useEffect }from 'react';
import { Brewery, BreweryProps } from '@my-scope/pmccartney.brewery.ui.brewery';
import { Paragraph } from '@my-scope/pmccartney.brewery.ui.paragraph';

export type GetBreweriesProps = {
  city?: string;
};

export interface BrewsData {
  name?: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
}

export function GetBreweries(props: GetBreweriesProps) {
  const [brews, setBrews] = useState<BrewsData[]>([]);
  
  useEffect(() => {
      const url = 'https://api.openbrewerydb.org/breweries?by_city=' + props.city + "&per_page=1000";
      fetch(url).then(res => res.json()).then(data => parseArray(data));
  }, [props.city]);

  
  const parseArray = (parsed: any) => {    
    const jsonArray = Object.entries(parsed);
    let newArray :any[]= jsonArray.map(subArray => subArray[1])
    setBrews(newArray);
  }

  return (
    <div>
      <Paragraph>Here are some suggestions:</Paragraph>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Postal Code</th>
        </tr>
      </thead>
      <tbody>
      {brews.map((brewery, index) => (
        <Brewery key={index} breweryName={brewery.name} breweryStreetAddress={brewery.street} breweryCity={brewery.city} breweryPostalCode={brewery.postal_code} breweryState={brewery.state}/>
      ))}
      </tbody>
     </table>
      
    </div>
  );
}
