import * as types from './mutations-types'

/**
 * @module Mutations
 * 
 * @description En este fichero se detalla cada una de las mutaciones que se producen del estado del sistema.
 */

export default{
  [types.LOGIN_USER_REQUEST] (state) {
    state.fetchingUser = true
    state.error = ''
  },

  [types.LOGIN_USER_SUCCESS] (state) {
    state.fetchingUser = false
    state.error = ''
  },

  [types.LOGIN_USER_FAILURE] (state, { error }) {
    state.fetchingUser = false
    state.error = error
  },

  [types.REPORT_POST_SUCCESS] (state, {id, report}) {
    state.images.find(image => {
      if (image.id === id) {
        image.reporte = report
        image.esReportado = true
      }
    })
  },

  [types.REPORT_POST_FAILURE] (state, error) {
    state.error = error
  },

  [types.DECLINE_REPORT_SUCCESS] (state, id) {
    state.images.find(image => {
      if (image.id === id) {
        image.reporte = []
        image.esReportado = false
      }
    })
  },

  [types.DECLINE_REPORT_FAILURE] (state, error) {
    state.error = error
  },

  [types.GIVE_LIKE_SUCCESS] (state, {id, likes}) {
    state.images.find(image => {
      if (image.id === id) {
        image.likes = likes
        image.numLikes++
      }
    })
  },

  [types.GIVE_LIKE_FAILURE] (state, error) {
    state.error = error
  },

  [types.REMOVE_LIKE_SUCCESS] (state, {id, likes}) {
    state.images.find(image => {
      if (image.id === id) {
        image.likes = likes
        image.numLikes--
      }
    })
  },

  [types.REMOVE_LIKE_FAILURE] (state, error) {
    state.error = error
  },

  [types.REMOVE_SOUND_SUCCESS] (state, id) {
    state.images.find(image => {
      if (image.id === id) {
        image.esPublico = false
        image.soundscape = ''
      }
    })
  },

  [types.REMOVE_SOUND_FAILURE] (state, error) {
    state.error = error
  },

  [types.REMOVE_COMMENT_SUCCESS] (state, id) {
    state.comments = state.comments.filter(comment => comment.id !== id)
  },

  [types.REMOVE_COMMENT_FAILURE] (state, error) {
    state.error = error
  },

  [types.CONFIRM_REPORT_SUCCESS] (state, id) {
    state.images = state.images.filter(image => image.id !== id)
  },

  [types.CONFIRM_REPORT_FAILURE] (state, error) {
    state.error = error
  },

  [types.FOLLOW_USER_SUCCESS] (state, email) {
    state.user.data.siguiendo.push(email)
    // Vue.set(state.user.data.siguiendo, state.data.siguiendo.lenght - 1, email)
  },

  [types.FOLLOW_USER_FAILURE] (state, error) {
    state.error = error
  },

  [types.STOP_FOLLOW_SUCCESS] (state, email) {
    state.user.data.siguiendo = state.user.data.siguiendo.filter(user => user !== email)
  },

  [types.STOP_FOLLOW_FAILURE] (state, error) {
    state.error = error
  },

  [types.EDIT_DESCRIPTION_SUCCESS] (state, {id, descripcion}) {
    state.images.find(image => {
      if (image.id === id) {
        image.descripcion = descripcion
      }
    })
  },

  [types.EDIT_DESCRIPTION_FAILURE] (state, error) {
    state.error = error
  },

  [types.REGISTER_USER_REQUEST] (state) {
    state.fetchingUser = true
    state.error = ''
  },

  [types.REGISTER_USER_SUCCESS] (state) {
    state.fetchingUser = false
    state.error = ''
  },

  [types.REGISTER_USER_FAILURE] (state, { error }) {
    state.fetchingUser = false
    state.error = error
  },

  [types.RESET_PASSWORD_REQUEST] (state) {
    state.error = ''
    state.changingPass = true
  },

  [types.RESET_PASSWORD_SUCCESS] (state) {
    state.error = ''
    state.changingPass = false
  },

  [types.RESET_PASSWORD_FAILURE] (state, { error }) {
    state.error = error
    state.changingPass = false
  },

  [types.CHANGE_PASSWORD_SUCCESS] (state) {
    state.changingPass = false
    state.error = ''
  },

  [types.CHANGE_PASSWORD_FAILURE] (state, { error }) {
    state.changingPass = false
    state.error = error
  },

  [types.CHANGE_INFO_SUCCESS] (state, {user, descripcion}) {
    state.changingPass = false
    state.user.data.email = user.email
    state.user.data.displayName = user.displayName
    state.user.data.photoURL = user.photoURL
    state.user.data.descripcion = descripcion
    state.error = ''
  },

  [types.CHANGE_INFO_FAILURE] (state, { error }) {
    state.changingPass = false
    state.error = error
  },

  [types.LOG_OUT_FAILURE] (state, {error}) {
    state.error = error
  },

  [types.LOG_OUT_SUCCESS] (state) {
    state.user.loggedIn = false
    state.user.data = null
    state.images = []
  },

  [types.DELETE_ACCOUNT_REQUEST] (state) {
    state.error = ''
    state.deletingAccount = true
  },

  [types.DELETE_ACCOUNT_FAILURE] (state, {error}) {
    state.error = error
    state.deletingAccount = false
  },

  [types.DELETE_ACCOUNT_SUCCESS] (state) {
    state.user.loggedIn = false
    state.user.data = null
    state.images = []
    state.deletingAccount = false
  },

  [types.FETCH_IMAGES_REQUEST] (state, start) {
    if (start === '')
      state.images = []
    state.error = ''
    state.fetchingImages = true
  },

  [types.FETCH_IMAGES_SUCCESS] (state, images) {
    state.fetchingImages = false
    state.error = ''
    if (images.length) {
      if (!state.images.length) {
        state.images = images
      } else {
        state.images.push(...images)
      }
      if (images.length < 20) {
        state.noImages = false  
      } else {
        state.noImages = true
      }
    } else {
      state.noImages = false
    }
  },

  [types.FETCH_IMAGES_FAILURE] (state, error) {
    state.error = error
    state.fetchingImages = false
  },

  [types.FETCH_COMMENTS_REQUEST] (state, start) {
    state.error = ''
    if (start === '')
      state.comments = []
  },

  [types.FETCH_COMMENTS_SUCCESS] (state, comments) {
    state.fetchingImages = false
    state.error = ''
    if (comments.length) {
      if (!state.comments.length) {
        state.comments = comments
      } else {
        state.comments.push(...comments)
      }
      if (comments.length < 10) {
        state.noComments = false  
      } else {
        state.noComments = true
      }
    } else {
      state.noComments = false
    }
  },

  [types.FETCH_COMMENTS_FAILURE] (state, { error }) {
    state.error = error
    state.fetchingImages = false
  },

  [types.ADD_PHOTO_SUCCESS] (state, img) {
    var temp = [img, ...state.images]
    state.images = temp
  },

  [types.ADD_PHOTO_FAILURE] (state, error) {
    state.error = error
  },

  [types.ADD_COMMENT_SUCCESS] (state, com) {
    com = {
      autor: [state.user.data.email, state.user.data.displayName, state.user.data.photoURL, state.user.data.descripcion],
      ...com
    }
    state.comments.push(com)
    // Vue.set(state.comments, state.comments.lenght - 1, com)
  },

  [types.REMOVE_POST_SUCCESS] (state, id) {
    state.fetchingImages = false
    state.error = ''
    var element = state.images.find(image => image.id === id)
    var index = state.images.indexOf(element)
    state.images.splice(index, 1)
  },

  [types.REMOVE_POST_FAILURE] (state, error) {
    state.error = error
  },

  [types.GEN_SOUNDSCAPE_REQUEST] (state) {
    state.generatingSoundscape = true
    state.soundscapeGenerated = false
    state.error = ''
  },

  [types.GEN_SOUNDSCAPE_SUCCESS] (state, {url, id}) {
    state.generatingSoundscape = false
    state.error = ''
    state.soundscapeGenerated = true
    var element = state.images.find(image => image.id === id)
    element.esPublico = true
    element.soundscape = url
  },

  [types.GEN_SOUNDSCAPE_FAILURE] (state, {error}) {
    state.generatingSoundscape = false
    state.error = error
  },

  [types.GET_OTHERUSER_SUCCESS] (state, user) {
    state.otherUser = user
  },

  [types.GET_OTHERUSER_FAILURE] (state, error) {
    state.error = error
  },

  [types.ADD_USER_CONTRIBUTOR] (state) {
    state.userForm.contributor_role.push({name: '', role: ''})
  },

  [types.ADD_SHEET_CONTRIBUTOR] (state) {
    state.sheetForm.contributorp_role.push({name: '', role: ''})
  },

  [types.ADD_COLLECTION_CONTRIBUTOR] (state) {
    state.collectionForm.contributor_role.push({name: '', role: ''})
  },

  [types.ADD_SHEET_CREATOR] (state) {
    state.sheetForm.creatorp_role.push({name: '', role: '', gender: ''})
  },

  [types.ADD_COLLECTION_CREATOR] (state) {
    state.collectionForm.creator_role.push({name: '', role: ''})
  },

  [types.REMOVE_USER_CONTRIBUTOR] (state, index) {
    state.userForm.contributor_role.splice(index, 1)
  },

  [types.REMOVE_COLLECTION_CREATOR] (state, index) {
    state.collectionForm.creator_role.splice(index, 1)
  },

  [types.REMOVE_SHEET_CONTRIBUTOR] (state, index) {
    state.sheetForm.contributorp_role.splice(index, 1)
  },

  [types.REMOVE_COLLECTION_CONTRIBUTOR] (state, index) {
    state.collectionForm.contributor_role.splice(index, 1)
  },

  [types.REMOVE_SHEET_CREATOR] (state, index) {
    state.sheetForm.creatorp_role.splice(index, 1)
  },

  [types.SAVE_COLLECTION_DATE] (state, date) {
    state.collectionForm.date = date
  },

/**
 * UPDATE OF USER FORM FIELDS
 * 
 * Each following method update the corresponding field of the user form in the vuex state
 */

  ['UPDATE_USER_ID'] (state, id) {
    state.userForm.identifier = id
  },

  ['UPDATE_USER_TITLE'] (state, title) {
    state.userForm.title = title
  },

  ['UPDATE_USER_RIGHT'] (state, right) {
    state.userForm.rights = right
  },

  ['UPDATE_USER_CREATOR'] (state, creator) {
    state.userForm.creator = creator
  },

  [types.SAVE_USER_DATE] (state, date) {
    state.userForm.date = date
  },

  ['UPDATE_USER_TYPE'] (state, type) {
    state.userForm.type_file = type
  },

  ['UPDATE_USER_PUBLISHER'] (state, publisher) {
    state.userForm.publisher = publisher
  },

  ['UPDATE_USER_CONTRIBUTOR'] (state, contribuidores) {
    state.userForm.contributor_role = structuredClone(contribuidores)
  },

  ['UPDATE_USER_DESCRIPTION'] (state, description) {
    state.userForm.desc = description
  },

  /**
   * UPDATE OF SHEET FORM FIELDS
   * 
   * Each following method update the corresponding field of the sheet form in the vuex state
   */

  ['UPDATE_SHEET_RIGHT'] (state, right) {
    state.sheetForm.rightsp = right
  },

  ['UPDATE_SHEET_CREATOR'] (state, creators) {
    state.sheetForm.creatorp_role = structuredClone(creators)
  },

  [types.SAVE_SHEET_DATE] (state, date) {
    state.sheetForm.datep = date
  },

  ['UPDATE_SHEET_KEY'] (state, key) {
    state.sheetForm.real_key = key
  },

  ['UPDATE_SHEET_METRE'] (state, metre) {
    state.sheetForm.meter = metre
  },

  ['UPDATE_SHEET_TEMPO'] (state, tempo) {
    state.sheetForm.tempo = tempo
  },

  ['UPDATE_SHEET_INSTRUMENT'] (state, instrument) {
    state.sheetForm.instruments = instrument
  },

  ['UPDATE_SHEET_GENRE'] (state, genre) {
    state.sheetForm.genre = genre
  },

  ['UPDATE_SHEET_CONTRIBUTOR'] (state, contributors) {
    state.sheetForm.contributorp_role = structuredClone(contributors)
  },

  ['UPDATE_SHEET_ALTTITLE'] (state, altTitle) {
    state.sheetForm.alt_title = altTitle
  },

  ['UPDATE_SHEET_DESCRIPTION'] (state, description) {
    state.sheetForm.descp = description
  },

  ['UPDATE_SHEET_TYPE'] (state, type) {
    state.sheetForm.type_piece = type
  },

  ['UPDATE_SHEET_FORMAT'] (state, format) {
    state.sheetForm.formattingp = format
  },

  ['UPDATE_SHEET_SUBJECT'] (state, subject) {
    state.sheetForm.subject = subject
  },

  ['UPDATE_SHEET_LANGUAGE'] (state, language) {
    state.sheetForm.language = language
  },

  ['UPDATE_SHEET_RELATION'] (state, relation) {
    state.sheetForm.relationp = relation
  },

  ['UPDATE_SHEET_HASVERSION'] (state, hasVersion) {
    state.sheetForm.hasVersion = hasVersion
  },

  ['UPDATE_SHEET_ISVERSIONOF'] (state, isVersionOf) {
    state.sheetForm.isVersionOf = isVersionOf
  },

  ['UPDATE_SHEET_COVERAGE'] (state, coverage) {
    state.sheetForm.coverage = coverage
  },

  ['UPDATE_SHEET_SPATIALCOUNTRY'] (state, country) {
    state.sheetForm.spatial.country = country
  },

  ['UPDATE_SHEET_SPATIALSTATE'] (state, state2) {
    state.sheetForm.spatial.state = state2
  },

  ['UPDATE_SHEET_SPATIALLOCATION'] (state, location) {
    state.sheetForm.spatial.location = location
  },  

  ['UPDATE_SHEET_TEMPORALCENTURY'] (state, century) {
    state.sheetForm.temporal.century = century
  },

  ['UPDATE_SHEET_TEMPORALDECADE'] (state, decade) {
    state.sheetForm.temporal.decade = decade
  },

  ['UPDATE_SHEET_TEMPORALYEAR'] (state, year) {
    state.sheetForm.temporal.year = year
  },

  ['UPDATE_SHEET_XML'] (state, xml) {
    state.sheetForm.xml = xml
  },

  ['UPDATE_SHEET_MEI'] (state, mei) {
    state.sheetForm.mei = mei
  },

  ['UPDATE_SHEET_MIDI'] (state, midi) {
    state.sheetForm.midi = midi
  },

  ['UPDATE_SHEET_AUDIO'] (state, audio) {
    state.sheetForm.audio = audio
  },

  ['UPDATE_SHEET_VIDEO'] (state, video) {
    state.sheetForm.video = video
  },

  ['UPDATE_SHEET_COLID'] (state, col_id) {
    state.sheetForm.col_id = col_id
  },
  
  /**
   * UPDATE OF COLLECTION FORM FIELDS
   * 
   * Each following method update the corresponding field of the collection form in the vuex state
   */

  ['UPDATE_COLLECTION_TITLE'] (state, title) {
    state.collectionForm.title = title
  },

  ['UPDATE_COLLECTION_RIGHT'] (state, right) {
    state.collectionForm.rights = right
  },

  ['UPDATE_COLLECTION_CREATOR'] (state, creators) {
    state.collectionForm.creator_role = structuredClone(creators)
  },

  [types.SAVE_COLLECTION_DATE] (state, date) {
    state.collectionForm.date = date
  },

  ['UPDATE_COLLECTION_CONTRIBUTOR'] (state, contributors) {
    state.collectionForm.contributor_role = structuredClone(contributors)
  },

  ['UPDATE_COLLECTION_EXTENT'] (state, extent) {
    state.collectionForm.extent = extent
  },

  ['UPDATE_COLLECTION_DESCRIPTION'] (state, description) {
    state.collectionForm.description = description
  },

  ['UPDATE_COLLECTION_TYPE'] (state, type) {
    state.collectionForm.source_type = type
  },

  ['UPDATE_COLLECTION_FORMAT'] (state, formatting) {
    state.collectionForm.formatting = formatting
  },

  ['UPDATE_COLLECTION_SUBJECT'] (state, subject) {
    state.collectionForm.subject = subject
  },

  ['UPDATE_COLLECTION_LANGUAGE'] (state, language) {
    state.collectionForm.language = language
  },

  ['UPDATE_COLLECTION_RELATION'] (state, relation) {
    state.collectionForm.relation = relation
  },

  ['UPDATE_COLLECTION_PUBLISHER'] (state, publisher) {
    state.collectionForm.publisher = publisher
  },

  ['UPDATE_COLLECTION_COVERAGE'] (state, coverage) {
    state.collectionForm.coverage = coverage
  },

  ['UPDATE_COLLECTION_SPATIALCOUNTRY'] (state, country) {
    state.collectionForm.spatial.country = country
  },

  ['UPDATE_COLLECTION_SPATIALSTATE'] (state, state2) {
    state.collectionForm.spatial.state = state2
  },

  ['UPDATE_COLLECTION_SPATIALLOCATION'] (state, location) {
    state.collectionForm.spatial.location = location
  },

  ['UPDATE_COLLECTION_TEMPORALCENTURY'] (state, century) {
    state.collectionForm.temporal.century = century
  },

  ['UPDATE_COLLECTION_TEMPORALDECADE'] (state, decade) {
    state.collectionForm.temporal.decade = decade
  },

  ['UPDATE_COLLECTION_TEMPORALYEAR'] (state, year) {
    state.collectionForm.temporal.year = year
  },

  ['UPDATE_COLLECTION_SOURCE'] (state, source) {
    state.collectionForm.source = source
  },

  ['UPDATE_COLLECTION_RIGHTSHOLDER'] (state, rightsHolder) {
    state.collectionForm.rightsHolder = rightsHolder
  },
  
}
