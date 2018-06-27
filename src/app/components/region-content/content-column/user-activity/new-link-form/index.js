import { h } from 'preact'
import Ink from 'react-ink'

import LightHeader from '../../../../shared/light-header'
import FormInput from '../../../../shared/form-input'

import style from './styles.scss'

export default function NewLinkForm() {
  return (
    <div>
      <LightHeader darker title="create new link" />
      <form class={`flex ${style.form}`}>
        <div class={style.formInputs}>
          <FormInput type="text" placeholder="Original URL" />
          <FormInput type="text" placeholder="Custom ID" />
        </div>
      </form>
      <button type="submit" class={style.button}>
        shorten url
        <Ink />
      </button>
    </div>
  )
}
