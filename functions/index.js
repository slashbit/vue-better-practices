'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.api = functions.https.onRequest(require('./src'))
