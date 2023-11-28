import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'feltino/myblock', {
	title: __( 'My Block', 'myblocks' ),
	description: __( 'Single Block', 'myblocks' ),
	icon: 'universal-access',
	parent: [ 'feltino/myblocks' ],
	edit: () => <p>Admin Edit</p>,
	save: () => <p>Frontend Save</p>,
} );
