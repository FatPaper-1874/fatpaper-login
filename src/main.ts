import {createApp} from "vue";
import "@/assets/style.scss";
import "@/assets/ui.scss";
import "@/assets/font/font.css";
import "@/utils/axios";
import App from "./App.vue";

/* import the fontawesome core */
import {library} from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {
    faShieldHalved,
    faSplotch,
    faFan,
    faBook,
    faMusic,
    faGuitar,
    faMugSaucer,
    faCircleCheck,
    faCircleExclamation,
    faCircleXmark,
    faCircleInfo,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";


library.add(faShieldHalved, faSplotch, faFan, faBook, faMusic, faGuitar, faMugSaucer, faCircleCheck, faCircleExclamation, faCircleXmark, faCircleInfo, faSpinner);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");