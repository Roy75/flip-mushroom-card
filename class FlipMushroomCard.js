class FlipMushroomCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentIndex = 0;
  }

  setConfig(config) {
    if (!config.entities || config.entities.length < 2) {
      throw new Error("Gebruik minstens twee entities.");
    }
    this.config = config;
  }

  set hass(hass) {
    this.hassInstance = hass;
    if (!this.rendered) {
      this.renderCard();
      this.startFlip();
      this.rendered = true;
    }
    this.updateCard();
  }

  renderCard() {
    const style = document.createElement("style");
    style.textContent = `
      ha-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 16px;
        border-radius: 20px;
        background: linear-gradient(135deg, var(--mushroom-card-primary-bg, #1e293b), var(--mushroom-card-secondary-bg, #334155));
        color: var(--primary-text-color);
        box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0,0,0,0.2));
        transition: transform 0.5s, opacity 0.5s;
      }
      .fade {
        opacity: 0;
        transform: rotateY(90deg);
      }
      .icon {
        font-size: 2em;
        margin-bottom: 8px;
        color: var(--mushroom-accent-color, #00bcd4);
      }
      .value {
        font-size: 1.8em;
        font-weight: bold;
      }
      .label {
        opacity: 0.7;
        font-size: 0.9em;
        margin-top: 4px;
      }
    `;

    const card = document.createElement("ha-card");
    card.innerHTML = `
      <ha-icon class="icon"></ha-icon>
      <div class="value"></div>
      <div class="label"></div>
    `;

    this.shadowRoot.append(style, card);
    this.card = card;
  }

  updateCard() {
    if (!this.hassInstance) return;
    const entityId = this.config.entities[this.currentIndex];
    const stateObj = this.hassInstance.states[entityId];
    if (!stateObj) return;

    const icon = this.card.querySelector(".icon");
    const value = this.card.querySelector(".value");
    const label = this.card.querySelector(".label");

    icon.setAttribute(
      "icon",
      this.config.icons?.[this.currentIndex] ||
      stateObj.attributes.icon ||
      "mdi:thermometer"
    );
    value.textContent = `${stateObj.state} ${stateObj.attributes.unit_of_measurement || ''}`;
    label.textContent =
      this.config.names?.[this.currentIndex] ||
      stateObj.attributes.friendly_name ||
      entityId;
  }

  startFlip() {
    const interval = this.config.interval || 3000;
    this.flipTimer = setInterval(() => {
      this.card.classList.add("fade");
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.config.entities.length;
        this.updateCard();
        this.card.classList.remove("fade");
      }, 400);
    }, interval);
  }

  disconnectedCallback() {
    if (this.flipTimer) clearInterval(this.flipTimer);
  }

  getCardSize() {
    return 2;
  }
}

customElements.define("flip-mushroom-card", FlipMushroomCard);

customElements.define("flip-mushroom-card", FlipMushroomCard);

customElements.define("flip-mushroom-card", FlipMushroomCard);