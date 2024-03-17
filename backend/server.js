/* const http = require('http');
const express = require('./rest.js'); */
import http from 'http';
import {app} from './rest.js';

const server = http.createServer(app)

server.listen(3000);