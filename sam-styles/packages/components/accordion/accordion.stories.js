import MultiSelectableAccordion from "./templates/multiselectable.html";

export default {
    title: "Components/Accordion",
    argTypes: {
        class: { control: 'text' },
        expanded: { control: 'boolean' }
    },
};

export const Multiselectable = () => {
    // Create a container element
    const container = document.createElement('div');
    container.innerHTML = MultiSelectableAccordion;

    // Set initial state of all accordions to closed, except the second one
    container.querySelectorAll('.usa-accordion__button').forEach((button, index) => {
        button.setAttribute('aria-expanded', index === 1 ? 'true' : 'false');
    });
    container.querySelectorAll('.usa-accordion__content').forEach((content, index) => {
        content.style.display = index === 1 ? 'block' : 'none';
    });

    // JavaScript for accordion logic
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

    // Append the script to the container
    container.appendChild(script);

    return container;
};
