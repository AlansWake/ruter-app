import { Component, OnInit } from '@angular/core';

import { RuterComponent } from './ruter/ruter.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  menuItems = [
    {
      text: 'File',
      items: [
        {
          text: 'Share'
        },
        {
          text: 'New',
          icon: 'arrow_right',
          items: [
            {
              text: 'Document'
            },
            {
              text: 'New',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                },
                {
                  text: 'Document',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document 1'
                    },
                    {
                      text: 'Document 2'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Spreadsheet'
            },
            {
              text: 'Presentation',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Form'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Open',
          extraText: 'Ctrl+O'
        },
        {
          text: 'Rename',
          disabled: true
        },
        {
          divider: true
        },
        {
          text: 'Print',
          extraText: 'Ctrl+P'
        }
      ]
    },
    {
      text: 'Edit',
      items: [
        {
          text: 'Undo',
          extraText: 'Ctrl+Z'
        },
        {
          text: 'Redo',
          extraText: 'Ctrl+Y'
        },
        {
          divider: true
        },
        {
          text: 'Cut',
          extraText: 'Ctrl+X'
        },
        {
          text: 'Copy',
          extraText: 'Ctrl+C'
        },
        {
          text: 'Paste',
          extraText: 'Ctrl+P'
        },
        {
          divider: true
        },
        {
          text: 'Find and replace...',
          extraText: 'Ctrl+Shift+H'
        }
      ]
    },
    {
      text: 'View',
      items: [
        {
          text: 'Print layout'
        },
        {
          text: 'Mode',
          icon: 'arrow_right',
          items: [
            {
              text: 'Presentation'
            },
            {
              text: 'Edit'
            },
            {
              text: 'Modifiable'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Show ruler'
        },
        {
          text: 'Show equation toolbar'
        },
        {
          text: 'Show spelling suggestions'
        },
        {
          divider: true
        },
        {
          text: 'Compact controls'
        },
        {
          text: 'Full screen'
        },
      ]
    },
    {
      text: 'Format',
      items: [
        {
          text: 'Bold',
          extraText: 'Ctrl+B'
        },
        {
          text: 'Italic',
          extraText: 'Ctrl+I'
        },
        {
          text: 'Underline',
          extraText: 'Ctrl+U'
        },
        {
          text: 'Strikethrough',
          extraText: 'Alt+Shift+5'
        },
        {
          text: 'Superscript',
          extraText: 'Ctrl+.'
        },
        {
          text: 'Subscript',
          extraText: 'Ctrl+,'
        },
        {
          divider: true
        },
        {
          text: 'Clear Formatting'
        },
      ]
    }
  ];

  ruterData = [{
    id: '3010370',
    name: 'Forskningsparken [T]'
  }, {
    id: '3010371',
    name: 'Forskningsparken'
  }, {
    id: '3010011',
    name: 'Jernbanetorget [T]'
  }];

  ruterIds = ['3010370', '3010371', '3010011'];
  ruterNames = ['Forskningsparken [T]', 'Forskningsparken', 'Jernbanetorget [T]'];
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {

  }

}
