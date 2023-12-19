self.onmessage = function (event) {
	const data = event.data
	// const modulePath = new URL(data?.modulePath);
	// Dynamically import the module
	const url = new URL('../components/importFromWorkerJs.jsx', import.meta.url)
	import('../components/importFromWorkerJs.jsx').then((module) => {
		const stringified = JSON.stringify(module.default())
		// console.log(module.default());
		// console.log(stringified, "from worker");

		self.postMessage({ module: stringified })
	})
}
