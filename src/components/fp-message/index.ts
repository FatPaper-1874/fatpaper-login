type OptionsType = { type: "info" | "success" | "warning" | "error"; message: string; delay?: number };

import fpMessageVue from "./fp-message.vue";
import { App, ComponentPublicInstance, createApp, ref, watch, WatchStopHandle } from "vue";

let itemQueue = ref([] as Array<ComponentPublicInstance>);

const FPMessage = (options: OptionsType) => {
	const fpMessage = createApp(fpMessageVue, options);
	showMessage(fpMessage, options.delay || 3000);
};

const showMessage = (app: App, delay: number) => {
	const container = document.createDocumentFragment();
	const vm = app.mount(container);
	itemQueue.value.push(vm);
	document.body.appendChild(container);

	updateTop(vm);
	//@ts-ignore  获取组件的方法
	vm.setVisible(true);

	const stopHandle = watch(itemQueue, () => {
		updateTop(vm);
	});

	let timer: any = setTimeout(() => {
		hideMessage(app, vm, stopHandle);
		clearTimeout(timer);
		timer = -1;
	}, delay);
};

const hideMessage = async (app: App, vm: ComponentPublicInstance, stopHandle: WatchStopHandle) => {
	//@ts-ignore 获取组件的方法
	await vm.setVisible(false);
	stopHandle();
	app.unmount();
	itemQueue.value = itemQueue.value.filter((item) => item !== vm);
};

const findIndex = (arr: Array<ComponentPublicInstance>, item: ComponentPublicInstance) => {
	return arr.findIndex((i) => i === item);
};

const updateTop = (vm: ComponentPublicInstance) => {
	const index = findIndex(itemQueue.value, vm);
	//@ts-ignore
	vm.setTop(index * 2.8 + (index + 1) * 1.2);
};

export default FPMessage;
