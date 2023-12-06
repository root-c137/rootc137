

import './EditorMCE.scss';
import {Editor} from "@tinymce/tinymce-react";
import {useEffect, useRef, useState} from "react";
import {EasyFetch} from "../../Utils/EasyFetch";
export const EditorMCE = ({id, update, defaultTxt = ""}) =>
{
    const editorRef = useRef(null);
    const API_KEY = "x855v73me7v92rlmz0jru5puiqrmjx4weh4dlbka9dhg8fyy";
    const [content, setContent] = useState(null);
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        if(content)
        console.log(content);
    }, [content]);


    const handleChange = (content, editor) =>
    {
        if(content)
        setDisabledButton(false);
        else
            setDisabledButton(true);
    }

    const handleUpload = (blobInfo, success, failure) =>
    {
        console.log('upload');
    }

    const save = () =>
    {
        if (editorRef.current)
            update(editorRef.current.getContent())
    }

    return(
        <div className="EditorMCE">
            <Editor
                apiKey={API_KEY}
                init={{
                    height: "1000",
                    plugins: 'image ai mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    images_upload_handler:handleUpload,
                    file_picker_types: 'image',
                    automatic_uploads:true,
                    images_upload_base_path:"/uploads"
                }}
                onInit={(evt, editor) => editorRef.current = editor}

                initialValue={defaultTxt}
                onEditorChange={handleChange}
            />

            <button onClick={save} disabled={disabledButton}>valider</button>
        </div>
    )
}

