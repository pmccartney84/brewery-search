import React, { useState} from 'react';
import { InputText } from '@teambit/design.inputs.input-text';
import { Form, useForm, extractFormData } from '@teambit/base-react.forms.form';
import { GetBreweries } from '@my-scope/pmccartney.brewery.ui.get-breweries';
import { Head } from '@my-scope/pmccartney.brewery.ui.head';
import { Theme } from '@teambit/evangelist.theme.evangelist-theme';
import { Button } from '@my-scope/pmccartney.brewery.ui.button';

export function BasicAppApp() {
  const [currentCity, setCity] = useState("");
  
  function submit(e){
    const extractedData = extractFormData(e);
    const myJSON = JSON.parse(JSON.stringify(extractedData));
    const newCity = myJSON.city;
    setCity(newCity);

  }
  

  return (
    <Theme>
    <div>
      <Head />
      <Form data-testid='form' onSubmit={submit}>
        <InputText placeholder="City where you are thirsty!" id="city" name="city" style={{width: '300px'}} ></InputText>
        <Button label='Search for Beeer!'/>
        <GetBreweries city={currentCity}/>
      </Form>
    </div>
    </Theme>
  );
}
