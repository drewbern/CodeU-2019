/*
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Get ?user=XYZ parameter value
const urlParams = new URLSearchParams(window.location.search);
const parameterUsername = urlParams.get('user');

/**
 * Turns the aboutMe and message forms into rich text editors
 * Removes image plugin because it's not properly implemented yet
**/
function addRichTextEditor(){
  const config = {removePlugins: []};
  ClassicEditor.create( document.getElementById('message-input'), config);
  ClassicEditor.create( document.getElementById('about-me-input'), config);
  ClassicEditor.create( document.getElementById('edit-message-input'), config);
}

/** Fetches data and populates the UI of the page. */
function buildUI() {
  addRichTextEditor();
}
