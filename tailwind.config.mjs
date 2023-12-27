/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'hl': "1100px",
				'hlx': "1312px",
				'54': "215px",
				'80': "297px",
				'84': "330px",
				'86': "340px",
				'87': "345px",
				'90': "378px",
				'128': "768px",
				'43': "172px"
			  },
			  height: {
				'15': "60px"
			  },
			  maxWidth: {
				"7.5xl": "1260px",
				"6.5xl": "1184px",
				"w-x": "360px"
			  },
			  borderWidth: {
				'1': "1px"
			  },
			  fontSize: {
				'18xl': "240px",
				'1xl': "22px",
				'4.5xl': "42px",
				'5.5xl': "56px",
				'5.6xl': "58px"
			  },
			  fontFamily: {
				'satoshi': "Satoshi"
			  }
		},
	},
	plugins: [],
}
