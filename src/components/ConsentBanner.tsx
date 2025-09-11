import { useEffect, useState } from "react";

const STORAGE_KEY = "consent.choice.v1";

type ConsentChoice = "accepted" | "rejected" | "dismissed";

function applyConsent(choice: ConsentChoice) {
	const granted = choice === "accepted";
	const consentUpdate = {
		ad_user_data: granted ? "granted" : "denied",
		ad_personalization: granted ? "granted" : "denied",
		ad_storage: granted ? "granted" : "denied",
		analytics_storage: granted ? "granted" : "denied",
		functionality_storage: "granted",
		security_storage: "granted",
	};
	// @ts-ignore - gtag injected in index.html
	window.gtag && window.gtag("consent", "update", consentUpdate);
	// AdSense reload hint
	// @ts-ignore
	if (window.adsbygoogle && granted) {
		try { (window.adsbygoogle as unknown[]).push({}); } catch {}
	}
}

const ConsentBanner = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (!saved) {
				setVisible(true);
			} else {
				applyConsent(saved as ConsentChoice);
			}
		} catch {
			setVisible(true);
		}
	}, []);

	const onAccept = () => {
		localStorage.setItem(STORAGE_KEY, "accepted");
		applyConsent("accepted");
		setVisible(false);
	};
	const onReject = () => {
		localStorage.setItem(STORAGE_KEY, "rejected");
		applyConsent("rejected");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed inset-x-0 bottom-0 z-50">
			<div className="mx-auto max-w-3xl m-4 rounded-lg shadow-lg border bg-white dark:bg-gray-900 p-4">
				<p className="text-sm text-gray-800 dark:text-gray-200">
					Usamos cookies para mejorar tu experiencia y mostrar anuncios. Puedes aceptar o rechazar el uso de cookies publicitarias y de analítica.
				</p>
				<div className="mt-3 flex gap-2 justify-end">
					<button onClick={onReject} className="px-3 py-2 text-sm rounded border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">Rechazar</button>
					<button onClick={onAccept} className="px-3 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">Aceptar</button>
				</div>
			</div>
		</div>
	);
};

export default ConsentBanner;
