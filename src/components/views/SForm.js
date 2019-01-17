import React from 'react';
import Form from 'react-jsonschema-form';
import LayoutGridField from 'react-jsonschema-form-layout-grid';
import { ThemeSwitcher } from 'react-bootstrap-theme-switcher';
import { Grid } from 'react-bootstrap';

import WorkPlacesTemplate from '../customFields/WorkPlacesTemplate';
import WorkPlace from '../customFields/WorkPlace';
import ToggleButtons from '../widgets/ToggleButtons';
import Number from '../widgets/Number';
import ImperialBodyParam from '../customFields/ImperialBodyParam';

// import * as helpers from '../../helpers/helpers';
import schema from '../../schemas/journey.schema';
import uiSchema from '../../uiSchemas/journey.uischema';

const fields = {
  layout_grid: LayoutGridField,
  imperial: ImperialBodyParam,
  workPlace: WorkPlace,
};

const widgets = {
  toggle: ToggleButtons,
  number: Number,
};

const formData = {
  aboutYou: {
    /*    height: 178,
    weight: 80,*/
    //measureUnits: 'metric'
    imperialHeight: {
      ft: 80,
      ins: 30,
    },
  },
  workPlaces: [
    { jobName: 'work1', weekPercentage: 10, annualIncome: 10000 },
    { jobName: 'work2', weekPercentage: 20, annualIncome: 20000 },
  ],
  job: {
    jobName: 'Top manager',
    weekPercentage: 20,
    annualIncome: 70000,
  },
};

const log = type => console.log.bind(console, type);

const SForm = () => {
  return (
    <ThemeSwitcher themePath={uiSchema.theme.themePath} defaultTheme={uiSchema.theme.defaultTheme}>
      <Grid>
        <Form
          ArrayFieldTemplate={WorkPlacesTemplate}
          fields={fields}
          formData={formData}
          //  liveValidate={true}
          onChange={log('changed')}
          onError={log('errors')}
          onSubmit={log('submitted')}
          schema={schema}
          //   transformErrors={helpers.transformErrors}
          uiSchema={uiSchema}
          widgets={widgets}
        />
      </Grid>
    </ThemeSwitcher>
  );
};

export default SForm;
