import { h, Component } from 'preact'
import { connect } from 'unistore/preact'

import ModalWrapper from './modal-wrapper'
import Button from '../button'
import { bind } from 'decko'

import { actions } from 'store'

export default connect(
  'modal',
  actions
)(
  class Modal extends Component {
    @bind
    acceptButtonHanlder() {
      this.props.modal.props.onAccept()
      this.props.toggleModal()
    }

    @bind
    closeButtonHanlder() {
      this.props.modal.props.onClose()
      this.props.toggleModal()
    }

    render({ children, modal }) {
      return (
        <ModalWrapper>
          <div class="modal-container">
            <div class="modal-content">
              <strong class="modal-title">{modal.props.title}</strong>
              <div>{children}</div>
              <div class="flex modal-actions">
                <Button
                  text={modal.props.closeButtonText}
                  onClickExecute={this.closeButtonHanlder}
                />
                <Button
                  text={modal.props.confirmButtonText}
                  alternative
                  onClickExecute={this.acceptButtonHanlder}
                />
              </div>
            </div>
          </div>
        </ModalWrapper>
      )
    }
  }
)
