🌗 Flip Mushroom Card

A sleek, minimal Home Assistant card that automatically **flips between multiple sensors** — perfect for dashboards using the Mushroom style.  

---

✨ Features

✅ Automatically flips between multiple entities  
✅ Smooth Y-axis animation with fade transition  
✅ Modern Mushroom-inspired design (rounded corners, soft shadows)  
✅ Compact layout for clean dashboards  

---

🎬 Preview

![Flip Mushroom Card demo](https://github.com/roy75/flip-mushroom-card/blob/main/mushroom-flip-animation.gif)

*(Add your own GIF or screenshot above — name it `mushroom-flip-animation.gif` and place it in your repo root.)*

---

🧩 Example

🔹 Indoor ↔ Outdoor temperature

```yaml
type: custom:flip-mushroom-card
entities:
  - sensor.living_room_temperature
  - sensor.outdoor_temperature
names:
  - Indoors
  - Outdoors
icons:
  - mdi:home-thermometer
  - mdi:weather-sunny
interval: 3000
```

---

⚙️ Options

| Option     | Type   | Default  | Description                             |
| ---------- | ------ | -------- | --------------------------------------- |
| `entities` | list   | required | Two or more entity IDs to flip between. |
| `names`    | list   | optional | Custom display names for each entity.   |
| `icons`    | list   | optional | MDI icons to show for each entity.      |
| `interval` | number | 3000     | Time between flips in milliseconds.     |

---

🪄 Example (with custom interval)

```yaml
type: custom:flip-mushroom-card
entities:
  - sensor.living_room_temperature
  - sensor.bedroom_temperature
names:
  - Living Room
  - Bedroom
icons:
  - mdi:sofa
  - mdi:bed
interval: 5000
```
⏱️ This card flips every 5 seconds between the two sensors.

---

💾 Installation
1. Copy ```flip-mushroom-card.js``` into your Home Assistant folder:
```arduinio
/config/www/flip-mushroom-card.js
```
2. Add the resource in Settings → Dashboards → Resources

    URL: ```/local/flip-mushroom-card.js```

    Type: ```JavaScript Module```

3. Reload your dashboard or Home Assistant frontend.

4. Add the card in YAML using:
```
type: custom:flip-mushroom-card
...
```

---

🌍 Using GitHub Pages

If you host this card on GitHub Pages, you can load it directly from a URL:
```
url: https://roy75.github.io/flip-mushroom-card/flip-mushroom-card.js
type: module
```

---

👨‍💻 Credits

Created with ❤️ for the Home Assistant community.
Designed to blend seamlessly with the Mushroom aesthetic.
