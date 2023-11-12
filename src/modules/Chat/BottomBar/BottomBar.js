import { createDOMElement } from "../../../services/CreateDOMElement";
import RequestService from "../../../services/requestService";
import './BottomBar.css';

export default class BottomBar {
    constructor(container, messageService) {
        this.container = container;
        this.drawUi();
        this.messageService = messageService;
    }

    drawUi() {
        const bottomBarWrapperElement = createDOMElement('div', ['bottomBar_wrapper']);
        
        const bottomBarFormEl = createDOMElement('form', ['bottomBar_form']);

        bottomBarFormEl.appendChild(this.getFileContainerEl());
        bottomBarFormEl.appendChild(this.getMyPositionButtonEl());

        const inputField = createDOMElement('input', ['input_field']);
        bottomBarFormEl.appendChild(inputField);

        const sendMessadeButtom = createDOMElement('buttom', ['send_messade_buttom', 'fa', 'fa-paper-plane-o', 'fa-2x']);
        bottomBarFormEl.appendChild(sendMessadeButtom);

        this.clickSendMessadeButtom(sendMessadeButtom, inputField);
        this.submitForm(bottomBarFormEl, inputField);

        bottomBarWrapperElement.appendChild(bottomBarFormEl);
        this.container.appendChild(bottomBarWrapperElement);
    }

    getFileContainerEl() {
        const fileContainer = createDOMElement('div', ['file_container']);

        const inputFileEl = createDOMElement('input', ['input-file']);
        inputFileEl.setAttribute('type', 'file');
        fileContainer.appendChild(inputFileEl);

        const inputFileButtonEl = createDOMElement ('span', ['input_file_button', 'fa', 'fa-paperclip', 'fa-2x']);
        fileContainer.appendChild(inputFileButtonEl);

        this.openInputFileCallback(fileContainer, inputFileEl);
        return fileContainer
    }

    getMyPositionButtonEl() {
        const myPositionButtonEl = createDOMElement('span', ['my_position_button', 'fa', 'fa-map-marker', 'fa-2x'])

        myPositionButtonEl.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (data) => {
                        const { latitude, longitude } = data.coords;
                        const position = [latitude, longitude];
                        this.messageService.sendMessage(null, position,'geolocation');
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            }
            
        })
        return myPositionButtonEl;
    }

    openInputFileCallback(containerEl, input) {
        containerEl.addEventListener('click', () => {
            input.dispatchEvent(new MouseEvent('click'));
        });

        input.addEventListener('change', async () => {
            const file = input.files && input.files[0];

            if (!file) return;
            RequestService.uploadFile(file);
        });
    }

    submitForm(form, input) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (input.value.trim()) {
                this.messageService.sendMessage(input.value);  
            }
            input.value = '';
        })
    }

    clickSendMessadeButtom(buttom, input) {
        buttom.addEventListener('click', (e) => {
            e.preventDefault;
            this.messageService.sendMessage(input.value);
            input.value = '';
        });
    }
}