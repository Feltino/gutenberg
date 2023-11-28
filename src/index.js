import { registerBlockType } from '@wordpress/blocks';
import './block';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'feltino/myblocks', {
	edit: Edit,
	save: Save,
} );
