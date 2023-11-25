import {useBlockProps} from '@wordpress/block-editor';
import './editor.scss';

export default function edit(){
    const blockProps = useBlockProps();

    return <h1 {...blockProps}>Edit 1</h1>;
}