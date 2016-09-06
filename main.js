var map = L.map('map', {measureControl: true}).setView([47.24004, 39.70930], 15);
L.control.mousePosition().addTo(map);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([47.23802, 39.71143]).addTo(map).bindPopup('Корпус №8');
L.marker([47.23927, 39.71116]).addTo(map).bindPopup('Церковь');
L.marker([47.23766, 39.7122]).addTo(map).bindPopup('Конгресс-Холл ДГТУ');
L.marker([47.23937, 39.71235]).addTo(map).bindPopup('Общежитие РГСУ');