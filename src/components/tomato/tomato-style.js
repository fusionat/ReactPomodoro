const styles = theme => ({
		card: {
				display: 'flex',
				margin: theme.myMarging
		},

		details: {
				display: 'flex',
				flexDirection: 'column',
				flex: 2
		},

		content: {
				flex: '1 0 auto',
		},

		controls: {
				display: 'flex',
				alignItems: 'center',
				paddingLeft: theme.spacing.unit,
				paddingBottom: theme.spacing.unit,
		},

		chip: {
				fontSize: '0.7rem',
				height: '25px'
		},

		cssLabel: {
			'&$cssFocused': {
				color: 'green',
			},
		},
		cssFocused: {},
});

export default styles;