import MultiSelectableAccordion from "./templates/multiselectable.html";
import BorderedAccordion from "./templates/bordered.html"

export default {
    title: "Components/Accordion",
    argTypes: {
        class: { control: 'text' },
        expanded: { control: 'boolean' }
    },
};
export const Bordered = (args) => {
    const container = document.createElement('div');
    container.className = `usa-accordion ${args.class || 'usa-accordion--bordered'}`;
    container.innerHTML = BorderedAccordion;

    const accordionButtons = container.querySelectorAll('.usa-accordion__button');
    const accordionContents = container.querySelectorAll('.usa-accordion__content');

    if (accordionButtons.length > 0 && accordionContents.length > 0) {
        accordionButtons[0].setAttribute('aria-expanded', 'true');
        accordionContents[0].style.display = 'block';
    }

    for (let i = 1; i < accordionButtons.length; i++) {
        accordionButtons[i].setAttribute('aria-expanded', 'false');
        accordionContents[i].style.display = 'none';
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
    const initAccordion = () => {
        const accordionButtons = document.querySelectorAll('.usa-accordion__button');
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                // Toggle the current section
                this.setAttribute('aria-expanded', !isExpanded);
                const contentPanelId = this.getAttribute('aria-controls');
                const contentPanel = document.getElementById(contentPanelId);
                contentPanel.style.display = isExpanded ? 'none' : 'block';

                // Collapse other sections
                accordionButtons.forEach(otherButton => {
                    if (otherButton !== this) {
                        otherButton.setAttribute('aria-expanded', 'false');
                        const otherContentPanel = document.getElementById(otherButton.getAttribute('aria-controls'));
                        otherContentPanel.style.display = 'none';
                    }
                });
            });
        });
    };
    initAccordion();
    `;

    container.appendChild(script);

    return container;
};

export const Multiselectable = () => {
    const container = document.createElement('div');
    container.innerHTML = MultiSelectableAccordion;
    container.querySelectorAll('.usa-accordion__button').forEach((button, index) => {
        button.setAttribute('aria-expanded', index === 1 ? 'true' : 'false');
    });
    container.querySelectorAll('.usa-accordion__content').forEach((content, index) => {
        content.style.display = index === 1 ? 'block' : 'none';
    });

    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
        const initAccordion = () => {
            const accordionButtons = document.querySelectorAll('.usa-accordion__button');
            accordionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded);
                    const contentPanelId = this.getAttribute('aria-controls');
                    const contentPanel = document.getElementById(contentPanelId);
                    contentPanel.style.display = isExpanded ? 'none' : 'block';
                });
            });
        };
        initAccordion();
    `;

    container.appendChild(script);

    return container;
};
