import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Bubble from '../app/components/Bubble';
import Dialog from '../app/components/Bubble/Dialog';
import Speech from '../app/components/Bubble/Speech';
import Res from '../app/components/Bubble/Res';

import Underline from '../app/components/Underline';

import { Button1, Button2, Button3 } from '../app/components/Buttons';
import Text from '../app/components/Text';
import Checkbox from '../app/components/Checkbox';
import CheckboxGroup from '../app/components/CheckboxGroup';
import Degree from '../app/components/Degree';
import TextWithIcon from '../app/components/TextWithIcon';
import Toggle from '../app/components/Toggle';
import TextInput from '../app/components/TextInput';
import Paper from '../app/components/Paper';
import List from '../app/components/List';
import FbShare from '../app/components/FbShare';
import Link from '../app/components/Link';
import MdBold from '../app/components/MdBold';
import ResultFatty from '../app/components/ResultFatty';

storiesOf('Bubbles', module)
  .add('Bubble', () => (
    <div>
      <Bubble>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble>
      <Bubble>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble>
    </div>
  ))
  .add('Dialog', () => (
    <div>
      <Dialog>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Dialog>
      <Dialog>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Dialog>
    </div>
  ))
  .add('Speech', () => (
    <div>
      <Speech>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Speech>
      <Speech>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Speech>
    </div>
  ))
  .add('Res', () => (
    <div>
      <Res>
        <Text>高風險群，建議儘快就診治療</Text>
      </Res>
      <Res>
        <Text>亞健康群，建議進一步檢查</Text>
      </Res>
      <Res>
        <Text>指數正常，建議定期回診追蹤</Text>
      </Res>
    </div>
  ))
  .add('Paper', () => (
    <Paper>
      <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
    </Paper>
  ));

storiesOf('Buttons', module)
  .add('Button 1', () => (
    <div>
      <Button1 onClick={action('onClick')}>Next</Button1>
      <Button1 onClick={action('onClick')} disabled>Disabled</Button1>
    </div>
  ))
  .add('Button 2', () => (
    <div>
      <Button2 onClick={action('onClick')}>Next</Button2>
      <Button2 onClick={action('onClick')} disabled>Disabled</Button2>
    </div>
  ))
  .add('Button 3', () => (
    <div>
      <Button3 onClick={action('onClick')}>Next</Button3>
      <Button3 onClick={action('onClick')} disabled>Disabled</Button3>
    </div>
  ))
  .add('FbShare', () => (
    <FbShare onClick={action('onClick')} />
  ))
  .add('ResultFatty', () => (
    <ResultFatty w={1} active={0} />
  ));

storiesOf('Text', module)
  .add('Underline', () => (
    <Underline>拯救他</Underline>
  ))
  .add('Underline (Inline)', () => (
    <Underline.inline>拯救他</Underline.inline>
  ))
  .add('TextWithIcon', () => (
    <TextWithIcon>有icon Blah</TextWithIcon>
  ))
  .add('List', () => (
    <List>
      <li>1</li>
      <li>List Item</li>
    </List>
  ))
  .add('MdBold', () => (
    <MdBold>
      看看有什麼良方能讓資訊的吸收和傳達更有效率，提升工作和學習品質！
    </MdBold>
  ))
  .add('Links', () => (
    <List>
      <li><Link>1124124</Link></li>
      <li><Link noBorder>1124124</Link></li>
    </List>
  ));

storiesOf('Inputs', module)
  .add('TextInput', () => (
    <div>
      <TextInput onChange={action('onchange')} />
      <TextInput onChange={action('onchange')} error="無效的電子信箱!" />
    </div>
  ))
  .add('Checkbox', () => (
    <div>
      <Checkbox>選項</Checkbox>
      <Checkbox disabled>選項 disabled</Checkbox>
    </div>
  ))
  .add('CheckboxGroup (one)', () => (
    <CheckboxGroup
      onChange={action('onchange')}
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('CheckboxGroup (multiple)', () => (
    <CheckboxGroup
      onChange={action('onchange')}
      multiple
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('CheckboxGroup (disabled)', () => (
    <CheckboxGroup
      disabled
      onChange={action('onchange')}
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('Checkbox (No Underline)', () => (
    <Checkbox noUnderline>選項</Checkbox>
  ))
  .add('Degree', () => (
    <Degree onChange={action('onchange')}>
      <Text f="1.25em">中文</Text>
      <Text>Sub</Text>
    </Degree>
  ))
  .add('Toggle', () => (
    <Toggle onChange={action('onchange')} labelTrue="當然好，已填完！" labelFalse="完全沒興趣" />
  ));
