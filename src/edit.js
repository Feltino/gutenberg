import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ColorPicker,
	ColorPalette,
	ToggleControl,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, align } = attributes;
	const onChangeText = ( value ) => setAttributes( { text: value } );
	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen>
					<TextControl
						label="Title"
						value={ text }
						help="Insert Title"
						onChange={ onChangeText }
					/>
					<TextareaControl
						label="Title"
						value={ text }
						help="Insert Title"
						onChange={ onChangeText }
					/>
					<ColorPicker color={ '#000' } />
					<ColorPalette
						colors={ [
							{ name: 'Magenta', color: '#f0f' },
							{ name: 'Yellow', color: '#ff0' },
							{ name: 'Cyan', color: '#0ff' },
						] }
					/>
					<ToggleControl label="Yes or no" checked={ true } />
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={ align } onChange={ onChangeText } />
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `feltino-align-${ align }`,
				} ) }
				tagName="h1"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder="Enter title"
				allowedFormats={ [] }
			/>
		</>
	);
}
