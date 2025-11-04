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
