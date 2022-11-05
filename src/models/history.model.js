const { Schema, model } = require('mongoose');

const weatherSchema = {
  date: {
    type: Schema.Types.String,
    required: true
  },
  temperature: {
    type: Schema.Types.Number,
    default: null
  },
  pressure: {
    type: Schema.Types.Number,
    default: null
  },
  visibility: {
    type: Schema.Types.Number,
    default: null
  },
  humidity: {
    type: Schema.Types.Number,
    default: null
  },
  wind: {
    direction: {
      type: Schema.Types.String,
      default: null
    },
    deg: {
      type: Schema.Types.Number,
      default: null
    },
    speed: {
      type: Schema.Types.Number,
      default: null
    }
  }
}

const historySchema = new Schema({
  date: {
    type: Schema.Types.Date,
    required: true
  },
  areas: [{
    areaid: {
      type: Schema.Types.Number,
      required: true
    },
    coords: {
      lat: {
        type: Schema.Types.Number,
        required: true
      },
      lon: {
        type: Schema.Types.Number,
        required: true
      }
    },
    earlymorning: {
      type: weatherSchema,
      default: null
    },
    morning: {
      type: weatherSchema,
      default: null
    },
    afternoon: {
      type: weatherSchema,
      default: null
    },
    night: {
      type: weatherSchema,
      default: null
    }
  }]
}, {
  timestamps: true,
  versionKey: false,
})

const Alert = model('History', historySchema)

module.exports = Alert