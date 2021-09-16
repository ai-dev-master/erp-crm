function lamejs() {
  function Y(d) {
    return new Int32Array(d);
  }
  function H(d) {
    return new Float32Array(d);
  }
  function ra(d) {
    if (1 == d.length) return H(d[0]);
    var k = d[0];
    d = d.slice(1);
    for (var q = [], C = 0; C < k; C++) q.push(ra(d));
    return q;
  }
  function db(d) {
    if (1 == d.length) return Y(d[0]);
    var k = d[0];
    d = d.slice(1);
    for (var q = [], C = 0; C < k; C++) q.push(db(d));
    return q;
  }
  function vc(d) {
    if (1 == d.length) return new Int16Array(d[0]);
    var k = d[0];
    d = d.slice(1);
    for (var q = [], C = 0; C < k; C++) q.push(vc(d));
    return q;
  }
  function Zb(d) {
    if (1 == d.length) return Array(d[0]);
    var k = d[0];
    d = d.slice(1);
    for (var q = [], C = 0; C < k; C++) q.push(Zb(d));
    return q;
  }
  function sa(d) {
    this.ordinal = d;
  }
  function M(d) {
    this.ordinal = d;
  }
  function ka(d) {
    this.ordinal = function () {
      return d;
    };
  }
  function Fc() {
    this.getLameVersion = function () {
      return "3.98.4";
    };
    this.getLameShortVersion = function () {
      return "3.98.4";
    };
    this.getLameVeryShortVersion = function () {
      return "LAME3.98r";
    };
    this.getPsyVersion = function () {
      return "0.93";
    };
    this.getLameUrl = function () {
      return "http://www.mp3dev.org/";
    };
    this.getLameOsBitness = function () {
      return "32bits";
    };
  }
  function Gc() {
    function d(b, g, a, h, k, e, n, c, f, E, z, w, A, v, p) {
      this.vbr_q = b;
      this.quant_comp = g;
      this.quant_comp_s = a;
      this.expY = h;
      this.st_lrm = k;
      this.st_s = e;
      this.masking_adj = n;
      this.masking_adj_short = c;
      this.ath_lower = f;
      this.ath_curve = E;
      this.ath_sensitivity = z;
      this.interch = w;
      this.safejoint = A;
      this.sfb21mod = v;
      this.msfix = p;
    }
    function k(b, g, a, d, k, e, n, c, f, E, z, w, A, v) {
      this.quant_comp = g;
      this.quant_comp_s = a;
      this.safejoint = d;
      this.nsmsfix = k;
      this.st_lrm = e;
      this.st_s = n;
      this.nsbass = c;
      this.scale = f;
      this.masking_adj = E;
      this.ath_lower = z;
      this.ath_curve = w;
      this.interch = A;
      this.sfscale = v;
    }
    function q(b, g, a) {
      var d = b.VBR == M.vbr_rh ? t : r,
        k = b.VBR_q_frac,
        e = d[g],
        d = d[g + 1];
      e.st_lrm += k * (d.st_lrm - e.st_lrm);
      e.st_s += k * (d.st_s - e.st_s);
      e.masking_adj += k * (d.masking_adj - e.masking_adj);
      e.masking_adj_short += k * (d.masking_adj_short - e.masking_adj_short);
      e.ath_lower += k * (d.ath_lower - e.ath_lower);
      e.ath_curve += k * (d.ath_curve - e.ath_curve);
      e.ath_sensitivity += k * (d.ath_sensitivity - e.ath_sensitivity);
      e.interch += k * (d.interch - e.interch);
      e.msfix += k * (d.msfix - e.msfix);
      d = e.vbr_q;
      0 > d && (d = 0);
      9 < d && (d = 9);
      b.VBR_q = d;
      b.VBR_q_frac = 0;
      0 != a
        ? (b.quant_comp = e.quant_comp)
        : 0 < Math.abs(b.quant_comp - -1) || (b.quant_comp = e.quant_comp);
      0 != a
        ? (b.quant_comp_short = e.quant_comp_s)
        : 0 < Math.abs(b.quant_comp_short - -1) ||
          (b.quant_comp_short = e.quant_comp_s);
      0 != e.expY && (b.experimentalY = 0 != e.expY);
      0 != a
        ? (b.internal_flags.nsPsy.attackthre = e.st_lrm)
        : 0 < Math.abs(b.internal_flags.nsPsy.attackthre - -1) ||
          (b.internal_flags.nsPsy.attackthre = e.st_lrm);
      0 != a
        ? (b.internal_flags.nsPsy.attackthre_s = e.st_s)
        : 0 < Math.abs(b.internal_flags.nsPsy.attackthre_s - -1) ||
          (b.internal_flags.nsPsy.attackthre_s = e.st_s);
      0 != a
        ? (b.maskingadjust = e.masking_adj)
        : 0 < Math.abs(b.maskingadjust - 0) ||
          (b.maskingadjust = e.masking_adj);
      0 != a
        ? (b.maskingadjust_short = e.masking_adj_short)
        : 0 < Math.abs(b.maskingadjust_short - 0) ||
          (b.maskingadjust_short = e.masking_adj_short);
      0 != a
        ? (b.ATHlower = -e.ath_lower / 10)
        : 0 < Math.abs(10 * -b.ATHlower - 0) ||
          (b.ATHlower = -e.ath_lower / 10);
      0 != a
        ? (b.ATHcurve = e.ath_curve)
        : 0 < Math.abs(b.ATHcurve - -1) || (b.ATHcurve = e.ath_curve);
      0 != a
        ? (b.athaa_sensitivity = e.ath_sensitivity)
        : 0 < Math.abs(b.athaa_sensitivity - -1) ||
          (b.athaa_sensitivity = e.ath_sensitivity);
      0 < e.interch &&
        (0 != a
          ? (b.interChRatio = e.interch)
          : 0 < Math.abs(b.interChRatio - -1) || (b.interChRatio = e.interch));
      0 < e.safejoint && (b.exp_nspsytune |= e.safejoint);
      0 < e.sfb21mod && (b.exp_nspsytune |= e.sfb21mod << 20);
      0 != a
        ? (b.msfix = e.msfix)
        : 0 < Math.abs(b.msfix - -1) || (b.msfix = e.msfix);
      0 == a && ((b.VBR_q = g), (b.VBR_q_frac = k));
    }
    function C(b, d, a) {
      var h = B.nearestBitrateFullIndex(d);
      b.VBR = M.vbr_abr;
      b.VBR_mean_bitrate_kbps = d;
      b.VBR_mean_bitrate_kbps = Math.min(b.VBR_mean_bitrate_kbps, 320);
      b.VBR_mean_bitrate_kbps = Math.max(b.VBR_mean_bitrate_kbps, 8);
      b.brate = b.VBR_mean_bitrate_kbps;
      320 < b.VBR_mean_bitrate_kbps && (b.disable_reservoir = !0);
      0 < g[h].safejoint && (b.exp_nspsytune |= 2);
      0 < g[h].sfscale && (b.internal_flags.noise_shaping = 2);
      if (0 < Math.abs(g[h].nsbass)) {
        var k = int(4 * g[h].nsbass);
        0 > k && (k += 64);
        b.exp_nspsytune |= k << 2;
      }
      0 != a
        ? (b.quant_comp = g[h].quant_comp)
        : 0 < Math.abs(b.quant_comp - -1) || (b.quant_comp = g[h].quant_comp);
      0 != a
        ? (b.quant_comp_short = g[h].quant_comp_s)
        : 0 < Math.abs(b.quant_comp_short - -1) ||
          (b.quant_comp_short = g[h].quant_comp_s);
      0 != a
        ? (b.msfix = g[h].nsmsfix)
        : 0 < Math.abs(b.msfix - -1) || (b.msfix = g[h].nsmsfix);
      0 != a
        ? (b.internal_flags.nsPsy.attackthre = g[h].st_lrm)
        : 0 < Math.abs(b.internal_flags.nsPsy.attackthre - -1) ||
          (b.internal_flags.nsPsy.attackthre = g[h].st_lrm);
      0 != a
        ? (b.internal_flags.nsPsy.attackthre_s = g[h].st_s)
        : 0 < Math.abs(b.internal_flags.nsPsy.attackthre_s - -1) ||
          (b.internal_flags.nsPsy.attackthre_s = g[h].st_s);
      0 != a
        ? (b.scale = g[h].scale)
        : 0 < Math.abs(b.scale - -1) || (b.scale = g[h].scale);
      0 != a
        ? (b.maskingadjust = g[h].masking_adj)
        : 0 < Math.abs(b.maskingadjust - 0) ||
          (b.maskingadjust = g[h].masking_adj);
      0 < g[h].masking_adj
        ? 0 != a
          ? (b.maskingadjust_short = 0.9 * g[h].masking_adj)
          : 0 < Math.abs(b.maskingadjust_short - 0) ||
            (b.maskingadjust_short = 0.9 * g[h].masking_adj)
        : 0 != a
        ? (b.maskingadjust_short = 1.1 * g[h].masking_adj)
        : 0 < Math.abs(b.maskingadjust_short - 0) ||
          (b.maskingadjust_short = 1.1 * g[h].masking_adj);
      0 != a
        ? (b.ATHlower = -g[h].ath_lower / 10)
        : 0 < Math.abs(10 * -b.ATHlower - 0) ||
          (b.ATHlower = -g[h].ath_lower / 10);
      0 != a
        ? (b.ATHcurve = g[h].ath_curve)
        : 0 < Math.abs(b.ATHcurve - -1) || (b.ATHcurve = g[h].ath_curve);
      0 != a
        ? (b.interChRatio = g[h].interch)
        : 0 < Math.abs(b.interChRatio - -1) || (b.interChRatio = g[h].interch);
      return d;
    }
    var B;
    this.setModules = function (b) {
      B = b;
    };
    var t = [
        new d(0, 9, 9, 0, 5.2, 125, -4.2, -6.3, 4.8, 1, 0, 0, 2, 21, 0.97),
        new d(1, 9, 9, 0, 5.3, 125, -3.6, -5.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
        new d(2, 9, 9, 0, 5.6, 125, -2.2, -3.5, 2.8, 2, 0, 0, 2, 21, 1.49),
        new d(3, 9, 9, 1, 5.8, 130, -1.8, -2.8, 2.6, 3, -4, 0, 2, 20, 1.64),
        new d(4, 9, 9, 1, 6, 135, -0.7, -1.1, 1.1, 3.5, -8, 0, 2, 0, 1.79),
        new d(5, 9, 9, 1, 6.4, 140, 0.5, 0.4, -7.5, 4, -12, 2e-4, 0, 0, 1.95),
        new d(
          6,
          9,
          9,
          1,
          6.6,
          145,
          0.67,
          0.65,
          -14.7,
          6.5,
          -19,
          4e-4,
          0,
          0,
          2.3
        ),
        new d(7, 9, 9, 1, 6.6, 145, 0.8, 0.75, -19.7, 8, -22, 6e-4, 0, 0, 2.7),
        new d(8, 9, 9, 1, 6.6, 145, 1.2, 1.15, -27.5, 10, -23, 7e-4, 0, 0, 0),
        new d(9, 9, 9, 1, 6.6, 145, 1.6, 1.6, -36, 11, -25, 8e-4, 0, 0, 0),
        new d(10, 9, 9, 1, 6.6, 145, 2, 2, -36, 12, -25, 8e-4, 0, 0, 0),
      ],
      r = [
        new d(0, 9, 9, 0, 4.2, 25, -7, -4, 7.5, 1, 0, 0, 2, 26, 0.97),
        new d(1, 9, 9, 0, 4.2, 25, -5.6, -3.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
        new d(2, 9, 9, 0, 4.2, 25, -4.4, -1.8, 2, 2, 0, 0, 2, 18, 1.49),
        new d(3, 9, 9, 1, 4.2, 25, -3.4, -1.25, 1.1, 3, -4, 0, 2, 15, 1.64),
        new d(4, 9, 9, 1, 4.2, 25, -2.2, 0.1, 0, 3.5, -8, 0, 2, 0, 1.79),
        new d(5, 9, 9, 1, 4.2, 25, -1, 1.65, -7.7, 4, -12, 2e-4, 0, 0, 1.95),
        new d(6, 9, 9, 1, 4.2, 25, -0, 2.47, -7.7, 6.5, -19, 4e-4, 0, 0, 2),
        new d(7, 9, 9, 1, 4.2, 25, 0.5, 2, -14.5, 8, -22, 6e-4, 0, 0, 2),
        new d(8, 9, 9, 1, 4.2, 25, 1, 2.4, -22, 10, -23, 7e-4, 0, 0, 2),
        new d(9, 9, 9, 1, 4.2, 25, 1.5, 2.95, -30, 11, -25, 8e-4, 0, 0, 2),
        new d(10, 9, 9, 1, 4.2, 25, 2, 2.95, -36, 12, -30, 8e-4, 0, 0, 2),
      ],
      g = [
        new k(8, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -30, 11, 0.0012, 1),
        new k(16, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -25, 11, 0.001, 1),
        new k(24, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -20, 11, 0.001, 1),
        new k(32, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -15, 11, 0.001, 1),
        new k(40, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
        new k(48, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
        new k(56, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -6, 11, 8e-4, 1),
        new k(64, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -2, 11, 8e-4, 1),
        new k(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1),
        new k(96, 9, 9, 0, 2.5, 6.6, 145, 0, 0.95, 0, 1, 5.5, 6e-4, 1),
        new k(112, 9, 9, 0, 2.25, 6.6, 145, 0, 0.95, 0, 2, 4.5, 5e-4, 1),
        new k(128, 9, 9, 0, 1.95, 6.4, 140, 0, 0.95, 0, 3, 4, 2e-4, 1),
        new k(160, 9, 9, 1, 1.79, 6, 135, 0, 0.95, -2, 5, 3.5, 0, 1),
        new k(192, 9, 9, 1, 1.49, 5.6, 125, 0, 0.97, -4, 7, 3, 0, 0),
        new k(224, 9, 9, 1, 1.25, 5.2, 125, 0, 0.98, -6, 9, 2, 0, 0),
        new k(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0),
        new k(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0),
      ];
    this.apply_preset = function (b, d, a) {
      switch (d) {
        case V.R3MIX:
          d = V.V3;
          b.VBR = M.vbr_mtrh;
          break;
        case V.MEDIUM:
          d = V.V4;
          b.VBR = M.vbr_rh;
          break;
        case V.MEDIUM_FAST:
          d = V.V4;
          b.VBR = M.vbr_mtrh;
          break;
        case V.STANDARD:
          d = V.V2;
          b.VBR = M.vbr_rh;
          break;
        case V.STANDARD_FAST:
          d = V.V2;
          b.VBR = M.vbr_mtrh;
          break;
        case V.EXTREME:
          d = V.V0;
          b.VBR = M.vbr_rh;
          break;
        case V.EXTREME_FAST:
          d = V.V0;
          b.VBR = M.vbr_mtrh;
          break;
        case V.INSANE:
          return (d = 320), (b.preset = d), C(b, d, a), (b.VBR = M.vbr_off), d;
      }
      b.preset = d;
      switch (d) {
        case V.V9:
          return q(b, 9, a), d;
        case V.V8:
          return q(b, 8, a), d;
        case V.V7:
          return q(b, 7, a), d;
        case V.V6:
          return q(b, 6, a), d;
        case V.V5:
          return q(b, 5, a), d;
        case V.V4:
          return q(b, 4, a), d;
        case V.V3:
          return q(b, 3, a), d;
        case V.V2:
          return q(b, 2, a), d;
        case V.V1:
          return q(b, 1, a), d;
        case V.V0:
          return q(b, 0, a), d;
      }
      if (8 <= d && 320 >= d) return C(b, d, a);
      b.preset = 0;
      return d;
    };
  }
  function O() {
    function d(g, b, l, a, h, k) {
      for (; 0 != h--; )
        (l[a] =
          1e-10 +
          g[b + 0] * k[0] -
          l[a - 1] * k[1] +
          g[b - 1] * k[2] -
          l[a - 2] * k[3] +
          g[b - 2] * k[4] -
          l[a - 3] * k[5] +
          g[b - 3] * k[6] -
          l[a - 4] * k[7] +
          g[b - 4] * k[8] -
          l[a - 5] * k[9] +
          g[b - 5] * k[10] -
          l[a - 6] * k[11] +
          g[b - 6] * k[12] -
          l[a - 7] * k[13] +
          g[b - 7] * k[14] -
          l[a - 8] * k[15] +
          g[b - 8] * k[16] -
          l[a - 9] * k[17] +
          g[b - 9] * k[18] -
          l[a - 10] * k[19] +
          g[b - 10] * k[20]),
          ++a,
          ++b;
    }
    function k(d, b, l, a, h, k) {
      for (; 0 != h--; )
        (l[a] =
          d[b + 0] * k[0] -
          l[a - 1] * k[1] +
          d[b - 1] * k[2] -
          l[a - 2] * k[3] +
          d[b - 2] * k[4]),
          ++a,
          ++b;
    }
    function q(d) {
      return d * d;
    }
    var C = O.RMS_WINDOW_TIME_NUMERATOR,
      B = O.RMS_WINDOW_TIME_DENOMINATOR,
      t = [
        [
          0.038575994352,
          -3.84664617118067,
          -0.02160367184185,
          7.81501653005538,
          -0.00123395316851,
          -11.34170355132042,
          -9.291677959e-5,
          13.05504219327545,
          -0.01655260341619,
          -12.28759895145294,
          0.02161526843274,
          9.4829380631979,
          -0.02074045215285,
          -5.87257861775999,
          0.00594298065125,
          2.75465861874613,
          0.00306428023191,
          -0.86984376593551,
          1.2025322027e-4,
          0.13919314567432,
          0.00288463683916,
        ],
        [
          0.0541865640643,
          -3.47845948550071,
          -0.02911007808948,
          6.36317777566148,
          -0.00848709379851,
          -8.54751527471874,
          -0.00851165645469,
          9.4769360780128,
          -0.00834990904936,
          -8.81498681370155,
          0.02245293253339,
          6.85401540936998,
          -0.02596338512915,
          -4.39470996079559,
          0.01624864962975,
          2.19611684890774,
          -0.00240879051584,
          -0.75104302451432,
          0.00674613682247,
          0.13149317958808,
          -0.00187763777362,
        ],
        [
          0.15457299681924,
          -2.37898834973084,
          -0.09331049056315,
          2.84868151156327,
          -0.06247880153653,
          -2.64577170229825,
          0.02163541888798,
          2.23697657451713,
          -0.05588393329856,
          -1.67148153367602,
          0.04781476674921,
          1.00595954808547,
          0.00222312597743,
          -0.45953458054983,
          0.03174092540049,
          0.16378164858596,
          -0.01390589421898,
          -0.05032077717131,
          0.00651420667831,
          0.0234789740702,
          -0.00881362733839,
        ],
        [
          0.30296907319327,
          -1.61273165137247,
          -0.22613988682123,
          1.0797749225997,
          -0.08587323730772,
          -0.2565625775407,
          0.03282930172664,
          -0.1627671912044,
          -0.00915702933434,
          -0.22638893773906,
          -0.02364141202522,
          0.39120800788284,
          -0.00584456039913,
          -0.22138138954925,
          0.06276101321749,
          0.04500235387352,
          -8.28086748e-6,
          0.02005851806501,
          0.00205861885564,
          0.00302439095741,
          -0.02950134983287,
        ],
        [
          0.33642304856132,
          -1.49858979367799,
          -0.2557224142557,
          0.87350271418188,
          -0.11828570177555,
          0.12205022308084,
          0.11921148675203,
          -0.80774944671438,
          -0.07834489609479,
          0.47854794562326,
          -0.0046997791438,
          -0.12453458140019,
          -0.0058950022444,
          -0.04067510197014,
          0.05724228140351,
          0.08333755284107,
          0.00832043980773,
          -0.04237348025746,
          -0.0163538138454,
          0.02977207319925,
          -0.0176017656815,
        ],
        [
          0.4491525660845,
          -0.62820619233671,
          -0.14351757464547,
          0.29661783706366,
          -0.22784394429749,
          -0.372563729424,
          -0.01419140100551,
          0.00213767857124,
          0.04078262797139,
          -0.42029820170918,
          -0.12398163381748,
          0.22199650564824,
          0.04097565135648,
          0.00613424350682,
          0.10478503600251,
          0.06747620744683,
          -0.01863887810927,
          0.05784820375801,
          -0.03193428438915,
          0.03222754072173,
          0.00541907748707,
        ],
        [
          0.56619470757641,
          -1.04800335126349,
          -0.75464456939302,
          0.29156311971249,
          0.1624213774223,
          -0.26806001042947,
          0.16744243493672,
          0.00819999645858,
          -0.18901604199609,
          0.45054734505008,
          0.3093178284183,
          -0.33032403314006,
          -0.27562961986224,
          0.0673936833311,
          0.00647310677246,
          -0.04784254229033,
          0.08647503780351,
          0.01639907836189,
          -0.0378898455484,
          0.01807364323573,
          -0.00588215443421,
        ],
        [
          0.58100494960553,
          -0.51035327095184,
          -0.53174909058578,
          -0.31863563325245,
          -0.14289799034253,
          -0.20256413484477,
          0.17520704835522,
          0.1472815413433,
          0.02377945217615,
          0.38952639978999,
          0.15558449135573,
          -0.23313271880868,
          -0.25344790059353,
          -0.05246019024463,
          0.01628462406333,
          -0.02505961724053,
          0.06920467763959,
          0.02442357316099,
          -0.03721611395801,
          0.01818801111503,
          -0.00749618797172,
        ],
        [
          0.53648789255105,
          -0.2504987195602,
          -0.42163034350696,
          -0.43193942311114,
          -0.00275953611929,
          -0.03424681017675,
          0.04267842219415,
          -0.04678328784242,
          -0.10214864179676,
          0.26408300200955,
          0.14590772289388,
          0.15113130533216,
          -0.02459864859345,
          -0.17556493366449,
          -0.11202315195388,
          -0.18823009262115,
          -0.04060034127,
          0.05477720428674,
          0.0478866554818,
          0.0470440968812,
          -0.02217936801134,
        ],
      ],
      r = [
        [
          0.98621192462708,
          -1.97223372919527,
          -1.97242384925416,
          0.97261396931306,
          0.98621192462708,
        ],
        [
          0.98500175787242,
          -1.96977855582618,
          -1.97000351574484,
          0.9702284756635,
          0.98500175787242,
        ],
        [
          0.97938932735214,
          -1.95835380975398,
          -1.95877865470428,
          0.95920349965459,
          0.97938932735214,
        ],
        [
          0.97531843204928,
          -1.95002759149878,
          -1.95063686409857,
          0.95124613669835,
          0.97531843204928,
        ],
        [
          0.97316523498161,
          -1.94561023566527,
          -1.94633046996323,
          0.94705070426118,
          0.97316523498161,
        ],
        [
          0.96454515552826,
          -1.92783286977036,
          -1.92909031105652,
          0.93034775234268,
          0.96454515552826,
        ],
        [
          0.96009142950541,
          -1.91858953033784,
          -1.92018285901082,
          0.92177618768381,
          0.96009142950541,
        ],
        [
          0.95856916599601,
          -1.9154210807478,
          -1.91713833199203,
          0.91885558323625,
          0.95856916599601,
        ],
        [
          0.94597685600279,
          -1.88903307939452,
          -1.89195371200558,
          0.89487434461664,
          0.94597685600279,
        ],
      ];
    this.InitGainAnalysis = function (d, b) {
      var l;
      a: {
        for (l = 0; l < MAX_ORDER; l++)
          d.linprebuf[l] = d.lstepbuf[l] = d.loutbuf[l] = d.rinprebuf[
            l
          ] = d.rstepbuf[l] = d.routbuf[l] = 0;
        switch (0 | b) {
          case 48e3:
            d.reqindex = 0;
            break;
          case 44100:
            d.reqindex = 1;
            break;
          case 32e3:
            d.reqindex = 2;
            break;
          case 24e3:
            d.reqindex = 3;
            break;
          case 22050:
            d.reqindex = 4;
            break;
          case 16e3:
            d.reqindex = 5;
            break;
          case 12e3:
            d.reqindex = 6;
            break;
          case 11025:
            d.reqindex = 7;
            break;
          case 8e3:
            d.reqindex = 8;
            break;
          default:
            l = INIT_GAIN_ANALYSIS_ERROR;
            break a;
        }
        d.sampleWindow = 0 | ((b * C + B - 1) / B);
        d.lsum = 0;
        d.rsum = 0;
        d.totsamp = 0;
        Ia.ill(d.A, 0);
        l = INIT_GAIN_ANALYSIS_OK;
      }
      if (l != INIT_GAIN_ANALYSIS_OK) return INIT_GAIN_ANALYSIS_ERROR;
      d.linpre = MAX_ORDER;
      d.rinpre = MAX_ORDER;
      d.lstep = MAX_ORDER;
      d.rstep = MAX_ORDER;
      d.lout = MAX_ORDER;
      d.rout = MAX_ORDER;
      Ia.fill(d.B, 0);
      return INIT_GAIN_ANALYSIS_OK;
    };
    this.AnalyzeSamples = function (g, b, l, a, h, D, e) {
      var n, c, f, E, z, w;
      if (0 == D) return GAIN_ANALYSIS_OK;
      w = 0;
      E = D;
      switch (e) {
        case 1:
          a = b;
          h = l;
          break;
        case 2:
          break;
        default:
          return GAIN_ANALYSIS_ERROR;
      }
      D < MAX_ORDER
        ? (K.arraycopy(b, l, g.linprebuf, MAX_ORDER, D),
          K.arraycopy(a, h, g.rinprebuf, MAX_ORDER, D))
        : (K.arraycopy(b, l, g.linprebuf, MAX_ORDER, MAX_ORDER),
          K.arraycopy(a, h, g.rinprebuf, MAX_ORDER, MAX_ORDER));
      for (; 0 < E; ) {
        z = E > g.sampleWindow - g.totsamp ? g.sampleWindow - g.totsamp : E;
        w < MAX_ORDER
          ? ((e = g.linpre + w),
            (n = g.linprebuf),
            (c = g.rinpre + w),
            (f = g.rinprebuf),
            z > MAX_ORDER - w && (z = MAX_ORDER - w))
          : ((e = l + w), (n = b), (c = h + w), (f = a));
        d(n, e, g.lstepbuf, g.lstep + g.totsamp, z, t[g.reqindex]);
        d(f, c, g.rstepbuf, g.rstep + g.totsamp, z, t[g.reqindex]);
        k(
          g.lstepbuf,
          g.lstep + g.totsamp,
          g.loutbuf,
          g.lout + g.totsamp,
          z,
          r[g.reqindex]
        );
        k(
          g.rstepbuf,
          g.rstep + g.totsamp,
          g.routbuf,
          g.rout + g.totsamp,
          z,
          r[g.reqindex]
        );
        e = g.lout + g.totsamp;
        n = g.loutbuf;
        c = g.rout + g.totsamp;
        f = g.routbuf;
        for (var A = z % 8; 0 != A--; )
          (g.lsum += q(n[e++])), (g.rsum += q(f[c++]));
        for (A = z / 8; 0 != A--; )
          (g.lsum +=
            q(n[e + 0]) +
            q(n[e + 1]) +
            q(n[e + 2]) +
            q(n[e + 3]) +
            q(n[e + 4]) +
            q(n[e + 5]) +
            q(n[e + 6]) +
            q(n[e + 7])),
            (e += 8),
            (g.rsum +=
              q(f[c + 0]) +
              q(f[c + 1]) +
              q(f[c + 2]) +
              q(f[c + 3]) +
              q(f[c + 4]) +
              q(f[c + 5]) +
              q(f[c + 6]) +
              q(f[c + 7])),
            (c += 8);
        E -= z;
        w += z;
        g.totsamp += z;
        g.totsamp == g.sampleWindow &&
          ((e =
            10 *
            O.STEPS_per_dB *
            Math.log10(((g.lsum + g.rsum) / g.totsamp) * 0.5 + 1e-37)),
          (e = 0 >= e ? 0 : 0 | e),
          e >= g.A.length && (e = g.A.length - 1),
          g.A[e]++,
          (g.lsum = g.rsum = 0),
          K.arraycopy(g.loutbuf, g.totsamp, g.loutbuf, 0, MAX_ORDER),
          K.arraycopy(g.routbuf, g.totsamp, g.routbuf, 0, MAX_ORDER),
          K.arraycopy(g.lstepbuf, g.totsamp, g.lstepbuf, 0, MAX_ORDER),
          K.arraycopy(g.rstepbuf, g.totsamp, g.rstepbuf, 0, MAX_ORDER),
          (g.totsamp = 0));
        if (g.totsamp > g.sampleWindow) return GAIN_ANALYSIS_ERROR;
      }
      D < MAX_ORDER
        ? (K.arraycopy(g.linprebuf, D, g.linprebuf, 0, MAX_ORDER - D),
          K.arraycopy(g.rinprebuf, D, g.rinprebuf, 0, MAX_ORDER - D),
          K.arraycopy(b, l, g.linprebuf, MAX_ORDER - D, D),
          K.arraycopy(a, h, g.rinprebuf, MAX_ORDER - D, D))
        : (K.arraycopy(b, l + D - MAX_ORDER, g.linprebuf, 0, MAX_ORDER),
          K.arraycopy(a, h + D - MAX_ORDER, g.rinprebuf, 0, MAX_ORDER));
      return GAIN_ANALYSIS_OK;
    };
    this.GetTitleGain = function (d) {
      var b;
      b = d.A;
      var l = d.A.length,
        a,
        h = 0;
      for (a = 0; a < l; a++) h += b[a];
      if (0 == h) b = GAIN_NOT_ENOUGH_SAMPLES;
      else {
        h = 0 | Math.ceil(h * (1 - 0.95));
        for (a = l; 0 < a-- && !(0 >= (h -= b[a])); );
        b = 64.82 - a / O.STEPS_per_dB;
      }
      for (l = 0; l < d.A.length; l++) (d.B[l] += d.A[l]), (d.A[l] = 0);
      for (l = 0; l < MAX_ORDER; l++)
        d.linprebuf[l] = d.lstepbuf[l] = d.loutbuf[l] = d.rinprebuf[
          l
        ] = d.rstepbuf[l] = d.routbuf[l] = 0;
      d.totsamp = 0;
      d.lsum = d.rsum = 0;
      return b;
    };
  }
  function tb() {
    function J(a) {
      this.bits = 0 | a;
    }
    function k(a, c, b, d, e, p) {
      c = 0.5946 / c;
      for (a >>= 1; 0 != a--; )
        (e[p++] = c > b[d++] ? 0 : 1), (e[p++] = c > b[d++] ? 0 : 1);
    }
    function q(a, c, b, d, e, p) {
      a >>= 1;
      var m = a % 2;
      for (a >>= 1; 0 != a--; ) {
        var f, n, g, u, h, l, k;
        f = b[d++] * c;
        n = b[d++] * c;
        h = 0 | f;
        g = b[d++] * c;
        l = 0 | n;
        u = b[d++] * c;
        k = 0 | g;
        f += t.adj43[h];
        h = 0 | u;
        n += t.adj43[l];
        e[p++] = 0 | f;
        g += t.adj43[k];
        e[p++] = 0 | n;
        u += t.adj43[h];
        e[p++] = 0 | g;
        e[p++] = 0 | u;
      }
      0 != m &&
        ((f = b[d++] * c),
        (n = b[d++] * c),
        (f += t.adj43[0 | f]),
        (n += t.adj43[0 | n]),
        (e[p++] = 0 | f),
        (e[p++] = 0 | n));
    }
    function C(a, c, b, d) {
      var e,
        p = c,
        m = (e = 0);
      do {
        var f = a[p++],
          n = a[p++];
        e < f && (e = f);
        m < n && (m = n);
      } while (p < b);
      e < m && (e = m);
      switch (e) {
        case 0:
          return e;
        case 1:
          p = c;
          c = 0;
          e = r.ht[1].hlen;
          do (m = 2 * a[p + 0] + a[p + 1]), (p += 2), (c += e[m]);
          while (p < b);
          d.bits += c;
          return 1;
        case 2:
        case 3:
          p = c;
          c = g[e - 1];
          e = 0;
          m = r.ht[c].xlen;
          f = 2 == c ? r.table23 : r.table56;
          do (n = a[p + 0] * m + a[p + 1]), (p += 2), (e += f[n]);
          while (p < b);
          a = e & 65535;
          e >>= 16;
          e > a && ((e = a), c++);
          d.bits += e;
          return c;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          p = c;
          c = g[e - 1];
          var f = (m = e = 0),
            n = r.ht[c].xlen,
            h = r.ht[c].hlen,
            u = r.ht[c + 1].hlen,
            l = r.ht[c + 2].hlen;
          do {
            var k = a[p + 0] * n + a[p + 1],
              p = p + 2;
            e += h[k];
            m += u[k];
            f += l[k];
          } while (p < b);
          a = c;
          e > m && ((e = m), a++);
          e > f && ((e = f), (a = c + 2));
          d.bits += e;
          return a;
        default:
          if (e > ma.IXMAX_VAL) return (d.bits = ma.LARGE_BITS), -1;
          e -= 15;
          for (p = 24; 32 > p && !(r.ht[p].linmax >= e); p++);
          for (m = p - 8; 24 > m && !(r.ht[m].linmax >= e); m++);
          e = m;
          f = 65536 * r.ht[e].xlen + r.ht[p].xlen;
          m = 0;
          do
            (n = a[c++]),
              (h = a[c++]),
              0 != n && (14 < n && ((n = 15), (m += f)), (n *= 16)),
              0 != h && (14 < h && ((h = 15), (m += f)), (n += h)),
              (m += r.largetbl[n]);
          while (c < b);
          a = m & 65535;
          m >>= 16;
          m > a && ((m = a), (e = p));
          d.bits += m;
          return e;
      }
    }
    function B(a, c, e, b, f, p, m, n) {
      for (var y = c.big_values, g = 2; g < d.SBMAX_l + 1; g++) {
        var h = a.scalefac_band.l[g];
        if (h >= y) break;
        var l = f[g - 2] + c.count1bits;
        if (e.part2_3_length <= l) break;
        l = new J(l);
        h = C(b, h, y, l);
        l = l.bits;
        e.part2_3_length <= l ||
          (e.assign(c),
          (e.part2_3_length = l),
          (e.region0_count = p[g - 2]),
          (e.region1_count = g - 2 - p[g - 2]),
          (e.table_select[0] = m[g - 2]),
          (e.table_select[1] = n[g - 2]),
          (e.table_select[2] = h));
      }
    }
    var t = null;
    this.qupvt = null;
    this.setModules = function (a) {
      t = this.qupvt = a;
    };
    var ta = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 1],
        [1, 2],
        [2, 2],
        [2, 3],
        [2, 3],
        [3, 4],
        [3, 4],
        [3, 4],
        [4, 5],
        [4, 5],
        [4, 6],
        [5, 6],
        [5, 6],
        [5, 7],
        [6, 7],
        [6, 7],
      ],
      g = [1, 2, 5, 7, 7, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13];
    this.noquant_count_bits = function (a, c, e) {
      var b = c.l3_enc,
        f = Math.min(576, ((c.max_nonzero_coeff + 2) >> 1) << 1);
      null != e && (e.sfb_count1 = 0);
      for (; 1 < f && 0 == (b[f - 1] | b[f - 2]); f -= 2);
      c.count1 = f;
      for (var p = 0, m = 0; 3 < f; f -= 4) {
        var n;
        if (1 < ((b[f - 1] | b[f - 2] | b[f - 3] | b[f - 4]) & 2147483647))
          break;
        n = 2 * (2 * (2 * b[f - 4] + b[f - 3]) + b[f - 2]) + b[f - 1];
        p += r.t32l[n];
        m += r.t33l[n];
      }
      n = p;
      c.count1table_select = 0;
      p > m && ((n = m), (c.count1table_select = 1));
      c.count1bits = n;
      c.big_values = f;
      if (0 == f) return n;
      c.block_type == d.SHORT_TYPE
        ? ((p = 3 * a.scalefac_band.s[3]),
          p > c.big_values && (p = c.big_values),
          (m = c.big_values))
        : c.block_type == d.NORM_TYPE
        ? ((p = c.region0_count = a.bv_scf[f - 2]),
          (m = c.region1_count = a.bv_scf[f - 1]),
          (m = a.scalefac_band.l[p + m + 2]),
          (p = a.scalefac_band.l[p + 1]),
          m < f &&
            ((n = new J(n)), (c.table_select[2] = C(b, m, f, n)), (n = n.bits)))
        : ((c.region0_count = 7),
          (c.region1_count = d.SBMAX_l - 1 - 7 - 1),
          (p = a.scalefac_band.l[8]),
          (m = f),
          p > m && (p = m));
      p = Math.min(p, f);
      m = Math.min(m, f);
      0 < p &&
        ((n = new J(n)), (c.table_select[0] = C(b, 0, p, n)), (n = n.bits));
      p < m &&
        ((n = new J(n)), (c.table_select[1] = C(b, p, m, n)), (n = n.bits));
      2 == a.use_best_huffman &&
        ((c.part2_3_length = n),
        best_huffman_divide(a, c),
        (n = c.part2_3_length));
      if (null != e && c.block_type == d.NORM_TYPE) {
        for (b = 0; a.scalefac_band.l[b] < c.big_values; ) b++;
        e.sfb_count1 = b;
      }
      return n;
    };
    this.count_bits = function (a, c, e, b) {
      var f = e.l3_enc,
        n = ma.IXMAX_VAL / t.IPOW20(e.global_gain);
      if (e.xrpow_max > n) return ma.LARGE_BITS;
      var n = t.IPOW20(e.global_gain),
        m,
        g,
        y = 0,
        h,
        u = 0,
        l = 0,
        la = 0,
        F = 0,
        G = f,
        I = 0,
        T = c,
        U = 0;
      h = null != b && e.global_gain == b.global_gain;
      g = e.block_type == d.SHORT_TYPE ? 38 : 21;
      for (m = 0; m <= g; m++) {
        var D = -1;
        if (h || e.block_type == d.NORM_TYPE)
          D =
            e.global_gain -
            ((e.scalefac[m] + (0 != e.preflag ? t.pretab[m] : 0)) <<
              (e.scalefac_scale + 1)) -
            8 * e.subblock_gain[e.window[m]];
        if (h && b.step[m] == D)
          0 != u && (q(u, n, T, U, G, I), (u = 0)),
            0 != l && (k(l, n, T, U, G, I), (l = 0));
        else {
          var ia = e.width[m];
          y + e.width[m] > e.max_nonzero_coeff &&
            ((m = e.max_nonzero_coeff - y + 1),
            Ia.fill(f, e.max_nonzero_coeff, 576, 0),
            (ia = m),
            0 > ia && (ia = 0),
            (m = g + 1));
          0 == u && 0 == l && ((G = f), (I = F), (T = c), (U = la));
          null != b &&
          0 < b.sfb_count1 &&
          m >= b.sfb_count1 &&
          0 < b.step[m] &&
          D >= b.step[m]
            ? (0 != u &&
                (q(u, n, T, U, G, I),
                (u = 0),
                (G = f),
                (I = F),
                (T = c),
                (U = la)),
              (l += ia))
            : (0 != l &&
                (k(l, n, T, U, G, I),
                (l = 0),
                (G = f),
                (I = F),
                (T = c),
                (U = la)),
              (u += ia));
          if (0 >= ia) {
            0 != l && (k(l, n, T, U, G, I), (l = 0));
            0 != u && (q(u, n, T, U, G, I), (u = 0));
            break;
          }
        }
        m <= g && ((F += e.width[m]), (la += e.width[m]), (y += e.width[m]));
      }
      0 != u && q(u, n, T, U, G, I);
      0 != l && k(l, n, T, U, G, I);
      if (0 != (a.substep_shaping & 2))
        for (
          n = 0,
            g = 0.634521682242439 / t.IPOW20(e.global_gain + e.scalefac_scale),
            y = 0;
          y < e.sfbmax;
          y++
        )
          if (((h = e.width[y]), 0 == a.pseudohalf[y])) n += h;
          else for (u = n, n += h; u < n; ++u) f[u] = c[u] >= g ? f[u] : 0;
      return this.noquant_count_bits(a, e, b);
    };
    this.best_huffman_divide = function (a, c) {
      var e = new Ab(),
        b = c.l3_enc,
        f = Y(23),
        n = Y(23),
        m = Y(23),
        g = Y(23);
      if (c.block_type != d.SHORT_TYPE || 1 != a.mode_gr) {
        e.assign(c);
        if (c.block_type == d.NORM_TYPE) {
          for (var y = c.big_values, h = 0; 22 >= h; h++) f[h] = ma.LARGE_BITS;
          for (h = 0; 16 > h; h++) {
            var l = a.scalefac_band.l[h + 1];
            if (l >= y) break;
            for (
              var k = 0, q = new J(k), F = C(b, 0, l, q), k = q.bits, G = 0;
              8 > G;
              G++
            ) {
              var I = a.scalefac_band.l[h + G + 2];
              if (I >= y) break;
              q = k;
              q = new J(q);
              I = C(b, l, I, q);
              q = q.bits;
              f[h + G] > q &&
                ((f[h + G] = q),
                (n[h + G] = h),
                (m[h + G] = F),
                (g[h + G] = I));
            }
          }
          B(a, e, c, b, f, n, m, g);
        }
        y = e.big_values;
        if (
          !(
            0 == y ||
            1 < (b[y - 2] | b[y - 1]) ||
            ((y = c.count1 + 2), 576 < y)
          )
        ) {
          e.assign(c);
          e.count1 = y;
          for (l = h = 0; y > e.big_values; y -= 4)
            (k = 2 * (2 * (2 * b[y - 4] + b[y - 3]) + b[y - 2]) + b[y - 1]),
              (h += r.t32l[k]),
              (l += r.t33l[k]);
          e.big_values = y;
          e.count1table_select = 0;
          h > l && ((h = l), (e.count1table_select = 1));
          e.count1bits = h;
          e.block_type == d.NORM_TYPE
            ? B(a, e, c, b, f, n, m, g)
            : ((e.part2_3_length = h),
              (h = a.scalefac_band.l[8]),
              h > y && (h = y),
              0 < h &&
                ((f = new J(e.part2_3_length)),
                (e.table_select[0] = C(b, 0, h, f)),
                (e.part2_3_length = f.bits)),
              y > h &&
                ((f = new J(e.part2_3_length)),
                (e.table_select[1] = C(b, h, y, f)),
                (e.part2_3_length = f.bits)),
              c.part2_3_length > e.part2_3_length && c.assign(e));
        }
      }
    };
    var b = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16],
      l = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8],
      a = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
      h = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
    tb.slen1_tab = a;
    tb.slen2_tab = h;
    this.best_scalefac_store = function (c, e, f, n) {
      var g = n.tt[e][f],
        p,
        m,
        x,
        y = 0;
      for (p = m = 0; p < g.sfbmax; p++) {
        x = g.width[p];
        m += x;
        for (x = -x; 0 > x && 0 == g.l3_enc[x + m]; x++);
        0 == x && (g.scalefac[p] = y = -2);
      }
      if (0 == g.scalefac_scale && 0 == g.preflag) {
        for (p = m = 0; p < g.sfbmax; p++)
          0 < g.scalefac[p] && (m |= g.scalefac[p]);
        if (0 == (m & 1) && 0 != m) {
          for (p = 0; p < g.sfbmax; p++)
            0 < g.scalefac[p] && (g.scalefac[p] >>= 1);
          g.scalefac_scale = y = 1;
        }
      }
      if (0 == g.preflag && g.block_type != d.SHORT_TYPE && 2 == c.mode_gr) {
        for (
          p = 11;
          p < d.SBPSY_l &&
          !(g.scalefac[p] < t.pretab[p] && -2 != g.scalefac[p]);
          p++
        );
        if (p == d.SBPSY_l) {
          for (p = 11; p < d.SBPSY_l; p++)
            0 < g.scalefac[p] && (g.scalefac[p] -= t.pretab[p]);
          g.preflag = y = 1;
        }
      }
      for (p = 0; 4 > p; p++) n.scfsi[f][p] = 0;
      if (
        2 == c.mode_gr &&
        1 == e &&
        n.tt[0][f].block_type != d.SHORT_TYPE &&
        n.tt[1][f].block_type != d.SHORT_TYPE
      ) {
        e = n.tt[1][f];
        m = n.tt[0][f];
        for (y = 0; y < r.scfsi_band.length - 1; y++) {
          for (
            p = r.scfsi_band[y];
            p < r.scfsi_band[y + 1] &&
            !(m.scalefac[p] != e.scalefac[p] && 0 <= e.scalefac[p]);
            p++
          );
          if (p == r.scfsi_band[y + 1]) {
            for (p = r.scfsi_band[y]; p < r.scfsi_band[y + 1]; p++)
              e.scalefac[p] = -1;
            n.scfsi[f][y] = 1;
          }
        }
        for (p = n = f = 0; 11 > p; p++)
          -1 != e.scalefac[p] &&
            (n++, f < e.scalefac[p] && (f = e.scalefac[p]));
        for (x = m = 0; p < d.SBPSY_l; p++)
          -1 != e.scalefac[p] &&
            (x++, m < e.scalefac[p] && (m = e.scalefac[p]));
        for (y = 0; 16 > y; y++)
          f < b[y] &&
            m < l[y] &&
            ((p = a[y] * n + h[y] * x),
            e.part2_length > p &&
              ((e.part2_length = p), (e.scalefac_compress = y)));
        y = 0;
      }
      for (p = 0; p < g.sfbmax; p++) -2 == g.scalefac[p] && (g.scalefac[p] = 0);
      0 != y &&
        (2 == c.mode_gr
          ? this.scale_bitcount(g)
          : this.scale_bitcount_lsf(c, g));
    };
    var D = [0, 18, 36, 54, 54, 36, 54, 72, 54, 72, 90, 72, 90, 108, 108, 126],
      e = [0, 18, 36, 54, 51, 35, 53, 71, 52, 70, 88, 69, 87, 105, 104, 122],
      n = [0, 10, 20, 30, 33, 21, 31, 41, 32, 42, 52, 43, 53, 63, 64, 74];
    this.scale_bitcount = function (a) {
      var c,
        f = 0,
        g = 0,
        h,
        p = a.scalefac;
      if (a.block_type == d.SHORT_TYPE)
        (h = D), 0 != a.mixed_block_flag && (h = e);
      else if (((h = n), 0 == a.preflag)) {
        for (c = 11; c < d.SBPSY_l && !(p[c] < t.pretab[c]); c++);
        if (c == d.SBPSY_l)
          for (a.preflag = 1, c = 11; c < d.SBPSY_l; c++) p[c] -= t.pretab[c];
      }
      for (c = 0; c < a.sfbdivide; c++) f < p[c] && (f = p[c]);
      for (; c < a.sfbmax; c++) g < p[c] && (g = p[c]);
      a.part2_length = ma.LARGE_BITS;
      for (c = 0; 16 > c; c++)
        f < b[c] &&
          g < l[c] &&
          a.part2_length > h[c] &&
          ((a.part2_length = h[c]), (a.scalefac_compress = c));
      return a.part2_length == ma.LARGE_BITS;
    };
    var c = [
      [15, 15, 7, 7],
      [15, 15, 7, 0],
      [7, 3, 0, 0],
      [15, 31, 31, 0],
      [7, 7, 7, 0],
      [3, 3, 0, 0],
    ];
    this.scale_bitcount_lsf = function (a, e) {
      var b,
        n,
        g,
        p,
        m,
        h,
        y,
        l = Y(4),
        u = e.scalefac;
      b = 0 != e.preflag ? 2 : 0;
      for (h = 0; 4 > h; h++) l[h] = 0;
      if (e.block_type == d.SHORT_TYPE) {
        n = 1;
        var k = t.nr_of_sfb_block[b][n];
        for (g = y = 0; 4 > g; g++)
          for (p = k[g] / 3, h = 0; h < p; h++, y++)
            for (m = 0; 3 > m; m++)
              u[3 * y + m] > l[g] && (l[g] = u[3 * y + m]);
      } else
        for (n = 0, k = t.nr_of_sfb_block[b][n], g = y = 0; 4 > g; g++)
          for (p = k[g], h = 0; h < p; h++, y++) u[y] > l[g] && (l[g] = u[y]);
      p = !1;
      for (g = 0; 4 > g; g++) l[g] > c[b][g] && (p = !0);
      if (!p) {
        e.sfb_partition_table = t.nr_of_sfb_block[b][n];
        for (g = 0; 4 > g; g++) e.slen[g] = f[l[g]];
        n = e.slen[0];
        g = e.slen[1];
        l = e.slen[2];
        m = e.slen[3];
        switch (b) {
          case 0:
            e.scalefac_compress = ((5 * n + g) << 4) + (l << 2) + m;
            break;
          case 1:
            e.scalefac_compress = 400 + ((5 * n + g) << 2) + l;
            break;
          case 2:
            e.scalefac_compress = 500 + 3 * n + g;
            break;
          default:
            K.err.printf("intensity stereo not implemented yet\n");
        }
      }
      if (!p)
        for (g = e.part2_length = 0; 4 > g; g++)
          e.part2_length += e.slen[g] * e.sfb_partition_table[g];
      return p;
    };
    var f = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
    this.huffman_init = function (a) {
      for (var c = 2; 576 >= c; c += 2) {
        for (var e = 0, b; a.scalefac_band.l[++e] < c; );
        for (b = ta[e][0]; a.scalefac_band.l[b + 1] > c; ) b--;
        0 > b && (b = ta[e][0]);
        a.bv_scf[c - 2] = b;
        for (b = ta[e][1]; a.scalefac_band.l[b + a.bv_scf[c - 2] + 2] > c; )
          b--;
        0 > b && (b = ta[e][1]);
        a.bv_scf[c - 1] = b;
      }
    };
  }
  function Hc() {
    var d;
    this.setModules = function (k) {
      d = k;
    };
    this.ResvFrameBegin = function (k, q) {
      var C = k.internal_flags,
        B,
        t = C.l3_side,
        r = d.getframebits(k);
      q.bits = (r - 8 * C.sideinfo_len) / C.mode_gr;
      var g = 2048 * C.mode_gr - 8;
      320 < k.brate
        ? (B = 8 * int((1e3 * k.brate) / (k.out_samplerate / 1152) / 8 + 0.5))
        : ((B = 11520),
          k.strict_ISO &&
            (B = 8 * int(32e4 / (k.out_samplerate / 1152) / 8 + 0.5)));
      C.ResvMax = B - r;
      C.ResvMax > g && (C.ResvMax = g);
      if (0 > C.ResvMax || k.disable_reservoir) C.ResvMax = 0;
      r = q.bits * C.mode_gr + Math.min(C.ResvSize, C.ResvMax);
      r > B && (r = B);
      t.resvDrain_pre = 0;
      null != C.pinfo &&
        ((C.pinfo.mean_bits = q.bits / 2), (C.pinfo.resvsize = C.ResvSize));
      return r;
    };
    this.ResvMaxBits = function (d, q, J, B) {
      var t = d.internal_flags,
        r = t.ResvSize,
        g = t.ResvMax;
      0 != B && (r += q);
      0 != (t.substep_shaping & 1) && (g *= 0.9);
      J.bits = q;
      10 * r > 9 * g
        ? ((B = r - (9 * g) / 10), (J.bits += B), (t.substep_shaping |= 128))
        : ((B = 0),
          (t.substep_shaping &= 127),
          d.disable_reservoir ||
            0 != (t.substep_shaping & 1) ||
            (J.bits -= 0.1 * q));
      d = r < (6 * t.ResvMax) / 10 ? r : (6 * t.ResvMax) / 10;
      d -= B;
      0 > d && (d = 0);
      return d;
    };
    this.ResvAdjust = function (d, q) {
      d.ResvSize -= q.part2_3_length + q.part2_length;
    };
    this.ResvFrameEnd = function (d, q) {
      var J,
        B = d.l3_side;
      d.ResvSize += q * d.mode_gr;
      var t = 0;
      B.resvDrain_post = 0;
      B.resvDrain_pre = 0;
      0 != (J = d.ResvSize % 8) && (t += J);
      J = d.ResvSize - t - d.ResvMax;
      0 < J && (t += J);
      J = Math.min(8 * B.main_data_begin, t) / 8;
      B.resvDrain_pre += 8 * J;
      t -= 8 * J;
      d.ResvSize -= 8 * J;
      B.main_data_begin -= J;
      B.resvDrain_post += t;
      d.ResvSize -= t;
    };
  }
  function ua() {
    function J(a, e, b) {
      for (; 0 < b; ) {
        var d;
        0 == z &&
          ((z = 8),
          E++,
          a.header[a.w_ptr].write_timing == f &&
            ((d = a),
            K.arraycopy(d.header[d.w_ptr].buf, 0, c, E, d.sideinfo_len),
            (E += d.sideinfo_len),
            (f += 8 * d.sideinfo_len),
            (d.w_ptr = (d.w_ptr + 1) & (da.MAX_HEADER_BUF - 1))),
          (c[E] = 0));
        d = Math.min(b, z);
        b -= d;
        z -= d;
        c[E] |= (e >> b) << z;
        f += d;
      }
    }
    function k(a, c) {
      var b = a.internal_flags,
        d;
      8 <= c && (J(b, 76, 8), (c -= 8));
      8 <= c && (J(b, 65, 8), (c -= 8));
      8 <= c && (J(b, 77, 8), (c -= 8));
      8 <= c && (J(b, 69, 8), (c -= 8));
      if (32 <= c) {
        var m = e.getLameShortVersion();
        if (32 <= c)
          for (d = 0; d < m.length && 8 <= c; ++d)
            (c -= 8), J(b, m.charAt(d), 8);
      }
      for (; 1 <= c; --c)
        J(b, b.ancillary_flag, 1),
          (b.ancillary_flag ^= a.disable_reservoir ? 0 : 1);
    }
    function q(a, c, e) {
      for (var b = a.header[a.h_ptr].ptr; 0 < e; ) {
        var m = Math.min(e, 8 - (b & 7));
        e -= m;
        a.header[a.h_ptr].buf[b >> 3] |= (c >> e) << (8 - (b & 7) - m);
        b += m;
      }
      a.header[a.h_ptr].ptr = b;
    }
    function C(a, c) {
      a <<= 8;
      for (var e = 0; 8 > e; e++)
        (a <<= 1), (c <<= 1), 0 != ((c ^ a) & 65536) && (c ^= 32773);
      return c;
    }
    function B(a, c) {
      var e = r.ht[c.count1table_select + 32],
        b,
        m = 0,
        d = c.big_values,
        f = c.big_values;
      for (b = (c.count1 - c.big_values) / 4; 0 < b; --b) {
        var n = 0,
          g = 0,
          h;
        h = c.l3_enc[d + 0];
        0 != h && ((g += 8), 0 > c.xr[f + 0] && n++);
        h = c.l3_enc[d + 1];
        0 != h && ((g += 4), (n *= 2), 0 > c.xr[f + 1] && n++);
        h = c.l3_enc[d + 2];
        0 != h && ((g += 2), (n *= 2), 0 > c.xr[f + 2] && n++);
        h = c.l3_enc[d + 3];
        0 != h && (g++, (n *= 2), 0 > c.xr[f + 3] && n++);
        d += 4;
        f += 4;
        J(a, n + e.table[g], e.hlen[g]);
        m += e.hlen[g];
      }
      return m;
    }
    function t(c, a, e, b, m) {
      var d = r.ht[a],
        f = 0;
      if (0 == a) return f;
      for (; e < b; e += 2) {
        var n = 0,
          g = 0,
          h = d.xlen,
          l = d.xlen,
          k = 0,
          G = m.l3_enc[e],
          I = m.l3_enc[e + 1];
        0 != G && (0 > m.xr[e] && k++, n--);
        15 < a &&
          (14 < G && ((k |= (G - 15) << 1), (g = h), (G = 15)),
          14 < I && ((l = I - 15), (k <<= h), (k |= l), (g += h), (I = 15)),
          (l = 16));
        0 != I && ((k <<= 1), 0 > m.xr[e + 1] && k++, n--);
        G = G * l + I;
        g -= n;
        n += d.hlen[G];
        J(c, d.table[G], n);
        J(c, k, g);
        f += n + g;
      }
      return f;
    }
    function H(c, a) {
      var e = 3 * c.scalefac_band.s[3];
      e > a.big_values && (e = a.big_values);
      var b = t(c, a.table_select[0], 0, e, a);
      return (b += t(c, a.table_select[1], e, a.big_values, a));
    }
    function g(c, a) {
      var e, b, m, d;
      e = a.big_values;
      b = a.region0_count + 1;
      m = c.scalefac_band.l[b];
      b += a.region1_count + 1;
      d = c.scalefac_band.l[b];
      m > e && (m = e);
      d > e && (d = e);
      b = t(c, a.table_select[0], 0, m, a);
      b += t(c, a.table_select[1], m, d, a);
      return (b += t(c, a.table_select[2], d, e, a));
    }
    function b() {
      this.total = 0;
    }
    function l(c, e) {
      var b = c.internal_flags,
        d,
        m,
        n,
        g;
      g = b.w_ptr;
      n = b.h_ptr - 1;
      -1 == n && (n = da.MAX_HEADER_BUF - 1);
      d = b.header[n].write_timing - f;
      e.total = d;
      0 <= d &&
        ((m = 1 + n - g),
        n < g && (m = 1 + n - g + da.MAX_HEADER_BUF),
        (d -= 8 * m * b.sideinfo_len));
      b = a.getframebits(c);
      d += b;
      e.total += b;
      e.total = 0 != e.total % 8 ? 1 + e.total / 8 : e.total / 8;
      e.total += E + 1;
      0 > d && K.err.println("strange error flushing buffer ... \n");
      return d;
    }
    var a = this,
      h = null,
      D = null,
      e = null,
      n = null;
    this.setModules = function (a, c, b, d) {
      h = a;
      D = c;
      e = b;
      n = d;
    };
    var c = null,
      f = 0,
      E = 0,
      z = 0;
    this.getframebits = function (a) {
      var c = a.internal_flags;
      return (
        8 *
        (0 |
          ((72e3 *
            (a.version + 1) *
            (0 != c.bitrate_index
              ? r.bitrate_table[a.version][c.bitrate_index]
              : a.brate)) /
            a.out_samplerate +
            c.padding))
      );
    };
    this.CRC_writeheader = function (a, c) {
      var e;
      e = C(c[2] & 255, 65535);
      e = C(c[3] & 255, e);
      for (var b = 6; b < a.sideinfo_len; b++) e = C(c[b] & 255, e);
      c[4] = byte(e >> 8);
      c[5] = byte(e & 255);
    };
    this.flush_bitstream = function (c) {
      var a = c.internal_flags,
        e,
        d;
      e = a.l3_side;
      0 > (d = l(c, new b())) ||
        (k(c, d),
        (a.ResvSize = 0),
        (e.main_data_begin = 0),
        a.findReplayGain &&
          ((e = h.GetTitleGain(a.rgdata)),
          (a.RadioGain = Math.floor(10 * e + 0.5) | 0)),
        a.findPeakSample &&
          ((a.noclipGainChange =
            Math.ceil(200 * Math.log10(a.PeakSample / 32767)) | 0),
          0 < a.noclipGainChange
            ? EQ(c.scale, 1) || EQ(c.scale, 0)
              ? (a.noclipScale = Math.floor((32767 / a.PeakSample) * 100) / 100)
              : (a.noclipScale = -1)
            : (a.noclipScale = -1)));
    };
    this.add_dummy_byte = function (a, e, b) {
      a = a.internal_flags;
      for (var d; 0 < b--; ) {
        d = e;
        for (var m = 8; 0 < m; ) {
          var n;
          0 == z && ((z = 8), E++, (c[E] = 0));
          n = Math.min(m, z);
          m -= n;
          z -= n;
          c[E] |= (d >> m) << z;
          f += n;
        }
        for (d = 0; d < da.MAX_HEADER_BUF; ++d) a.header[d].write_timing += 8;
      }
    };
    this.format_bitstream = function (a) {
      var c = a.internal_flags,
        e;
      e = c.l3_side;
      var n = this.getframebits(a);
      k(a, e.resvDrain_pre);
      var m = a.internal_flags,
        h,
        y,
        E;
      h = m.l3_side;
      m.header[m.h_ptr].ptr = 0;
      Ia.fill(m.header[m.h_ptr].buf, 0, m.sideinfo_len, 0);
      16e3 > a.out_samplerate ? q(m, 4094, 12) : q(m, 4095, 12);
      q(m, a.version, 1);
      q(m, 1, 2);
      q(m, a.error_protection ? 0 : 1, 1);
      q(m, m.bitrate_index, 4);
      q(m, m.samplerate_index, 2);
      q(m, m.padding, 1);
      q(m, a.extension, 1);
      q(m, a.mode.ordinal(), 2);
      q(m, m.mode_ext, 2);
      q(m, a.copyright, 1);
      q(m, a.original, 1);
      q(m, a.emphasis, 2);
      a.error_protection && q(m, 0, 16);
      if (1 == a.version) {
        q(m, h.main_data_begin, 9);
        2 == m.channels_out ? q(m, h.private_bits, 3) : q(m, h.private_bits, 5);
        for (E = 0; E < m.channels_out; E++)
          for (y = 0; 4 > y; y++) q(m, h.scfsi[E][y], 1);
        for (y = 0; 2 > y; y++)
          for (E = 0; E < m.channels_out; E++) {
            var u = h.tt[y][E];
            q(m, u.part2_3_length + u.part2_length, 12);
            q(m, u.big_values / 2, 9);
            q(m, u.global_gain, 8);
            q(m, u.scalefac_compress, 4);
            u.block_type != d.NORM_TYPE
              ? (q(m, 1, 1),
                q(m, u.block_type, 2),
                q(m, u.mixed_block_flag, 1),
                14 == u.table_select[0] && (u.table_select[0] = 16),
                q(m, u.table_select[0], 5),
                14 == u.table_select[1] && (u.table_select[1] = 16),
                q(m, u.table_select[1], 5),
                q(m, u.subblock_gain[0], 3),
                q(m, u.subblock_gain[1], 3),
                q(m, u.subblock_gain[2], 3))
              : (q(m, 0, 1),
                14 == u.table_select[0] && (u.table_select[0] = 16),
                q(m, u.table_select[0], 5),
                14 == u.table_select[1] && (u.table_select[1] = 16),
                q(m, u.table_select[1], 5),
                14 == u.table_select[2] && (u.table_select[2] = 16),
                q(m, u.table_select[2], 5),
                q(m, u.region0_count, 4),
                q(m, u.region1_count, 3));
            q(m, u.preflag, 1);
            q(m, u.scalefac_scale, 1);
            q(m, u.count1table_select, 1);
          }
      } else
        for (
          q(m, h.main_data_begin, 8),
            q(m, h.private_bits, m.channels_out),
            E = y = 0;
          E < m.channels_out;
          E++
        )
          (u = h.tt[y][E]),
            q(m, u.part2_3_length + u.part2_length, 12),
            q(m, u.big_values / 2, 9),
            q(m, u.global_gain, 8),
            q(m, u.scalefac_compress, 9),
            u.block_type != d.NORM_TYPE
              ? (q(m, 1, 1),
                q(m, u.block_type, 2),
                q(m, u.mixed_block_flag, 1),
                14 == u.table_select[0] && (u.table_select[0] = 16),
                q(m, u.table_select[0], 5),
                14 == u.table_select[1] && (u.table_select[1] = 16),
                q(m, u.table_select[1], 5),
                q(m, u.subblock_gain[0], 3),
                q(m, u.subblock_gain[1], 3),
                q(m, u.subblock_gain[2], 3))
              : (q(m, 0, 1),
                14 == u.table_select[0] && (u.table_select[0] = 16),
                q(m, u.table_select[0], 5),
                14 == u.table_select[1] && (u.table_select[1] = 16),
                q(m, u.table_select[1], 5),
                14 == u.table_select[2] && (u.table_select[2] = 16),
                q(m, u.table_select[2], 5),
                q(m, u.region0_count, 4),
                q(m, u.region1_count, 3)),
            q(m, u.scalefac_scale, 1),
            q(m, u.count1table_select, 1);
      a.error_protection && CRC_writeheader(m, m.header[m.h_ptr].buf);
      h = m.h_ptr;
      m.h_ptr = (h + 1) & (da.MAX_HEADER_BUF - 1);
      m.header[m.h_ptr].write_timing = m.header[h].write_timing + n;
      m.h_ptr == m.w_ptr &&
        K.err.println("Error: MAX_HEADER_BUF too small in bitstream.c \n");
      var m = 8 * c.sideinfo_len,
        z = 0,
        t = a.internal_flags,
        F = t.l3_side;
      if (1 == a.version)
        for (h = 0; 2 > h; h++)
          for (E = 0; E < t.channels_out; E++) {
            var G = F.tt[h][E],
              I = tb.slen1_tab[G.scalefac_compress],
              T = tb.slen2_tab[G.scalefac_compress];
            for (y = u = 0; y < G.sfbdivide; y++)
              -1 != G.scalefac[y] && (J(t, G.scalefac[y], I), (u += I));
            for (; y < G.sfbmax; y++)
              -1 != G.scalefac[y] && (J(t, G.scalefac[y], T), (u += T));
            u = G.block_type == d.SHORT_TYPE ? u + H(t, G) : u + g(t, G);
            u += B(t, G);
            z += u;
          }
      else
        for (E = h = 0; E < t.channels_out; E++) {
          var G = F.tt[h][E],
            U = 0,
            T = (y = u = 0);
          if (G.block_type == d.SHORT_TYPE) {
            for (; 4 > T; T++)
              for (
                var D = G.sfb_partition_table[T] / 3, ia = G.slen[T], I = 0;
                I < D;
                I++, y++
              )
                J(t, Math.max(G.scalefac[3 * y + 0], 0), ia),
                  J(t, Math.max(G.scalefac[3 * y + 1], 0), ia),
                  J(t, Math.max(G.scalefac[3 * y + 2], 0), ia),
                  (U += 3 * ia);
            u += H(t, G);
          } else {
            for (; 4 > T; T++)
              for (
                D = G.sfb_partition_table[T], ia = G.slen[T], I = 0;
                I < D;
                I++, y++
              )
                J(t, Math.max(G.scalefac[y], 0), ia), (U += ia);
            u += g(t, G);
          }
          u += B(t, G);
          z += U + u;
        }
      m += z;
      k(a, e.resvDrain_post);
      m += e.resvDrain_post;
      e.main_data_begin += (n - m) / 8;
      l(a, new b()) != c.ResvSize &&
        K.err.println("Internal buffer inconsistency. flushbits <> ResvSize");
      8 * e.main_data_begin != c.ResvSize &&
        (K.err.printf(
          "bit reservoir error: \nl3_side.main_data_begin: %d \nResvoir size:             %d \nresv drain (post)         %d \nresv drain (pre)          %d \nheader and sideinfo:      %d \ndata bits:                %d \ntotal bits:               %d (remainder: %d) \nbitsperframe:             %d \n",
          8 * e.main_data_begin,
          c.ResvSize,
          e.resvDrain_post,
          e.resvDrain_pre,
          8 * c.sideinfo_len,
          m - e.resvDrain_post - 8 * c.sideinfo_len,
          m,
          m % 8,
          n
        ),
        K.err.println(
          "This is a fatal error.  It has several possible causes:"
        ),
        K.err.println(
          "90%%  LAME compiled with buggy version of gcc using advanced optimizations"
        ),
        K.err.println(" 9%%  Your system is overclocked"),
        K.err.println(" 1%%  bug in LAME encoding library"),
        (c.ResvSize = 8 * e.main_data_begin));
      if (1e9 < f) {
        for (a = 0; a < da.MAX_HEADER_BUF; ++a) c.header[a].write_timing -= f;
        f = 0;
      }
      return 0;
    };
    this.copy_buffer = function (a, e, b, d, m) {
      var f = E + 1;
      if (0 >= f) return 0;
      if (0 != d && f > d) return -1;
      K.arraycopy(c, 0, e, b, f);
      E = -1;
      z = 0;
      if (
        0 != m &&
        ((d = Y(1)),
        (d[0] = a.nMusicCRC),
        n.updateMusicCRC(d, e, b, f),
        (a.nMusicCRC = d[0]),
        0 < f && (a.VBR_seek_table.nBytesWritten += f),
        a.decode_on_the_fly)
      ) {
        d = ra([2, 1152]);
        m = f;
        for (var g = -1, l; 0 != g; )
          if (
            ((g = D.hip_decode1_unclipped(a.hip, e, b, m, d[0], d[1])),
            (m = 0),
            -1 == g && (g = 0),
            0 < g)
          ) {
            if (a.findPeakSample) {
              for (l = 0; l < g; l++)
                d[0][l] > a.PeakSample
                  ? (a.PeakSample = d[0][l])
                  : -d[0][l] > a.PeakSample && (a.PeakSample = -d[0][l]);
              if (1 < a.channels_out)
                for (l = 0; l < g; l++)
                  d[1][l] > a.PeakSample
                    ? (a.PeakSample = d[1][l])
                    : -d[1][l] > a.PeakSample && (a.PeakSample = -d[1][l]);
            }
            if (
              a.findReplayGain &&
              h.AnalyzeSamples(a.rgdata, d[0], 0, d[1], 0, g, a.channels_out) ==
                O.GAIN_ANALYSIS_ERROR
            )
              return -6;
          }
      }
      return f;
    };
    this.init_bit_stream_w = function (a) {
      c = new Int8Array(V.LAME_MAXMP3BUFFER);
      a.h_ptr = a.w_ptr = 0;
      a.header[a.h_ptr].write_timing = 0;
      E = -1;
      f = z = 0;
    };
  }
  function ub() {
    function d(a, b) {
      var c = a[b + 0] & 255,
        c = (c << 8) | (a[b + 1] & 255),
        c = c << 8,
        c = c | (a[b + 2] & 255),
        c = c << 8;
      return (c |= a[b + 3] & 255);
    }
    function k(a, b, c) {
      a[b + 0] = (c >> 24) & 255;
      a[b + 1] = (c >> 16) & 255;
      a[b + 2] = (c >> 8) & 255;
      a[b + 3] = c & 255;
    }
    function q(a, b, c) {
      a[b + 0] = (c >> 8) & 255;
      a[b + 1] = c & 255;
    }
    function C(a, b, c) {
      return 255 & ((a << b) | (c & ~(-1 << b)));
    }
    function B(a, b) {
      var c = a.internal_flags;
      b[0] = C(b[0], 8, 255);
      b[1] = C(b[1], 3, 7);
      b[1] = C(b[1], 1, 16e3 > a.out_samplerate ? 0 : 1);
      b[1] = C(b[1], 1, a.version);
      b[1] = C(b[1], 2, 1);
      b[1] = C(b[1], 1, a.error_protection ? 0 : 1);
      b[2] = C(b[2], 4, c.bitrate_index);
      b[2] = C(b[2], 2, c.samplerate_index);
      b[2] = C(b[2], 1, 0);
      b[2] = C(b[2], 1, a.extension);
      b[3] = C(b[3], 2, a.mode.ordinal());
      b[3] = C(b[3], 2, c.mode_ext);
      b[3] = C(b[3], 1, a.copyright);
      b[3] = C(b[3], 1, a.original);
      b[3] = C(b[3], 2, a.emphasis);
      b[0] = 255;
      var c = b[1] & 241,
        d;
      d = 1 == a.version ? 128 : 16e3 > a.out_samplerate ? 32 : 64;
      a.VBR == M.vbr_off && (d = a.brate);
      d = a.free_format
        ? 0
        : 255 & (16 * H.BitrateIndex(d, a.version, a.out_samplerate));
      b[1] = 1 == a.version ? 255 & (c | 10) : 255 & (c | 2);
      c = b[2] & 13;
      b[2] = 255 & (d | c);
    }
    function t(a, b) {
      return (b = (b >> 8) ^ D[(b ^ a) & 255]);
    }
    var H, g, b;
    this.setModules = function (a, d, c) {
      H = a;
      g = d;
      b = c;
    };
    var l = ub.NUMTOCENTRIES,
      a = ub.MAXFRAMESIZE,
      h =
        l +
        4 +
        4 +
        4 +
        4 +
        4 +
        9 +
        1 +
        1 +
        8 +
        1 +
        1 +
        3 +
        1 +
        1 +
        2 +
        4 +
        2 +
        2,
      D = [
        0,
        49345,
        49537,
        320,
        49921,
        960,
        640,
        49729,
        50689,
        1728,
        1920,
        51009,
        1280,
        50625,
        50305,
        1088,
        52225,
        3264,
        3456,
        52545,
        3840,
        53185,
        52865,
        3648,
        2560,
        51905,
        52097,
        2880,
        51457,
        2496,
        2176,
        51265,
        55297,
        6336,
        6528,
        55617,
        6912,
        56257,
        55937,
        6720,
        7680,
        57025,
        57217,
        8e3,
        56577,
        7616,
        7296,
        56385,
        5120,
        54465,
        54657,
        5440,
        55041,
        6080,
        5760,
        54849,
        53761,
        4800,
        4992,
        54081,
        4352,
        53697,
        53377,
        4160,
        61441,
        12480,
        12672,
        61761,
        13056,
        62401,
        62081,
        12864,
        13824,
        63169,
        63361,
        14144,
        62721,
        13760,
        13440,
        62529,
        15360,
        64705,
        64897,
        15680,
        65281,
        16320,
        16e3,
        65089,
        64001,
        15040,
        15232,
        64321,
        14592,
        63937,
        63617,
        14400,
        10240,
        59585,
        59777,
        10560,
        60161,
        11200,
        10880,
        59969,
        60929,
        11968,
        12160,
        61249,
        11520,
        60865,
        60545,
        11328,
        58369,
        9408,
        9600,
        58689,
        9984,
        59329,
        59009,
        9792,
        8704,
        58049,
        58241,
        9024,
        57601,
        8640,
        8320,
        57409,
        40961,
        24768,
        24960,
        41281,
        25344,
        41921,
        41601,
        25152,
        26112,
        42689,
        42881,
        26432,
        42241,
        26048,
        25728,
        42049,
        27648,
        44225,
        44417,
        27968,
        44801,
        28608,
        28288,
        44609,
        43521,
        27328,
        27520,
        43841,
        26880,
        43457,
        43137,
        26688,
        30720,
        47297,
        47489,
        31040,
        47873,
        31680,
        31360,
        47681,
        48641,
        32448,
        32640,
        48961,
        32e3,
        48577,
        48257,
        31808,
        46081,
        29888,
        30080,
        46401,
        30464,
        47041,
        46721,
        30272,
        29184,
        45761,
        45953,
        29504,
        45313,
        29120,
        28800,
        45121,
        20480,
        37057,
        37249,
        20800,
        37633,
        21440,
        21120,
        37441,
        38401,
        22208,
        22400,
        38721,
        21760,
        38337,
        38017,
        21568,
        39937,
        23744,
        23936,
        40257,
        24320,
        40897,
        40577,
        24128,
        23040,
        39617,
        39809,
        23360,
        39169,
        22976,
        22656,
        38977,
        34817,
        18624,
        18816,
        35137,
        19200,
        35777,
        35457,
        19008,
        19968,
        36545,
        36737,
        20288,
        36097,
        19904,
        19584,
        35905,
        17408,
        33985,
        34177,
        17728,
        34561,
        18368,
        18048,
        34369,
        33281,
        17088,
        17280,
        33601,
        16640,
        33217,
        32897,
        16448,
      ];
    this.addVbrFrame = function (a) {
      var b = a.internal_flags;
      var c = b.VBR_seek_table;
      a = r.bitrate_table[a.version][b.bitrate_index];
      c.nVbrNumFrames++;
      c.sum += a;
      c.seen++;
      if (
        !(c.seen < c.want) &&
        (c.pos < c.size && ((c.bag[c.pos] = c.sum), c.pos++, (c.seen = 0)),
        c.pos == c.size)
      ) {
        for (a = 1; a < c.size; a += 2) c.bag[a / 2] = c.bag[a];
        c.want *= 2;
        c.pos /= 2;
      }
    };
    this.getVbrTag = function (a) {
      var b = new VBRTagData(),
        c = 0;
      b.flags = 0;
      var f = (a[c + 1] >> 3) & 1,
        g = (a[c + 2] >> 2) & 3,
        h = (a[c + 3] >> 6) & 3,
        k = (a[c + 2] >> 4) & 15,
        k = r.bitrate_table[f][k];
      b.samprate =
        14 == a[c + 1] >> 4
          ? r.samplerate_table[2][g]
          : r.samplerate_table[f][g];
      g = c = 0 != f ? (3 != h ? c + 36 : c + 21) : 3 != h ? c + 21 : c + 13;
      if (
        !new String(a, g, 4(), null).equals("Xing") &&
        !new String(a, g, 4(), null).equals("Info")
      )
        return null;
      c += 4;
      b.hId = f;
      g = b.flags = d(a, c);
      c += 4;
      0 != (g & 1) && ((b.frames = d(a, c)), (c += 4));
      0 != (g & 2) && ((b.bytes = d(a, c)), (c += 4));
      if (0 != (g & 4)) {
        if (null != b.toc) for (h = 0; h < l; h++) b.toc[h] = a[c + h];
        c += l;
      }
      b.vbrScale = -1;
      0 != (g & 8) && ((b.vbrScale = d(a, c)), (c += 4));
      b.headersize = (72e3 * (f + 1) * k) / b.samprate;
      c += 21;
      f = a[c + 0] << 4;
      f += a[c + 1] >> 4;
      k = (a[c + 1] & 15) << 8;
      k += a[c + 2] & 255;
      if (0 > f || 3e3 < f) f = -1;
      if (0 > k || 3e3 < k) k = -1;
      b.encDelay = f;
      b.encPadding = k;
      return b;
    };
    this.InitVbrTag = function (b) {
      var d = b.internal_flags,
        c;
      c = 1 == b.version ? 128 : 16e3 > b.out_samplerate ? 32 : 64;
      b.VBR == M.vbr_off && (c = b.brate);
      c = (72e3 * (b.version + 1) * c) / b.out_samplerate;
      var f = d.sideinfo_len + h;
      d.VBR_seek_table.TotalFrameSize = c;
      if (c < f || c > a) b.bWriteVbrTag = !1;
      else
        for (
          d.VBR_seek_table.nVbrNumFrames = 0,
            d.VBR_seek_table.nBytesWritten = 0,
            d.VBR_seek_table.sum = 0,
            d.VBR_seek_table.seen = 0,
            d.VBR_seek_table.want = 1,
            d.VBR_seek_table.pos = 0,
            null == d.VBR_seek_table.bag &&
              ((d.VBR_seek_table.bag = new int[400]()),
              (d.VBR_seek_table.size = 400)),
            c = new Int8Array(a),
            B(b, c),
            d = d.VBR_seek_table.TotalFrameSize,
            f = 0;
          f < d;
          ++f
        )
          g.add_dummy_byte(b, c[f] & 255, 1);
    };
    this.updateMusicCRC = function (a, b, c, d) {
      for (var g = 0; g < d; ++g) a[0] = t(b[c + g], a[0]);
    };
    this.getLameTagFrame = function (a, d) {
      var c = a.internal_flags;
      if (
        !a.bWriteVbrTag ||
        c.Class_ID != V.LAME_ID ||
        0 >= c.VBR_seek_table.pos
      )
        return 0;
      if (d.length < c.VBR_seek_table.TotalFrameSize)
        return c.VBR_seek_table.TotalFrameSize;
      Ia.fill(d, 0, c.VBR_seek_table.TotalFrameSize, 0);
      B(a, d);
      var f = new Int8Array(l);
      if (a.free_format)
        for (var h = 1; h < l; ++h) f[h] = 255 & ((255 * h) / 100);
      else {
        var z = c.VBR_seek_table;
        if (!(0 >= z.pos))
          for (h = 1; h < l; ++h) {
            var w = 0 | Math.floor((h / l) * z.pos);
            w > z.pos - 1 && (w = z.pos - 1);
            w = 0 | ((256 * z.bag[w]) / z.sum);
            255 < w && (w = 255);
            f[h] = 255 & w;
          }
      }
      w = c.sideinfo_len;
      a.error_protection && (w -= 2);
      d[w++] = 0;
      d[w++] = 0;
      d[w++] = 0;
      d[w++] = 0;
      k(d, w, 15);
      w += 4;
      k(d, w, c.VBR_seek_table.nVbrNumFrames);
      w += 4;
      z = c.VBR_seek_table.nBytesWritten + c.VBR_seek_table.TotalFrameSize;
      k(d, w, 0 | z);
      w += 4;
      K.arraycopy(f, 0, d, w, f.length);
      w += f.length;
      a.error_protection && g.CRC_writeheader(c, d);
      for (var A = 0, h = 0; h < w; h++) A = t(d[h], A);
      var f = w,
        h = A,
        v = a.internal_flags,
        w = 0,
        A = a.encoder_delay,
        p = a.encoder_padding,
        m = 100 - 10 * a.VBR_q - a.quality,
        x = b.getLameVeryShortVersion(),
        y;
      y = [1, 5, 3, 2, 4, 0, 3];
      var W =
          0 |
          (255 < a.lowpassfreq / 100 + 0.5 ? 255 : a.lowpassfreq / 100 + 0.5),
        u = 0,
        D = 0,
        J = a.internal_flags.noise_shaping,
        F = 0,
        G = 0,
        I = 0,
        T = 0,
        F = 0,
        F = 0 != (a.exp_nspsytune & 1),
        I = 0 != (a.exp_nspsytune & 2),
        U = !1,
        qa = !1,
        ia = a.internal_flags.nogap_total,
        ya = a.internal_flags.nogap_current,
        T = a.ATHtype,
        r = 0,
        C;
      switch (a.VBR) {
        case vbr_abr:
          C = a.VBR_mean_bitrate_kbps;
          break;
        case vbr_off:
          C = a.brate;
          break;
        default:
          C = a.VBR_min_bitrate_kbps;
      }
      y = 0 + (a.VBR.ordinal() < y.length ? y[a.VBR.ordinal()] : 0);
      v.findReplayGain &&
        (510 < v.RadioGain && (v.RadioGain = 510),
        -510 > v.RadioGain && (v.RadioGain = -510),
        (D = 11264),
        (D = 0 <= v.RadioGain ? D | v.RadioGain : D | 512 | -v.RadioGain));
      v.findPeakSample &&
        (u = Math.abs(0 | ((v.PeakSample / 32767) * Math.pow(2, 23) + 0.5)));
      -1 != ia && (0 < ya && (qa = !0), ya < ia - 1 && (U = !0));
      r =
        T +
        ((F ? 1 : 0) << 4) +
        ((I ? 1 : 0) << 5) +
        ((U ? 1 : 0) << 6) +
        ((qa ? 1 : 0) << 7);
      0 > m && (m = 0);
      switch (a.mode) {
        case MONO:
          F = 0;
          break;
        case STEREO:
          F = 1;
          break;
        case DUAL_CHANNEL:
          F = 2;
          break;
        case JOINT_STEREO:
          F = a.force_ms ? 4 : 3;
          break;
        default:
          F = 7;
      }
      I =
        32e3 >= a.in_samplerate
          ? 0
          : 48e3 == a.in_samplerate
          ? 2
          : 48e3 < a.in_samplerate
          ? 3
          : 1;
      if (
        a.short_blocks == sa.short_block_forced ||
        a.short_blocks == sa.short_block_dispensed ||
        (-1 == a.lowpassfreq && -1 == a.highpassfreq) ||
        a.scale_left < a.scale_right ||
        a.scale_left > a.scale_right ||
        (a.disable_reservoir && 320 > a.brate) ||
        a.noATH ||
        a.ATHonly ||
        0 == T ||
        32e3 >= a.in_samplerate
      )
        G = 1;
      T = J + (F << 2) + (G << 5) + (I << 6);
      F = v.nMusicCRC;
      k(d, f + w, m);
      w += 4;
      for (v = 0; 9 > v; v++) d[f + w + v] = 255 & x.charAt(v);
      w += 9;
      d[f + w] = 255 & y;
      w++;
      d[f + w] = 255 & W;
      w++;
      k(d, f + w, u);
      w += 4;
      q(d, f + w, D);
      w += 2;
      q(d, f + w, 0);
      w += 2;
      d[f + w] = 255 & r;
      w++;
      d[f + w] = 255 <= C ? 255 : 255 & C;
      w++;
      d[f + w] = 255 & (A >> 4);
      d[f + w + 1] = 255 & ((A << 4) + (p >> 8));
      d[f + w + 2] = 255 & p;
      w += 3;
      d[f + w] = 255 & T;
      w++;
      d[f + w++] = 0;
      q(d, f + w, a.preset);
      w += 2;
      k(d, f + w, z);
      w += 4;
      q(d, f + w, F);
      w += 2;
      for (z = 0; z < w; z++) h = t(d[f + z], h);
      q(d, f + w, h);
      return c.VBR_seek_table.TotalFrameSize;
    };
    this.putVbrTag = function (b, d) {
      if (0 >= b.internal_flags.VBR_seek_table.pos) return -1;
      d.seek(d.length());
      if (0 == d.length()) return -1;
      d.seek(0);
      var c = new Int8Array(10);
      d.readFully(c);
      c = new String(c, "ISO-8859-1").startsWith("ID3")
        ? 0
        : (((c[6] & 127) << 21) |
            ((c[7] & 127) << 14) |
            ((c[8] & 127) << 7) |
            (c[9] & 127)) +
          c.length;
      d.seek(c);
      var c = new Int8Array(a),
        f = getLameTagFrame(b, c);
      if (f > c.length) return -1;
      if (1 > f) return 0;
      d.write(c, 0, f);
      return 0;
    };
  }
  function Q(d, k, q, r) {
    this.xlen = d;
    this.linmax = k;
    this.table = q;
    this.hlen = r;
  }
  function eb(d) {
    this.bits = d;
  }
  function Ic() {
    this.setModules = function (d, k) {};
  }
  function $b() {
    this.bits = this.over_SSD = this.over_count = this.max_noise = this.tot_noise = this.over_noise = 0;
  }
  function Jc() {
    this.scale_right = this.scale_left = this.scale = this.out_samplerate = this.in_samplerate = this.num_channels = this.num_samples = this.class_id = 0;
    this.decode_only = this.bWriteVbrTag = this.analysis = !1;
    this.quality = 0;
    this.mode = ka.STEREO;
    this.write_id3tag_automatic = this.decode_on_the_fly = this.findReplayGain = this.free_format = this.force_ms = !1;
    this.error_protection = this.emphasis = this.extension = this.original = this.copyright = this.compression_ratio = this.brate = 0;
    this.disable_reservoir = this.strict_ISO = !1;
    this.quant_comp_short = this.quant_comp = 0;
    this.experimentalY = !1;
    this.preset = this.exp_nspsytune = this.experimentalZ = 0;
    this.VBR = null;
    this.maskingadjust_short = this.maskingadjust = this.highpasswidth = this.lowpasswidth = this.highpassfreq = this.lowpassfreq = this.VBR_hard_min = this.VBR_max_bitrate_kbps = this.VBR_min_bitrate_kbps = this.VBR_mean_bitrate_kbps = this.VBR_q = this.VBR_q_frac = 0;
    this.noATH = this.ATHshort = this.ATHonly = !1;
    this.athaa_sensitivity = this.athaa_loudapprox = this.athaa_type = this.ATHlower = this.ATHcurve = this.ATHtype = 0;
    this.short_blocks = null;
    this.useTemporal = !1;
    this.msfix = this.interChRatio = 0;
    this.tune = !1;
    this.lame_allocated_gfp = this.frameNum = this.framesize = this.encoder_padding = this.encoder_delay = this.version = this.tune_value_a = 0;
    this.internal_flags = null;
  }
  function Kc() {
    this.linprebuf = H(2 * O.MAX_ORDER);
    this.linpre = 0;
    this.lstepbuf = H(O.MAX_SAMPLES_PER_WINDOW + O.MAX_ORDER);
    this.lstep = 0;
    this.loutbuf = H(O.MAX_SAMPLES_PER_WINDOW + O.MAX_ORDER);
    this.lout = 0;
    this.rinprebuf = H(2 * O.MAX_ORDER);
    this.rinpre = 0;
    this.rstepbuf = H(O.MAX_SAMPLES_PER_WINDOW + O.MAX_ORDER);
    this.rstep = 0;
    this.routbuf = H(O.MAX_SAMPLES_PER_WINDOW + O.MAX_ORDER);
    this.first = this.freqindex = this.rsum = this.lsum = this.totsamp = this.sampleWindow = this.rout = 0;
    this.A = Y(0 | (O.STEPS_per_dB * O.MAX_dB));
    this.B = Y(0 | (O.STEPS_per_dB * O.MAX_dB));
  }
  function Lc() {
    this.floor = this.decay = this.adjustLimit = this.adjust = this.aaSensitivityP = this.useAdjust = 0;
    this.l = H(d.SBMAX_l);
    this.s = H(d.SBMAX_s);
    this.psfb21 = H(d.PSFB21);
    this.psfb12 = H(d.PSFB12);
    this.cb_l = H(d.CBANDS);
    this.cb_s = H(d.CBANDS);
    this.eql_w = H(d.BLKSIZE / 2);
  }
  function Mc(J) {
    this.quantize = J;
    this.iteration_loop = function (k, q, J, B) {
      var t = k.internal_flags,
        r = H(na.SFBMAX),
        g = H(576),
        b = Y(2),
        l,
        a,
        h = t.l3_side;
      l = new eb(0);
      this.quantize.rv.ResvFrameBegin(k, l);
      l = l.bits;
      for (var D = 0; D < t.mode_gr; D++)
        for (
          a = this.quantize.qupvt.on_pe(k, q, b, l, D, D),
            t.mode_ext == d.MPG_MD_MS_LR &&
              (this.quantize.ms_convert(t.l3_side, D),
              this.quantize.qupvt.reduce_side(b, J[D], l, a)),
            a = 0;
          a < t.channels_out;
          a++
        ) {
          var e,
            n = h.tt[D][a];
          n.block_type != d.SHORT_TYPE
            ? ((e = 0), (e = t.PSY.mask_adjust - e))
            : ((e = 0), (e = t.PSY.mask_adjust_short - e));
          t.masking_lower = Math.pow(10, 0.1 * e);
          this.quantize.init_outer_loop(t, n);
          this.quantize.init_xrpow(t, n, g) &&
            (this.quantize.qupvt.calc_xmin(k, B[D][a], n, r),
            this.quantize.outer_loop(k, n, r, g, a, b[a]));
          this.quantize.iteration_finish_one(t, D, a);
        }
      this.quantize.rv.ResvFrameEnd(t, l);
    };
  }
  function ha(J, k, q, r) {
    this.l = Y(1 + d.SBMAX_l);
    this.s = Y(1 + d.SBMAX_s);
    this.psfb21 = Y(1 + d.PSFB21);
    this.psfb12 = Y(1 + d.PSFB12);
    var B = this.l,
      t = this.s;
    4 == arguments.length &&
      ((this.arrL = arguments[0]),
      (this.arrS = arguments[1]),
      (this.arr21 = arguments[2]),
      (this.arr12 = arguments[3]),
      K.arraycopy(
        this.arrL,
        0,
        B,
        0,
        Math.min(this.arrL.length, this.l.length)
      ),
      K.arraycopy(
        this.arrS,
        0,
        t,
        0,
        Math.min(this.arrS.length, this.s.length)
      ),
      K.arraycopy(
        this.arr21,
        0,
        this.psfb21,
        0,
        Math.min(this.arr21.length, this.psfb21.length)
      ),
      K.arraycopy(
        this.arr12,
        0,
        this.psfb12,
        0,
        Math.min(this.arr12.length, this.psfb12.length)
      ));
  }
  function ma() {
    function J(a, b) {
      var c = B.ATHformula(b, a);
      return (c = Math.pow(10, (c - 100) / 10 + a.ATHlower));
    }
    function k(a) {
      this.s = a;
    }
    var q = null,
      r = null,
      B = null;
    this.setModules = function (a, b, c) {
      q = a;
      r = b;
      B = c;
    };
    this.IPOW20 = function (b) {
      return a[b];
    };
    var t = ma.IXMAX_VAL + 2,
      ta = ma.Q_MAX,
      g = ma.Q_MAX2;
    this.nr_of_sfb_block = [
      [
        [6, 5, 5, 5],
        [9, 9, 9, 9],
        [6, 9, 9, 9],
      ],
      [
        [6, 5, 7, 3],
        [9, 9, 12, 6],
        [6, 9, 12, 6],
      ],
      [
        [11, 10, 0, 0],
        [18, 18, 0, 0],
        [15, 18, 0, 0],
      ],
      [
        [7, 7, 7, 0],
        [12, 12, 12, 0],
        [6, 15, 12, 0],
      ],
      [
        [6, 6, 6, 3],
        [12, 9, 9, 6],
        [6, 12, 9, 6],
      ],
      [
        [8, 8, 5, 0],
        [15, 12, 9, 0],
        [6, 18, 9, 0],
      ],
    ];
    var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0];
    this.pretab = b;
    this.sfBandIndex = [
      new ha(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576,
        ],
        [0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          114,
          136,
          162,
          194,
          232,
          278,
          332,
          394,
          464,
          540,
          576,
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136, 180, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576,
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          44,
          52,
          62,
          74,
          90,
          110,
          134,
          162,
          196,
          238,
          288,
          342,
          418,
          576,
        ],
        [0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          42,
          50,
          60,
          72,
          88,
          106,
          128,
          156,
          190,
          230,
          276,
          330,
          384,
          576,
        ],
        [0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          44,
          54,
          66,
          82,
          102,
          126,
          156,
          194,
          240,
          296,
          364,
          448,
          550,
          576,
        ],
        [0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576,
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576,
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
      new ha(
        [
          0,
          12,
          24,
          36,
          48,
          60,
          72,
          88,
          108,
          132,
          160,
          192,
          232,
          280,
          336,
          400,
          476,
          566,
          568,
          570,
          572,
          574,
          576,
        ],
        [0, 8, 16, 24, 36, 52, 72, 96, 124, 160, 162, 164, 166, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ),
    ];
    var l = H(ta + g + 1),
      a = H(ta),
      h = H(t),
      D = H(t);
    this.adj43 = D;
    this.iteration_init = function (b) {
      var n = b.internal_flags,
        c = n.l3_side;
      if (0 == n.iteration_init_init) {
        n.iteration_init_init = 1;
        c.main_data_begin = 0;
        for (
          var c = b.internal_flags.ATH.l,
            f = b.internal_flags.ATH.psfb21,
            k = b.internal_flags.ATH.s,
            z = b.internal_flags.ATH.psfb12,
            w = b.internal_flags,
            A = b.out_samplerate,
            v = 0;
          v < d.SBMAX_l;
          v++
        ) {
          var p = w.scalefac_band.l[v],
            m = w.scalefac_band.l[v + 1];
          for (c[v] = vb.MAX_VALUE; p < m; p++) {
            var x = (p * A) / 1152,
              x = J(b, x);
            c[v] = Math.min(c[v], x);
          }
        }
        for (v = 0; v < d.PSFB21; v++)
          for (
            p = w.scalefac_band.psfb21[v],
              m = w.scalefac_band.psfb21[v + 1],
              f[v] = vb.MAX_VALUE;
            p < m;
            p++
          )
            (x = (p * A) / 1152), (x = J(b, x)), (f[v] = Math.min(f[v], x));
        for (v = 0; v < d.SBMAX_s; v++) {
          p = w.scalefac_band.s[v];
          m = w.scalefac_band.s[v + 1];
          for (k[v] = vb.MAX_VALUE; p < m; p++)
            (x = (p * A) / 384), (x = J(b, x)), (k[v] = Math.min(k[v], x));
          k[v] *= w.scalefac_band.s[v + 1] - w.scalefac_band.s[v];
        }
        for (v = 0; v < d.PSFB12; v++) {
          p = w.scalefac_band.psfb12[v];
          m = w.scalefac_band.psfb12[v + 1];
          for (z[v] = vb.MAX_VALUE; p < m; p++)
            (x = (p * A) / 384), (x = J(b, x)), (z[v] = Math.min(z[v], x));
          z[v] *= w.scalefac_band.s[13] - w.scalefac_band.s[12];
        }
        if (b.noATH) {
          for (v = 0; v < d.SBMAX_l; v++) c[v] = 1e-20;
          for (v = 0; v < d.PSFB21; v++) f[v] = 1e-20;
          for (v = 0; v < d.SBMAX_s; v++) k[v] = 1e-20;
          for (v = 0; v < d.PSFB12; v++) z[v] = 1e-20;
        }
        w.ATH.floor = 10 * Math.log10(J(b, -1));
        h[0] = 0;
        for (c = 1; c < t; c++) h[c] = Math.pow(c, 4 / 3);
        for (c = 0; c < t - 1; c++)
          D[c] = c + 1 - Math.pow(0.5 * (h[c] + h[c + 1]), 0.75);
        D[c] = 0.5;
        for (c = 0; c < ta; c++) a[c] = Math.pow(2, -0.1875 * (c - 210));
        for (c = 0; c <= ta + g; c++) l[c] = Math.pow(2, 0.25 * (c - 210 - g));
        q.huffman_init(n);
        c = (b.exp_nspsytune >> 2) & 63;
        32 <= c && (c -= 64);
        f = Math.pow(10, c / 4 / 10);
        c = (b.exp_nspsytune >> 8) & 63;
        32 <= c && (c -= 64);
        k = Math.pow(10, c / 4 / 10);
        c = (b.exp_nspsytune >> 14) & 63;
        32 <= c && (c -= 64);
        z = Math.pow(10, c / 4 / 10);
        c = (b.exp_nspsytune >> 20) & 63;
        32 <= c && (c -= 64);
        b = z * Math.pow(10, c / 4 / 10);
        for (c = 0; c < d.SBMAX_l; c++)
          (w = 6 >= c ? f : 13 >= c ? k : 20 >= c ? z : b),
            (n.nsPsy.longfact[c] = w);
        for (c = 0; c < d.SBMAX_s; c++)
          (w = 5 >= c ? f : 10 >= c ? k : 11 >= c ? z : b),
            (n.nsPsy.shortfact[c] = w);
      }
    };
    this.on_pe = function (a, b, c, d, g, h) {
      var l = a.internal_flags,
        k = 0,
        v = Y(2),
        p,
        k = new eb(k);
      a = r.ResvMaxBits(a, d, k, h);
      var k = k.bits,
        m = k + a;
      m > da.MAX_BITS_PER_GRANULE && (m = da.MAX_BITS_PER_GRANULE);
      for (p = h = 0; p < l.channels_out; ++p)
        (c[p] = Math.min(da.MAX_BITS_PER_CHANNEL, k / l.channels_out)),
          (v[p] = 0 | ((c[p] * b[g][p]) / 700 - c[p])),
          v[p] > (3 * d) / 4 && (v[p] = (3 * d) / 4),
          0 > v[p] && (v[p] = 0),
          v[p] + c[p] > da.MAX_BITS_PER_CHANNEL &&
            (v[p] = Math.max(0, da.MAX_BITS_PER_CHANNEL - c[p])),
          (h += v[p]);
      if (h > a) for (p = 0; p < l.channels_out; ++p) v[p] = (a * v[p]) / h;
      for (p = 0; p < l.channels_out; ++p) (c[p] += v[p]), (a -= v[p]);
      for (p = h = 0; p < l.channels_out; ++p) h += c[p];
      if (h > da.MAX_BITS_PER_GRANULE)
        for (p = 0; p < l.channels_out; ++p)
          (c[p] *= da.MAX_BITS_PER_GRANULE), (c[p] /= h);
      return m;
    };
    this.reduce_side = function (a, b, c, d) {
      b = (0.33 * (0.5 - b)) / 0.5;
      0 > b && (b = 0);
      0.5 < b && (b = 0.5);
      b = 0 | (0.5 * b * (a[0] + a[1]));
      b > da.MAX_BITS_PER_CHANNEL - a[0] &&
        (b = da.MAX_BITS_PER_CHANNEL - a[0]);
      0 > b && (b = 0);
      125 <= a[1] &&
        (125 < a[1] - b
          ? (a[0] < c && (a[0] += b), (a[1] -= b))
          : ((a[0] += a[1] - 125), (a[1] = 125)));
      b = a[0] + a[1];
      b > d && ((a[0] = (d * a[0]) / b), (a[1] = (d * a[1]) / b));
    };
    this.athAdjust = function (a, b, c) {
      b = X.FAST_LOG10_X(b, 10);
      a *= a;
      var d = 0;
      b -= c;
      1e-20 < a && (d = 1 + X.FAST_LOG10_X(a, 10 / 90.30873362));
      0 > d && (d = 0);
      b = b * d + (c + 90.30873362 - 94.82444863);
      return Math.pow(10, 0.1 * b);
    };
    this.calc_xmin = function (a, b, c, f) {
      var g = 0,
        h = a.internal_flags,
        l,
        k = 0,
        v = 0,
        p = h.ATH,
        m = c.xr,
        x = a.VBR == M.vbr_mtrh ? 1 : 0,
        y = h.masking_lower;
      if (a.VBR == M.vbr_mtrh || a.VBR == M.vbr_mt) y = 1;
      for (l = 0; l < c.psy_lmax; l++) {
        var q, u, t, D, F, G;
        u =
          a.VBR == M.vbr_rh || a.VBR == M.vbr_mtrh
            ? athAdjust(p.adjust, p.l[l], p.floor)
            : p.adjust * p.l[l];
        F = c.width[l];
        t = u / F;
        D = 2.220446049250313e-16;
        G = F >> 1;
        q = 0;
        do {
          var I;
          I = m[k] * m[k];
          q += I;
          D += I < t ? I : t;
          k++;
          I = m[k] * m[k];
          q += I;
          D += I < t ? I : t;
          k++;
        } while (0 < --G);
        q > u && v++;
        l == d.SBPSY_l && ((t = u * h.nsPsy.longfact[l]), D < t && (D = t));
        0 != x && (u = D);
        a.ATHonly ||
          ((D = b.en.l[l]),
          0 < D &&
            ((t = (q * b.thm.l[l] * y) / D),
            0 != x && (t *= h.nsPsy.longfact[l]),
            u < t && (u = t)));
        0 != x ? (f[g++] = u) : (f[g++] = u * h.nsPsy.longfact[l]);
      }
      q = 575;
      if (c.block_type != d.SHORT_TYPE)
        for (u = 576; 0 != u-- && ua.EQ(m[u], 0); ) q = u;
      c.max_nonzero_coeff = q;
      for (var T = c.sfb_smin; l < c.psymax; T++, l += 3) {
        var U, J;
        J =
          a.VBR == M.vbr_rh || a.VBR == M.vbr_mtrh
            ? athAdjust(p.adjust, p.s[T], p.floor)
            : p.adjust * p.s[T];
        F = c.width[l];
        for (U = 0; 3 > U; U++) {
          q = 0;
          G = F >> 1;
          t = J / F;
          D = 2.220446049250313e-16;
          do
            (I = m[k] * m[k]),
              (q += I),
              (D += I < t ? I : t),
              k++,
              (I = m[k] * m[k]),
              (q += I),
              (D += I < t ? I : t),
              k++;
          while (0 < --G);
          q > J && v++;
          T == d.SBPSY_s && ((t = J * h.nsPsy.shortfact[T]), D < t && (D = t));
          u = 0 != x ? D : J;
          a.ATHonly ||
            a.ATHshort ||
            ((D = b.en.s[T][U]),
            0 < D &&
              ((t = (q * b.thm.s[T][U] * y) / D),
              0 != x && (t *= h.nsPsy.shortfact[T]),
              u < t && (u = t)));
          0 != x ? (f[g++] = u) : (f[g++] = u * h.nsPsy.shortfact[T]);
        }
        a.useTemporal &&
          (f[g - 3] > f[g - 3 + 1] &&
            (f[g - 3 + 1] += (f[g - 3] - f[g - 3 + 1]) * h.decay),
          f[g - 3 + 1] > f[g - 3 + 2] &&
            (f[g - 3 + 2] += (f[g - 3 + 1] - f[g - 3 + 2]) * h.decay));
      }
      return v;
    };
    this.calc_noise_core = function (a, b, c, d) {
      var g = 0,
        l = b.s,
        k = a.l3_enc;
      if (l > a.count1)
        for (; 0 != c--; ) {
          var q;
          q = a.xr[l];
          l++;
          g += q * q;
          q = a.xr[l];
          l++;
          g += q * q;
        }
      else if (l > a.big_values) {
        var v = H(2);
        v[0] = 0;
        for (v[1] = d; 0 != c--; )
          (q = Math.abs(a.xr[l]) - v[k[l]]),
            l++,
            (g += q * q),
            (q = Math.abs(a.xr[l]) - v[k[l]]),
            l++,
            (g += q * q);
      } else
        for (; 0 != c--; )
          (q = Math.abs(a.xr[l]) - h[k[l]] * d),
            l++,
            (g += q * q),
            (q = Math.abs(a.xr[l]) - h[k[l]] * d),
            l++,
            (g += q * q);
      b.s = l;
      return g;
    };
    this.calc_noise = function (a, d, c, f, g) {
      var h = 0,
        q = 0,
        t,
        v,
        p = 0,
        m = 0,
        x = 0,
        y = -20,
        D = 0,
        u = a.scalefac,
        J = 0;
      for (t = f.over_SSD = 0; t < a.psymax; t++) {
        var B =
            a.global_gain -
            ((u[J++] + (0 != a.preflag ? b[t] : 0)) << (a.scalefac_scale + 1)) -
            8 * a.subblock_gain[a.window[t]],
          F = 0;
        null != g && g.step[t] == B
          ? ((F = g.noise[t]),
            (D += a.width[t]),
            (c[h++] = F / d[q++]),
            (F = g.noise_log[t]))
          : ((F = l[B + ma.Q_MAX2]),
            (v = a.width[t] >> 1),
            D + a.width[t] > a.max_nonzero_coeff &&
              ((v = a.max_nonzero_coeff - D + 1), (v = 0 < v ? v >> 1 : 0)),
            (D = new k(D)),
            (F = this.calc_noise_core(a, D, v, F)),
            (D = D.s),
            null != g && ((g.step[t] = B), (g.noise[t] = F)),
            (F = c[h++] = F / d[q++]),
            (F = X.FAST_LOG10(Math.max(F, 1e-20))),
            null != g && (g.noise_log[t] = F));
        null != g && (g.global_gain = a.global_gain);
        x += F;
        0 < F &&
          ((B = Math.max(0 | (10 * F + 0.5), 1)),
          (f.over_SSD += B * B),
          p++,
          (m += F));
        y = Math.max(y, F);
      }
      f.over_count = p;
      f.tot_noise = x;
      f.over_noise = m;
      f.max_noise = y;
      return p;
    };
    this.set_pinfo = function (a, g, c, f, h) {
      var l = a.internal_flags,
        k,
        q,
        t,
        p,
        m = 0 == g.scalefac_scale ? 0.5 : 1,
        x = g.scalefac,
        y = H(na.SFBMAX),
        D = H(na.SFBMAX),
        u = new $b();
      calc_xmin(a, c, g, y);
      calc_noise(g, y, D, u, null);
      var J = 0;
      q = g.sfb_lmax;
      g.block_type != d.SHORT_TYPE && 0 == g.mixed_block_flag && (q = 22);
      for (k = 0; k < q; k++) {
        var B = l.scalefac_band.l[k],
          F = l.scalefac_band.l[k + 1],
          G = F - B;
        for (p = 0; J < F; J++) p += g.xr[J] * g.xr[J];
        p /= G;
        t = 1e15;
        l.pinfo.en[f][h][k] = t * p;
        l.pinfo.xfsf[f][h][k] = (t * y[k] * D[k]) / G;
        p = 0 < c.en.l[k] && !a.ATHonly ? p / c.en.l[k] : 0;
        l.pinfo.thr[f][h][k] = t * Math.max(p * c.thm.l[k], l.ATH.l[k]);
        l.pinfo.LAMEsfb[f][h][k] = 0;
        0 != g.preflag && 11 <= k && (l.pinfo.LAMEsfb[f][h][k] = -m * b[k]);
        k < d.SBPSY_l && (l.pinfo.LAMEsfb[f][h][k] -= m * x[k]);
      }
      if (g.block_type == d.SHORT_TYPE)
        for (q = k, k = g.sfb_smin; k < d.SBMAX_s; k++)
          for (
            var B = l.scalefac_band.s[k],
              F = l.scalefac_band.s[k + 1],
              G = F - B,
              I = 0;
            3 > I;
            I++
          ) {
            p = 0;
            for (t = B; t < F; t++) (p += g.xr[J] * g.xr[J]), J++;
            p = Math.max(p / G, 1e-20);
            t = 1e15;
            l.pinfo.en_s[f][h][3 * k + I] = t * p;
            l.pinfo.xfsf_s[f][h][3 * k + I] = (t * y[q] * D[q]) / G;
            p = 0 < c.en.s[k][I] ? p / c.en.s[k][I] : 0;
            if (a.ATHonly || a.ATHshort) p = 0;
            l.pinfo.thr_s[f][h][3 * k + I] =
              t * Math.max(p * c.thm.s[k][I], l.ATH.s[k]);
            l.pinfo.LAMEsfb_s[f][h][3 * k + I] = -2 * g.subblock_gain[I];
            k < d.SBPSY_s && (l.pinfo.LAMEsfb_s[f][h][3 * k + I] -= m * x[q]);
            q++;
          }
      l.pinfo.LAMEqss[f][h] = g.global_gain;
      l.pinfo.LAMEmainbits[f][h] = g.part2_3_length + g.part2_length;
      l.pinfo.LAMEsfbits[f][h] = g.part2_length;
      l.pinfo.over[f][h] = u.over_count;
      l.pinfo.max_noise[f][h] = 10 * u.max_noise;
      l.pinfo.over_noise[f][h] = 10 * u.over_noise;
      l.pinfo.tot_noise[f][h] = 10 * u.tot_noise;
      l.pinfo.over_SSD[f][h] = u.over_SSD;
    };
  }
  function Nc() {
    this.sfb_count1 = this.global_gain = 0;
    this.step = Y(39);
    this.noise = H(39);
    this.noise_log = H(39);
  }
  function Ab() {
    this.xr = H(576);
    this.l3_enc = Y(576);
    this.scalefac = Y(na.SFBMAX);
    this.mixed_block_flag = this.block_type = this.scalefac_compress = this.global_gain = this.count1 = this.big_values = this.part2_3_length = this.xrpow_max = 0;
    this.table_select = Y(3);
    this.subblock_gain = Y(4);
    this.sfbdivide = this.psymax = this.sfbmax = this.psy_lmax = this.sfb_smin = this.sfb_lmax = this.part2_length = this.count1table_select = this.scalefac_scale = this.preflag = this.region1_count = this.region0_count = 0;
    this.width = Y(na.SFBMAX);
    this.window = Y(na.SFBMAX);
    this.count1bits = 0;
    this.sfb_partition_table = null;
    this.slen = Y(4);
    this.max_nonzero_coeff = 0;
    var d = this;
    this.assign = function (k) {
      d.xr = new Float32Array(k.xr);
      d.l3_enc = new Int32Array(k.l3_enc);
      d.scalefac = new Int32Array(k.scalefac);
      d.xrpow_max = k.xrpow_max;
      d.part2_3_length = k.part2_3_length;
      d.big_values = k.big_values;
      d.count1 = k.count1;
      d.global_gain = k.global_gain;
      d.scalefac_compress = k.scalefac_compress;
      d.block_type = k.block_type;
      d.mixed_block_flag = k.mixed_block_flag;
      d.table_select = new Int32Array(k.table_select);
      d.subblock_gain = new Int32Array(k.subblock_gain);
      d.region0_count = k.region0_count;
      d.region1_count = k.region1_count;
      d.preflag = k.preflag;
      d.scalefac_scale = k.scalefac_scale;
      d.count1table_select = k.count1table_select;
      d.part2_length = k.part2_length;
      d.sfb_lmax = k.sfb_lmax;
      d.sfb_smin = k.sfb_smin;
      d.psy_lmax = k.psy_lmax;
      d.sfbmax = k.sfbmax;
      d.psymax = k.psymax;
      d.sfbdivide = k.sfbdivide;
      d.width = new Int32Array(k.width);
      d.window = new Int32Array(k.window);
      d.count1bits = k.count1bits;
      d.sfb_partition_table = k.sfb_partition_table.slice(0);
      d.slen = new Int32Array(k.slen);
      d.max_nonzero_coeff = k.max_nonzero_coeff;
    };
  }
  function Oc() {
    function J(d) {
      this.ordinal = d;
    }
    function k(d) {
      for (var b = 0; b < d.sfbmax; b++)
        if (0 == d.scalefac[b] + d.subblock_gain[d.window[b]]) return !1;
      return !0;
    }
    var q;
    this.rv = null;
    var r;
    this.qupvt = null;
    var B,
      t = new Ic(),
      ta;
    this.setModules = function (d, b, l, a) {
      q = d;
      this.rv = r = b;
      this.qupvt = B = l;
      ta = a;
      t.setModules(B, ta);
    };
    this.ms_convert = function (d, b) {
      for (var l = 0; 576 > l; ++l) {
        var a = d.tt[b][0].xr[l],
          h = d.tt[b][1].xr[l];
        d.tt[b][0].xr[l] = 0.5 * (a + h) * X.SQRT2;
        d.tt[b][1].xr[l] = 0.5 * (a - h) * X.SQRT2;
      }
    };
    this.init_xrpow = function (d, b, l) {
      var a = 0,
        h = 0 | b.max_nonzero_coeff;
      b.xrpow_max = 0;
      Ia.fill(l, h, 576, 0);
      for (var k = (a = 0); k <= h; ++k) {
        var e = Math.abs(b.xr[k]),
          a = a + e;
        l[k] = Math.sqrt(e * Math.sqrt(e));
        l[k] > b.xrpow_max && (b.xrpow_max = l[k]);
      }
      if (1e-20 < a) {
        l = 0;
        0 != (d.substep_shaping & 2) && (l = 1);
        for (h = 0; h < b.psymax; h++) d.pseudohalf[h] = l;
        return !0;
      }
      Ia.fill(b.l3_enc, 0, 576, 0);
      return !1;
    };
    this.init_outer_loop = function (g, b) {
      b.part2_3_length = 0;
      b.big_values = 0;
      b.count1 = 0;
      b.global_gain = 210;
      b.scalefac_compress = 0;
      b.table_select[0] = 0;
      b.table_select[1] = 0;
      b.table_select[2] = 0;
      b.subblock_gain[0] = 0;
      b.subblock_gain[1] = 0;
      b.subblock_gain[2] = 0;
      b.subblock_gain[3] = 0;
      b.region0_count = 0;
      b.region1_count = 0;
      b.preflag = 0;
      b.scalefac_scale = 0;
      b.count1table_select = 0;
      b.part2_length = 0;
      b.sfb_lmax = d.SBPSY_l;
      b.sfb_smin = d.SBPSY_s;
      b.psy_lmax = g.sfb21_extra ? d.SBMAX_l : d.SBPSY_l;
      b.psymax = b.psy_lmax;
      b.sfbmax = b.sfb_lmax;
      b.sfbdivide = 11;
      for (var l = 0; l < d.SBMAX_l; l++)
        (b.width[l] = g.scalefac_band.l[l + 1] - g.scalefac_band.l[l]),
          (b.window[l] = 3);
      if (b.block_type == d.SHORT_TYPE) {
        var a = H(576);
        b.sfb_smin = 0;
        b.sfb_lmax = 0;
        0 != b.mixed_block_flag &&
          ((b.sfb_smin = 3), (b.sfb_lmax = 2 * g.mode_gr + 4));
        b.psymax =
          b.sfb_lmax +
          3 * ((g.sfb21_extra ? d.SBMAX_s : d.SBPSY_s) - b.sfb_smin);
        b.sfbmax = b.sfb_lmax + 3 * (d.SBPSY_s - b.sfb_smin);
        b.sfbdivide = b.sfbmax - 18;
        b.psy_lmax = b.sfb_lmax;
        var h = g.scalefac_band.l[b.sfb_lmax];
        K.arraycopy(b.xr, 0, a, 0, 576);
        for (l = b.sfb_smin; l < d.SBMAX_s; l++)
          for (
            var k = g.scalefac_band.s[l], e = g.scalefac_band.s[l + 1], n = 0;
            3 > n;
            n++
          )
            for (var c = k; c < e; c++) b.xr[h++] = a[3 * c + n];
        a = b.sfb_lmax;
        for (l = b.sfb_smin; l < d.SBMAX_s; l++)
          (b.width[a] = b.width[a + 1] = b.width[a + 2] =
            g.scalefac_band.s[l + 1] - g.scalefac_band.s[l]),
            (b.window[a] = 0),
            (b.window[a + 1] = 1),
            (b.window[a + 2] = 2),
            (a += 3);
      }
      b.count1bits = 0;
      b.sfb_partition_table = B.nr_of_sfb_block[0][0];
      b.slen[0] = 0;
      b.slen[1] = 0;
      b.slen[2] = 0;
      b.slen[3] = 0;
      b.max_nonzero_coeff = 575;
      Ia.fill(b.scalefac, 0);
      l = g.ATH;
      a = b.xr;
      if (b.block_type != d.SHORT_TYPE)
        for (h = !1, k = d.PSFB21 - 1; 0 <= k && !h; k--)
          for (
            e = g.scalefac_band.psfb21[k],
              n = g.scalefac_band.psfb21[k + 1],
              c = B.athAdjust(l.adjust, l.psfb21[k], l.floor),
              1e-12 < g.nsPsy.longfact[21] && (c *= g.nsPsy.longfact[21]),
              --n;
            n >= e;
            n--
          )
            if (Math.abs(a[n]) < c) a[n] = 0;
            else {
              h = !0;
              break;
            }
      else
        for (c = 0; 3 > c; c++)
          for (h = !1, k = d.PSFB12 - 1; 0 <= k && !h; k--) {
            var e =
                3 * g.scalefac_band.s[12] +
                (g.scalefac_band.s[13] - g.scalefac_band.s[12]) * c +
                (g.scalefac_band.psfb12[k] - g.scalefac_band.psfb12[0]),
              n =
                e + (g.scalefac_band.psfb12[k + 1] - g.scalefac_band.psfb12[k]),
              f = B.athAdjust(l.adjust, l.psfb12[k], l.floor);
            1e-12 < g.nsPsy.shortfact[12] && (f *= g.nsPsy.shortfact[12]);
            for (--n; n >= e; n--)
              if (Math.abs(a[n]) < f) a[n] = 0;
              else {
                h = !0;
                break;
              }
          }
    };
    J.BINSEARCH_NONE = new J(0);
    J.BINSEARCH_UP = new J(1);
    J.BINSEARCH_DOWN = new J(2);
    this.trancate_smallspectrums = function (g, b, l, a) {
      var h = H(na.SFBMAX);
      if (
        (0 != (g.substep_shaping & 4) || b.block_type != d.SHORT_TYPE) &&
        0 == (g.substep_shaping & 128)
      ) {
        B.calc_noise(b, l, h, new $b(), null);
        for (var k = 0; 576 > k; k++) {
          var e = 0;
          0 != b.l3_enc[k] && (e = Math.abs(b.xr[k]));
          a[k] = e;
        }
        k = 0;
        e = 8;
        b.block_type == d.SHORT_TYPE && (e = 6);
        do {
          var n,
            c,
            f,
            q,
            t = b.width[e],
            k = k + t;
          if (!(1 <= h[e] || (Ia.sort(a, k - t, t), ua.EQ(a[k - 1], 0)))) {
            n = (1 - h[e]) * l[e];
            q = c = 0;
            do {
              var w;
              for (
                f = 1;
                q + f < t && !ua.NEQ(a[q + k - t], a[q + k + f - t]);
                f++
              );
              w = a[q + k - t] * a[q + k - t] * f;
              if (n < w) {
                0 != q && (c = a[q + k - t - 1]);
                break;
              }
              n -= w;
              q += f;
            } while (q < t);
            if (!ua.EQ(c, 0)) {
              do Math.abs(b.xr[k - t]) <= c && (b.l3_enc[k - t] = 0);
              while (0 < --t);
            }
          }
        } while (++e < b.psymax);
        b.part2_3_length = ta.noquant_count_bits(g, b, null);
      }
    };
    this.outer_loop = function (g, b, l, a, h, q) {
      var e = g.internal_flags,
        n = new Ab(),
        c = H(576),
        f = H(na.SFBMAX),
        t = new $b(),
        z,
        w = new Nc(),
        A = 9999999,
        v = !1,
        p = !1,
        m = 0,
        x,
        y,
        W = e.CurrentStep[h],
        u = !1,
        r = e.OldValue[h];
      z = J.BINSEARCH_NONE;
      b.global_gain = r;
      for (x = q - b.part2_length; ; ) {
        y = ta.count_bits(e, a, b, null);
        if (1 == W || y == x) break;
        y > x
          ? (z == J.BINSEARCH_DOWN && (u = !0),
            u && (W /= 2),
            (z = J.BINSEARCH_UP),
            (y = W))
          : (z == J.BINSEARCH_UP && (u = !0),
            u && (W /= 2),
            (z = J.BINSEARCH_DOWN),
            (y = -W));
        b.global_gain += y;
        0 > b.global_gain && ((b.global_gain = 0), (u = !0));
        255 < b.global_gain && ((b.global_gain = 255), (u = !0));
      }
      for (; y > x && 255 > b.global_gain; )
        b.global_gain++, (y = ta.count_bits(e, a, b, null));
      e.CurrentStep[h] = 4 <= r - b.global_gain ? 4 : 2;
      e.OldValue[h] = b.global_gain;
      b.part2_3_length = y;
      if (0 == e.noise_shaping) return 100;
      B.calc_noise(b, l, f, t, w);
      t.bits = b.part2_3_length;
      n.assign(b);
      h = 0;
      for (K.arraycopy(a, 0, c, 0, 576); !v; ) {
        do {
          x = new $b();
          u = 255;
          W = 0 != (e.substep_shaping & 2) ? 20 : 3;
          if (e.sfb21_extra) {
            if (1 < f[n.sfbmax]) break;
            if (
              n.block_type == d.SHORT_TYPE &&
              (1 < f[n.sfbmax + 1] || 1 < f[n.sfbmax + 2])
            )
              break;
          }
          r = n;
          y = a;
          z = g.internal_flags;
          for (
            var C = r,
              F = f,
              G = y,
              I = g.internal_flags,
              T = void 0,
              T =
                0 == C.scalefac_scale ? 1.2968395546510096 : 1.6817928305074292,
              U = 0,
              qa = 0;
            qa < C.sfbmax;
            qa++
          )
            U < F[qa] && (U = F[qa]);
          qa = I.noise_shaping_amp;
          3 == qa && (qa = p ? 2 : 1);
          switch (qa) {
            case 2:
              break;
            case 1:
              U = 1 < U ? Math.pow(U, 0.5) : 0.95 * U;
              break;
            default:
              U = 1 < U ? 1 : 0.95 * U;
          }
          for (var ia = 0, qa = 0; qa < C.sfbmax; qa++) {
            var ya = C.width[qa],
              ia = ia + ya;
            if (!(F[qa] < U)) {
              if (
                0 != (I.substep_shaping & 2) &&
                ((I.pseudohalf[qa] = 0 == I.pseudohalf[qa] ? 1 : 0),
                0 == I.pseudohalf[qa] && 2 == I.noise_shaping_amp)
              )
                break;
              C.scalefac[qa]++;
              for (ya = -ya; 0 > ya; ya++)
                (G[ia + ya] *= T),
                  G[ia + ya] > C.xrpow_max && (C.xrpow_max = G[ia + ya]);
              if (2 == I.noise_shaping_amp) break;
            }
          }
          if ((C = k(r))) r = !1;
          else if (
            (C =
              2 == z.mode_gr
                ? ta.scale_bitcount(r)
                : ta.scale_bitcount_lsf(z, r))
          ) {
            if (1 < z.noise_shaping)
              if ((Ia.fill(z.pseudohalf, 0), 0 == r.scalefac_scale)) {
                C = r;
                for (G = F = 0; G < C.sfbmax; G++) {
                  T = C.width[G];
                  I = C.scalefac[G];
                  0 != C.preflag && (I += B.pretab[G]);
                  F += T;
                  if (0 != (I & 1))
                    for (I++, T = -T; 0 > T; T++)
                      (y[F + T] *= 1.2968395546510096),
                        y[F + T] > C.xrpow_max && (C.xrpow_max = y[F + T]);
                  C.scalefac[G] = I >> 1;
                }
                C.preflag = 0;
                C.scalefac_scale = 1;
                C = !1;
              } else if (r.block_type == d.SHORT_TYPE && 0 < z.subblock_gain) {
                b: {
                  C = z;
                  F = r;
                  G = void 0;
                  I = F.scalefac;
                  for (G = 0; G < F.sfb_lmax; G++)
                    if (16 <= I[G]) {
                      y = !0;
                      break b;
                    }
                  for (T = 0; 3 > T; T++) {
                    qa = U = 0;
                    for (G = F.sfb_lmax + T; G < F.sfbdivide; G += 3)
                      U < I[G] && (U = I[G]);
                    for (; G < F.sfbmax; G += 3) qa < I[G] && (qa = I[G]);
                    if (!(16 > U && 8 > qa)) {
                      if (7 <= F.subblock_gain[T]) {
                        y = !0;
                        break b;
                      }
                      F.subblock_gain[T]++;
                      U = C.scalefac_band.l[F.sfb_lmax];
                      for (G = F.sfb_lmax + T; G < F.sfbmax; G += 3)
                        if (
                          ((qa = F.width[G]),
                          (ia = I[G]),
                          (ia -= 4 >> F.scalefac_scale),
                          0 <= ia)
                        )
                          (I[G] = ia), (U += 3 * qa);
                        else {
                          I[G] = 0;
                          ia = B.IPOW20(210 + (ia << (F.scalefac_scale + 1)));
                          U += qa * (T + 1);
                          for (ya = -qa; 0 > ya; ya++)
                            (y[U + ya] *= ia),
                              y[U + ya] > F.xrpow_max &&
                                (F.xrpow_max = y[U + ya]);
                          U += qa * (3 - T - 1);
                        }
                      ia = B.IPOW20(202);
                      U += F.width[G] * (T + 1);
                      for (ya = -F.width[G]; 0 > ya; ya++)
                        (y[U + ya] *= ia),
                          y[U + ya] > F.xrpow_max && (F.xrpow_max = y[U + ya]);
                    }
                  }
                  y = !1;
                }
                C = y || k(r);
              }
            C ||
              (C =
                2 == z.mode_gr
                  ? ta.scale_bitcount(r)
                  : ta.scale_bitcount_lsf(z, r));
            r = !C;
          } else r = !0;
          if (!r) break;
          0 != n.scalefac_scale && (u = 254);
          r = q - n.part2_length;
          if (0 >= r) break;
          for (
            ;
            (n.part2_3_length = ta.count_bits(e, a, n, w)) > r &&
            n.global_gain <= u;

          )
            n.global_gain++;
          if (n.global_gain > u) break;
          if (0 == t.over_count) {
            for (
              ;
              (n.part2_3_length = ta.count_bits(e, a, n, w)) > A &&
              n.global_gain <= u;

            )
              n.global_gain++;
            if (n.global_gain > u) break;
          }
          B.calc_noise(n, l, f, x, w);
          x.bits = n.part2_3_length;
          z = b.block_type != d.SHORT_TYPE ? g.quant_comp : g.quant_comp_short;
          u = t;
          r = x;
          C = n;
          y = f;
          F = void 0;
          switch (z) {
            default:
            case 9:
              0 < u.over_count
                ? ((F = r.over_SSD <= u.over_SSD),
                  r.over_SSD == u.over_SSD && (F = r.bits < u.bits))
                : (F =
                    0 > r.max_noise &&
                    10 * r.max_noise + r.bits <= 10 * u.max_noise + u.bits);
              break;
            case 0:
              F =
                r.over_count < u.over_count ||
                (r.over_count == u.over_count && r.over_noise < u.over_noise) ||
                (r.over_count == u.over_count &&
                  ua.EQ(r.over_noise, u.over_noise) &&
                  r.tot_noise < u.tot_noise);
              break;
            case 8:
              z = r;
              G = 1e-37;
              for (F = 0; F < C.psymax; F++)
                (I = y[F]),
                  (I = X.FAST_LOG10(0.368 + 0.632 * I * I * I)),
                  (G += I);
              y = Math.max(1e-20, G);
              z.max_noise = y;
            case 1:
              F = r.max_noise < u.max_noise;
              break;
            case 2:
              F = r.tot_noise < u.tot_noise;
              break;
            case 3:
              F = r.tot_noise < u.tot_noise && r.max_noise < u.max_noise;
              break;
            case 4:
              F =
                (0 >= r.max_noise && 0.2 < u.max_noise) ||
                (0 >= r.max_noise &&
                  0 > u.max_noise &&
                  u.max_noise > r.max_noise - 0.2 &&
                  r.tot_noise < u.tot_noise) ||
                (0 >= r.max_noise &&
                  0 < u.max_noise &&
                  u.max_noise > r.max_noise - 0.2 &&
                  r.tot_noise < u.tot_noise + u.over_noise) ||
                (0 < r.max_noise &&
                  -0.05 < u.max_noise &&
                  u.max_noise > r.max_noise - 0.1 &&
                  r.tot_noise + r.over_noise < u.tot_noise + u.over_noise) ||
                (0 < r.max_noise &&
                  -0.1 < u.max_noise &&
                  u.max_noise > r.max_noise - 0.15 &&
                  r.tot_noise + r.over_noise + r.over_noise <
                    u.tot_noise + u.over_noise + u.over_noise);
              break;
            case 5:
              F =
                r.over_noise < u.over_noise ||
                (ua.EQ(r.over_noise, u.over_noise) &&
                  r.tot_noise < u.tot_noise);
              break;
            case 6:
              F =
                r.over_noise < u.over_noise ||
                (ua.EQ(r.over_noise, u.over_noise) &&
                  (r.max_noise < u.max_noise ||
                    (ua.EQ(r.max_noise, u.max_noise) &&
                      r.tot_noise <= u.tot_noise)));
              break;
            case 7:
              F = r.over_count < u.over_count || r.over_noise < u.over_noise;
          }
          0 == u.over_count && (F = F && r.bits < u.bits);
          z = F ? 1 : 0;
          if (0 != z)
            (A = b.part2_3_length),
              (t = x),
              b.assign(n),
              (h = 0),
              K.arraycopy(a, 0, c, 0, 576);
          else if (0 == e.full_outer_loop) {
            if (++h > W && 0 == t.over_count) break;
            if (3 == e.noise_shaping_amp && p && 30 < h) break;
            if (3 == e.noise_shaping_amp && p && 15 < n.global_gain - m) break;
          }
        } while (255 > n.global_gain + n.scalefac_scale);
        3 == e.noise_shaping_amp
          ? p
            ? (v = !0)
            : (n.assign(b),
              K.arraycopy(c, 0, a, 0, 576),
              (h = 0),
              (m = n.global_gain),
              (p = !0))
          : (v = !0);
      }
      g.VBR == M.vbr_rh || g.VBR == M.vbr_mtrh
        ? K.arraycopy(c, 0, a, 0, 576)
        : 0 != (e.substep_shaping & 1) && trancate_smallspectrums(e, b, l, a);
      return t.over_count;
    };
    this.iteration_finish_one = function (d, b, l) {
      var a = d.l3_side,
        h = a.tt[b][l];
      ta.best_scalefac_store(d, b, l, a);
      1 == d.use_best_huffman && ta.best_huffman_divide(d, h);
      r.ResvAdjust(d, h);
    };
    this.VBR_encode_granule = function (d, b, l, a, h, k, e) {
      var n = d.internal_flags,
        c = new Ab(),
        f = H(576),
        q = e,
        t = e + 1,
        t = (e + k) / 2,
        r,
        A = 0,
        v = n.sfb21_extra;
      Ia.fill(c.l3_enc, 0);
      do
        (n.sfb21_extra = t > q - 42 ? !1 : v),
          (r = outer_loop(d, b, l, a, h, t)),
          0 >= r
            ? ((A = 1),
              (t = b.part2_3_length),
              c.assign(b),
              K.arraycopy(a, 0, f, 0, 576),
              (e = t - 32),
              (r = e - k),
              (t = (e + k) / 2))
            : ((k = t + 32),
              (r = e - k),
              (t = (e + k) / 2),
              0 != A && ((A = 2), b.assign(c), K.arraycopy(f, 0, a, 0, 576)));
      while (12 < r);
      n.sfb21_extra = v;
      2 == A && K.arraycopy(c.l3_enc, 0, b.l3_enc, 0, 576);
    };
    this.get_framebits = function (d, b) {
      var l = d.internal_flags;
      l.bitrate_index = l.VBR_min_bitrate;
      var a = q.getframebits(d);
      l.bitrate_index = 1;
      for (var a = q.getframebits(d), h = 1; h <= l.VBR_max_bitrate; h++)
        (l.bitrate_index = h),
          (a = new eb(a)),
          (b[h] = r.ResvFrameBegin(d, a)),
          (a = a.bits);
    };
    this.VBR_old_prepare = function (g, b, l, a, h, k, e, n, c) {
      var f = g.internal_flags,
        q;
      q = 0;
      var t = 1,
        w = 0;
      f.bitrate_index = f.VBR_max_bitrate;
      var A = r.ResvFrameBegin(g, new eb(0)) / f.mode_gr;
      get_framebits(g, k);
      for (var v = 0; v < f.mode_gr; v++) {
        var p = B.on_pe(g, b, n[v], A, v, 0);
        f.mode_ext == d.MPG_MD_MS_LR &&
          (ms_convert(f.l3_side, v), B.reduce_side(n[v], l[v], A, p));
        for (p = 0; p < f.channels_out; ++p) {
          var m = f.l3_side.tt[v][p];
          m.block_type != d.SHORT_TYPE
            ? ((q = 1.28 / (1 + Math.exp(3.5 - b[v][p] / 300)) - 0.05),
              (q = f.PSY.mask_adjust - q))
            : ((q = 2.56 / (1 + Math.exp(3.5 - b[v][p] / 300)) - 0.14),
              (q = f.PSY.mask_adjust_short - q));
          f.masking_lower = Math.pow(10, 0.1 * q);
          init_outer_loop(f, m);
          c[v][p] = B.calc_xmin(g, a[v][p], m, h[v][p]);
          0 != c[v][p] && (t = 0);
          e[v][p] = 126;
          w += n[v][p];
        }
      }
      for (v = 0; v < f.mode_gr; v++)
        for (p = 0; p < f.channels_out; p++)
          w > k[f.VBR_max_bitrate] &&
            ((n[v][p] *= k[f.VBR_max_bitrate]), (n[v][p] /= w)),
            e[v][p] > n[v][p] && (e[v][p] = n[v][p]);
      return t;
    };
    this.bitpressure_strategy = function (g, b, l, a) {
      for (var h = 0; h < g.mode_gr; h++)
        for (var k = 0; k < g.channels_out; k++) {
          for (
            var e = g.l3_side.tt[h][k], n = b[h][k], c = 0, f = 0;
            f < e.psy_lmax;
            f++
          )
            n[c++] *= 1 + (0.029 * f * f) / d.SBMAX_l / d.SBMAX_l;
          if (e.block_type == d.SHORT_TYPE)
            for (f = e.sfb_smin; f < d.SBMAX_s; f++)
              (n[c++] *= 1 + (0.029 * f * f) / d.SBMAX_s / d.SBMAX_s),
                (n[c++] *= 1 + (0.029 * f * f) / d.SBMAX_s / d.SBMAX_s),
                (n[c++] *= 1 + (0.029 * f * f) / d.SBMAX_s / d.SBMAX_s);
          a[h][k] = 0 | Math.max(l[h][k], 0.9 * a[h][k]);
        }
    };
    this.VBR_new_prepare = function (g, b, k, a, h, q) {
      var e = g.internal_flags,
        n = 1,
        c = 0,
        f = 0,
        t;
      g.free_format
        ? ((e.bitrate_index = 0),
          (c = new eb(c)),
          (t = r.ResvFrameBegin(g, c)),
          (c = c.bits),
          (h[0] = t))
        : ((e.bitrate_index = e.VBR_max_bitrate),
          (c = new eb(c)),
          r.ResvFrameBegin(g, c),
          (c = c.bits),
          get_framebits(g, h),
          (t = h[e.VBR_max_bitrate]));
      for (h = 0; h < e.mode_gr; h++) {
        B.on_pe(g, b, q[h], c, h, 0);
        e.mode_ext == d.MPG_MD_MS_LR && ms_convert(e.l3_side, h);
        for (var z = 0; z < e.channels_out; ++z) {
          var w = e.l3_side.tt[h][z];
          e.masking_lower = Math.pow(10, 0.1 * e.PSY.mask_adjust);
          init_outer_loop(e, w);
          0 != B.calc_xmin(g, k[h][z], w, a[h][z]) && (n = 0);
          f += q[h][z];
        }
      }
      for (h = 0; h < e.mode_gr; h++)
        for (z = 0; z < e.channels_out; z++)
          f > t && ((q[h][z] *= t), (q[h][z] /= f));
      return n;
    };
    this.calc_target_bits = function (g, b, k, a, h, t) {
      var e = g.internal_flags,
        n = e.l3_side,
        c,
        f;
      e.bitrate_index = e.VBR_max_bitrate;
      f = new eb(0);
      t[0] = r.ResvFrameBegin(g, f);
      e.bitrate_index = 1;
      f = q.getframebits(g) - 8 * e.sideinfo_len;
      h[0] = f / (e.mode_gr * e.channels_out);
      f = g.VBR_mean_bitrate_kbps * g.framesize * 1e3;
      0 != (e.substep_shaping & 1) && (f *= 1.09);
      f /= g.out_samplerate;
      f -= 8 * e.sideinfo_len;
      f /= e.mode_gr * e.channels_out;
      c = 0.93 + (0.07 * (11 - g.compression_ratio)) / 5.5;
      0.9 > c && (c = 0.9);
      1 < c && (c = 1);
      for (g = 0; g < e.mode_gr; g++) {
        var E = 0;
        for (h = 0; h < e.channels_out; h++) {
          a[g][h] = int(c * f);
          if (700 < b[g][h]) {
            var z = int((b[g][h] - 700) / 1.4),
              w = n.tt[g][h];
            a[g][h] = int(c * f);
            w.block_type == d.SHORT_TYPE && z < f / 2 && (z = f / 2);
            z > (3 * f) / 2 ? (z = (3 * f) / 2) : 0 > z && (z = 0);
            a[g][h] += z;
          }
          a[g][h] > da.MAX_BITS_PER_CHANNEL &&
            (a[g][h] = da.MAX_BITS_PER_CHANNEL);
          E += a[g][h];
        }
        if (E > da.MAX_BITS_PER_GRANULE)
          for (h = 0; h < e.channels_out; ++h)
            (a[g][h] *= da.MAX_BITS_PER_GRANULE), (a[g][h] /= E);
      }
      if (e.mode_ext == d.MPG_MD_MS_LR)
        for (g = 0; g < e.mode_gr; g++)
          B.reduce_side(
            a[g],
            k[g],
            f * e.channels_out,
            da.MAX_BITS_PER_GRANULE
          );
      for (g = b = 0; g < e.mode_gr; g++)
        for (h = 0; h < e.channels_out; h++)
          a[g][h] > da.MAX_BITS_PER_CHANNEL &&
            (a[g][h] = da.MAX_BITS_PER_CHANNEL),
            (b += a[g][h]);
      if (b > t[0])
        for (g = 0; g < e.mode_gr; g++)
          for (h = 0; h < e.channels_out; h++)
            (a[g][h] *= t[0]), (a[g][h] /= b);
    };
  }
  function Qa() {
    this.thm = new ic();
    this.en = new ic();
  }
  function Pc() {
    function r(b, d, a) {
      for (var g = 10, q = d + 238 - 14 - 286, e = -15; 0 > e; e++) {
        var n, c, f;
        n = k[g + -10];
        c = b[q + -224] * n;
        f = b[d + 224] * n;
        n = k[g + -9];
        c += b[q + -160] * n;
        f += b[d + 160] * n;
        n = k[g + -8];
        c += b[q + -96] * n;
        f += b[d + 96] * n;
        n = k[g + -7];
        c += b[q + -32] * n;
        f += b[d + 32] * n;
        n = k[g + -6];
        c += b[q + 32] * n;
        f += b[d + -32] * n;
        n = k[g + -5];
        c += b[q + 96] * n;
        f += b[d + -96] * n;
        n = k[g + -4];
        c += b[q + 160] * n;
        f += b[d + -160] * n;
        n = k[g + -3];
        c += b[q + 224] * n;
        f += b[d + -224] * n;
        n = k[g + -2];
        c += b[d + -256] * n;
        f -= b[q + 256] * n;
        n = k[g + -1];
        c += b[d + -192] * n;
        f -= b[q + 192] * n;
        n = k[g + 0];
        c += b[d + -128] * n;
        f -= b[q + 128] * n;
        n = k[g + 1];
        c += b[d + -64] * n;
        f -= b[q + 64] * n;
        n = k[g + 2];
        c += b[d + 0] * n;
        f -= b[q + 0] * n;
        n = k[g + 3];
        c += b[d + 64] * n;
        f -= b[q + -64] * n;
        n = k[g + 4];
        c += b[d + 128] * n;
        f -= b[q + -128] * n;
        n = k[g + 5];
        c += b[d + 192] * n;
        f -= b[q + -192] * n;
        c *= k[g + 6];
        n = f - c;
        a[30 + 2 * e] = f + c;
        a[31 + 2 * e] = k[g + 7] * n;
        g += 18;
        d--;
        q++;
      }
      f = b[d + -16] * k[g + -10];
      c = b[d + -32] * k[g + -2];
      f += (b[d + -48] - b[d + 16]) * k[g + -9];
      c += b[d + -96] * k[g + -1];
      f += (b[d + -80] + b[d + 48]) * k[g + -8];
      c += b[d + -160] * k[g + 0];
      f += (b[d + -112] - b[d + 80]) * k[g + -7];
      c += b[d + -224] * k[g + 1];
      f += (b[d + -144] + b[d + 112]) * k[g + -6];
      c -= b[d + 32] * k[g + 2];
      f += (b[d + -176] - b[d + 144]) * k[g + -5];
      c -= b[d + 96] * k[g + 3];
      f += (b[d + -208] + b[d + 176]) * k[g + -4];
      c -= b[d + 160] * k[g + 4];
      f += (b[d + -240] - b[d + 208]) * k[g + -3];
      c -= b[d + 224];
      b = c - f;
      d = c + f;
      f = a[14];
      c = a[15] - f;
      a[31] = d + f;
      a[30] = b + c;
      a[15] = b - c;
      a[14] = d - f;
      c = a[28] - a[0];
      a[0] += a[28];
      a[28] = c * k[g + -36 + 7];
      c = a[29] - a[1];
      a[1] += a[29];
      a[29] = c * k[g + -36 + 7];
      c = a[26] - a[2];
      a[2] += a[26];
      a[26] = c * k[g + -72 + 7];
      c = a[27] - a[3];
      a[3] += a[27];
      a[27] = c * k[g + -72 + 7];
      c = a[24] - a[4];
      a[4] += a[24];
      a[24] = c * k[g + -108 + 7];
      c = a[25] - a[5];
      a[5] += a[25];
      a[25] = c * k[g + -108 + 7];
      c = a[22] - a[6];
      a[6] += a[22];
      a[22] = c * X.SQRT2;
      c = a[23] - a[7];
      a[7] += a[23];
      a[23] = c * X.SQRT2 - a[7];
      a[7] -= a[6];
      a[22] -= a[7];
      a[23] -= a[22];
      c = a[6];
      a[6] = a[31] - c;
      a[31] += c;
      c = a[7];
      a[7] = a[30] - c;
      a[30] += c;
      c = a[22];
      a[22] = a[15] - c;
      a[15] += c;
      c = a[23];
      a[23] = a[14] - c;
      a[14] += c;
      c = a[20] - a[8];
      a[8] += a[20];
      a[20] = c * k[g + -180 + 7];
      c = a[21] - a[9];
      a[9] += a[21];
      a[21] = c * k[g + -180 + 7];
      c = a[18] - a[10];
      a[10] += a[18];
      a[18] = c * k[g + -216 + 7];
      c = a[19] - a[11];
      a[11] += a[19];
      a[19] = c * k[g + -216 + 7];
      c = a[16] - a[12];
      a[12] += a[16];
      a[16] = c * k[g + -252 + 7];
      c = a[17] - a[13];
      a[13] += a[17];
      a[17] = c * k[g + -252 + 7];
      c = -a[20] + a[24];
      a[20] += a[24];
      a[24] = c * k[g + -216 + 7];
      c = -a[21] + a[25];
      a[21] += a[25];
      a[25] = c * k[g + -216 + 7];
      c = a[4] - a[8];
      a[4] += a[8];
      a[8] = c * k[g + -216 + 7];
      c = a[5] - a[9];
      a[5] += a[9];
      a[9] = c * k[g + -216 + 7];
      c = a[0] - a[12];
      a[0] += a[12];
      a[12] = c * k[g + -72 + 7];
      c = a[1] - a[13];
      a[1] += a[13];
      a[13] = c * k[g + -72 + 7];
      c = a[16] - a[28];
      a[16] += a[28];
      a[28] = c * k[g + -72 + 7];
      c = -a[17] + a[29];
      a[17] += a[29];
      a[29] = c * k[g + -72 + 7];
      c = X.SQRT2 * (a[2] - a[10]);
      a[2] += a[10];
      a[10] = c;
      c = X.SQRT2 * (a[3] - a[11]);
      a[3] += a[11];
      a[11] = c;
      c = X.SQRT2 * (-a[18] + a[26]);
      a[18] += a[26];
      a[26] = c - a[18];
      c = X.SQRT2 * (-a[19] + a[27]);
      a[19] += a[27];
      a[27] = c - a[19];
      c = a[2];
      a[19] -= a[3];
      a[3] -= c;
      a[2] = a[31] - c;
      a[31] += c;
      c = a[3];
      a[11] -= a[19];
      a[18] -= c;
      a[3] = a[30] - c;
      a[30] += c;
      c = a[18];
      a[27] -= a[11];
      a[19] -= c;
      a[18] = a[15] - c;
      a[15] += c;
      c = a[19];
      a[10] -= c;
      a[19] = a[14] - c;
      a[14] += c;
      c = a[10];
      a[11] -= c;
      a[10] = a[23] - c;
      a[23] += c;
      c = a[11];
      a[26] -= c;
      a[11] = a[22] - c;
      a[22] += c;
      c = a[26];
      a[27] -= c;
      a[26] = a[7] - c;
      a[7] += c;
      c = a[27];
      a[27] = a[6] - c;
      a[6] += c;
      c = X.SQRT2 * (a[0] - a[4]);
      a[0] += a[4];
      a[4] = c;
      c = X.SQRT2 * (a[1] - a[5]);
      a[1] += a[5];
      a[5] = c;
      c = X.SQRT2 * (a[16] - a[20]);
      a[16] += a[20];
      a[20] = c;
      c = X.SQRT2 * (a[17] - a[21]);
      a[17] += a[21];
      a[21] = c;
      c = -X.SQRT2 * (a[8] - a[12]);
      a[8] += a[12];
      a[12] = c - a[8];
      c = -X.SQRT2 * (a[9] - a[13]);
      a[9] += a[13];
      a[13] = c - a[9];
      c = -X.SQRT2 * (a[25] - a[29]);
      a[25] += a[29];
      a[29] = c - a[25];
      c = -X.SQRT2 * (a[24] + a[28]);
      a[24] -= a[28];
      a[28] = c - a[24];
      c = a[24] - a[16];
      a[24] = c;
      c = a[20] - c;
      a[20] = c;
      c = a[28] - c;
      a[28] = c;
      c = a[25] - a[17];
      a[25] = c;
      c = a[21] - c;
      a[21] = c;
      c = a[29] - c;
      a[29] = c;
      c = a[17] - a[1];
      a[17] = c;
      c = a[9] - c;
      a[9] = c;
      c = a[25] - c;
      a[25] = c;
      c = a[5] - c;
      a[5] = c;
      c = a[21] - c;
      a[21] = c;
      c = a[13] - c;
      a[13] = c;
      c = a[29] - c;
      a[29] = c;
      c = a[1] - a[0];
      a[1] = c;
      c = a[16] - c;
      a[16] = c;
      c = a[17] - c;
      a[17] = c;
      c = a[8] - c;
      a[8] = c;
      c = a[9] - c;
      a[9] = c;
      c = a[24] - c;
      a[24] = c;
      c = a[25] - c;
      a[25] = c;
      c = a[4] - c;
      a[4] = c;
      c = a[5] - c;
      a[5] = c;
      c = a[20] - c;
      a[20] = c;
      c = a[21] - c;
      a[21] = c;
      c = a[12] - c;
      a[12] = c;
      c = a[13] - c;
      a[13] = c;
      c = a[28] - c;
      a[28] = c;
      c = a[29] - c;
      a[29] = c;
      c = a[0];
      a[0] += a[31];
      a[31] -= c;
      c = a[1];
      a[1] += a[30];
      a[30] -= c;
      c = a[16];
      a[16] += a[15];
      a[15] -= c;
      c = a[17];
      a[17] += a[14];
      a[14] -= c;
      c = a[8];
      a[8] += a[23];
      a[23] -= c;
      c = a[9];
      a[9] += a[22];
      a[22] -= c;
      c = a[24];
      a[24] += a[7];
      a[7] -= c;
      c = a[25];
      a[25] += a[6];
      a[6] -= c;
      c = a[4];
      a[4] += a[27];
      a[27] -= c;
      c = a[5];
      a[5] += a[26];
      a[26] -= c;
      c = a[20];
      a[20] += a[11];
      a[11] -= c;
      c = a[21];
      a[21] += a[10];
      a[10] -= c;
      c = a[12];
      a[12] += a[19];
      a[19] -= c;
      c = a[13];
      a[13] += a[18];
      a[18] -= c;
      c = a[28];
      a[28] += a[3];
      a[3] -= c;
      c = a[29];
      a[29] += a[2];
      a[2] -= c;
    }
    var k = [
        -0.1482523854003001,
        32.308141959636465,
        296.40344946382766,
        883.1344870032432,
        11113.947376231741,
        1057.2713659324597,
        305.7402417275812,
        30.825928907280012,
        3.8533188138216365,
        59.42900443849514,
        709.5899960123345,
        5281.91112291017,
        -5829.66483675846,
        -817.6293103748613,
        -76.91656988279972,
        -4.594269939176596,
        0.9063471690191471,
        0.1960342806591213,
        -0.15466694054279598,
        34.324387823855965,
        301.8067566458425,
        817.599602898885,
        11573.795901679885,
        1181.2520595540152,
        321.59731579894424,
        31.232021761053772,
        3.7107095756221318,
        53.650946155329365,
        684.167428119626,
        5224.56624370173,
        -6366.391851890084,
        -908.9766368219582,
        -89.83068876699639,
        -5.411397422890401,
        0.8206787908286602,
        0.3901806440322567,
        -0.16070888947830023,
        36.147034243915876,
        304.11815768187864,
        732.7429163887613,
        11989.60988270091,
        1300.012278487897,
        335.28490093152146,
        31.48816102859945,
        3.373875931311736,
        47.232241542899175,
        652.7371796173471,
        5132.414255594984,
        -6909.087078780055,
        -1001.9990371107289,
        -103.62185754286375,
        -6.104916304710272,
        0.7416505462720353,
        0.5805693545089249,
        -0.16636367662261495,
        37.751650073343995,
        303.01103387567713,
        627.9747488785183,
        12358.763425278165,
        1412.2779918482834,
        346.7496836825721,
        31.598286663170416,
        3.1598635433980946,
        40.57878626349686,
        616.1671130880391,
        5007.833007176154,
        -7454.040671756168,
        -1095.7960341867115,
        -118.24411666465777,
        -6.818469345853504,
        0.6681786379192989,
        0.7653668647301797,
        -0.1716176790982088,
        39.11551877123304,
        298.3413246578966,
        503.5259106886539,
        12679.589408408976,
        1516.5821921214542,
        355.9850766329023,
        31.395241710249053,
        2.9164211881972335,
        33.79716964664243,
        574.8943997801362,
        4853.234992253242,
        -7997.57021486075,
        -1189.7624067269965,
        -133.6444792601766,
        -7.7202770609839915,
        0.5993769336819237,
        0.9427934736519954,
        -0.17645823955292173,
        40.21879108166477,
        289.9982036694474,
        359.3226160751053,
        12950.259102786438,
        1612.1013903507662,
        362.85067106591504,
        31.045922092242872,
        2.822222032597987,
        26.988862316190684,
        529.8996541764288,
        4671.371946949588,
        -8535.899136645805,
        -1282.5898586244496,
        -149.58553632943463,
        -8.643494270763135,
        0.5345111359507916,
        1.111140466039205,
        -0.36174739330527045,
        41.04429910497807,
        277.5463268268618,
        195.6386023135583,
        13169.43812144731,
        1697.6433561479398,
        367.40983966190305,
        30.557037410382826,
        2.531473372857427,
        20.070154905927314,
        481.50208566532336,
        4464.970341588308,
        -9065.36882077239,
        -1373.62841526722,
        -166.1660487028118,
        -9.58289321133207,
        0.4729647758913199,
        1.268786568327291,
        -0.36970682634889585,
        41.393213350082036,
        261.2935935556502,
        12.935476055240873,
        13336.131683328815,
        1772.508612059496,
        369.76534388639965,
        29.751323653701338,
        2.4023193045459172,
        13.304795348228817,
        430.5615775526625,
        4237.0568611071185,
        -9581.931701634761,
        -1461.6913552409758,
        -183.12733958476446,
        -10.718010163869403,
        0.41421356237309503,
        1.414213562373095,
        -0.37677560326535325,
        41.619486213528496,
        241.05423794991074,
        -187.94665032361226,
        13450.063605744153,
        1836.153896465782,
        369.4908799925761,
        29.001847876923147,
        2.0714759319987186,
        6.779591200894186,
        377.7767837205709,
        3990.386575512536,
        -10081.709459700915,
        -1545.947424837898,
        -200.3762958015653,
        -11.864482073055006,
        0.3578057213145241,
        1.546020906725474,
        -0.3829366947518991,
        41.1516456456653,
        216.47684307105183,
        -406.1569483347166,
        13511.136535077321,
        1887.8076599260432,
        367.3025214564151,
        28.136213436723654,
        1.913880671464418,
        0.3829366947518991,
        323.85365704338597,
        3728.1472257487526,
        -10561.233882199509,
        -1625.2025997821418,
        -217.62525175416,
        -13.015432208941645,
        0.3033466836073424,
        1.66293922460509,
        -0.5822628872992417,
        40.35639251440489,
        188.20071124269245,
        -640.2706748618148,
        13519.21490106562,
        1927.6022433578062,
        362.8197642637487,
        26.968821921868447,
        1.7463817695935329,
        -5.62650678237171,
        269.3016715297017,
        3453.386536448852,
        -11016.145278780888,
        -1698.6569643425091,
        -234.7658734267683,
        -14.16351421663124,
        0.2504869601913055,
        1.76384252869671,
        -0.5887180101749253,
        39.23429103868072,
        155.76096234403798,
        -889.2492977967378,
        13475.470561874661,
        1955.0535223723712,
        356.4450994756727,
        25.894952980042156,
        1.5695032905781554,
        -11.181939564328772,
        214.80884394039484,
        3169.1640829158237,
        -11443.321309975563,
        -1765.1588461316153,
        -251.68908574481912,
        -15.49755935939164,
        0.198912367379658,
        1.847759065022573,
        -0.7912582233652842,
        37.39369355329111,
        119.699486012458,
        -1151.0956593239027,
        13380.446257078214,
        1970.3952110853447,
        348.01959814116185,
        24.731487364283044,
        1.3850130831637748,
        -16.421408865300393,
        161.05030052864092,
        2878.3322807850063,
        -11838.991423510031,
        -1823.985884688674,
        -268.2854986386903,
        -16.81724543849939,
        0.1483359875383474,
        1.913880671464418,
        -0.7960642926861912,
        35.2322109610459,
        80.01928065061526,
        -1424.0212633405113,
        13235.794061869668,
        1973.804052543835,
        337.9908651258184,
        23.289159354463873,
        1.3934255946442087,
        -21.099669467133474,
        108.48348407242611,
        2583.700758091299,
        -12199.726194855148,
        -1874.2780658979746,
        -284.2467154529415,
        -18.11369784385905,
        0.09849140335716425,
        1.961570560806461,
        -0.998795456205172,
        32.56307803611191,
        36.958364584370486,
        -1706.075448829146,
        13043.287458812016,
        1965.3831106103316,
        326.43182772364605,
        22.175018750622293,
        1.198638339011324,
        -25.371248002043963,
        57.53505923036915,
        2288.41886619975,
        -12522.674544337233,
        -1914.8400385312243,
        -299.26241273417224,
        -19.37805630698734,
        0.04912684976946725,
        1.990369453344394,
        (0.0178904535 * X.SQRT2) / 2.384e-6,
        (0.008938074 * X.SQRT2) / 2.384e-6,
        (0.0015673635 * X.SQRT2) / 2.384e-6,
        (0.001228571 * X.SQRT2) / 2.384e-6,
        (4.856585e-4 * X.SQRT2) / 2.384e-6,
        (1.09434e-4 * X.SQRT2) / 2.384e-6,
        (5.0783e-5 * X.SQRT2) / 2.384e-6,
        (6.914e-6 * X.SQRT2) / 2.384e-6,
        12804.797818791945,
        1945.5515939597317,
        313.4244966442953,
        20.801593959731544,
        1995.1556208053692,
        9.000838926174497,
        -29.20218120805369,
      ],
      q = [
        [
          2.382191739347913e-13,
          6.423305872147834e-13,
          9.400849094049688e-13,
          1.122435026096556e-12,
          1.183840321267481e-12,
          1.122435026096556e-12,
          9.40084909404969e-13,
          6.423305872147839e-13,
          2.382191739347918e-13,
          5.456116108943412e-12,
          4.878985199565852e-12,
          4.240448995017367e-12,
          3.559909094758252e-12,
          2.858043359288075e-12,
          2.156177623817898e-12,
          1.475637723558783e-12,
          8.371015190102974e-13,
          2.599706096327376e-13,
          -5.456116108943412e-12,
          -4.878985199565852e-12,
          -4.240448995017367e-12,
          -3.559909094758252e-12,
          -2.858043359288076e-12,
          -2.156177623817898e-12,
          -1.475637723558783e-12,
          -8.371015190102975e-13,
          -2.599706096327376e-13,
          -2.382191739347923e-13,
          -6.423305872147843e-13,
          -9.400849094049696e-13,
          -1.122435026096556e-12,
          -1.183840321267481e-12,
          -1.122435026096556e-12,
          -9.400849094049694e-13,
          -6.42330587214784e-13,
          -2.382191739347918e-13,
        ],
        [
          2.382191739347913e-13,
          6.423305872147834e-13,
          9.400849094049688e-13,
          1.122435026096556e-12,
          1.183840321267481e-12,
          1.122435026096556e-12,
          9.400849094049688e-13,
          6.423305872147841e-13,
          2.382191739347918e-13,
          5.456116108943413e-12,
          4.878985199565852e-12,
          4.240448995017367e-12,
          3.559909094758253e-12,
          2.858043359288075e-12,
          2.156177623817898e-12,
          1.475637723558782e-12,
          8.371015190102975e-13,
          2.599706096327376e-13,
          -5.461314069809755e-12,
          -4.921085770524055e-12,
          -4.343405037091838e-12,
          -3.732668368707687e-12,
          -3.093523840190885e-12,
          -2.430835727329465e-12,
          -1.734679010007751e-12,
          -9.74825365660928e-13,
          -2.797435120168326e-13,
          0,
          0,
          0,
          0,
          0,
          0,
          -2.283748241799531e-13,
          -4.037858874020686e-13,
          -2.146547464825323e-13,
        ],
        [
          0.1316524975873958,
          0.414213562373095,
          0.7673269879789602,
          1.091308501069271,
          1.303225372841206,
          1.56968557711749,
          1.920982126971166,
          2.414213562373094,
          3.171594802363212,
          4.510708503662055,
          7.595754112725146,
          22.90376554843115,
          0.984807753012208,
          0.6427876096865394,
          0.3420201433256688,
          0.9396926207859084,
          -0.1736481776669303,
          -0.7660444431189779,
          0.8660254037844387,
          0.5,
          -0.5144957554275265,
          -0.4717319685649723,
          -0.3133774542039019,
          -0.1819131996109812,
          -0.09457419252642064,
          -0.04096558288530405,
          -0.01419856857247115,
          -0.003699974673760037,
          0.8574929257125442,
          0.8817419973177052,
          0.9496286491027329,
          0.9833145924917901,
          0.9955178160675857,
          0.9991605581781475,
          0.999899195244447,
          0.9999931550702802,
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          2.283748241799531e-13,
          4.037858874020686e-13,
          2.146547464825323e-13,
          5.461314069809755e-12,
          4.921085770524055e-12,
          4.343405037091838e-12,
          3.732668368707687e-12,
          3.093523840190885e-12,
          2.430835727329466e-12,
          1.734679010007751e-12,
          9.74825365660928e-13,
          2.797435120168326e-13,
          -5.456116108943413e-12,
          -4.878985199565852e-12,
          -4.240448995017367e-12,
          -3.559909094758253e-12,
          -2.858043359288075e-12,
          -2.156177623817898e-12,
          -1.475637723558782e-12,
          -8.371015190102975e-13,
          -2.599706096327376e-13,
          -2.382191739347913e-13,
          -6.423305872147834e-13,
          -9.400849094049688e-13,
          -1.122435026096556e-12,
          -1.183840321267481e-12,
          -1.122435026096556e-12,
          -9.400849094049688e-13,
          -6.423305872147841e-13,
          -2.382191739347918e-13,
        ],
      ],
      C = q[d.SHORT_TYPE],
      B = q[d.SHORT_TYPE],
      t = q[d.SHORT_TYPE],
      M = q[d.SHORT_TYPE],
      g = [
        0,
        1,
        16,
        17,
        8,
        9,
        24,
        25,
        4,
        5,
        20,
        21,
        12,
        13,
        28,
        29,
        2,
        3,
        18,
        19,
        10,
        11,
        26,
        27,
        6,
        7,
        22,
        23,
        14,
        15,
        30,
        31,
      ];
    this.mdct_sub48 = function (b, k, a) {
      for (var h = 286, D = 0; D < b.channels_out; D++) {
        for (var e = 0; e < b.mode_gr; e++) {
          for (
            var n,
              c = b.l3_side.tt[e][D],
              f = c.xr,
              E = 0,
              z = b.sb_sample[D][1 - e],
              w = 0,
              A = 0;
            9 > A;
            A++
          )
            for (
              r(k, h, z[w]), r(k, h + 32, z[w + 1]), w += 2, h += 64, n = 1;
              32 > n;
              n += 2
            )
              z[w - 1][n] *= -1;
          for (n = 0; 32 > n; n++, E += 18) {
            var z = c.block_type,
              w = b.sb_sample[D][e],
              v = b.sb_sample[D][1 - e];
            0 != c.mixed_block_flag && 2 > n && (z = 0);
            if (1e-12 > b.amp_filter[n]) Ia.fill(f, E + 0, E + 18, 0);
            else {
              if (1 > b.amp_filter[n])
                for (A = 0; 18 > A; A++) v[A][g[n]] *= b.amp_filter[n];
              if (z == d.SHORT_TYPE) {
                for (A = -3; 0 > A; A++) {
                  var p = q[d.SHORT_TYPE][A + 3];
                  f[E + 3 * A + 9] = w[9 + A][g[n]] * p - w[8 - A][g[n]];
                  f[E + 3 * A + 18] = w[14 - A][g[n]] * p + w[15 + A][g[n]];
                  f[E + 3 * A + 10] = w[15 + A][g[n]] * p - w[14 - A][g[n]];
                  f[E + 3 * A + 19] = v[2 - A][g[n]] * p + v[3 + A][g[n]];
                  f[E + 3 * A + 11] = v[3 + A][g[n]] * p - v[2 - A][g[n]];
                  f[E + 3 * A + 20] = v[8 - A][g[n]] * p + v[9 + A][g[n]];
                }
                A = f;
                w = E;
                for (p = 0; 3 > p; p++) {
                  var m, x, y, W, u;
                  y = A[w + 6] * q[d.SHORT_TYPE][0] - A[w + 15];
                  v = A[w + 0] * q[d.SHORT_TYPE][2] - A[w + 9];
                  m = y + v;
                  x = y - v;
                  y = A[w + 15] * q[d.SHORT_TYPE][0] + A[w + 6];
                  v = A[w + 9] * q[d.SHORT_TYPE][2] + A[w + 0];
                  W = y + v;
                  u = -y + v;
                  v =
                    2.069978111953089e-11 *
                    (A[w + 3] * q[d.SHORT_TYPE][1] - A[w + 12]);
                  y =
                    2.069978111953089e-11 *
                    (A[w + 12] * q[d.SHORT_TYPE][1] + A[w + 3]);
                  A[w + 0] = 1.90752519173728e-11 * m + v;
                  A[w + 15] = 1.90752519173728e-11 * -W + y;
                  x *= 1.6519652744032674e-11;
                  W = 9.537625958686404e-12 * W + y;
                  A[w + 3] = x - W;
                  A[w + 6] = x + W;
                  m = 9.537625958686404e-12 * m - v;
                  u *= 1.6519652744032674e-11;
                  A[w + 9] = m + u;
                  A[w + 12] = m - u;
                  w++;
                }
              } else {
                p = H(18);
                for (A = -9; 0 > A; A++)
                  (m =
                    q[z][A + 27] * v[A + 9][g[n]] +
                    q[z][A + 36] * v[8 - A][g[n]]),
                    (x =
                      q[z][A + 9] * w[A + 9][g[n]] -
                      q[z][A + 18] * w[8 - A][g[n]]),
                    (p[A + 9] = m - x * C[3 + A + 9]),
                    (p[A + 18] = m * C[3 + A + 9] + x);
                var A = f,
                  w = E,
                  pa = (u = W = y = x = m = v = void 0),
                  la = void 0,
                  F = void 0,
                  G = void 0;
                x = p[17] - p[9];
                W = p[15] - p[11];
                u = p[14] - p[12];
                pa = p[0] + p[8];
                la = p[1] + p[7];
                F = p[2] + p[6];
                G = p[3] + p[5];
                A[w + 17] = pa + F - G - (la - p[4]);
                m = (pa + F - G) * B[19] + (la - p[4]);
                v = (x - W - u) * B[18];
                A[w + 5] = v + m;
                A[w + 6] = v - m;
                y = (p[16] - p[10]) * B[18];
                la = la * B[19] + p[4];
                v = x * B[12] + y + W * B[13] + u * B[14];
                m = -pa * B[16] + la - F * B[17] + G * B[15];
                A[w + 1] = v + m;
                A[w + 2] = v - m;
                v = x * B[13] - y - W * B[14] + u * B[12];
                m = -pa * B[17] + la - F * B[15] + G * B[16];
                A[w + 9] = v + m;
                A[w + 10] = v - m;
                v = x * B[14] - y + W * B[12] - u * B[13];
                m = pa * B[15] - la + F * B[16] - G * B[17];
                A[w + 13] = v + m;
                A[w + 14] = v - m;
                G = F = la = pa = u = W = y = x = void 0;
                x = p[8] - p[0];
                W = p[6] - p[2];
                u = p[5] - p[3];
                pa = p[17] + p[9];
                la = p[16] + p[10];
                F = p[15] + p[11];
                G = p[14] + p[12];
                A[w + 0] = pa + F + G + (la + p[13]);
                v = (pa + F + G) * B[19] - (la + p[13]);
                m = (x - W + u) * B[18];
                A[w + 11] = v + m;
                A[w + 12] = v - m;
                y = (p[7] - p[1]) * B[18];
                la = p[13] - la * B[19];
                v = pa * B[15] - la + F * B[16] + G * B[17];
                m = x * B[14] + y + W * B[12] + u * B[13];
                A[w + 3] = v + m;
                A[w + 4] = v - m;
                v = -pa * B[17] + la - F * B[15] - G * B[16];
                m = x * B[13] + y - W * B[14] - u * B[12];
                A[w + 7] = v + m;
                A[w + 8] = v - m;
                v = -pa * B[16] + la - F * B[17] - G * B[15];
                m = x * B[12] - y + W * B[13] - u * B[14];
                A[w + 15] = v + m;
                A[w + 16] = v - m;
              }
            }
            if (z != d.SHORT_TYPE && 0 != n)
              for (A = 7; 0 <= A; --A)
                (z = f[E + A] * t[20 + A] + f[E + -1 - A] * M[28 + A]),
                  (w = f[E + A] * M[28 + A] - f[E + -1 - A] * t[20 + A]),
                  (f[E + -1 - A] = z),
                  (f[E + A] = w);
          }
        }
        k = a;
        h = 286;
        if (1 == b.mode_gr)
          for (e = 0; 18 > e; e++)
            K.arraycopy(b.sb_sample[D][1][e], 0, b.sb_sample[D][0][e], 0, 32);
      }
    };
  }
  function d() {
    var r = d.FFTOFFSET,
      k = d.MPG_MD_MS_LR,
      q = null,
      C = (this.psy = null),
      B = null,
      t = null;
    this.setModules = function (d, b, k, a) {
      q = d;
      C = this.psy = b;
      B = a;
      t = k;
    };
    var ta = new Pc();
    this.lame_encode_mp3_frame = function (g, b, l, a, h, D) {
      var e = Zb([2, 2]);
      e[0][0] = new Qa();
      e[0][1] = new Qa();
      e[1][0] = new Qa();
      e[1][1] = new Qa();
      var n = Zb([2, 2]);
      n[0][0] = new Qa();
      n[0][1] = new Qa();
      n[1][0] = new Qa();
      n[1][1] = new Qa();
      var c = [null, null],
        f = g.internal_flags,
        E = ra([2, 4]),
        z = [0.5, 0.5],
        w = [
          [0, 0],
          [0, 0],
        ],
        A = [
          [0, 0],
          [0, 0],
        ];
      c[0] = b;
      c[1] = l;
      if (0 == f.lame_encode_frame_init) {
        b = g.internal_flags;
        var v, p;
        if (0 == b.lame_encode_frame_init) {
          l = H(2014);
          var m = H(2014);
          b.lame_encode_frame_init = 1;
          for (p = v = 0; v < 286 + 576 * (1 + b.mode_gr); ++v)
            v < 576 * b.mode_gr
              ? ((l[v] = 0), 2 == b.channels_out && (m[v] = 0))
              : ((l[v] = c[0][p]),
                2 == b.channels_out && (m[v] = c[1][p]),
                ++p);
          for (p = 0; p < b.mode_gr; p++)
            for (v = 0; v < b.channels_out; v++)
              b.l3_side.tt[p][v].block_type = d.SHORT_TYPE;
          ta.mdct_sub48(b, l, m);
        }
      }
      f.padding = 0;
      0 > (f.slot_lag -= f.frac_SpF) &&
        ((f.slot_lag += g.out_samplerate), (f.padding = 1));
      if (0 != f.psymodel)
        for (m = [null, null], v = 0, p = Y(2), l = 0; l < f.mode_gr; l++) {
          for (b = 0; b < f.channels_out; b++)
            (m[b] = c[b]), (v = 576 + 576 * l - d.FFTOFFSET);
          b =
            g.VBR == M.vbr_mtrh || g.VBR == M.vbr_mt
              ? C.L3psycho_anal_vbr(g, m, v, l, e, n, w[l], A[l], E[l], p)
              : C.L3psycho_anal_ns(g, m, v, l, e, n, w[l], A[l], E[l], p);
          if (0 != b) return -4;
          g.mode == ka.JOINT_STEREO &&
            ((z[l] = E[l][2] + E[l][3]), 0 < z[l] && (z[l] = E[l][3] / z[l]));
          for (b = 0; b < f.channels_out; b++) {
            var x = f.l3_side.tt[l][b];
            x.block_type = p[b];
            x.mixed_block_flag = 0;
          }
        }
      else
        for (l = 0; l < f.mode_gr; l++)
          for (b = 0; b < f.channels_out; b++)
            (f.l3_side.tt[l][b].block_type = d.NORM_TYPE),
              (f.l3_side.tt[l][b].mixed_block_flag = 0),
              (A[l][b] = w[l][b] = 700);
      0 == f.ATH.useAdjust
        ? (f.ATH.adjust = 1)
        : ((b = f.loudness_sq[0][0]),
          (E = f.loudness_sq[1][0]),
          2 == f.channels_out
            ? ((b += f.loudness_sq[0][1]), (E += f.loudness_sq[1][1]))
            : ((b += b), (E += E)),
          2 == f.mode_gr && (b = Math.max(b, E)),
          (b = 0.5 * b * f.ATH.aaSensitivityP),
          0.03125 < b
            ? (1 <= f.ATH.adjust
                ? (f.ATH.adjust = 1)
                : f.ATH.adjust < f.ATH.adjustLimit &&
                  (f.ATH.adjust = f.ATH.adjustLimit),
              (f.ATH.adjustLimit = 1))
            : ((E = 31.98 * b + 6.25e-4),
              f.ATH.adjust >= E
                ? ((f.ATH.adjust *= 0.075 * E + 0.925),
                  f.ATH.adjust < E && (f.ATH.adjust = E))
                : f.ATH.adjustLimit >= E
                ? (f.ATH.adjust = E)
                : f.ATH.adjust < f.ATH.adjustLimit &&
                  (f.ATH.adjust = f.ATH.adjustLimit),
              (f.ATH.adjustLimit = E)));
      ta.mdct_sub48(f, c[0], c[1]);
      f.mode_ext = d.MPG_MD_LR_LR;
      if (g.force_ms) f.mode_ext = d.MPG_MD_MS_LR;
      else if (g.mode == ka.JOINT_STEREO) {
        for (l = m = E = 0; l < f.mode_gr; l++)
          for (b = 0; b < f.channels_out; b++) (E += A[l][b]), (m += w[l][b]);
        E <= 1 * m &&
          ((E = f.l3_side.tt[0]),
          (b = f.l3_side.tt[f.mode_gr - 1]),
          E[0].block_type == E[1].block_type &&
            b[0].block_type == b[1].block_type &&
            (f.mode_ext = d.MPG_MD_MS_LR));
      }
      f.mode_ext == k && ((e = n), (w = A));
      if (g.analysis && null != f.pinfo)
        for (l = 0; l < f.mode_gr; l++)
          for (b = 0; b < f.channels_out; b++)
            (f.pinfo.ms_ratio[l] = f.ms_ratio[l]),
              (f.pinfo.ms_ener_ratio[l] = z[l]),
              (f.pinfo.blocktype[l][b] = f.l3_side.tt[l][b].block_type),
              (f.pinfo.pe[l][b] = w[l][b]),
              K.arraycopy(f.l3_side.tt[l][b].xr, 0, f.pinfo.xr[l][b], 0, 576),
              f.mode_ext == k &&
                ((f.pinfo.ers[l][b] = f.pinfo.ers[l][b + 2]),
                K.arraycopy(
                  f.pinfo.energy[l][b + 2],
                  0,
                  f.pinfo.energy[l][b],
                  0,
                  f.pinfo.energy[l][b].length
                ));
      if (g.VBR == M.vbr_off || g.VBR == M.vbr_abr) {
        for (n = 0; 18 > n; n++) f.nsPsy.pefirbuf[n] = f.nsPsy.pefirbuf[n + 1];
        for (l = A = 0; l < f.mode_gr; l++)
          for (b = 0; b < f.channels_out; b++) A += w[l][b];
        f.nsPsy.pefirbuf[18] = A;
        A = f.nsPsy.pefirbuf[9];
        for (n = 0; 9 > n; n++)
          A += (f.nsPsy.pefirbuf[n] + f.nsPsy.pefirbuf[18 - n]) * d.fircoef[n];
        A = (3350 * f.mode_gr * f.channels_out) / A;
        for (l = 0; l < f.mode_gr; l++)
          for (b = 0; b < f.channels_out; b++) w[l][b] *= A;
      }
      f.iteration_loop.iteration_loop(g, w, z, e);
      q.format_bitstream(g);
      a = q.copy_buffer(f, a, h, D, 1);
      g.bWriteVbrTag && B.addVbrFrame(g);
      if (g.analysis && null != f.pinfo) {
        for (b = 0; b < f.channels_out; b++) {
          for (h = 0; h < r; h++)
            f.pinfo.pcmdata[b][h] = f.pinfo.pcmdata[b][h + g.framesize];
          for (h = r; 1600 > h; h++) f.pinfo.pcmdata[b][h] = c[b][h - r];
        }
        t.set_frame_pinfo(g, e);
      }
      f.bitrate_stereoMode_Hist[f.bitrate_index][4]++;
      f.bitrate_stereoMode_Hist[15][4]++;
      2 == f.channels_out &&
        (f.bitrate_stereoMode_Hist[f.bitrate_index][f.mode_ext]++,
        f.bitrate_stereoMode_Hist[15][f.mode_ext]++);
      for (g = 0; g < f.mode_gr; ++g)
        for (c = 0; c < f.channels_out; ++c)
          (h = f.l3_side.tt[g][c].block_type | 0),
            0 != f.l3_side.tt[g][c].mixed_block_flag && (h = 4),
            f.bitrate_blockType_Hist[f.bitrate_index][h]++,
            f.bitrate_blockType_Hist[f.bitrate_index][5]++,
            f.bitrate_blockType_Hist[15][h]++,
            f.bitrate_blockType_Hist[15][5]++;
      return a;
    };
  }
  function Qc() {
    this.size = this.pos = this.want = this.seen = this.sum = 0;
    this.bag = null;
    this.TotalFrameSize = this.nBytesWritten = this.nVbrNumFrames = 0;
  }
  function Rc() {
    this.tt = [
      [null, null],
      [null, null],
    ];
    this.resvDrain_post = this.resvDrain_pre = this.private_bits = this.main_data_begin = 0;
    this.scfsi = [Y(4), Y(4)];
    for (var d = 0; 2 > d; d++)
      for (var k = 0; 2 > k; k++) this.tt[d][k] = new Ab();
  }
  function Sc() {
    this.last_en_subshort = ra([4, 9]);
    this.lastAttacks = Y(4);
    this.pefirbuf = H(19);
    this.longfact = H(d.SBMAX_l);
    this.shortfact = H(d.SBMAX_s);
    this.attackthre_s = this.attackthre = 0;
  }
  function ic() {
    this.l = H(d.SBMAX_l);
    this.s = ra([d.SBMAX_s, 3]);
    var r = this;
    this.assign = function (k) {
      K.arraycopy(k.l, 0, r.l, 0, d.SBMAX_l);
      for (var q = 0; q < d.SBMAX_s; q++)
        for (var C = 0; 3 > C; C++) r.s[q][C] = k.s[q][C];
    };
  }
  function da() {
    function r() {
      this.ptr = this.write_timing = 0;
      this.buf = new Int8Array(40);
    }
    this.fill_buffer_resample_init = this.iteration_init_init = this.lame_encode_frame_init = this.Class_ID = 0;
    this.mfbuf = ra([2, da.MFSIZE]);
    this.full_outer_loop = this.use_best_huffman = this.subblock_gain = this.noise_shaping_stop = this.psymodel = this.substep_shaping = this.noise_shaping_amp = this.noise_shaping = this.highpass2 = this.highpass1 = this.lowpass2 = this.lowpass1 = this.mode_ext = this.samplerate_index = this.bitrate_index = this.VBR_max_bitrate = this.VBR_min_bitrate = this.mf_size = this.mf_samples_to_encode = this.resample_ratio = this.channels_out = this.channels_in = this.mode_gr = 0;
    this.l3_side = new Rc();
    this.ms_ratio = H(2);
    this.slot_lag = this.frac_SpF = this.padding = 0;
    this.tag_spec = null;
    this.nMusicCRC = 0;
    this.OldValue = Y(2);
    this.CurrentStep = Y(2);
    this.masking_lower = 0;
    this.bv_scf = Y(576);
    this.pseudohalf = Y(na.SFBMAX);
    this.sfb21_extra = !1;
    this.inbuf_old = Array(2);
    this.blackfilt = Array(2 * da.BPC + 1);
    this.itime = new Float64Array(2);
    this.sideinfo_len = 0;
    this.sb_sample = ra([2, 2, 18, d.SBLIMIT]);
    this.amp_filter = H(32);
    this.header = Array(da.MAX_HEADER_BUF);
    this.ResvMax = this.ResvSize = this.ancillary_flag = this.w_ptr = this.h_ptr = 0;
    this.scalefac_band = new ha();
    this.minval_l = H(d.CBANDS);
    this.minval_s = H(d.CBANDS);
    this.nb_1 = ra([4, d.CBANDS]);
    this.nb_2 = ra([4, d.CBANDS]);
    this.nb_s1 = ra([4, d.CBANDS]);
    this.nb_s2 = ra([4, d.CBANDS]);
    this.s3_ll = this.s3_ss = null;
    this.decay = 0;
    this.thm = Array(4);
    this.en = Array(4);
    this.tot_ener = H(4);
    this.loudness_sq = ra([2, 2]);
    this.loudness_sq_save = H(2);
    this.mld_l = H(d.SBMAX_l);
    this.mld_s = H(d.SBMAX_s);
    this.bm_l = Y(d.SBMAX_l);
    this.bo_l = Y(d.SBMAX_l);
    this.bm_s = Y(d.SBMAX_s);
    this.bo_s = Y(d.SBMAX_s);
    this.npart_s = this.npart_l = 0;
    this.s3ind = db([d.CBANDS, 2]);
    this.s3ind_s = db([d.CBANDS, 2]);
    this.numlines_s = Y(d.CBANDS);
    this.numlines_l = Y(d.CBANDS);
    this.rnumlines_l = H(d.CBANDS);
    this.mld_cb_l = H(d.CBANDS);
    this.mld_cb_s = H(d.CBANDS);
    this.numlines_l_num1 = this.numlines_s_num1 = 0;
    this.pe = H(4);
    this.ms_ener_ratio_old = this.ms_ratio_l_old = this.ms_ratio_s_old = 0;
    this.blocktype_old = Y(2);
    this.nsPsy = new Sc();
    this.VBR_seek_table = new Qc();
    this.PSY = this.ATH = null;
    this.nogap_current = this.nogap_total = 0;
    this.findPeakSample = this.findReplayGain = this.decode_on_the_fly = !0;
    this.AudiophileGain = this.RadioGain = this.PeakSample = 0;
    this.rgdata = null;
    this.noclipScale = this.noclipGainChange = 0;
    this.bitrate_stereoMode_Hist = db([16, 5]);
    this.bitrate_blockType_Hist = db([16, 6]);
    this.hip = this.pinfo = null;
    this.in_buffer_nsamples = 0;
    this.iteration_loop = this.in_buffer_1 = this.in_buffer_0 = null;
    for (var k = 0; k < this.en.length; k++) this.en[k] = new ic();
    for (k = 0; k < this.thm.length; k++) this.thm[k] = new ic();
    for (k = 0; k < this.header.length; k++) this.header[k] = new r();
  }
  function Tc() {
    function r(d, k, g) {
      var b = 0,
        l,
        a,
        h;
      g <<= 1;
      var q = k + g;
      l = 4;
      do {
        var e, n, c, f, B, z, w;
        w = l >> 1;
        f = l;
        B = l << 1;
        z = B + f;
        l = B << 1;
        a = k;
        h = a + w;
        do {
          var A, v, p, m;
          v = d[a + 0] - d[a + f];
          A = d[a + 0] + d[a + f];
          m = d[a + B] - d[a + z];
          p = d[a + B] + d[a + z];
          d[a + B] = A - p;
          d[a + 0] = A + p;
          d[a + z] = v - m;
          d[a + f] = v + m;
          v = d[h + 0] - d[h + f];
          A = d[h + 0] + d[h + f];
          m = X.SQRT2 * d[h + z];
          p = X.SQRT2 * d[h + B];
          d[h + B] = A - p;
          d[h + 0] = A + p;
          d[h + z] = v - m;
          d[h + f] = v + m;
          h += l;
          a += l;
        } while (a < q);
        n = C[b + 0];
        e = C[b + 1];
        for (c = 1; c < w; c++) {
          var x, y;
          x = 1 - 2 * e * e;
          y = 2 * e * n;
          a = k + c;
          h = k + f - c;
          do {
            var W, u, J, H, F;
            W = y * d[a + f] - x * d[h + f];
            p = x * d[a + f] + y * d[h + f];
            v = d[a + 0] - p;
            A = d[a + 0] + p;
            J = d[h + 0] - W;
            u = d[h + 0] + W;
            W = y * d[a + z] - x * d[h + z];
            p = x * d[a + z] + y * d[h + z];
            m = d[a + B] - p;
            p = d[a + B] + p;
            F = d[h + B] - W;
            H = d[h + B] + W;
            W = e * p - n * F;
            p = n * p + e * F;
            d[a + B] = A - p;
            d[a + 0] = A + p;
            d[h + z] = J - W;
            d[h + f] = J + W;
            W = n * H - e * m;
            p = e * H + n * m;
            d[h + B] = u - p;
            d[h + 0] = u + p;
            d[a + z] = v - W;
            d[a + f] = v + W;
            h += l;
            a += l;
          } while (a < q);
          x = n;
          n = x * C[b + 0] - e * C[b + 1];
          e = x * C[b + 1] + e * C[b + 0];
        }
        b += 2;
      } while (l < g);
    }
    var k = H(d.BLKSIZE),
      q = H(d.BLKSIZE_s / 2),
      C = [
        0.9238795325112867,
        0.3826834323650898,
        0.9951847266721969,
        0.0980171403295606,
        0.9996988186962042,
        0.02454122852291229,
        0.9999811752826011,
        0.006135884649154475,
      ],
      B = [
        0,
        128,
        64,
        192,
        32,
        160,
        96,
        224,
        16,
        144,
        80,
        208,
        48,
        176,
        112,
        240,
        8,
        136,
        72,
        200,
        40,
        168,
        104,
        232,
        24,
        152,
        88,
        216,
        56,
        184,
        120,
        248,
        4,
        132,
        68,
        196,
        36,
        164,
        100,
        228,
        20,
        148,
        84,
        212,
        52,
        180,
        116,
        244,
        12,
        140,
        76,
        204,
        44,
        172,
        108,
        236,
        28,
        156,
        92,
        220,
        60,
        188,
        124,
        252,
        2,
        130,
        66,
        194,
        34,
        162,
        98,
        226,
        18,
        146,
        82,
        210,
        50,
        178,
        114,
        242,
        10,
        138,
        74,
        202,
        42,
        170,
        106,
        234,
        26,
        154,
        90,
        218,
        58,
        186,
        122,
        250,
        6,
        134,
        70,
        198,
        38,
        166,
        102,
        230,
        22,
        150,
        86,
        214,
        54,
        182,
        118,
        246,
        14,
        142,
        78,
        206,
        46,
        174,
        110,
        238,
        30,
        158,
        94,
        222,
        62,
        190,
        126,
        254,
      ];
    this.fft_short = function (k, C, g, b, l) {
      for (k = 0; 3 > k; k++) {
        var a = d.BLKSIZE_s / 2,
          h = 65535 & (192 * (k + 1)),
          D = d.BLKSIZE_s / 8 - 1;
        do {
          var e,
            n,
            c,
            f,
            E,
            z = B[D << 2] & 255;
          e = q[z] * b[g][l + z + h];
          E = q[127 - z] * b[g][l + z + h + 128];
          n = e - E;
          e += E;
          c = q[z + 64] * b[g][l + z + h + 64];
          E = q[63 - z] * b[g][l + z + h + 192];
          f = c - E;
          c += E;
          a -= 4;
          C[k][a + 0] = e + c;
          C[k][a + 2] = e - c;
          C[k][a + 1] = n + f;
          C[k][a + 3] = n - f;
          e = q[z + 1] * b[g][l + z + h + 1];
          E = q[126 - z] * b[g][l + z + h + 129];
          n = e - E;
          e += E;
          c = q[z + 65] * b[g][l + z + h + 65];
          E = q[62 - z] * b[g][l + z + h + 193];
          f = c - E;
          c += E;
          C[k][a + d.BLKSIZE_s / 2 + 0] = e + c;
          C[k][a + d.BLKSIZE_s / 2 + 2] = e - c;
          C[k][a + d.BLKSIZE_s / 2 + 1] = n + f;
          C[k][a + d.BLKSIZE_s / 2 + 3] = n - f;
        } while (0 <= --D);
        r(C[k], a, d.BLKSIZE_s / 2);
      }
    };
    this.fft_long = function (q, C, g, b, l) {
      q = d.BLKSIZE / 8 - 1;
      var a = d.BLKSIZE / 2;
      do {
        var h,
          D,
          e,
          n,
          c,
          f = B[q] & 255;
        h = k[f] * b[g][l + f];
        c = k[f + 512] * b[g][l + f + 512];
        D = h - c;
        h += c;
        e = k[f + 256] * b[g][l + f + 256];
        c = k[f + 768] * b[g][l + f + 768];
        n = e - c;
        e += c;
        a -= 4;
        C[a + 0] = h + e;
        C[a + 2] = h - e;
        C[a + 1] = D + n;
        C[a + 3] = D - n;
        h = k[f + 1] * b[g][l + f + 1];
        c = k[f + 513] * b[g][l + f + 513];
        D = h - c;
        h += c;
        e = k[f + 257] * b[g][l + f + 257];
        c = k[f + 769] * b[g][l + f + 769];
        n = e - c;
        e += c;
        C[a + d.BLKSIZE / 2 + 0] = h + e;
        C[a + d.BLKSIZE / 2 + 2] = h - e;
        C[a + d.BLKSIZE / 2 + 1] = D + n;
        C[a + d.BLKSIZE / 2 + 3] = D - n;
      } while (0 <= --q);
      r(C, a, d.BLKSIZE / 2);
    };
    this.init_fft = function (r) {
      for (r = 0; r < d.BLKSIZE; r++)
        k[r] =
          0.42 -
          0.5 * Math.cos((2 * Math.PI * (r + 0.5)) / d.BLKSIZE) +
          0.08 * Math.cos((4 * Math.PI * (r + 0.5)) / d.BLKSIZE);
      for (r = 0; r < d.BLKSIZE_s / 2; r++)
        q[r] = 0.5 * (1 - Math.cos((2 * Math.PI * (r + 0.5)) / d.BLKSIZE_s));
    };
  }
  function jc() {
    function r(a, c) {
      for (var b = 0, m = 0; m < d.BLKSIZE / 2; ++m) b += a[m] * c.ATH.eql_w[m];
      return (b *= z);
    }
    function k(a, d, c, b, g, f) {
      var e;
      if (d > a)
        if (d < a * A) e = d / a;
        else return a + d;
      else {
        if (a >= d * A) return a + d;
        e = a / d;
      }
      a += d;
      if (6 >= b + 3) {
        if (e >= w) return a;
        b = 0 | X.FAST_LOG10_X(e, 16);
        return a * x[b];
      }
      b = 0 | X.FAST_LOG10_X(e, 16);
      d = 0 != f ? g.ATH.cb_s[c] * g.ATH.adjust : g.ATH.cb_l[c] * g.ATH.adjust;
      return a < v * d
        ? a > d
          ? ((c = 1),
            13 >= b && (c = y[b]),
            (d = X.FAST_LOG10_X(a / d, 10 / 15)),
            a * ((m[b] - c) * d + c))
          : 13 < b
          ? a
          : a * y[b]
        : a * m[b];
    }
    function q(a, d, c) {
      var b;
      0 > a && (a = 0);
      0 > d && (d = 0);
      if (0 >= a) return d;
      if (0 >= d) return a;
      b = d > a ? d / a : a / d;
      if (-2 <= c && 2 >= c) {
        if (b >= w) return a + d;
        c = 0 | X.FAST_LOG10_X(b, 16);
        return (a + d) * W[c];
      }
      if (b < A) return a + d;
      a < d && (a = d);
      return a;
    }
    function C(a, c, b, m, g) {
      var f,
        e,
        k = 0,
        h = 0;
      for (f = e = 0; f < d.SBMAX_s; ++e, ++f) {
        for (var l = a.bo_s[f], n = a.npart_s, l = l < n ? l : n; e < l; )
          (k += c[e]), (h += b[e]), e++;
        a.en[m].s[f][g] = k;
        a.thm[m].s[f][g] = h;
        if (e >= n) {
          ++f;
          break;
        }
        h = a.PSY.bo_s_weight[f];
        n = 1 - h;
        k = h * c[e];
        h *= b[e];
        a.en[m].s[f][g] += k;
        a.thm[m].s[f][g] += h;
        k = n * c[e];
        h = n * b[e];
      }
      for (; f < d.SBMAX_s; ++f) (a.en[m].s[f][g] = 0), (a.thm[m].s[f][g] = 0);
    }
    function B(a, c, b, m) {
      var g,
        f,
        e = 0,
        k = 0;
      for (g = f = 0; g < d.SBMAX_l; ++f, ++g) {
        for (var h = a.bo_l[g], l = a.npart_l, h = h < l ? h : l; f < h; )
          (e += c[f]), (k += b[f]), f++;
        a.en[m].l[g] = e;
        a.thm[m].l[g] = k;
        if (f >= l) {
          ++g;
          break;
        }
        k = a.PSY.bo_l_weight[g];
        l = 1 - k;
        e = k * c[f];
        k *= b[f];
        a.en[m].l[g] += e;
        a.thm[m].l[g] += k;
        e = l * c[f];
        k = l * b[f];
      }
      for (; g < d.SBMAX_l; ++g) (a.en[m].l[g] = 0), (a.thm[m].l[g] = 0);
    }
    function t(a, d, c) {
      return 1 <= c ? a : 0 >= c ? d : 0 < d ? Math.pow(a / d, c) * d : 0;
    }
    function V(a, c) {
      for (var b = 309.07, m = 0; m < d.SBMAX_s - 1; m++)
        for (var g = 0; 3 > g; g++) {
          var f = a.thm.s[m][g];
          if (0 < f) {
            var f = f * c,
              e = a.en.s[m][g];
            e > f &&
              (b =
                e > 1e10 * f
                  ? b + 23.02585092994046 * u[m]
                  : b + u[m] * X.FAST_LOG10(e / f));
          }
        }
      return b;
    }
    function g(a, c) {
      for (var b = 281.0575, m = 0; m < d.SBMAX_l - 1; m++) {
        var g = a.thm.l[m];
        if (0 < g) {
          var g = g * c,
            f = a.en.l[m];
          f > g &&
            (b =
              f > 1e10 * g
                ? b + 23.02585092994046 * pa[m]
                : b + pa[m] * X.FAST_LOG10(f / g));
        }
      }
      return b;
    }
    function b(a, d, c, b, m) {
      var g, f;
      for (g = f = 0; g < a.npart_l; ++g) {
        var e = 0,
          k = 0,
          h;
        for (h = 0; h < a.numlines_l[g]; ++h, ++f) {
          var l = d[f],
            e = e + l;
          k < l && (k = l);
        }
        c[g] = e;
        b[g] = k;
        m[g] = e * a.rnumlines_l[g];
      }
    }
    function l(a, d, c, b) {
      var m = p.length - 1,
        g = 0,
        f = c[g] + c[g + 1];
      if (0 < f) {
        var e = d[g];
        e < d[g + 1] && (e = d[g + 1]);
        f =
          (20 * (2 * e - f)) /
          (f * (a.numlines_l[g] + a.numlines_l[g + 1] - 1));
        f |= 0;
        f > m && (f = m);
        b[g] = f;
      } else b[g] = 0;
      for (g = 1; g < a.npart_l - 1; g++)
        (f = c[g - 1] + c[g] + c[g + 1]),
          0 < f
            ? ((e = d[g - 1]),
              e < d[g] && (e = d[g]),
              e < d[g + 1] && (e = d[g + 1]),
              (f =
                (20 * (3 * e - f)) /
                (f *
                  (a.numlines_l[g - 1] +
                    a.numlines_l[g] +
                    a.numlines_l[g + 1] -
                    1))),
              (f |= 0),
              f > m && (f = m),
              (b[g] = f))
            : (b[g] = 0);
      f = c[g - 1] + c[g];
      0 < f
        ? ((e = d[g - 1]),
          e < d[g] && (e = d[g]),
          (f =
            (20 * (2 * e - f)) /
            (f * (a.numlines_l[g - 1] + a.numlines_l[g] - 1))),
          (f |= 0),
          f > m && (f = m),
          (b[g] = f))
        : (b[g] = 0);
    }
    function a(a, d, c, b, m, g, f) {
      var e = 2 * g;
      m = 0 < g ? Math.pow(10, m) : 1;
      for (var k, h, l = 0; l < f; ++l) {
        var n = a[2][l],
          p = a[3][l],
          y = d[0][l],
          q = d[1][l],
          u = d[2][l],
          x = d[3][l];
        y <= 1.58 * q && q <= 1.58 * y
          ? ((k = c[l] * n),
            (h = Math.max(u, Math.min(x, c[l] * p))),
            (k = Math.max(x, Math.min(u, k))))
          : ((h = u), (k = x));
        0 < g &&
          ((x = b[l] * m),
          (y = Math.min(Math.max(y, x), Math.max(q, x))),
          (u = Math.max(h, x)),
          (x = Math.max(k, x)),
          (q = u + x),
          0 < q && y * e < q && ((y = (y * e) / q), (u *= y), (x *= y)),
          (h = Math.min(u, h)),
          (k = Math.min(x, k)));
        h > n && (h = n);
        k > p && (k = p);
        d[2][l] = h;
        d[3][l] = k;
      }
    }
    function h(a, d) {
      var c;
      c = 0 <= a ? 27 * -a : a * d;
      return -72 >= c ? 0 : Math.exp(0.2302585093 * c);
    }
    function D(a) {
      0 > a && (a = 0);
      a *= 0.001;
      return 13 * Math.atan(0.76 * a) + 3.5 * Math.atan((a * a) / 56.25);
    }
    function e(a, c, b, m, g, f, e, k, h, l, n, p) {
      var y = H(d.CBANDS + 1),
        q = k / (15 < p ? 1152 : 384),
        u = Y(d.HBLKSIZE),
        x;
      k /= h;
      var r = 0,
        v = 0;
      for (x = 0; x < d.CBANDS; x++) {
        var t, w;
        t = D(k * r);
        y[x] = k * r;
        for (w = r; 0.34 > D(k * w) - t && w <= h / 2; w++);
        a[x] = w - r;
        for (v = x + 1; r < w; ) u[r++] = x;
        if (r > h / 2) {
          r = h / 2;
          ++x;
          break;
        }
      }
      y[x] = k * r;
      for (r = 0; r < p; r++)
        (x = l[r]),
          (t = l[r + 1]),
          (x = 0 | Math.floor(0.5 + n * (x - 0.5))),
          0 > x && (x = 0),
          (w = 0 | Math.floor(0.5 + n * (t - 0.5))),
          w > h / 2 && (w = h / 2),
          (b[r] = (u[x] + u[w]) / 2),
          (c[r] = u[w]),
          (e[r] = (q * t - y[c[r]]) / (y[c[r] + 1] - y[c[r]])),
          0 > e[r] ? (e[r] = 0) : 1 < e[r] && (e[r] = 1),
          (t = D(k * l[r] * n)),
          (t = Math.min(t, 15.5) / 15.5),
          (f[r] = Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * t)) - 2.5));
      for (c = r = 0; c < v; c++)
        (b = a[c]),
          (t = D(k * r)),
          (f = D(k * (r + b - 1))),
          (m[c] = 0.5 * (t + f)),
          (t = D(k * (r - 0.5))),
          (f = D(k * (r + b - 0.5))),
          (g[c] = f - t),
          (r += b);
      return v;
    }
    function n(a, c, b, m, g, f) {
      var e = ra([d.CBANDS, d.CBANDS]),
        k = 0;
      if (f)
        for (var l = 0; l < c; l++)
          for (f = 0; f < c; f++) {
            var n;
            var y = (n = void 0),
              y = (n = void 0);
            n = b[l] - b[f];
            n = 0 <= n ? 3 * n : 1.5 * n;
            0.5 <= n && 2.5 >= n
              ? ((y = n - 0.5), (y = 8 * (y * y - 2 * y)))
              : (y = 0);
            n += 0.474;
            n = 15.811389 + 7.5 * n - 17.5 * Math.sqrt(1 + n * n);
            -60 >= n
              ? (n = 0)
              : ((n = Math.exp(0.2302585093 * (y + n))), (n /= 0.6609193));
            y = n * m[f];
            e[l][f] = y * g[l];
          }
      else
        for (f = 0; f < c; f++) {
          n = 15 + Math.min(21 / b[f], 12);
          var p;
          var l = n,
            q = (y = 0);
          p = 0;
          var u = (q = void 0);
          for (p = 0; 1e-20 < h(p, l); --p);
          q = p;
          for (u = 0; 1e-12 < Math.abs(u - q); )
            (p = (u + q) / 2), 0 < h(p, l) ? (u = p) : (q = p);
          y = q;
          for (p = 0; 1e-20 < h(p, l); p += 1);
          q = 0;
          for (u = p; 1e-12 < Math.abs(u - q); )
            (p = (u + q) / 2), 0 < h(p, l) ? (q = p) : (u = p);
          for (var q = u, u = 0, x = void 0, x = 0; 1e3 >= x; ++x)
            (p = y + (x * (q - y)) / 1e3), (p = h(p, l)), (u += p);
          p = 1001 / (u * (q - y));
          for (l = 0; l < c; l++)
            (y = p * h(b[l] - b[f], n) * m[f]), (e[l][f] = y * g[l]);
        }
      for (l = 0; l < c; l++) {
        for (f = 0; f < c && !(0 < e[l][f]); f++);
        a[l][0] = f;
        for (f = c - 1; 0 < f && !(0 < e[l][f]); f--);
        a[l][1] = f;
        k += a[l][1] - a[l][0] + 1;
      }
      b = H(k);
      for (l = m = 0; l < c; l++)
        for (f = a[l][0]; f <= a[l][1]; f++) b[m++] = e[l][f];
      return b;
    }
    function c(a) {
      a = D(a);
      a = Math.min(a, 15.5) / 15.5;
      return Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * a)) - 2.5);
    }
    function f(a, c) {
      -0.3 > a && (a = 3410);
      a = Math.max(0.1, a / 1e3);
      return (
        3.64 * Math.pow(a, -0.8) -
        6.8 * Math.exp(-0.6 * Math.pow(a - 3.4, 2)) +
        6 * Math.exp(-0.15 * Math.pow(a - 8.7, 2)) +
        0.001 * (0.6 + 0.04 * c) * Math.pow(a, 4)
      );
    }
    var E = new Tc(),
      z = 1 / 217621504 / (d.BLKSIZE / 2),
      w,
      A,
      v,
      p = [
        1,
        0.79433,
        0.63096,
        0.63096,
        0.63096,
        0.63096,
        0.63096,
        0.25119,
        0.11749,
      ],
      m = [
        3.3246 * 3.3246,
        3.23837 * 3.23837,
        9.9500500969,
        9.0247369744,
        8.1854926609,
        7.0440875649,
        2.46209 * 2.46209,
        2.284 * 2.284,
        4.4892710641,
        1.96552 * 1.96552,
        1.82335 * 1.82335,
        1.69146 * 1.69146,
        2.4621061921,
        2.1508568964,
        1.37074 * 1.37074,
        1.31036 * 1.31036,
        1.5691069696,
        1.4555939904,
        1.16203 * 1.16203,
        1.2715945225,
        1.09428 * 1.09428,
        1.0659 * 1.0659,
        1.0779838276,
        1.0382591025,
        1,
      ],
      x = [
        1.7782755904,
        1.35879 * 1.35879,
        1.38454 * 1.38454,
        1.39497 * 1.39497,
        1.40548 * 1.40548,
        1.3537 * 1.3537,
        1.6999465924,
        1.22321 * 1.22321,
        1.3169398564,
        1,
      ],
      y = [
        5.5396212496,
        2.29259 * 2.29259,
        4.9868695969,
        2.12675 * 2.12675,
        2.02545 * 2.02545,
        1.87894 * 1.87894,
        1.74303 * 1.74303,
        1.61695 * 1.61695,
        2.2499700001,
        1.39148 * 1.39148,
        1.29083 * 1.29083,
        1.19746 * 1.19746,
        1.2339655056,
        1.0779838276,
      ],
      W = [
        1.7782755904,
        1.35879 * 1.35879,
        1.38454 * 1.38454,
        1.39497 * 1.39497,
        1.40548 * 1.40548,
        1.3537 * 1.3537,
        1.6999465924,
        1.22321 * 1.22321,
        1.3169398564,
        1,
      ],
      u = [11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6, 97.6, 130],
      pa = [
        6.8,
        5.8,
        5.8,
        6.4,
        6.5,
        9.9,
        12.1,
        14.4,
        15,
        18.9,
        21.6,
        26.9,
        34.2,
        40.2,
        46.8,
        56.5,
        60.7,
        73.9,
        85.7,
        93.4,
        126.1,
      ],
      la = [
        -1.730326e-17,
        -0.01703172,
        -1.349528e-17,
        0.0418072,
        -6.73278e-17,
        -0.0876324,
        -3.0835e-17,
        0.1863476,
        -1.104424e-16,
        -0.627638,
      ];
    this.L3psycho_anal_ns = function (a, c, m, f, e, h, n, y, q, u) {
      var x = a.internal_flags,
        v = ra([2, d.BLKSIZE]),
        w = ra([2, 3, d.BLKSIZE_s]),
        F = H(d.CBANDS + 1),
        z = H(d.CBANDS + 1),
        A = H(d.CBANDS + 2),
        W = Y(2),
        D = Y(2),
        pa,
        R,
        Fa,
        L,
        K,
        Z,
        Da,
        O,
        Q = ra([2, 576]),
        P,
        da = Y(d.CBANDS + 2),
        N = Y(d.CBANDS + 2);
      Ia.fill(N, 0);
      pa = x.channels_out;
      a.mode == ka.JOINT_STEREO && (pa = 4);
      P =
        a.VBR == M.vbr_off
          ? 0 == x.ResvMax
            ? 0
            : (x.ResvSize / x.ResvMax) * 0.5
          : a.VBR == M.vbr_rh || a.VBR == M.vbr_mtrh || a.VBR == M.vbr_mt
          ? 0.6
          : 1;
      for (R = 0; R < x.channels_out; R++) {
        var ua = c[R],
          ma = m + 576 - 350 - 21 + 192;
        for (L = 0; 576 > L; L++) {
          var Ga, Sa;
          Ga = ua[ma + L + 10];
          for (K = Sa = 0; 9 > K; K += 2)
            (Ga += la[K] * (ua[ma + L + K] + ua[ma + L + 21 - K])),
              (Sa +=
                la[K + 1] * (ua[ma + L + K + 1] + ua[ma + L + 21 - K - 1]));
          Q[R][L] = Ga + Sa;
        }
        e[f][R].en.assign(x.en[R]);
        e[f][R].thm.assign(x.thm[R]);
        2 < pa &&
          (h[f][R].en.assign(x.en[R + 2]), h[f][R].thm.assign(x.thm[R + 2]));
      }
      for (R = 0; R < pa; R++) {
        var ea = H(12),
          Oa = [0, 0, 0, 0],
          kc = H(12),
          na = 1,
          Ca,
          ha = H(d.CBANDS),
          Qa = H(d.CBANDS),
          va = [0, 0, 0, 0],
          db = H(d.HBLKSIZE),
          fb = ra([3, d.HBLKSIZE_s]);
        for (L = 0; 3 > L; L++)
          (ea[L] = x.nsPsy.last_en_subshort[R][L + 6]),
            (kc[L] = ea[L] / x.nsPsy.last_en_subshort[R][L + 4]),
            (Oa[0] += ea[L]);
        if (2 == R)
          for (L = 0; 576 > L; L++) {
            var eb, Gb;
            eb = Q[0][L];
            Gb = Q[1][L];
            Q[0][L] = eb + Gb;
            Q[1][L] = eb - Gb;
          }
        var vb = Q[R & 1],
          Hb = 0;
        for (L = 0; 9 > L; L++) {
          for (var tb = Hb + 64, Ta = 1; Hb < tb; Hb++)
            Ta < Math.abs(vb[Hb]) && (Ta = Math.abs(vb[Hb]));
          x.nsPsy.last_en_subshort[R][L] = ea[L + 3] = Ta;
          Oa[1 + L / 3] += Ta;
          Ta =
            Ta > ea[L + 3 - 2]
              ? Ta / ea[L + 3 - 2]
              : ea[L + 3 - 2] > 10 * Ta
              ? ea[L + 3 - 2] / (10 * Ta)
              : 0;
          kc[L + 3] = Ta;
        }
        if (a.analysis) {
          var Pb = kc[0];
          for (L = 1; 12 > L; L++) Pb < kc[L] && (Pb = kc[L]);
          x.pinfo.ers[f][R] = x.pinfo.ers_save[R];
          x.pinfo.ers_save[R] = Pb;
        }
        Ca = 3 == R ? x.nsPsy.attackthre_s : x.nsPsy.attackthre;
        for (L = 0; 12 > L; L++)
          0 == va[L / 3] && kc[L] > Ca && (va[L / 3] = (L % 3) + 1);
        for (L = 1; 4 > L; L++)
          1.7 > (Oa[L - 1] > Oa[L] ? Oa[L - 1] / Oa[L] : Oa[L] / Oa[L - 1]) &&
            ((va[L] = 0), 1 == L && (va[0] = 0));
        0 != va[0] && 0 != x.nsPsy.lastAttacks[R] && (va[0] = 0);
        if (3 == x.nsPsy.lastAttacks[R] || 0 != va[0] + va[1] + va[2] + va[3])
          (na = 0),
            0 != va[1] && 0 != va[0] && (va[1] = 0),
            0 != va[2] && 0 != va[1] && (va[2] = 0),
            0 != va[3] && 0 != va[2] && (va[3] = 0);
        2 > R ? (D[R] = na) : 0 == na && (D[0] = D[1] = 0);
        q[R] = x.tot_ener[R];
        var S = a,
          Pa = db,
          Qb = fb,
          Ua = v,
          wb = R & 1,
          Ya = w,
          Va = R & 1,
          mb = f,
          Ja = R,
          za = c,
          ub = m,
          $a = S.internal_flags;
        if (2 > Ja)
          E.fft_long($a, Ua[wb], Ja, za, ub),
            E.fft_short($a, Ya[Va], Ja, za, ub);
        else if (2 == Ja) {
          for (var fa = d.BLKSIZE - 1; 0 <= fa; --fa) {
            var Rb = Ua[wb + 0][fa],
              Ib = Ua[wb + 1][fa];
            Ua[wb + 0][fa] = (Rb + Ib) * X.SQRT2 * 0.5;
            Ua[wb + 1][fa] = (Rb - Ib) * X.SQRT2 * 0.5;
          }
          for (var Ka = 2; 0 <= Ka; --Ka)
            for (fa = d.BLKSIZE_s - 1; 0 <= fa; --fa)
              (Rb = Ya[Va + 0][Ka][fa]),
                (Ib = Ya[Va + 1][Ka][fa]),
                (Ya[Va + 0][Ka][fa] = (Rb + Ib) * X.SQRT2 * 0.5),
                (Ya[Va + 1][Ka][fa] = (Rb - Ib) * X.SQRT2 * 0.5);
        }
        Pa[0] = Ua[wb + 0][0];
        Pa[0] *= Pa[0];
        for (fa = d.BLKSIZE / 2 - 1; 0 <= fa; --fa) {
          var ac = Ua[wb + 0][d.BLKSIZE / 2 - fa],
            Bb = Ua[wb + 0][d.BLKSIZE / 2 + fa];
          Pa[d.BLKSIZE / 2 - fa] = 0.5 * (ac * ac + Bb * Bb);
        }
        for (Ka = 2; 0 <= Ka; --Ka)
          for (
            Qb[Ka][0] = Ya[Va + 0][Ka][0],
              Qb[Ka][0] *= Qb[Ka][0],
              fa = d.BLKSIZE_s / 2 - 1;
            0 <= fa;
            --fa
          )
            (ac = Ya[Va + 0][Ka][d.BLKSIZE_s / 2 - fa]),
              (Bb = Ya[Va + 0][Ka][d.BLKSIZE_s / 2 + fa]),
              (Qb[Ka][d.BLKSIZE_s / 2 - fa] = 0.5 * (ac * ac + Bb * Bb));
        for (var Ea = 0, fa = 11; fa < d.HBLKSIZE; fa++) Ea += Pa[fa];
        $a.tot_ener[Ja] = Ea;
        if (S.analysis) {
          for (fa = 0; fa < d.HBLKSIZE; fa++)
            ($a.pinfo.energy[mb][Ja][fa] = $a.pinfo.energy_save[Ja][fa]),
              ($a.pinfo.energy_save[Ja][fa] = Pa[fa]);
          $a.pinfo.pe[mb][Ja] = $a.pe[Ja];
        }
        2 == S.athaa_loudapprox &&
          2 > Ja &&
          (($a.loudness_sq[mb][Ja] = $a.loudness_sq_save[Ja]),
          ($a.loudness_sq_save[Ja] = r(Pa, $a)));
        b(x, db, F, ha, Qa);
        l(x, ha, Qa, da);
        for (O = 0; 3 > O; O++) {
          for (
            var qc,
              Ba,
              gb = fb,
              hb = z,
              Sb = A,
              Jb = R,
              bc = O,
              aa = a.internal_flags,
              nb = void 0,
              oa = void 0,
              oa = (nb = 0);
            oa < aa.npart_s;
            ++oa
          ) {
            for (
              var ab = 0, lc = 0, Ab = aa.numlines_s[oa], ib = 0;
              ib < Ab;
              ++ib, ++nb
            ) {
              var rc = gb[bc][nb],
                ab = ab + rc;
              lc < rc && (lc = rc);
            }
            hb[oa] = ab;
          }
          for (nb = oa = 0; oa < aa.npart_s; oa++) {
            var ob = aa.s3ind_s[oa][0],
              Cb = aa.s3_ss[nb++] * hb[ob];
            for (++ob; ob <= aa.s3ind_s[oa][1]; )
              (Cb += aa.s3_ss[nb] * hb[ob]), ++nb, ++ob;
            var Tb = 2 * aa.nb_s1[Jb][oa];
            Sb[oa] = Math.min(Cb, Tb);
            aa.blocktype_old[Jb & 1] == d.SHORT_TYPE &&
              ((Tb = 16 * aa.nb_s2[Jb][oa]), (Sb[oa] = Math.min(Tb, Sb[oa])));
            aa.nb_s2[Jb][oa] = aa.nb_s1[Jb][oa];
            aa.nb_s1[Jb][oa] = Cb;
          }
          for (; oa <= d.CBANDS; ++oa) (hb[oa] = 0), (Sb[oa] = 0);
          C(x, z, A, R, O);
          for (Da = 0; Da < d.SBMAX_s; Da++) {
            Ba = x.thm[R].s[Da][O];
            Ba *= 0.8;
            if (2 <= va[O] || 1 == va[O + 1]) {
              var Kb = 0 != O ? O - 1 : 2,
                Ta = t(x.thm[R].s[Da][Kb], Ba, 0.6 * P);
              Ba = Math.min(Ba, Ta);
            }
            if (1 == va[O])
              (Kb = 0 != O ? O - 1 : 2),
                (Ta = t(x.thm[R].s[Da][Kb], Ba, 0.3 * P)),
                (Ba = Math.min(Ba, Ta));
            else if (
              (0 != O && 3 == va[O - 1]) ||
              (0 == O && 3 == x.nsPsy.lastAttacks[R])
            )
              (Kb = 2 != O ? O + 1 : 0),
                (Ta = t(x.thm[R].s[Da][Kb], Ba, 0.3 * P)),
                (Ba = Math.min(Ba, Ta));
            qc = ea[3 * O + 3] + ea[3 * O + 4] + ea[3 * O + 5];
            6 * ea[3 * O + 5] < qc &&
              ((Ba *= 0.5), 6 * ea[3 * O + 4] < qc && (Ba *= 0.5));
            x.thm[R].s[Da][O] = Ba;
          }
        }
        x.nsPsy.lastAttacks[R] = va[2];
        for (Fa = Z = 0; Fa < x.npart_l; Fa++) {
          for (
            var pb = x.s3ind[Fa][0],
              Ub = F[pb] * p[da[pb]],
              qb = x.s3_ll[Z++] * Ub;
            ++pb <= x.s3ind[Fa][1];

          )
            (Ub = F[pb] * p[da[pb]]),
              (qb = k(qb, x.s3_ll[Z++] * Ub, pb, pb - Fa, x, 0));
          qb *= 0.158489319246111;
          A[Fa] =
            x.blocktype_old[R & 1] == d.SHORT_TYPE
              ? qb
              : t(
                  Math.min(qb, Math.min(2 * x.nb_1[R][Fa], 16 * x.nb_2[R][Fa])),
                  qb,
                  P
                );
          x.nb_2[R][Fa] = x.nb_1[R][Fa];
          x.nb_1[R][Fa] = qb;
        }
        for (; Fa <= d.CBANDS; ++Fa) (F[Fa] = 0), (A[Fa] = 0);
        B(x, F, A, R);
      }
      if (
        (a.mode == ka.STEREO || a.mode == ka.JOINT_STEREO) &&
        0 < a.interChRatio
      ) {
        var Db = a.interChRatio,
          ba = a.internal_flags;
        if (1 < ba.channels_out) {
          for (var La = 0; La < d.SBMAX_l; La++) {
            var cc = ba.thm[0].l[La],
              Lb = ba.thm[1].l[La];
            ba.thm[0].l[La] += Lb * Db;
            ba.thm[1].l[La] += cc * Db;
          }
          for (La = 0; La < d.SBMAX_s; La++)
            for (var rb = 0; 3 > rb; rb++)
              (cc = ba.thm[0].s[La][rb]),
                (Lb = ba.thm[1].s[La][rb]),
                (ba.thm[0].s[La][rb] += Lb * Db),
                (ba.thm[1].s[La][rb] += cc * Db);
        }
      }
      if (a.mode == ka.JOINT_STEREO) {
        for (var Wa, ga = 0; ga < d.SBMAX_l; ga++)
          if (
            !(
              x.thm[0].l[ga] > 1.58 * x.thm[1].l[ga] ||
              x.thm[1].l[ga] > 1.58 * x.thm[0].l[ga]
            )
          ) {
            var Za = x.mld_l[ga] * x.en[3].l[ga],
              sb = Math.max(x.thm[2].l[ga], Math.min(x.thm[3].l[ga], Za)),
              Za = x.mld_l[ga] * x.en[2].l[ga],
              sc = Math.max(x.thm[3].l[ga], Math.min(x.thm[2].l[ga], Za));
            x.thm[2].l[ga] = sb;
            x.thm[3].l[ga] = sc;
          }
        for (ga = 0; ga < d.SBMAX_s; ga++)
          for (var wa = 0; 3 > wa; wa++)
            x.thm[0].s[ga][wa] > 1.58 * x.thm[1].s[ga][wa] ||
              x.thm[1].s[ga][wa] > 1.58 * x.thm[0].s[ga][wa] ||
              ((Za = x.mld_s[ga] * x.en[3].s[ga][wa]),
              (sb = Math.max(
                x.thm[2].s[ga][wa],
                Math.min(x.thm[3].s[ga][wa], Za)
              )),
              (Za = x.mld_s[ga] * x.en[2].s[ga][wa]),
              (sc = Math.max(
                x.thm[3].s[ga][wa],
                Math.min(x.thm[2].s[ga][wa], Za)
              )),
              (x.thm[2].s[ga][wa] = sb),
              (x.thm[3].s[ga][wa] = sc));
        Wa = a.msfix;
        if (0 < Math.abs(Wa)) {
          for (
            var Mb = Wa,
              mc = Mb,
              dc = Math.pow(10, a.ATHlower * x.ATH.adjust),
              Mb = 2 * Mb,
              mc = 2 * mc,
              Aa = 0;
            Aa < d.SBMAX_l;
            Aa++
          ) {
            var Vb, Ra, Ha, bb;
            bb = x.ATH.cb_l[x.bm_l[Aa]] * dc;
            Vb = Math.min(
              Math.max(x.thm[0].l[Aa], bb),
              Math.max(x.thm[1].l[Aa], bb)
            );
            Ra = Math.max(x.thm[2].l[Aa], bb);
            Ha = Math.max(x.thm[3].l[Aa], bb);
            if (Vb * Mb < Ra + Ha) {
              var ec = (Vb * mc) / (Ra + Ha);
              Ra *= ec;
              Ha *= ec;
            }
            x.thm[2].l[Aa] = Math.min(Ra, x.thm[2].l[Aa]);
            x.thm[3].l[Aa] = Math.min(Ha, x.thm[3].l[Aa]);
          }
          dc *= d.BLKSIZE_s / d.BLKSIZE;
          for (Aa = 0; Aa < d.SBMAX_s; Aa++)
            for (var xa = 0; 3 > xa; xa++)
              (bb = x.ATH.cb_s[x.bm_s[Aa]] * dc),
                (Vb = Math.min(
                  Math.max(x.thm[0].s[Aa][xa], bb),
                  Math.max(x.thm[1].s[Aa][xa], bb)
                )),
                (Ra = Math.max(x.thm[2].s[Aa][xa], bb)),
                (Ha = Math.max(x.thm[3].s[Aa][xa], bb)),
                Vb * Mb < Ra + Ha &&
                  ((ec = (Vb * Mb) / (Ra + Ha)), (Ra *= ec), (Ha *= ec)),
                (x.thm[2].s[Aa][xa] = Math.min(x.thm[2].s[Aa][xa], Ra)),
                (x.thm[3].s[Aa][xa] = Math.min(x.thm[3].s[Aa][xa], Ha));
        }
      }
      var jb = a.internal_flags;
      a.short_blocks != sa.short_block_coupled ||
        (0 != D[0] && 0 != D[1]) ||
        (D[0] = D[1] = 0);
      for (var Na = 0; Na < jb.channels_out; Na++)
        (W[Na] = d.NORM_TYPE),
          a.short_blocks == sa.short_block_dispensed && (D[Na] = 1),
          a.short_blocks == sa.short_block_forced && (D[Na] = 0),
          0 != D[Na]
            ? jb.blocktype_old[Na] == d.SHORT_TYPE && (W[Na] = d.STOP_TYPE)
            : ((W[Na] = d.SHORT_TYPE),
              jb.blocktype_old[Na] == d.NORM_TYPE &&
                (jb.blocktype_old[Na] = d.START_TYPE),
              jb.blocktype_old[Na] == d.STOP_TYPE &&
                (jb.blocktype_old[Na] = d.SHORT_TYPE)),
          (u[Na] = jb.blocktype_old[Na]),
          (jb.blocktype_old[Na] = W[Na]);
      for (R = 0; R < pa; R++) {
        var Wb,
          kb = 0,
          ca,
          Eb;
        if (1 < R) {
          Wb = y;
          kb = -2;
          ca = d.NORM_TYPE;
          if (u[0] == d.SHORT_TYPE || u[1] == d.SHORT_TYPE) ca = d.SHORT_TYPE;
          Eb = h[f][R - 2];
        } else (Wb = n), (kb = 0), (ca = u[R]), (Eb = e[f][R]);
        Wb[kb + R] =
          ca == d.SHORT_TYPE ? V(Eb, x.masking_lower) : g(Eb, x.masking_lower);
        a.analysis && (x.pinfo.pe[f][R] = Wb[kb + R]);
      }
      return 0;
    };
    var F = [
      -1.730326e-17,
      -0.01703172,
      -1.349528e-17,
      0.0418072,
      -6.73278e-17,
      -0.0876324,
      -3.0835e-17,
      0.1863476,
      -1.104424e-16,
      -0.627638,
    ];
    this.L3psycho_anal_vbr = function (c, m, f, e, k, h, n, x, y, u) {
      for (
        var v = c.internal_flags,
          w,
          z,
          A = H(d.HBLKSIZE),
          W = ra([3, d.HBLKSIZE_s]),
          D = ra([2, d.BLKSIZE]),
          M = ra([2, 3, d.BLKSIZE_s]),
          la = ra([4, d.CBANDS]),
          O = ra([4, d.CBANDS]),
          R = ra([4, 3]),
          K = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ],
          L = Y(2),
          pa = c.mode == ka.JOINT_STEREO ? 4 : v.channels_out,
          Z = ra([2, 576]),
          Q = c.internal_flags,
          da = Q.channels_out,
          ua = c.mode == ka.JOINT_STEREO ? 4 : da,
          P = 0;
        P < da;
        P++
      ) {
        firbuf = m[P];
        for (var ma = f + 576 - 350 - 21 + 192, N = 0; 576 > N; N++) {
          var na, Ca;
          na = firbuf[ma + N + 10];
          for (var Ga = (Ca = 0); 9 > Ga; Ga += 2)
            (na += F[Ga] * (firbuf[ma + N + Ga] + firbuf[ma + N + 21 - Ga])),
              (Ca +=
                F[Ga + 1] *
                (firbuf[ma + N + Ga + 1] + firbuf[ma + N + 21 - Ga - 1]));
          Z[P][N] = na + Ca;
        }
        k[e][P].en.assign(Q.en[P]);
        k[e][P].thm.assign(Q.thm[P]);
        2 < ua &&
          (h[e][P].en.assign(Q.en[P + 2]), h[e][P].thm.assign(Q.thm[P + 2]));
      }
      for (P = 0; P < ua; P++) {
        var Sa = H(12),
          ea = H(12),
          Oa = [0, 0, 0, 0],
          Ia = Z[P & 1],
          ha = 0,
          eb = 3 == P ? Q.nsPsy.attackthre_s : Q.nsPsy.attackthre,
          Qa = 1;
        if (2 == P)
          for (N = 0, Ga = 576; 0 < Ga; ++N, --Ga) {
            var db = Z[0][N],
              va = Z[1][N];
            Z[0][N] = db + va;
            Z[1][N] = db - va;
          }
        for (N = 0; 3 > N; N++)
          (ea[N] = Q.nsPsy.last_en_subshort[P][N + 6]),
            (Sa[N] = ea[N] / Q.nsPsy.last_en_subshort[P][N + 4]),
            (Oa[0] += ea[N]);
        for (N = 0; 9 > N; N++) {
          for (var vb = ha + 64, fb = 1; ha < vb; ha++)
            fb < Math.abs(Ia[ha]) && (fb = Math.abs(Ia[ha]));
          Q.nsPsy.last_en_subshort[P][N] = ea[N + 3] = fb;
          Oa[1 + N / 3] += fb;
          fb =
            fb > ea[N + 3 - 2]
              ? fb / ea[N + 3 - 2]
              : ea[N + 3 - 2] > 10 * fb
              ? ea[N + 3 - 2] / (10 * fb)
              : 0;
          Sa[N + 3] = fb;
        }
        for (N = 0; 3 > N; ++N) {
          var ub = ea[3 * N + 3] + ea[3 * N + 4] + ea[3 * N + 5],
            Gb = 1;
          6 * ea[3 * N + 5] < ub &&
            ((Gb *= 0.5), 6 * ea[3 * N + 4] < ub && (Gb *= 0.5));
          R[P][N] = Gb;
        }
        if (c.analysis) {
          for (var tb = Sa[0], N = 1; 12 > N; N++) tb < Sa[N] && (tb = Sa[N]);
          Q.pinfo.ers[e][P] = Q.pinfo.ers_save[P];
          Q.pinfo.ers_save[P] = tb;
        }
        for (N = 0; 12 > N; N++)
          0 == K[P][N / 3] && Sa[N] > eb && (K[P][N / 3] = (N % 3) + 1);
        for (N = 1; 4 > N; N++) {
          var Hb = Oa[N - 1],
            Ab = Oa[N];
          4e4 > Math.max(Hb, Ab) &&
            Hb < 1.7 * Ab &&
            Ab < 1.7 * Hb &&
            (1 == N && K[P][0] <= K[P][N] && (K[P][0] = 0), (K[P][N] = 0));
        }
        K[P][0] <= Q.nsPsy.lastAttacks[P] && (K[P][0] = 0);
        if (
          3 == Q.nsPsy.lastAttacks[P] ||
          0 != K[P][0] + K[P][1] + K[P][2] + K[P][3]
        )
          (Qa = 0),
            0 != K[P][1] && 0 != K[P][0] && (K[P][1] = 0),
            0 != K[P][2] && 0 != K[P][1] && (K[P][2] = 0),
            0 != K[P][3] && 0 != K[P][2] && (K[P][3] = 0);
        2 > P ? (L[P] = Qa) : 0 == Qa && (L[0] = L[1] = 0);
        y[P] = Q.tot_ener[P];
      }
      var Ta = c.internal_flags;
      c.short_blocks != sa.short_block_coupled ||
        (0 != L[0] && 0 != L[1]) ||
        (L[0] = L[1] = 0);
      for (var Pb = 0; Pb < Ta.channels_out; Pb++)
        c.short_blocks == sa.short_block_dispensed && (L[Pb] = 1),
          c.short_blocks == sa.short_block_forced && (L[Pb] = 0);
      for (var S = 0; S < pa; S++) {
        var Pa = S & 1;
        w = D;
        var Qb = c,
          Ua = S,
          wb = e,
          Ya = A,
          Va = w,
          mb = Pa,
          Ja = Qb.internal_flags;
        if (2 > Ua) E.fft_long(Ja, Va[mb], Ua, m, f);
        else if (2 == Ua)
          for (var za = d.BLKSIZE - 1; 0 <= za; --za) {
            var $b = Va[mb + 0][za],
              $a = Va[mb + 1][za];
            Va[mb + 0][za] = ($b + $a) * X.SQRT2 * 0.5;
            Va[mb + 1][za] = ($b - $a) * X.SQRT2 * 0.5;
          }
        Ya[0] = Va[mb + 0][0];
        Ya[0] *= Ya[0];
        for (za = d.BLKSIZE / 2 - 1; 0 <= za; --za) {
          var fa = Va[mb + 0][d.BLKSIZE / 2 - za],
            Rb = Va[mb + 0][d.BLKSIZE / 2 + za];
          Ya[d.BLKSIZE / 2 - za] = 0.5 * (fa * fa + Rb * Rb);
        }
        for (var Ib = 0, za = 11; za < d.HBLKSIZE; za++) Ib += Ya[za];
        Ja.tot_ener[Ua] = Ib;
        if (Qb.analysis) {
          for (za = 0; za < d.HBLKSIZE; za++)
            (Ja.pinfo.energy[wb][Ua][za] = Ja.pinfo.energy_save[Ua][za]),
              (Ja.pinfo.energy_save[Ua][za] = Ya[za]);
          Ja.pinfo.pe[wb][Ua] = Ja.pe[Ua];
        }
        var Ka = S,
          ac = A,
          Bb = c.internal_flags;
        2 == c.athaa_loudapprox &&
          2 > Ka &&
          ((Bb.loudness_sq[e][Ka] = Bb.loudness_sq_save[Ka]),
          (Bb.loudness_sq_save[Ka] = r(ac, Bb)));
        if (0 != L[Pa]) {
          var Ea = v,
            qc = A,
            Ba = la[S],
            gb = O[S],
            hb = S,
            Sb = H(d.CBANDS),
            Jb = H(d.CBANDS),
            bc = Y(d.CBANDS + 2),
            aa = void 0;
          b(Ea, qc, Ba, Sb, Jb);
          l(Ea, Sb, Jb, bc);
          for (var nb = 0, aa = 0; aa < Ea.npart_l; aa++) {
            var oa,
              ab,
              lc,
              ic,
              ib = Ea.s3ind[aa][0],
              rc = Ea.s3ind[aa][1],
              ob = 0,
              Cb = 0,
              ob = bc[ib],
              Cb = Cb + 1;
            ab = Ea.s3_ll[nb] * Ba[ib] * p[bc[ib]];
            ++nb;
            for (++ib; ib <= rc; )
              (ob += bc[ib]),
                (Cb += 1),
                (oa = Ea.s3_ll[nb] * Ba[ib] * p[bc[ib]]),
                (ab = ic = q(ab, oa, ib - aa)),
                ++nb,
                ++ib;
            ob = (1 + 2 * ob) / (2 * Cb);
            lc = 0.5 * p[ob];
            ab *= lc;
            if (Ea.blocktype_old[hb & 1] == d.SHORT_TYPE) {
              var Tb = 2 * Ea.nb_1[hb][aa];
              gb[aa] = 0 < Tb ? Math.min(ab, Tb) : Math.min(ab, 0.3 * Ba[aa]);
            } else {
              var Kb = 16 * Ea.nb_2[hb][aa],
                pb = 2 * Ea.nb_1[hb][aa];
              0 >= Kb && (Kb = ab);
              0 >= pb && (pb = ab);
              Tb =
                Ea.blocktype_old[hb & 1] == d.NORM_TYPE ? Math.min(pb, Kb) : pb;
              gb[aa] = Math.min(ab, Tb);
            }
            Ea.nb_2[hb][aa] = Ea.nb_1[hb][aa];
            Ea.nb_1[hb][aa] = ab;
            oa = Sb[aa];
            oa *= Ea.minval_l[aa];
            oa *= lc;
            gb[aa] > oa && (gb[aa] = oa);
            1 < Ea.masking_lower && (gb[aa] *= Ea.masking_lower);
            gb[aa] > Ba[aa] && (gb[aa] = Ba[aa]);
            1 > Ea.masking_lower && (gb[aa] *= Ea.masking_lower);
          }
          for (; aa < d.CBANDS; ++aa) (Ba[aa] = 0), (gb[aa] = 0);
        } else
          for (var Ub = v, qb = S, Db = 0; Db < Ub.npart_l; Db++)
            (Ub.nb_2[qb][Db] = Ub.nb_1[qb][Db]), (Ub.nb_1[qb][Db] = 0);
      }
      2 == L[0] + L[1] &&
        c.mode == ka.JOINT_STEREO &&
        a(
          la,
          O,
          v.mld_cb_l,
          v.ATH.cb_l,
          c.ATHlower * v.ATH.adjust,
          c.msfix,
          v.npart_l
        );
      for (S = 0; S < pa; S++) (Pa = S & 1), 0 != L[Pa] && B(v, la[S], O[S], S);
      for (var ba = 0; 3 > ba; ba++) {
        for (S = 0; S < pa; ++S)
          if (((Pa = S & 1), 0 != L[Pa])) {
            var La = v,
              cc = S;
            if (0 == ba)
              for (var Lb = 0; Lb < La.npart_s; Lb++)
                (La.nb_s2[cc][Lb] = La.nb_s1[cc][Lb]), (La.nb_s1[cc][Lb] = 0);
          } else {
            z = M;
            var rb = S,
              Wa = ba,
              ga = W,
              Za = z,
              sb = Pa,
              sc = c.internal_flags;
            0 == Wa && 2 > rb && E.fft_short(sc, Za[sb], rb, m, f);
            if (2 == rb)
              for (var wa = d.BLKSIZE_s - 1; 0 <= wa; --wa) {
                var Mb = Za[sb + 0][Wa][wa],
                  mc = Za[sb + 1][Wa][wa];
                Za[sb + 0][Wa][wa] = (Mb + mc) * X.SQRT2 * 0.5;
                Za[sb + 1][Wa][wa] = (Mb - mc) * X.SQRT2 * 0.5;
              }
            ga[Wa][0] = Za[sb + 0][Wa][0];
            ga[Wa][0] *= ga[Wa][0];
            for (wa = d.BLKSIZE_s / 2 - 1; 0 <= wa; --wa) {
              var dc = Za[sb + 0][Wa][d.BLKSIZE_s / 2 - wa],
                Aa = Za[sb + 0][Wa][d.BLKSIZE_s / 2 + wa];
              ga[Wa][d.BLKSIZE_s / 2 - wa] = 0.5 * (dc * dc + Aa * Aa);
            }
            for (
              var Vb = W,
                Ra = la[S],
                Ha = O[S],
                bb = S,
                ec = ba,
                xa = c.internal_flags,
                jb = new float[d.CBANDS](),
                Na = H(d.CBANDS),
                Wb = void 0,
                kb = void 0,
                ca = void 0,
                Eb = new int[d.CBANDS](),
                ca = (kb = 0);
              ca < xa.npart_s;
              ++ca
            ) {
              for (
                var Ob = 0, Zb = 0, jc = xa.numlines_s[ca], Wb = 0;
                Wb < jc;
                ++Wb, ++kb
              ) {
                var Bc = Vb[ec][kb],
                  Ob = Ob + Bc;
                Zb < Bc && (Zb = Bc);
              }
              Ra[ca] = Ob;
              jb[ca] = Zb;
              Na[ca] = Ob / jc;
            }
            for (; ca < d.CBANDS; ++ca) (jb[ca] = 0), (Na[ca] = 0);
            var Xb = xa,
              xb = jb,
              fc = Na,
              nc = Eb,
              oc = p.length - 1,
              ja = 0,
              Xa = fc[ja] + fc[ja + 1];
            if (0 < Xa) {
              var lb = xb[ja];
              lb < xb[ja + 1] && (lb = xb[ja + 1]);
              var Xa =
                  (20 * (2 * lb - Xa)) /
                  (Xa * (Xb.numlines_s[ja] + Xb.numlines_s[ja + 1] - 1)),
                yb = 0 | Xa;
              yb > oc && (yb = oc);
              nc[ja] = yb;
            } else nc[ja] = 0;
            for (ja = 1; ja < Xb.npart_s - 1; ja++)
              (Xa = fc[ja - 1] + fc[ja] + fc[ja + 1]),
                0 < Xa
                  ? ((lb = xb[ja - 1]),
                    lb < xb[ja] && (lb = xb[ja]),
                    lb < xb[ja + 1] && (lb = xb[ja + 1]),
                    (Xa =
                      (20 * (3 * lb - Xa)) /
                      (Xa *
                        (Xb.numlines_s[ja - 1] +
                          Xb.numlines_s[ja] +
                          Xb.numlines_s[ja + 1] -
                          1))),
                    (yb = 0 | Xa),
                    yb > oc && (yb = oc),
                    (nc[ja] = yb))
                  : (nc[ja] = 0);
            Xa = fc[ja - 1] + fc[ja];
            0 < Xa
              ? ((lb = xb[ja - 1]),
                lb < xb[ja] && (lb = xb[ja]),
                (Xa =
                  (20 * (2 * lb - Xa)) /
                  (Xa * (Xb.numlines_s[ja - 1] + Xb.numlines_s[ja] - 1))),
                (yb = 0 | Xa),
                yb > oc && (yb = oc),
                (nc[ja] = yb))
              : (nc[ja] = 0);
            for (kb = ca = 0; ca < xa.npart_s; ca++) {
              var Fb = xa.s3ind_s[ca][0],
                vc = xa.s3ind_s[ca][1],
                pc,
                wc,
                Nb,
                gc,
                Cc;
              pc = Eb[Fb];
              wc = 1;
              gc = xa.s3_ss[kb] * Ra[Fb] * p[Eb[Fb]];
              ++kb;
              for (++Fb; Fb <= vc; )
                (pc += Eb[Fb]),
                  (wc += 1),
                  (Nb = xa.s3_ss[kb] * Ra[Fb] * p[Eb[Fb]]),
                  (gc = q(gc, Nb, Fb - ca)),
                  ++kb,
                  ++Fb;
              pc = (1 + 2 * pc) / (2 * wc);
              Cc = 0.5 * p[pc];
              gc *= Cc;
              Ha[ca] = gc;
              xa.nb_s2[bb][ca] = xa.nb_s1[bb][ca];
              xa.nb_s1[bb][ca] = gc;
              Nb = jb[ca];
              Nb *= xa.minval_s[ca];
              Nb *= Cc;
              Ha[ca] > Nb && (Ha[ca] = Nb);
              1 < xa.masking_lower && (Ha[ca] *= xa.masking_lower);
              Ha[ca] > Ra[ca] && (Ha[ca] = Ra[ca]);
              1 > xa.masking_lower && (Ha[ca] *= xa.masking_lower);
            }
            for (; ca < d.CBANDS; ++ca) (Ra[ca] = 0), (Ha[ca] = 0);
          }
        0 == L[0] + L[1] &&
          c.mode == ka.JOINT_STEREO &&
          a(
            la,
            O,
            v.mld_cb_s,
            v.ATH.cb_s,
            c.ATHlower * v.ATH.adjust,
            c.msfix,
            v.npart_s
          );
        for (S = 0; S < pa; ++S)
          (Pa = S & 1), 0 == L[Pa] && C(v, la[S], O[S], S, ba);
      }
      for (S = 0; S < pa; S++)
        if (((Pa = S & 1), 0 == L[Pa]))
          for (var hc = 0; hc < d.SBMAX_s; hc++) {
            for (var Ec = H(3), ba = 0; 3 > ba; ba++) {
              var cb = v.thm[S].s[hc][ba],
                cb = 0.8 * cb;
              if (2 <= K[S][ba] || 1 == K[S][ba + 1])
                var tc = 0 != ba ? ba - 1 : 2,
                  uc = t(v.thm[S].s[hc][tc], cb, 0.36),
                  cb = Math.min(cb, uc);
              else if (1 == K[S][ba])
                (tc = 0 != ba ? ba - 1 : 2),
                  (uc = t(v.thm[S].s[hc][tc], cb, 0.18)),
                  (cb = Math.min(cb, uc));
              else if (
                (0 != ba && 3 == K[S][ba - 1]) ||
                (0 == ba && 3 == v.nsPsy.lastAttacks[S])
              )
                (tc = 2 != ba ? ba + 1 : 0),
                  (uc = t(v.thm[S].s[hc][tc], cb, 0.18)),
                  (cb = Math.min(cb, uc));
              cb *= R[S][ba];
              Ec[ba] = cb;
            }
            for (ba = 0; 3 > ba; ba++) v.thm[S].s[hc][ba] = Ec[ba];
          }
      for (S = 0; S < pa; S++) v.nsPsy.lastAttacks[S] = K[S][2];
      for (var Yb = c.internal_flags, zb = 0; zb < Yb.channels_out; zb++) {
        var Dc = d.NORM_TYPE;
        0 != L[zb]
          ? Yb.blocktype_old[zb] == d.SHORT_TYPE && (Dc = d.STOP_TYPE)
          : ((Dc = d.SHORT_TYPE),
            Yb.blocktype_old[zb] == d.NORM_TYPE &&
              (Yb.blocktype_old[zb] = d.START_TYPE),
            Yb.blocktype_old[zb] == d.STOP_TYPE &&
              (Yb.blocktype_old[zb] = d.SHORT_TYPE));
        u[zb] = Yb.blocktype_old[zb];
        Yb.blocktype_old[zb] = Dc;
      }
      for (S = 0; S < pa; S++) {
        var xc, yc, zc, Ac;
        if (1 < S) {
          xc = x;
          yc = -2;
          zc = d.NORM_TYPE;
          if (u[0] == d.SHORT_TYPE || u[1] == d.SHORT_TYPE) zc = d.SHORT_TYPE;
          Ac = h[e][S - 2];
        } else (xc = n), (yc = 0), (zc = u[S]), (Ac = k[e][S]);
        xc[yc + S] =
          zc == d.SHORT_TYPE ? V(Ac, v.masking_lower) : g(Ac, v.masking_lower);
        c.analysis && (v.pinfo.pe[e][S] = xc[yc + S]);
      }
      return 0;
    };
    this.psymodel_init = function (a) {
      var b = a.internal_flags,
        m,
        f = !0,
        g = 13,
        k = 0,
        h = 0,
        l = -8.25,
        p = -4.5,
        x = H(d.CBANDS),
        y = H(d.CBANDS),
        q = H(d.CBANDS),
        u = a.out_samplerate;
      switch (a.experimentalZ) {
        default:
        case 0:
          f = !0;
          break;
        case 1:
          f = a.VBR == M.vbr_mtrh || a.VBR == M.vbr_mt ? !1 : !0;
          break;
        case 2:
          f = !1;
          break;
        case 3:
          (g = 8), (k = -1.75), (h = -0.0125), (l = -8.25), (p = -2.25);
      }
      b.ms_ener_ratio_old = 0.25;
      b.blocktype_old[0] = b.blocktype_old[1] = d.NORM_TYPE;
      for (m = 0; 4 > m; ++m) {
        for (var r = 0; r < d.CBANDS; ++r)
          (b.nb_1[m][r] = 1e20),
            (b.nb_2[m][r] = 1e20),
            (b.nb_s1[m][r] = b.nb_s2[m][r] = 1);
        for (var t = 0; t < d.SBMAX_l; t++)
          (b.en[m].l[t] = 1e20), (b.thm[m].l[t] = 1e20);
        for (r = 0; 3 > r; ++r) {
          for (t = 0; t < d.SBMAX_s; t++)
            (b.en[m].s[t][r] = 1e20), (b.thm[m].s[t][r] = 1e20);
          b.nsPsy.lastAttacks[m] = 0;
        }
        for (r = 0; 9 > r; r++) b.nsPsy.last_en_subshort[m][r] = 10;
      }
      b.loudness_sq_save[0] = b.loudness_sq_save[1] = 0;
      b.npart_l = e(
        b.numlines_l,
        b.bo_l,
        b.bm_l,
        x,
        y,
        b.mld_l,
        b.PSY.bo_l_weight,
        u,
        d.BLKSIZE,
        b.scalefac_band.l,
        d.BLKSIZE / 1152,
        d.SBMAX_l
      );
      for (m = 0; m < b.npart_l; m++)
        (t = k),
          x[m] >= g &&
            (t = (h * (x[m] - g)) / (24 - g) + (k * (24 - x[m])) / (24 - g)),
          (q[m] = Math.pow(10, t / 10)),
          (b.rnumlines_l[m] = 0 < b.numlines_l[m] ? 1 / b.numlines_l[m] : 0);
      b.s3_ll = n(b.s3ind, b.npart_l, x, y, q, f);
      for (m = r = 0; m < b.npart_l; m++) {
        h = vb.MAX_VALUE;
        for (t = 0; t < b.numlines_l[m]; t++, r++)
          (k = (u * r) / (1e3 * d.BLKSIZE)),
            (k = this.ATHformula(1e3 * k, a) - 20),
            (k = Math.pow(10, 0.1 * k)),
            (k *= b.numlines_l[m]),
            h > k && (h = k);
        b.ATH.cb_l[m] = h;
        h = -20 + (20 * x[m]) / 10;
        6 < h && (h = 100);
        -15 > h && (h = -15);
        h -= 8;
        b.minval_l[m] = Math.pow(10, h / 10) * b.numlines_l[m];
      }
      b.npart_s = e(
        b.numlines_s,
        b.bo_s,
        b.bm_s,
        x,
        y,
        b.mld_s,
        b.PSY.bo_s_weight,
        u,
        d.BLKSIZE_s,
        b.scalefac_band.s,
        d.BLKSIZE_s / 384,
        d.SBMAX_s
      );
      for (m = r = 0; m < b.npart_s; m++) {
        t = l;
        x[m] >= g &&
          (t = (p * (x[m] - g)) / (24 - g) + (l * (24 - x[m])) / (24 - g));
        q[m] = Math.pow(10, t / 10);
        h = vb.MAX_VALUE;
        for (t = 0; t < b.numlines_s[m]; t++, r++)
          (k = (u * r) / (1e3 * d.BLKSIZE_s)),
            (k = this.ATHformula(1e3 * k, a) - 20),
            (k = Math.pow(10, 0.1 * k)),
            (k *= b.numlines_s[m]),
            h > k && (h = k);
        b.ATH.cb_s[m] = h;
        h = -7 + (7 * x[m]) / 12;
        12 < x[m] && (h *= 1 + 3.1 * Math.log(1 + h));
        12 > x[m] && (h *= 1 + 2.3 * Math.log(1 - h));
        -15 > h && (h = -15);
        h -= 8;
        b.minval_s[m] = Math.pow(10, h / 10) * b.numlines_s[m];
      }
      b.s3_ss = n(b.s3ind_s, b.npart_s, x, y, q, f);
      w = Math.pow(10, 0.5625);
      A = Math.pow(10, 1.5);
      v = Math.pow(10, 1.5);
      E.init_fft(b);
      b.decay = Math.exp(-2.302585092994046 / ((0.01 * u) / 192));
      m = 3.5;
      0 != (a.exp_nspsytune & 2) && (m = 1);
      0 < Math.abs(a.msfix) && (m = a.msfix);
      a.msfix = m;
      for (f = 0; f < b.npart_l; f++)
        b.s3ind[f][1] > b.npart_l - 1 && (b.s3ind[f][1] = b.npart_l - 1);
      b.ATH.decay = Math.pow(10, ((576 * b.mode_gr) / u) * -1.2);
      b.ATH.adjust = 0.01;
      b.ATH.adjustLimit = 1;
      if (-1 != a.ATHtype) {
        r = a.out_samplerate / d.BLKSIZE;
        for (m = k = f = 0; m < d.BLKSIZE / 2; ++m)
          (k += r),
            (b.ATH.eql_w[m] = 1 / Math.pow(10, this.ATHformula(k, a) / 10)),
            (f += b.ATH.eql_w[m]);
        f = 1 / f;
        for (m = d.BLKSIZE / 2; 0 <= --m; ) b.ATH.eql_w[m] *= f;
      }
      for (f = r = 0; f < b.npart_s; ++f)
        for (m = 0; m < b.numlines_s[f]; ++m) ++r;
      for (f = r = 0; f < b.npart_l; ++f)
        for (m = 0; m < b.numlines_l[f]; ++m) ++r;
      for (m = r = 0; m < b.npart_l; m++)
        (k = (u * (r + b.numlines_l[m] / 2)) / (1 * d.BLKSIZE)),
          (b.mld_cb_l[m] = c(k)),
          (r += b.numlines_l[m]);
      for (; m < d.CBANDS; ++m) b.mld_cb_l[m] = 1;
      for (m = r = 0; m < b.npart_s; m++)
        (k = (u * (r + b.numlines_s[m] / 2)) / (1 * d.BLKSIZE_s)),
          (b.mld_cb_s[m] = c(k)),
          (r += b.numlines_s[m]);
      for (; m < d.CBANDS; ++m) b.mld_cb_s[m] = 1;
      return 0;
    };
    this.ATHformula = function (a, c) {
      var b;
      switch (c.ATHtype) {
        case 0:
          b = f(a, 9);
          break;
        case 1:
          b = f(a, -1);
          break;
        case 2:
          b = f(a, 0);
          break;
        case 3:
          b = f(a, 1) + 6;
          break;
        case 4:
          b = f(a, c.ATHcurve);
          break;
        default:
          b = f(a, 0);
      }
      return b;
    };
  }
  function V() {
    function J() {
      this.mask_adjust_short = this.mask_adjust = 0;
      this.bo_l_weight = H(d.SBMAX_l);
      this.bo_s_weight = H(d.SBMAX_s);
    }
    function k() {
      this.lowerlimit = 0;
    }
    function q(a, c) {
      this.lowpass = c;
    }
    function C(a) {
      return 1 < a ? 0 : 0 >= a ? 1 : Math.cos((Math.PI / 2) * a);
    }
    function B(a, c) {
      switch (a) {
        case 44100:
          return (c.version = 1), 0;
        case 48e3:
          return (c.version = 1);
        case 32e3:
          return (c.version = 1), 2;
        case 22050:
          return (c.version = 0);
        case 24e3:
          return (c.version = 0), 1;
        case 16e3:
          return (c.version = 0), 2;
        case 11025:
          return (c.version = 0);
        case 12e3:
          return (c.version = 0), 1;
        case 8e3:
          return (c.version = 0), 2;
        default:
          return (c.version = 0), -1;
      }
    }
    function t(a, c, b) {
      16e3 > b && (c = 2);
      b = r.bitrate_table[c][1];
      for (var d = 2; 14 >= d; d++)
        0 < r.bitrate_table[c][d] &&
          Math.abs(r.bitrate_table[c][d] - a) < Math.abs(b - a) &&
          (b = r.bitrate_table[c][d]);
      return b;
    }
    function Q(a, c, b) {
      16e3 > b && (c = 2);
      for (b = 0; 14 >= b; b++)
        if (0 < r.bitrate_table[c][b] && r.bitrate_table[c][b] == a) return b;
      return -1;
    }
    function g(a, c) {
      var b = [
          new q(8, 2e3),
          new q(16, 3700),
          new q(24, 3900),
          new q(32, 5500),
          new q(40, 7e3),
          new q(48, 7500),
          new q(56, 1e4),
          new q(64, 11e3),
          new q(80, 13500),
          new q(96, 15100),
          new q(112, 15600),
          new q(128, 17e3),
          new q(160, 17500),
          new q(192, 18600),
          new q(224, 19400),
          new q(256, 19700),
          new q(320, 20500),
        ],
        d = e.nearestBitrateFullIndex(c);
      a.lowerlimit = b[d].lowpass;
    }
    function b(a) {
      var c = d.BLKSIZE + a.framesize - d.FFTOFFSET;
      return (c = Math.max(c, 512 + a.framesize - 32));
    }
    function l(m, f, g, k, l, p, q) {
      var r = m.internal_flags,
        v = 0,
        t,
        w,
        A = [null, null],
        z = [null, null];
      if (4294479419 != r.Class_ID) return -3;
      if (0 == k) return 0;
      t = c.copy_buffer(r, l, p, q, 0);
      if (0 > t) return t;
      p += t;
      v += t;
      z[0] = f;
      z[1] = g;
      if (ua.NEQ(m.scale, 0) && ua.NEQ(m.scale, 1))
        for (t = 0; t < k; ++t)
          (z[0][t] *= m.scale), 2 == r.channels_out && (z[1][t] *= m.scale);
      if (ua.NEQ(m.scale_left, 0) && ua.NEQ(m.scale_left, 1))
        for (t = 0; t < k; ++t) z[0][t] *= m.scale_left;
      if (ua.NEQ(m.scale_right, 0) && ua.NEQ(m.scale_right, 1))
        for (t = 0; t < k; ++t) z[1][t] *= m.scale_right;
      if (2 == m.num_channels && 1 == r.channels_out)
        for (t = 0; t < k; ++t)
          (z[0][t] = 0.5 * (z[0][t] + z[1][t])), (z[1][t] = 0);
      f = b(m);
      A[0] = r.mfbuf[0];
      A[1] = r.mfbuf[1];
      for (g = 0; 0 < k; ) {
        var B = [null, null];
        t = w = 0;
        B[0] = z[0];
        B[1] = z[1];
        t = new a();
        var C = m;
        w = A;
        var E = g,
          J = k,
          K = t,
          M = C.internal_flags;
        if (0.9999 > M.resample_ratio || 1.0001 < M.resample_ratio)
          for (var Q = 0; Q < M.channels_out; Q++) {
            var V = new h(),
              Y = K,
              X = w[Q],
              ta = M.mf_size,
              ka = C.framesize,
              ma = B[Q],
              ra = E,
              R = J,
              Fa = V,
              L = Q,
              Ma = C.internal_flags,
              Z = void 0,
              Da = 0,
              na = void 0,
              sa = C.out_samplerate / D(C.out_samplerate, C.in_samplerate);
            sa > da.BPC && (sa = da.BPC);
            var P =
                1e-4 >
                Math.abs(
                  Ma.resample_ratio - Math.floor(0.5 + Ma.resample_ratio)
                )
                  ? 1
                  : 0,
              na = 1 / Ma.resample_ratio;
            1 < na && (na = 1);
            var ha = 31;
            0 == ha % 2 && --ha;
            ha += P;
            P = ha + 1;
            if (0 == Ma.fill_buffer_resample_init) {
              Ma.inbuf_old[0] = H(P);
              Ma.inbuf_old[1] = H(P);
              for (Z = 0; Z <= 2 * sa; ++Z) Ma.blackfilt[Z] = H(P);
              Ma.itime[0] = 0;
              for (Da = Ma.itime[1] = 0; Da <= 2 * sa; Da++) {
                for (
                  var N = 0, Ca = (Da - sa) / (2 * sa), Z = 0;
                  Z <= ha;
                  Z++
                ) {
                  var Ia = Ma.blackfilt[Da],
                    Ga = Z,
                    Sa,
                    ea = Z - Ca;
                  Sa = ha;
                  var Oa = Math.PI * na,
                    ea = ea / Sa;
                  0 > ea && (ea = 0);
                  1 < ea && (ea = 1);
                  var Qa = ea - 0.5,
                    ea =
                      0.42 -
                      0.5 * Math.cos(2 * ea * Math.PI) +
                      0.08 * Math.cos(4 * ea * Math.PI);
                  Sa =
                    1e-9 > Math.abs(Qa)
                      ? Oa / Math.PI
                      : (ea * Math.sin(Sa * Oa * Qa)) / (Math.PI * Sa * Qa);
                  N += Ia[Ga] = Sa;
                }
                for (Z = 0; Z <= ha; Z++) Ma.blackfilt[Da][Z] /= N;
              }
              Ma.fill_buffer_resample_init = 1;
            }
            N = Ma.inbuf_old[L];
            for (na = 0; na < ka; na++) {
              Z = na * Ma.resample_ratio;
              Da = 0 | Math.floor(Z - Ma.itime[L]);
              if (ha + Da - ha / 2 >= R) break;
              Ca = Z - Ma.itime[L] - (Da + (ha % 2) * 0.5);
              Ca = 0 | Math.floor(2 * Ca * sa + sa + 0.5);
              for (Z = Ia = 0; Z <= ha; ++Z)
                (Ga = Z + Da - ha / 2),
                  (Ia +=
                    (0 > Ga ? N[P + Ga] : ma[ra + Ga]) * Ma.blackfilt[Ca][Z]);
              X[ta + na] = Ia;
            }
            Fa.num_used = Math.min(R, ha + Da - ha / 2);
            Ma.itime[L] += Fa.num_used - na * Ma.resample_ratio;
            if (Fa.num_used >= P)
              for (Z = 0; Z < P; Z++) N[Z] = ma[ra + Fa.num_used + Z - P];
            else {
              X = P - Fa.num_used;
              for (Z = 0; Z < X; ++Z) N[Z] = N[Z + Fa.num_used];
              for (Da = 0; Z < P; ++Z, ++Da) N[Z] = ma[ra + Da];
            }
            Y.n_out = na;
            K.n_in = V.num_used;
          }
        else
          for (
            K.n_out = Math.min(C.framesize, J), K.n_in = K.n_out, C = 0;
            C < K.n_out;
            ++C
          )
            (w[0][M.mf_size + C] = B[0][E + C]),
              2 == M.channels_out && (w[1][M.mf_size + C] = B[1][E + C]);
        w = t.n_in;
        t = t.n_out;
        if (
          r.findReplayGain &&
          !r.decode_on_the_fly &&
          n.AnalyzeSamples(
            r.rgdata,
            A[0],
            r.mf_size,
            A[1],
            r.mf_size,
            t,
            r.channels_out
          ) == O.GAIN_ANALYSIS_ERROR
        )
          return -6;
        k -= w;
        g += w;
        r.mf_size += t;
        1 > r.mf_samples_to_encode &&
          (r.mf_samples_to_encode = d.ENCDELAY + d.POSTDELAY);
        r.mf_samples_to_encode += t;
        if (r.mf_size >= f) {
          w = q - v;
          0 == q && (w = 0);
          t = m;
          w = e.enc.lame_encode_mp3_frame(t, A[0], A[1], l, p, w);
          t.frameNum++;
          t = w;
          if (0 > t) return t;
          p += t;
          v += t;
          r.mf_size -= m.framesize;
          r.mf_samples_to_encode -= m.framesize;
          for (w = 0; w < r.channels_out; w++)
            for (t = 0; t < r.mf_size; t++) A[w][t] = A[w][t + m.framesize];
        }
      }
      return v;
    }
    function a() {
      this.n_out = this.n_in = 0;
    }
    function h() {
      this.num_used = 0;
    }
    function D(a, c) {
      return 0 != c ? D(c, a % c) : a;
    }
    var e = this;
    V.V9 = 410;
    V.V8 = 420;
    V.V7 = 430;
    V.V6 = 440;
    V.V5 = 450;
    V.V4 = 460;
    V.V3 = 470;
    V.V2 = 480;
    V.V1 = 490;
    V.V0 = 500;
    V.R3MIX = 1e3;
    V.STANDARD = 1001;
    V.EXTREME = 1002;
    V.INSANE = 1003;
    V.STANDARD_FAST = 1004;
    V.EXTREME_FAST = 1005;
    V.MEDIUM = 1006;
    V.MEDIUM_FAST = 1007;
    V.LAME_MAXMP3BUFFER = 147456;
    var n,
      c,
      f,
      E,
      z,
      w = new jc(),
      A,
      v,
      p;
    this.enc = new d();
    this.setModules = function (a, b, d, g, e, k, h, l, q) {
      n = a;
      c = b;
      f = d;
      E = g;
      z = e;
      A = k;
      v = l;
      p = q;
      this.enc.setModules(c, w, E, A);
    };
    this.lame_init = function () {
      var a = new Jc(),
        c;
      a.class_id = 4294479419;
      c = a.internal_flags = new da();
      a.mode = ka.NOT_SET;
      a.original = 1;
      a.in_samplerate = 44100;
      a.num_channels = 2;
      a.num_samples = -1;
      a.bWriteVbrTag = !0;
      a.quality = -1;
      a.short_blocks = null;
      c.subblock_gain = -1;
      a.lowpassfreq = 0;
      a.highpassfreq = 0;
      a.lowpasswidth = -1;
      a.highpasswidth = -1;
      a.VBR = M.vbr_off;
      a.VBR_q = 4;
      a.ATHcurve = -1;
      a.VBR_mean_bitrate_kbps = 128;
      a.VBR_min_bitrate_kbps = 0;
      a.VBR_max_bitrate_kbps = 0;
      a.VBR_hard_min = 0;
      c.VBR_min_bitrate = 1;
      c.VBR_max_bitrate = 13;
      a.quant_comp = -1;
      a.quant_comp_short = -1;
      a.msfix = -1;
      c.resample_ratio = 1;
      c.OldValue[0] = 180;
      c.OldValue[1] = 180;
      c.CurrentStep[0] = 4;
      c.CurrentStep[1] = 4;
      c.masking_lower = 1;
      c.nsPsy.attackthre = -1;
      c.nsPsy.attackthre_s = -1;
      a.scale = -1;
      a.athaa_type = -1;
      a.ATHtype = -1;
      a.athaa_loudapprox = -1;
      a.athaa_sensitivity = 0;
      a.useTemporal = null;
      a.interChRatio = -1;
      c.mf_samples_to_encode = d.ENCDELAY + d.POSTDELAY;
      a.encoder_padding = 0;
      c.mf_size = d.ENCDELAY - d.MDCTDELAY;
      a.findReplayGain = !1;
      a.decode_on_the_fly = !1;
      c.decode_on_the_fly = !1;
      c.findReplayGain = !1;
      c.findPeakSample = !1;
      c.RadioGain = 0;
      c.AudiophileGain = 0;
      c.noclipGainChange = 0;
      c.noclipScale = -1;
      a.preset = 0;
      a.write_id3tag_automatic = !0;
      a.lame_allocated_gfp = 1;
      return a;
    };
    this.nearestBitrateFullIndex = function (a) {
      for (
        var c = [
            8,
            16,
            24,
            32,
            40,
            48,
            56,
            64,
            80,
            96,
            112,
            128,
            160,
            192,
            224,
            256,
            320,
          ],
          b = 0,
          d = 0,
          f = 0,
          g = 0,
          g = c[16],
          f = 16,
          d = c[16],
          b = 16,
          e = 0;
        16 > e;
        e++
      )
        if (Math.max(a, c[e + 1]) != a) {
          g = c[e + 1];
          f = e + 1;
          d = c[e];
          b = e;
          break;
        }
      return g - a > a - d ? b : f;
    };
    this.lame_init_params = function (a) {
      var b = a.internal_flags;
      b.Class_ID = 0;
      null == b.ATH && (b.ATH = new Lc());
      null == b.PSY && (b.PSY = new J());
      null == b.rgdata && (b.rgdata = new Kc());
      b.channels_in = a.num_channels;
      1 == b.channels_in && (a.mode = ka.MONO);
      b.channels_out = a.mode == ka.MONO ? 1 : 2;
      b.mode_ext = d.MPG_MD_MS_LR;
      a.mode == ka.MONO && (a.force_ms = !1);
      a.VBR == M.vbr_off &&
        128 != a.VBR_mean_bitrate_kbps &&
        0 == a.brate &&
        (a.brate = a.VBR_mean_bitrate_kbps);
      a.VBR != M.vbr_off &&
        a.VBR != M.vbr_mtrh &&
        a.VBR != M.vbr_mt &&
        (a.free_format = !1);
      a.VBR == M.vbr_off &&
        0 == a.brate &&
        ua.EQ(a.compression_ratio, 0) &&
        (a.compression_ratio = 11.025);
      a.VBR == M.vbr_off &&
        0 < a.compression_ratio &&
        (0 == a.out_samplerate &&
          (a.out_samplerate = map2MP3Frequency(int(0.97 * a.in_samplerate))),
        (a.brate =
          0 |
          ((16 * a.out_samplerate * b.channels_out) /
            (1e3 * a.compression_ratio))),
        (b.samplerate_index = B(a.out_samplerate, a)),
        a.free_format || (a.brate = t(a.brate, a.version, a.out_samplerate)));
      0 != a.out_samplerate &&
        (16e3 > a.out_samplerate
          ? ((a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 8)),
            (a.VBR_mean_bitrate_kbps = Math.min(a.VBR_mean_bitrate_kbps, 64)))
          : 32e3 > a.out_samplerate
          ? ((a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 8)),
            (a.VBR_mean_bitrate_kbps = Math.min(a.VBR_mean_bitrate_kbps, 160)))
          : ((a.VBR_mean_bitrate_kbps = Math.max(a.VBR_mean_bitrate_kbps, 32)),
            (a.VBR_mean_bitrate_kbps = Math.min(
              a.VBR_mean_bitrate_kbps,
              320
            ))));
      if (0 == a.lowpassfreq) {
        var e = 16e3;
        switch (a.VBR) {
          case M.vbr_off:
            e = new k();
            g(e, a.brate);
            e = e.lowerlimit;
            break;
          case M.vbr_abr:
            e = new k();
            g(e, a.VBR_mean_bitrate_kbps);
            e = e.lowerlimit;
            break;
          case M.vbr_rh:
            var h = [
              19500,
              19e3,
              18600,
              18e3,
              17500,
              16e3,
              15600,
              14900,
              12500,
              1e4,
              3950,
            ];
            if (0 <= a.VBR_q && 9 >= a.VBR_q)
              var e = h[a.VBR_q],
                h = h[a.VBR_q + 1],
                l = a.VBR_q_frac,
                e = linear_int(e, h, l);
            else e = 19500;
            break;
          default:
            (h = [
              19500,
              19e3,
              18500,
              18e3,
              17500,
              16500,
              15500,
              14500,
              12500,
              9500,
              3950,
            ]),
              0 <= a.VBR_q && 9 >= a.VBR_q
                ? ((e = h[a.VBR_q]),
                  (h = h[a.VBR_q + 1]),
                  (l = a.VBR_q_frac),
                  (e = linear_int(e, h, l)))
                : (e = 19500);
        }
        a.mode != ka.MONO ||
          (a.VBR != M.vbr_off && a.VBR != M.vbr_abr) ||
          (e *= 1.5);
        a.lowpassfreq = e | 0;
      }
      0 == a.out_samplerate &&
        (2 * a.lowpassfreq > a.in_samplerate &&
          (a.lowpassfreq = a.in_samplerate / 2),
        (e = a.lowpassfreq | 0),
        (h = a.in_samplerate),
        (l = 44100),
        48e3 <= h
          ? (l = 48e3)
          : 44100 <= h
          ? (l = 44100)
          : 32e3 <= h
          ? (l = 32e3)
          : 24e3 <= h
          ? (l = 24e3)
          : 22050 <= h
          ? (l = 22050)
          : 16e3 <= h
          ? (l = 16e3)
          : 12e3 <= h
          ? (l = 12e3)
          : 11025 <= h
          ? (l = 11025)
          : 8e3 <= h && (l = 8e3),
        -1 == e
          ? (e = l)
          : (15960 >= e && (l = 44100),
            15250 >= e && (l = 32e3),
            11220 >= e && (l = 24e3),
            9970 >= e && (l = 22050),
            7230 >= e && (l = 16e3),
            5420 >= e && (l = 12e3),
            4510 >= e && (l = 11025),
            3970 >= e && (l = 8e3),
            (e =
              h < l
                ? 44100 < h
                  ? 48e3
                  : 32e3 < h
                  ? 44100
                  : 24e3 < h
                  ? 32e3
                  : 22050 < h
                  ? 24e3
                  : 16e3 < h
                  ? 22050
                  : 12e3 < h
                  ? 16e3
                  : 11025 < h
                  ? 12e3
                  : 8e3 < h
                  ? 11025
                  : 8e3
                : l)),
        (a.out_samplerate = e));
      a.lowpassfreq = Math.min(20500, a.lowpassfreq);
      a.lowpassfreq = Math.min(a.out_samplerate / 2, a.lowpassfreq);
      a.VBR == M.vbr_off &&
        (a.compression_ratio =
          (16 * a.out_samplerate * b.channels_out) / (1e3 * a.brate));
      a.VBR == M.vbr_abr &&
        (a.compression_ratio =
          (16 * a.out_samplerate * b.channels_out) /
          (1e3 * a.VBR_mean_bitrate_kbps));
      a.bWriteVbrTag ||
        ((a.findReplayGain = !1),
        (a.decode_on_the_fly = !1),
        (b.findPeakSample = !1));
      b.findReplayGain = a.findReplayGain;
      b.decode_on_the_fly = a.decode_on_the_fly;
      b.decode_on_the_fly && (b.findPeakSample = !0);
      if (
        b.findReplayGain &&
        n.InitGainAnalysis(b.rgdata, a.out_samplerate) ==
          O.INIT_GAIN_ANALYSIS_ERROR
      )
        return (a.internal_flags = null), -6;
      b.decode_on_the_fly &&
        !a.decode_only &&
        (null != b.hip && p.hip_decode_exit(b.hip),
        (b.hip = p.hip_decode_init()));
      b.mode_gr = 24e3 >= a.out_samplerate ? 1 : 2;
      a.framesize = 576 * b.mode_gr;
      a.encoder_delay = d.ENCDELAY;
      b.resample_ratio = a.in_samplerate / a.out_samplerate;
      switch (a.VBR) {
        case M.vbr_mt:
        case M.vbr_rh:
        case M.vbr_mtrh:
          a.compression_ratio = [
            5.7,
            6.5,
            7.3,
            8.2,
            10,
            11.9,
            13,
            14,
            15,
            16.5,
          ][a.VBR_q];
          break;
        case M.vbr_abr:
          a.compression_ratio =
            (16 * a.out_samplerate * b.channels_out) /
            (1e3 * a.VBR_mean_bitrate_kbps);
          break;
        default:
          a.compression_ratio =
            (16 * a.out_samplerate * b.channels_out) / (1e3 * a.brate);
      }
      a.mode == ka.NOT_SET && (a.mode = ka.JOINT_STEREO);
      0 < a.highpassfreq
        ? ((b.highpass1 = 2 * a.highpassfreq),
          (b.highpass2 =
            0 <= a.highpasswidth
              ? 2 * (a.highpassfreq + a.highpasswidth)
              : 2 * a.highpassfreq),
          (b.highpass1 /= a.out_samplerate),
          (b.highpass2 /= a.out_samplerate))
        : ((b.highpass1 = 0), (b.highpass2 = 0));
      0 < a.lowpassfreq
        ? ((b.lowpass2 = 2 * a.lowpassfreq),
          0 <= a.lowpasswidth
            ? ((b.lowpass1 = 2 * (a.lowpassfreq - a.lowpasswidth)),
              0 > b.lowpass1 && (b.lowpass1 = 0))
            : (b.lowpass1 = 2 * a.lowpassfreq),
          (b.lowpass1 /= a.out_samplerate),
          (b.lowpass2 /= a.out_samplerate))
        : ((b.lowpass1 = 0), (b.lowpass2 = 0));
      var e = a.internal_flags,
        q = 32,
        D = -1;
      if (0 < e.lowpass1) {
        for (var F = 999, h = 0; 31 >= h; h++)
          (l = h / 31),
            l >= e.lowpass2 && (q = Math.min(q, h)),
            e.lowpass1 < l && l < e.lowpass2 && (F = Math.min(F, h));
        e.lowpass1 = 999 == F ? (q - 0.75) / 31 : (F - 0.75) / 31;
        e.lowpass2 = q / 31;
      }
      0 < e.highpass2 &&
        e.highpass2 < (0.75 / 31) * 0.9 &&
        ((e.highpass1 = 0),
        (e.highpass2 = 0),
        K.err.println(
          "Warning: highpass filter disabled.  highpass frequency too small\n"
        ));
      if (0 < e.highpass2) {
        q = -1;
        for (h = 0; 31 >= h; h++)
          (l = h / 31),
            l <= e.highpass1 && (D = Math.max(D, h)),
            e.highpass1 < l && l < e.highpass2 && (q = Math.max(q, h));
        e.highpass1 = D / 31;
        e.highpass2 = -1 == q ? (D + 0.75) / 31 : (q + 0.75) / 31;
      }
      for (h = 0; 32 > h; h++)
        (l = h / 31),
          (D =
            e.highpass2 > e.highpass1
              ? C((e.highpass2 - l) / (e.highpass2 - e.highpass1 + 1e-20))
              : 1),
          (l =
            e.lowpass2 > e.lowpass1
              ? C((l - e.lowpass1) / (e.lowpass2 - e.lowpass1 + 1e-20))
              : 1),
          (e.amp_filter[h] = D * l);
      b.samplerate_index = B(a.out_samplerate, a);
      if (0 > b.samplerate_index) return (a.internal_flags = null), -1;
      if (a.VBR == M.vbr_off)
        if (a.free_format) b.bitrate_index = 0;
        else {
          if (
            ((a.brate = t(a.brate, a.version, a.out_samplerate)),
            (b.bitrate_index = Q(a.brate, a.version, a.out_samplerate)),
            0 >= b.bitrate_index)
          )
            return (a.internal_flags = null), -1;
        }
      else b.bitrate_index = 1;
      a.analysis && (a.bWriteVbrTag = !1);
      null != b.pinfo && (a.bWriteVbrTag = !1);
      c.init_bit_stream_w(b);
      e =
        b.samplerate_index +
        3 * a.version +
        6 * (16e3 > a.out_samplerate ? 1 : 0);
      for (h = 0; h < d.SBMAX_l + 1; h++)
        b.scalefac_band.l[h] = E.sfBandIndex[e].l[h];
      for (h = 0; h < d.PSFB21 + 1; h++)
        (l = (b.scalefac_band.l[22] - b.scalefac_band.l[21]) / d.PSFB21),
          (l = b.scalefac_band.l[21] + h * l),
          (b.scalefac_band.psfb21[h] = l);
      b.scalefac_band.psfb21[d.PSFB21] = 576;
      for (h = 0; h < d.SBMAX_s + 1; h++)
        b.scalefac_band.s[h] = E.sfBandIndex[e].s[h];
      for (h = 0; h < d.PSFB12 + 1; h++)
        (l = (b.scalefac_band.s[13] - b.scalefac_band.s[12]) / d.PSFB12),
          (l = b.scalefac_band.s[12] + h * l),
          (b.scalefac_band.psfb12[h] = l);
      b.scalefac_band.psfb12[d.PSFB12] = 192;
      b.sideinfo_len =
        1 == a.version
          ? 1 == b.channels_out
            ? 21
            : 36
          : 1 == b.channels_out
          ? 13
          : 21;
      a.error_protection && (b.sideinfo_len += 2);
      e = a.internal_flags;
      a.frameNum = 0;
      a.write_id3tag_automatic && v.id3tag_write_v2(a);
      e.bitrate_stereoMode_Hist = db([16, 5]);
      e.bitrate_blockType_Hist = db([16, 6]);
      e.PeakSample = 0;
      a.bWriteVbrTag && A.InitVbrTag(a);
      b.Class_ID = 4294479419;
      for (e = 0; 19 > e; e++)
        b.nsPsy.pefirbuf[e] = 700 * b.mode_gr * b.channels_out;
      -1 == a.ATHtype && (a.ATHtype = 4);
      switch (a.VBR) {
        case M.vbr_mt:
          a.VBR = M.vbr_mtrh;
        case M.vbr_mtrh:
          null == a.useTemporal && (a.useTemporal = !1);
          f.apply_preset(a, 500 - 10 * a.VBR_q, 0);
          0 > a.quality && (a.quality = LAME_DEFAULT_QUALITY);
          5 > a.quality && (a.quality = 0);
          5 < a.quality && (a.quality = 5);
          b.PSY.mask_adjust = a.maskingadjust;
          b.PSY.mask_adjust_short = a.maskingadjust_short;
          b.sfb21_extra = a.experimentalY ? !1 : 44e3 < a.out_samplerate;
          b.iteration_loop = new VBRNewIterationLoop(z);
          break;
        case M.vbr_rh:
          f.apply_preset(a, 500 - 10 * a.VBR_q, 0);
          b.PSY.mask_adjust = a.maskingadjust;
          b.PSY.mask_adjust_short = a.maskingadjust_short;
          b.sfb21_extra = a.experimentalY ? !1 : 44e3 < a.out_samplerate;
          6 < a.quality && (a.quality = 6);
          0 > a.quality && (a.quality = LAME_DEFAULT_QUALITY);
          b.iteration_loop = new VBROldIterationLoop(z);
          break;
        default:
          (b.sfb21_extra = !1),
            0 > a.quality && (a.quality = LAME_DEFAULT_QUALITY),
            (e = a.VBR),
            e == M.vbr_off && (a.VBR_mean_bitrate_kbps = a.brate),
            f.apply_preset(a, a.VBR_mean_bitrate_kbps, 0),
            (a.VBR = e),
            (b.PSY.mask_adjust = a.maskingadjust),
            (b.PSY.mask_adjust_short = a.maskingadjust_short),
            (b.iteration_loop =
              e == M.vbr_off ? new Mc(z) : new ABRIterationLoop(z));
      }
      if (a.VBR != M.vbr_off) {
        b.VBR_min_bitrate = 1;
        b.VBR_max_bitrate = 14;
        16e3 > a.out_samplerate && (b.VBR_max_bitrate = 8);
        if (
          (0 != a.VBR_min_bitrate_kbps &&
            ((a.VBR_min_bitrate_kbps = t(
              a.VBR_min_bitrate_kbps,
              a.version,
              a.out_samplerate
            )),
            (b.VBR_min_bitrate = Q(
              a.VBR_min_bitrate_kbps,
              a.version,
              a.out_samplerate
            )),
            0 > b.VBR_min_bitrate)) ||
          (0 != a.VBR_max_bitrate_kbps &&
            ((a.VBR_max_bitrate_kbps = t(
              a.VBR_max_bitrate_kbps,
              a.version,
              a.out_samplerate
            )),
            (b.VBR_max_bitrate = Q(
              a.VBR_max_bitrate_kbps,
              a.version,
              a.out_samplerate
            )),
            0 > b.VBR_max_bitrate))
        )
          return -1;
        a.VBR_min_bitrate_kbps = r.bitrate_table[a.version][b.VBR_min_bitrate];
        a.VBR_max_bitrate_kbps = r.bitrate_table[a.version][b.VBR_max_bitrate];
        a.VBR_mean_bitrate_kbps = Math.min(
          r.bitrate_table[a.version][b.VBR_max_bitrate],
          a.VBR_mean_bitrate_kbps
        );
        a.VBR_mean_bitrate_kbps = Math.max(
          r.bitrate_table[a.version][b.VBR_min_bitrate],
          a.VBR_mean_bitrate_kbps
        );
      }
      a.tune &&
        ((b.PSY.mask_adjust += a.tune_value_a),
        (b.PSY.mask_adjust_short += a.tune_value_a));
      e = a.internal_flags;
      switch (a.quality) {
        default:
        case 9:
          e.psymodel = 0;
          e.noise_shaping = 0;
          e.noise_shaping_amp = 0;
          e.noise_shaping_stop = 0;
          e.use_best_huffman = 0;
          e.full_outer_loop = 0;
          break;
        case 8:
          a.quality = 7;
        case 7:
          e.psymodel = 1;
          e.noise_shaping = 0;
          e.noise_shaping_amp = 0;
          e.noise_shaping_stop = 0;
          e.use_best_huffman = 0;
          e.full_outer_loop = 0;
          break;
        case 6:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          e.noise_shaping_amp = 0;
          e.noise_shaping_stop = 0;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 0;
          e.full_outer_loop = 0;
          break;
        case 5:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          e.noise_shaping_amp = 0;
          e.noise_shaping_stop = 0;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 0;
          e.full_outer_loop = 0;
          break;
        case 4:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          e.noise_shaping_amp = 0;
          e.noise_shaping_stop = 0;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 1;
          e.full_outer_loop = 0;
          break;
        case 3:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          e.noise_shaping_amp = 1;
          e.noise_shaping_stop = 1;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 1;
          e.full_outer_loop = 0;
          break;
        case 2:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          0 == e.substep_shaping && (e.substep_shaping = 2);
          e.noise_shaping_amp = 1;
          e.noise_shaping_stop = 1;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 1;
          e.full_outer_loop = 0;
          break;
        case 1:
          e.psymodel = 1;
          0 == e.noise_shaping && (e.noise_shaping = 1);
          0 == e.substep_shaping && (e.substep_shaping = 2);
          e.noise_shaping_amp = 2;
          e.noise_shaping_stop = 1;
          -1 == e.subblock_gain && (e.subblock_gain = 1);
          e.use_best_huffman = 1;
          e.full_outer_loop = 0;
          break;
        case 0:
          (e.psymodel = 1),
            0 == e.noise_shaping && (e.noise_shaping = 1),
            0 == e.substep_shaping && (e.substep_shaping = 2),
            (e.noise_shaping_amp = 2),
            (e.noise_shaping_stop = 1),
            -1 == e.subblock_gain && (e.subblock_gain = 1),
            (e.use_best_huffman = 1),
            (e.full_outer_loop = 0);
      }
      b.ATH.useAdjust = 0 > a.athaa_type ? 3 : a.athaa_type;
      b.ATH.aaSensitivityP = Math.pow(10, a.athaa_sensitivity / -10);
      null == a.short_blocks && (a.short_blocks = sa.short_block_allowed);
      a.short_blocks != sa.short_block_allowed ||
        (a.mode != ka.JOINT_STEREO && a.mode != ka.STEREO) ||
        (a.short_blocks = sa.short_block_coupled);
      0 > a.quant_comp && (a.quant_comp = 1);
      0 > a.quant_comp_short && (a.quant_comp_short = 0);
      0 > a.msfix && (a.msfix = 0);
      a.exp_nspsytune |= 1;
      0 > a.internal_flags.nsPsy.attackthre &&
        (a.internal_flags.nsPsy.attackthre = jc.NSATTACKTHRE);
      0 > a.internal_flags.nsPsy.attackthre_s &&
        (a.internal_flags.nsPsy.attackthre_s = jc.NSATTACKTHRE_S);
      0 > a.scale && (a.scale = 1);
      0 > a.ATHtype && (a.ATHtype = 4);
      0 > a.ATHcurve && (a.ATHcurve = 4);
      0 > a.athaa_loudapprox && (a.athaa_loudapprox = 2);
      0 > a.interChRatio && (a.interChRatio = 0);
      null == a.useTemporal && (a.useTemporal = !0);
      b.slot_lag = b.frac_SpF = 0;
      a.VBR == M.vbr_off &&
        (b.slot_lag = b.frac_SpF =
          (72e3 * (a.version + 1) * a.brate) % a.out_samplerate | 0);
      E.iteration_init(a);
      w.psymodel_init(a);
      return 0;
    };
    this.lame_encode_flush = function (a, e, f, g) {
      var h = a.internal_flags,
        k = vc([2, 1152]),
        l = 0,
        n,
        p,
        q = h.mf_samples_to_encode - d.POSTDELAY,
        r = b(a);
      if (1 > h.mf_samples_to_encode) return 0;
      n = 0;
      a.in_samplerate != a.out_samplerate &&
        (q += (16 * a.out_samplerate) / a.in_samplerate);
      p = a.framesize - (q % a.framesize);
      576 > p && (p += a.framesize);
      a.encoder_padding = p;
      for (p = (q + p) / a.framesize; 0 < p && 0 <= l; ) {
        var t = r - h.mf_size,
          q = a.frameNum,
          t = t * a.in_samplerate,
          t = t / a.out_samplerate;
        1152 < t && (t = 1152);
        1 > t && (t = 1);
        l = g - n;
        0 == g && (l = 0);
        l = this.lame_encode_buffer(a, k[0], k[1], t, e, f, l);
        f += l;
        n += l;
        p -= q != a.frameNum ? 1 : 0;
      }
      h.mf_samples_to_encode = 0;
      if (0 > l) return l;
      l = g - n;
      0 == g && (l = 0);
      c.flush_bitstream(a);
      l = c.copy_buffer(h, e, f, l, 1);
      if (0 > l) return l;
      f += l;
      n += l;
      l = g - n;
      0 == g && (l = 0);
      if (a.write_id3tag_automatic) {
        v.id3tag_write_v1(a);
        l = c.copy_buffer(h, e, f, l, 0);
        if (0 > l) return l;
        n += l;
      }
      return n;
    };
    this.lame_encode_buffer = function (a, b, c, d, e, f, g) {
      var h = a.internal_flags,
        k = [null, null];
      if (4294479419 != h.Class_ID) return -3;
      if (0 == d) return 0;
      if (null == h.in_buffer_0 || h.in_buffer_nsamples < d)
        (h.in_buffer_0 = H(d)),
          (h.in_buffer_1 = H(d)),
          (h.in_buffer_nsamples = d);
      k[0] = h.in_buffer_0;
      k[1] = h.in_buffer_1;
      for (var n = 0; n < d; n++)
        (k[0][n] = b[n]), 1 < h.channels_in && (k[1][n] = c[n]);
      return l(a, k[0], k[1], d, e, f, g);
    };
  }
  function Uc() {
    this.setModules = function (d, k) {};
  }
  function Vc() {
    this.setModules = function (d, k, q) {};
  }
  function Wc() {}
  function Xc() {
    this.setModules = function (d, k) {};
  }
  function Ca() {
    this.sampleRate = this.channels = this.dataLen = this.dataOffset = 0;
  }
  function Ob(d) {
    return (
      (d.charCodeAt(0) << 24) |
      (d.charCodeAt(1) << 16) |
      (d.charCodeAt(2) << 8) |
      d.charCodeAt(3)
    );
  }
  var Ia = {
      fill: function (d, k, q, r) {
        if (2 == arguments.length)
          for (var B = 0; B < d.length; B++) d[B] = arguments[1];
        else for (B = k; B < q; B++) d[B] = r;
      },
    },
    K = {
      arraycopy: function (d, k, q, r, B) {
        for (B = k + B; k < B; ) q[r++] = d[k++];
      },
    },
    X = {
      SQRT2: 1.4142135623730951,
      FAST_LOG10: function (d) {
        return Math.log10(d);
      },
      FAST_LOG10_X: function (d, k) {
        return Math.log10(d) * k;
      },
    };
  sa.short_block_allowed = new sa(0);
  sa.short_block_coupled = new sa(1);
  sa.short_block_dispensed = new sa(2);
  sa.short_block_forced = new sa(3);
  var vb = { MAX_VALUE: 3.4028235e38 };
  M.vbr_off = new M(0);
  M.vbr_mt = new M(1);
  M.vbr_rh = new M(2);
  M.vbr_abr = new M(3);
  M.vbr_mtrh = new M(4);
  M.vbr_default = M.vbr_mtrh;
  ka.STEREO = new ka(0);
  ka.JOINT_STEREO = new ka(1);
  ka.DUAL_CHANNEL = new ka(2);
  ka.MONO = new ka(3);
  ka.NOT_SET = new ka(4);
  O.STEPS_per_dB = 100;
  O.MAX_dB = 120;
  O.GAIN_NOT_ENOUGH_SAMPLES = -24601;
  O.GAIN_ANALYSIS_ERROR = 0;
  O.GAIN_ANALYSIS_OK = 1;
  O.INIT_GAIN_ANALYSIS_ERROR = 0;
  O.INIT_GAIN_ANALYSIS_OK = 1;
  O.YULE_ORDER = 10;
  O.MAX_ORDER = O.YULE_ORDER;
  O.MAX_SAMP_FREQ = 48e3;
  O.RMS_WINDOW_TIME_NUMERATOR = 1;
  O.RMS_WINDOW_TIME_DENOMINATOR = 20;
  O.MAX_SAMPLES_PER_WINDOW =
    (O.MAX_SAMP_FREQ * O.RMS_WINDOW_TIME_NUMERATOR) /
      O.RMS_WINDOW_TIME_DENOMINATOR +
    1;
  ua.EQ = function (d, k) {
    return Math.abs(d) > Math.abs(k)
      ? Math.abs(d - k) <= 1e-6 * Math.abs(d)
      : Math.abs(d - k) <= 1e-6 * Math.abs(k);
  };
  ua.NEQ = function (d, k) {
    return !ua.EQ(d, k);
  };
  ub.NUMTOCENTRIES = 100;
  ub.MAXFRAMESIZE = 2880;
  var r = {
    t1HB: [1, 1, 1, 0],
    t2HB: [1, 2, 1, 3, 1, 1, 3, 2, 0],
    t3HB: [3, 2, 1, 1, 1, 1, 3, 2, 0],
    t5HB: [1, 2, 6, 5, 3, 1, 4, 4, 7, 5, 7, 1, 6, 1, 1, 0],
    t6HB: [7, 3, 5, 1, 6, 2, 3, 2, 5, 4, 4, 1, 3, 3, 2, 0],
    t7HB: [
      1,
      2,
      10,
      19,
      16,
      10,
      3,
      3,
      7,
      10,
      5,
      3,
      11,
      4,
      13,
      17,
      8,
      4,
      12,
      11,
      18,
      15,
      11,
      2,
      7,
      6,
      9,
      14,
      3,
      1,
      6,
      4,
      5,
      3,
      2,
      0,
    ],
    t8HB: [
      3,
      4,
      6,
      18,
      12,
      5,
      5,
      1,
      2,
      16,
      9,
      3,
      7,
      3,
      5,
      14,
      7,
      3,
      19,
      17,
      15,
      13,
      10,
      4,
      13,
      5,
      8,
      11,
      5,
      1,
      12,
      4,
      4,
      1,
      1,
      0,
    ],
    t9HB: [
      7,
      5,
      9,
      14,
      15,
      7,
      6,
      4,
      5,
      5,
      6,
      7,
      7,
      6,
      8,
      8,
      8,
      5,
      15,
      6,
      9,
      10,
      5,
      1,
      11,
      7,
      9,
      6,
      4,
      1,
      14,
      4,
      6,
      2,
      6,
      0,
    ],
    t10HB: [
      1,
      2,
      10,
      23,
      35,
      30,
      12,
      17,
      3,
      3,
      8,
      12,
      18,
      21,
      12,
      7,
      11,
      9,
      15,
      21,
      32,
      40,
      19,
      6,
      14,
      13,
      22,
      34,
      46,
      23,
      18,
      7,
      20,
      19,
      33,
      47,
      27,
      22,
      9,
      3,
      31,
      22,
      41,
      26,
      21,
      20,
      5,
      3,
      14,
      13,
      10,
      11,
      16,
      6,
      5,
      1,
      9,
      8,
      7,
      8,
      4,
      4,
      2,
      0,
    ],
    t11HB: [
      3,
      4,
      10,
      24,
      34,
      33,
      21,
      15,
      5,
      3,
      4,
      10,
      32,
      17,
      11,
      10,
      11,
      7,
      13,
      18,
      30,
      31,
      20,
      5,
      25,
      11,
      19,
      59,
      27,
      18,
      12,
      5,
      35,
      33,
      31,
      58,
      30,
      16,
      7,
      5,
      28,
      26,
      32,
      19,
      17,
      15,
      8,
      14,
      14,
      12,
      9,
      13,
      14,
      9,
      4,
      1,
      11,
      4,
      6,
      6,
      6,
      3,
      2,
      0,
    ],
    t12HB: [
      9,
      6,
      16,
      33,
      41,
      39,
      38,
      26,
      7,
      5,
      6,
      9,
      23,
      16,
      26,
      11,
      17,
      7,
      11,
      14,
      21,
      30,
      10,
      7,
      17,
      10,
      15,
      12,
      18,
      28,
      14,
      5,
      32,
      13,
      22,
      19,
      18,
      16,
      9,
      5,
      40,
      17,
      31,
      29,
      17,
      13,
      4,
      2,
      27,
      12,
      11,
      15,
      10,
      7,
      4,
      1,
      27,
      12,
      8,
      12,
      6,
      3,
      1,
      0,
    ],
    t13HB: [
      1,
      5,
      14,
      21,
      34,
      51,
      46,
      71,
      42,
      52,
      68,
      52,
      67,
      44,
      43,
      19,
      3,
      4,
      12,
      19,
      31,
      26,
      44,
      33,
      31,
      24,
      32,
      24,
      31,
      35,
      22,
      14,
      15,
      13,
      23,
      36,
      59,
      49,
      77,
      65,
      29,
      40,
      30,
      40,
      27,
      33,
      42,
      16,
      22,
      20,
      37,
      61,
      56,
      79,
      73,
      64,
      43,
      76,
      56,
      37,
      26,
      31,
      25,
      14,
      35,
      16,
      60,
      57,
      97,
      75,
      114,
      91,
      54,
      73,
      55,
      41,
      48,
      53,
      23,
      24,
      58,
      27,
      50,
      96,
      76,
      70,
      93,
      84,
      77,
      58,
      79,
      29,
      74,
      49,
      41,
      17,
      47,
      45,
      78,
      74,
      115,
      94,
      90,
      79,
      69,
      83,
      71,
      50,
      59,
      38,
      36,
      15,
      72,
      34,
      56,
      95,
      92,
      85,
      91,
      90,
      86,
      73,
      77,
      65,
      51,
      44,
      43,
      42,
      43,
      20,
      30,
      44,
      55,
      78,
      72,
      87,
      78,
      61,
      46,
      54,
      37,
      30,
      20,
      16,
      53,
      25,
      41,
      37,
      44,
      59,
      54,
      81,
      66,
      76,
      57,
      54,
      37,
      18,
      39,
      11,
      35,
      33,
      31,
      57,
      42,
      82,
      72,
      80,
      47,
      58,
      55,
      21,
      22,
      26,
      38,
      22,
      53,
      25,
      23,
      38,
      70,
      60,
      51,
      36,
      55,
      26,
      34,
      23,
      27,
      14,
      9,
      7,
      34,
      32,
      28,
      39,
      49,
      75,
      30,
      52,
      48,
      40,
      52,
      28,
      18,
      17,
      9,
      5,
      45,
      21,
      34,
      64,
      56,
      50,
      49,
      45,
      31,
      19,
      12,
      15,
      10,
      7,
      6,
      3,
      48,
      23,
      20,
      39,
      36,
      35,
      53,
      21,
      16,
      23,
      13,
      10,
      6,
      1,
      4,
      2,
      16,
      15,
      17,
      27,
      25,
      20,
      29,
      11,
      17,
      12,
      16,
      8,
      1,
      1,
      0,
      1,
    ],
    t15HB: [
      7,
      12,
      18,
      53,
      47,
      76,
      124,
      108,
      89,
      123,
      108,
      119,
      107,
      81,
      122,
      63,
      13,
      5,
      16,
      27,
      46,
      36,
      61,
      51,
      42,
      70,
      52,
      83,
      65,
      41,
      59,
      36,
      19,
      17,
      15,
      24,
      41,
      34,
      59,
      48,
      40,
      64,
      50,
      78,
      62,
      80,
      56,
      33,
      29,
      28,
      25,
      43,
      39,
      63,
      55,
      93,
      76,
      59,
      93,
      72,
      54,
      75,
      50,
      29,
      52,
      22,
      42,
      40,
      67,
      57,
      95,
      79,
      72,
      57,
      89,
      69,
      49,
      66,
      46,
      27,
      77,
      37,
      35,
      66,
      58,
      52,
      91,
      74,
      62,
      48,
      79,
      63,
      90,
      62,
      40,
      38,
      125,
      32,
      60,
      56,
      50,
      92,
      78,
      65,
      55,
      87,
      71,
      51,
      73,
      51,
      70,
      30,
      109,
      53,
      49,
      94,
      88,
      75,
      66,
      122,
      91,
      73,
      56,
      42,
      64,
      44,
      21,
      25,
      90,
      43,
      41,
      77,
      73,
      63,
      56,
      92,
      77,
      66,
      47,
      67,
      48,
      53,
      36,
      20,
      71,
      34,
      67,
      60,
      58,
      49,
      88,
      76,
      67,
      106,
      71,
      54,
      38,
      39,
      23,
      15,
      109,
      53,
      51,
      47,
      90,
      82,
      58,
      57,
      48,
      72,
      57,
      41,
      23,
      27,
      62,
      9,
      86,
      42,
      40,
      37,
      70,
      64,
      52,
      43,
      70,
      55,
      42,
      25,
      29,
      18,
      11,
      11,
      118,
      68,
      30,
      55,
      50,
      46,
      74,
      65,
      49,
      39,
      24,
      16,
      22,
      13,
      14,
      7,
      91,
      44,
      39,
      38,
      34,
      63,
      52,
      45,
      31,
      52,
      28,
      19,
      14,
      8,
      9,
      3,
      123,
      60,
      58,
      53,
      47,
      43,
      32,
      22,
      37,
      24,
      17,
      12,
      15,
      10,
      2,
      1,
      71,
      37,
      34,
      30,
      28,
      20,
      17,
      26,
      21,
      16,
      10,
      6,
      8,
      6,
      2,
      0,
    ],
    t16HB: [
      1,
      5,
      14,
      44,
      74,
      63,
      110,
      93,
      172,
      149,
      138,
      242,
      225,
      195,
      376,
      17,
      3,
      4,
      12,
      20,
      35,
      62,
      53,
      47,
      83,
      75,
      68,
      119,
      201,
      107,
      207,
      9,
      15,
      13,
      23,
      38,
      67,
      58,
      103,
      90,
      161,
      72,
      127,
      117,
      110,
      209,
      206,
      16,
      45,
      21,
      39,
      69,
      64,
      114,
      99,
      87,
      158,
      140,
      252,
      212,
      199,
      387,
      365,
      26,
      75,
      36,
      68,
      65,
      115,
      101,
      179,
      164,
      155,
      264,
      246,
      226,
      395,
      382,
      362,
      9,
      66,
      30,
      59,
      56,
      102,
      185,
      173,
      265,
      142,
      253,
      232,
      400,
      388,
      378,
      445,
      16,
      111,
      54,
      52,
      100,
      184,
      178,
      160,
      133,
      257,
      244,
      228,
      217,
      385,
      366,
      715,
      10,
      98,
      48,
      91,
      88,
      165,
      157,
      148,
      261,
      248,
      407,
      397,
      372,
      380,
      889,
      884,
      8,
      85,
      84,
      81,
      159,
      156,
      143,
      260,
      249,
      427,
      401,
      392,
      383,
      727,
      713,
      708,
      7,
      154,
      76,
      73,
      141,
      131,
      256,
      245,
      426,
      406,
      394,
      384,
      735,
      359,
      710,
      352,
      11,
      139,
      129,
      67,
      125,
      247,
      233,
      229,
      219,
      393,
      743,
      737,
      720,
      885,
      882,
      439,
      4,
      243,
      120,
      118,
      115,
      227,
      223,
      396,
      746,
      742,
      736,
      721,
      712,
      706,
      223,
      436,
      6,
      202,
      224,
      222,
      218,
      216,
      389,
      386,
      381,
      364,
      888,
      443,
      707,
      440,
      437,
      1728,
      4,
      747,
      211,
      210,
      208,
      370,
      379,
      734,
      723,
      714,
      1735,
      883,
      877,
      876,
      3459,
      865,
      2,
      377,
      369,
      102,
      187,
      726,
      722,
      358,
      711,
      709,
      866,
      1734,
      871,
      3458,
      870,
      434,
      0,
      12,
      10,
      7,
      11,
      10,
      17,
      11,
      9,
      13,
      12,
      10,
      7,
      5,
      3,
      1,
      3,
    ],
    t24HB: [
      15,
      13,
      46,
      80,
      146,
      262,
      248,
      434,
      426,
      669,
      653,
      649,
      621,
      517,
      1032,
      88,
      14,
      12,
      21,
      38,
      71,
      130,
      122,
      216,
      209,
      198,
      327,
      345,
      319,
      297,
      279,
      42,
      47,
      22,
      41,
      74,
      68,
      128,
      120,
      221,
      207,
      194,
      182,
      340,
      315,
      295,
      541,
      18,
      81,
      39,
      75,
      70,
      134,
      125,
      116,
      220,
      204,
      190,
      178,
      325,
      311,
      293,
      271,
      16,
      147,
      72,
      69,
      135,
      127,
      118,
      112,
      210,
      200,
      188,
      352,
      323,
      306,
      285,
      540,
      14,
      263,
      66,
      129,
      126,
      119,
      114,
      214,
      202,
      192,
      180,
      341,
      317,
      301,
      281,
      262,
      12,
      249,
      123,
      121,
      117,
      113,
      215,
      206,
      195,
      185,
      347,
      330,
      308,
      291,
      272,
      520,
      10,
      435,
      115,
      111,
      109,
      211,
      203,
      196,
      187,
      353,
      332,
      313,
      298,
      283,
      531,
      381,
      17,
      427,
      212,
      208,
      205,
      201,
      193,
      186,
      177,
      169,
      320,
      303,
      286,
      268,
      514,
      377,
      16,
      335,
      199,
      197,
      191,
      189,
      181,
      174,
      333,
      321,
      305,
      289,
      275,
      521,
      379,
      371,
      11,
      668,
      184,
      183,
      179,
      175,
      344,
      331,
      314,
      304,
      290,
      277,
      530,
      383,
      373,
      366,
      10,
      652,
      346,
      171,
      168,
      164,
      318,
      309,
      299,
      287,
      276,
      263,
      513,
      375,
      368,
      362,
      6,
      648,
      322,
      316,
      312,
      307,
      302,
      292,
      284,
      269,
      261,
      512,
      376,
      370,
      364,
      359,
      4,
      620,
      300,
      296,
      294,
      288,
      282,
      273,
      266,
      515,
      380,
      374,
      369,
      365,
      361,
      357,
      2,
      1033,
      280,
      278,
      274,
      267,
      264,
      259,
      382,
      378,
      372,
      367,
      363,
      360,
      358,
      356,
      0,
      43,
      20,
      19,
      17,
      15,
      13,
      11,
      9,
      7,
      6,
      4,
      7,
      5,
      3,
      1,
      3,
    ],
    t32HB: [1, 10, 8, 20, 12, 20, 16, 32, 14, 12, 24, 0, 28, 16, 24, 16],
    t33HB: [15, 28, 26, 48, 22, 40, 36, 64, 14, 24, 20, 32, 12, 16, 8, 0],
    t1l: [1, 4, 3, 5],
    t2l: [1, 4, 7, 4, 5, 7, 6, 7, 8],
    t3l: [2, 3, 7, 4, 4, 7, 6, 7, 8],
    t5l: [1, 4, 7, 8, 4, 5, 8, 9, 7, 8, 9, 10, 8, 8, 9, 10],
    t6l: [3, 4, 6, 8, 4, 4, 6, 7, 5, 6, 7, 8, 7, 7, 8, 9],
    t7l: [
      1,
      4,
      7,
      9,
      9,
      10,
      4,
      6,
      8,
      9,
      9,
      10,
      7,
      7,
      9,
      10,
      10,
      11,
      8,
      9,
      10,
      11,
      11,
      11,
      8,
      9,
      10,
      11,
      11,
      12,
      9,
      10,
      11,
      12,
      12,
      12,
    ],
    t8l: [
      2,
      4,
      7,
      9,
      9,
      10,
      4,
      4,
      6,
      10,
      10,
      10,
      7,
      6,
      8,
      10,
      10,
      11,
      9,
      10,
      10,
      11,
      11,
      12,
      9,
      9,
      10,
      11,
      12,
      12,
      10,
      10,
      11,
      11,
      13,
      13,
    ],
    t9l: [
      3,
      4,
      6,
      7,
      9,
      10,
      4,
      5,
      6,
      7,
      8,
      10,
      5,
      6,
      7,
      8,
      9,
      10,
      7,
      7,
      8,
      9,
      9,
      10,
      8,
      8,
      9,
      9,
      10,
      11,
      9,
      9,
      10,
      10,
      11,
      11,
    ],
    t10l: [
      1,
      4,
      7,
      9,
      10,
      10,
      10,
      11,
      4,
      6,
      8,
      9,
      10,
      11,
      10,
      10,
      7,
      8,
      9,
      10,
      11,
      12,
      11,
      11,
      8,
      9,
      10,
      11,
      12,
      12,
      11,
      12,
      9,
      10,
      11,
      12,
      12,
      12,
      12,
      12,
      10,
      11,
      12,
      12,
      13,
      13,
      12,
      13,
      9,
      10,
      11,
      12,
      12,
      12,
      13,
      13,
      10,
      10,
      11,
      12,
      12,
      13,
      13,
      13,
    ],
    t11l: [
      2,
      4,
      6,
      8,
      9,
      10,
      9,
      10,
      4,
      5,
      6,
      8,
      10,
      10,
      9,
      10,
      6,
      7,
      8,
      9,
      10,
      11,
      10,
      10,
      8,
      8,
      9,
      11,
      10,
      12,
      10,
      11,
      9,
      10,
      10,
      11,
      11,
      12,
      11,
      12,
      9,
      10,
      11,
      12,
      12,
      13,
      12,
      13,
      9,
      9,
      9,
      10,
      11,
      12,
      12,
      12,
      9,
      9,
      10,
      11,
      12,
      12,
      12,
      12,
    ],
    t12l: [
      4,
      4,
      6,
      8,
      9,
      10,
      10,
      10,
      4,
      5,
      6,
      7,
      9,
      9,
      10,
      10,
      6,
      6,
      7,
      8,
      9,
      10,
      9,
      10,
      7,
      7,
      8,
      8,
      9,
      10,
      10,
      10,
      8,
      8,
      9,
      9,
      10,
      10,
      10,
      11,
      9,
      9,
      10,
      10,
      10,
      11,
      10,
      11,
      9,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
    ],
    t13l: [
      1,
      5,
      7,
      8,
      9,
      10,
      10,
      11,
      10,
      11,
      12,
      12,
      13,
      13,
      14,
      14,
      4,
      6,
      8,
      9,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      13,
      14,
      14,
      14,
      7,
      8,
      9,
      10,
      11,
      11,
      12,
      12,
      11,
      12,
      12,
      13,
      13,
      14,
      15,
      15,
      8,
      9,
      10,
      11,
      11,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      15,
      15,
      9,
      9,
      11,
      11,
      12,
      12,
      13,
      13,
      12,
      13,
      13,
      14,
      14,
      15,
      15,
      16,
      10,
      10,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      13,
      15,
      15,
      16,
      16,
      10,
      11,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      16,
      16,
      11,
      11,
      12,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      16,
      18,
      18,
      10,
      10,
      11,
      12,
      12,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      16,
      17,
      17,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      15,
      14,
      15,
      15,
      16,
      16,
      16,
      18,
      17,
      11,
      12,
      12,
      13,
      13,
      14,
      14,
      15,
      14,
      15,
      16,
      15,
      16,
      17,
      18,
      19,
      12,
      12,
      12,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      16,
      17,
      17,
      17,
      18,
      12,
      13,
      13,
      14,
      14,
      15,
      14,
      15,
      16,
      16,
      17,
      17,
      17,
      18,
      18,
      18,
      13,
      13,
      14,
      15,
      15,
      15,
      16,
      16,
      16,
      16,
      16,
      17,
      18,
      17,
      18,
      18,
      14,
      14,
      14,
      15,
      15,
      15,
      17,
      16,
      16,
      19,
      17,
      17,
      17,
      19,
      18,
      18,
      13,
      14,
      15,
      16,
      16,
      16,
      17,
      16,
      17,
      17,
      18,
      18,
      21,
      20,
      21,
      18,
    ],
    t15l: [
      3,
      5,
      6,
      8,
      8,
      9,
      10,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      14,
      5,
      5,
      7,
      8,
      9,
      9,
      10,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      6,
      7,
      7,
      8,
      9,
      9,
      10,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      9,
      9,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      10,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      14,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      14,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      15,
      14,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      15,
      12,
      12,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      15,
      15,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      15,
      15,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      14,
      15,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
    ],
    t16_5l: [
      1,
      5,
      7,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      14,
      11,
      4,
      6,
      8,
      9,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      14,
      13,
      14,
      11,
      7,
      8,
      9,
      10,
      11,
      11,
      12,
      12,
      13,
      12,
      13,
      13,
      13,
      14,
      14,
      12,
      9,
      9,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      13,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      15,
      12,
      10,
      10,
      11,
      11,
      12,
      13,
      13,
      14,
      13,
      14,
      14,
      15,
      15,
      15,
      16,
      13,
      11,
      11,
      11,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      16,
      13,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      17,
      17,
      13,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      16,
      16,
      16,
      13,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      16,
      15,
      16,
      15,
      14,
      12,
      13,
      12,
      13,
      14,
      14,
      14,
      14,
      15,
      16,
      16,
      16,
      17,
      17,
      16,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      15,
      16,
      16,
      16,
      16,
      16,
      16,
      15,
      16,
      14,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
      17,
      16,
      16,
      16,
      16,
      18,
      14,
      15,
      14,
      14,
      14,
      15,
      15,
      16,
      16,
      16,
      18,
      17,
      17,
      17,
      19,
      17,
      14,
      14,
      15,
      13,
      14,
      16,
      16,
      15,
      16,
      16,
      17,
      18,
      17,
      19,
      17,
      16,
      14,
      11,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      12,
    ],
    t16l: [
      1,
      5,
      7,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      14,
      10,
      4,
      6,
      8,
      9,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      14,
      13,
      14,
      10,
      7,
      8,
      9,
      10,
      11,
      11,
      12,
      12,
      13,
      12,
      13,
      13,
      13,
      14,
      14,
      11,
      9,
      9,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      12,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      15,
      11,
      10,
      10,
      11,
      11,
      12,
      13,
      13,
      14,
      13,
      14,
      14,
      15,
      15,
      15,
      16,
      12,
      11,
      11,
      11,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      16,
      12,
      11,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      17,
      17,
      12,
      11,
      12,
      12,
      13,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      16,
      16,
      16,
      12,
      12,
      12,
      12,
      13,
      13,
      14,
      14,
      15,
      15,
      15,
      15,
      16,
      15,
      16,
      15,
      13,
      12,
      13,
      12,
      13,
      14,
      14,
      14,
      14,
      15,
      16,
      16,
      16,
      17,
      17,
      16,
      12,
      13,
      13,
      13,
      13,
      14,
      14,
      15,
      16,
      16,
      16,
      16,
      16,
      16,
      15,
      16,
      13,
      13,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
      17,
      16,
      16,
      16,
      16,
      18,
      13,
      15,
      14,
      14,
      14,
      15,
      15,
      16,
      16,
      16,
      18,
      17,
      17,
      17,
      19,
      17,
      13,
      14,
      15,
      13,
      14,
      16,
      16,
      15,
      16,
      16,
      17,
      18,
      17,
      19,
      17,
      16,
      13,
      10,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      10,
    ],
    t24l: [
      4,
      5,
      7,
      8,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      10,
      5,
      6,
      7,
      8,
      9,
      10,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      10,
      7,
      7,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      13,
      9,
      8,
      8,
      9,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      13,
      9,
      10,
      9,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      9,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      9,
      11,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      13,
      13,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      10,
      12,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      10,
      12,
      12,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      10,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      10,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      10,
      13,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      10,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      6,
    ],
    t32l: [1, 5, 5, 7, 5, 8, 7, 9, 5, 7, 7, 9, 7, 9, 9, 10],
    t33l: [4, 5, 5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8],
  };
  r.ht = [
    new Q(0, 0, null, null),
    new Q(2, 0, r.t1HB, r.t1l),
    new Q(3, 0, r.t2HB, r.t2l),
    new Q(3, 0, r.t3HB, r.t3l),
    new Q(0, 0, null, null),
    new Q(4, 0, r.t5HB, r.t5l),
    new Q(4, 0, r.t6HB, r.t6l),
    new Q(6, 0, r.t7HB, r.t7l),
    new Q(6, 0, r.t8HB, r.t8l),
    new Q(6, 0, r.t9HB, r.t9l),
    new Q(8, 0, r.t10HB, r.t10l),
    new Q(8, 0, r.t11HB, r.t11l),
    new Q(8, 0, r.t12HB, r.t12l),
    new Q(16, 0, r.t13HB, r.t13l),
    new Q(0, 0, null, r.t16_5l),
    new Q(16, 0, r.t15HB, r.t15l),
    new Q(1, 1, r.t16HB, r.t16l),
    new Q(2, 3, r.t16HB, r.t16l),
    new Q(3, 7, r.t16HB, r.t16l),
    new Q(4, 15, r.t16HB, r.t16l),
    new Q(6, 63, r.t16HB, r.t16l),
    new Q(8, 255, r.t16HB, r.t16l),
    new Q(10, 1023, r.t16HB, r.t16l),
    new Q(13, 8191, r.t16HB, r.t16l),
    new Q(4, 15, r.t24HB, r.t24l),
    new Q(5, 31, r.t24HB, r.t24l),
    new Q(6, 63, r.t24HB, r.t24l),
    new Q(7, 127, r.t24HB, r.t24l),
    new Q(8, 255, r.t24HB, r.t24l),
    new Q(9, 511, r.t24HB, r.t24l),
    new Q(11, 2047, r.t24HB, r.t24l),
    new Q(13, 8191, r.t24HB, r.t24l),
    new Q(0, 0, r.t32HB, r.t32l),
    new Q(0, 0, r.t33HB, r.t33l),
  ];
  r.largetbl = [
    65540,
    327685,
    458759,
    589832,
    655369,
    655370,
    720906,
    720907,
    786443,
    786444,
    786444,
    851980,
    851980,
    851980,
    917517,
    655370,
    262149,
    393222,
    524295,
    589832,
    655369,
    720906,
    720906,
    720907,
    786443,
    786443,
    786444,
    851980,
    917516,
    851980,
    917516,
    655370,
    458759,
    524295,
    589832,
    655369,
    720905,
    720906,
    786442,
    786443,
    851979,
    786443,
    851979,
    851980,
    851980,
    917516,
    917517,
    720905,
    589832,
    589832,
    655369,
    720905,
    720906,
    786442,
    786442,
    786443,
    851979,
    851979,
    917515,
    917516,
    917516,
    983052,
    983052,
    786441,
    655369,
    655369,
    720905,
    720906,
    786442,
    786442,
    851978,
    851979,
    851979,
    917515,
    917516,
    917516,
    983052,
    983052,
    983053,
    720905,
    655370,
    655369,
    720906,
    720906,
    786442,
    851978,
    851979,
    917515,
    851979,
    917515,
    917516,
    983052,
    983052,
    983052,
    1048588,
    786441,
    720906,
    720906,
    720906,
    786442,
    851978,
    851979,
    851979,
    851979,
    917515,
    917516,
    917516,
    917516,
    983052,
    983052,
    1048589,
    786441,
    720907,
    720906,
    786442,
    786442,
    851979,
    851979,
    851979,
    917515,
    917516,
    983052,
    983052,
    983052,
    983052,
    1114125,
    1114125,
    786442,
    720907,
    786443,
    786443,
    851979,
    851979,
    851979,
    917515,
    917515,
    983051,
    983052,
    983052,
    983052,
    1048588,
    1048589,
    1048589,
    786442,
    786443,
    786443,
    786443,
    851979,
    851979,
    917515,
    917515,
    983052,
    983052,
    983052,
    983052,
    1048588,
    983053,
    1048589,
    983053,
    851978,
    786444,
    851979,
    786443,
    851979,
    917515,
    917516,
    917516,
    917516,
    983052,
    1048588,
    1048588,
    1048589,
    1114125,
    1114125,
    1048589,
    786442,
    851980,
    851980,
    851979,
    851979,
    917515,
    917516,
    983052,
    1048588,
    1048588,
    1048588,
    1048588,
    1048589,
    1048589,
    983053,
    1048589,
    851978,
    851980,
    917516,
    917516,
    917516,
    917516,
    983052,
    983052,
    983052,
    983052,
    1114124,
    1048589,
    1048589,
    1048589,
    1048589,
    1179661,
    851978,
    983052,
    917516,
    917516,
    917516,
    983052,
    983052,
    1048588,
    1048588,
    1048589,
    1179661,
    1114125,
    1114125,
    1114125,
    1245197,
    1114125,
    851978,
    917517,
    983052,
    851980,
    917516,
    1048588,
    1048588,
    983052,
    1048589,
    1048589,
    1114125,
    1179661,
    1114125,
    1245197,
    1114125,
    1048589,
    851978,
    655369,
    655369,
    655369,
    720905,
    720905,
    786441,
    786441,
    786441,
    851977,
    851977,
    851977,
    851978,
    851978,
    851978,
    851978,
    655366,
  ];
  r.table23 = [
    65538,
    262147,
    458759,
    262148,
    327684,
    458759,
    393222,
    458759,
    524296,
  ];
  r.table56 = [
    65539,
    262148,
    458758,
    524296,
    262148,
    327684,
    524294,
    589831,
    458757,
    524294,
    589831,
    655368,
    524295,
    524295,
    589832,
    655369,
  ];
  r.bitrate_table = [
    [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1],
    [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1],
    [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1],
  ];
  r.samplerate_table = [
    [22050, 24e3, 16e3, -1],
    [44100, 48e3, 32e3, -1],
    [11025, 12e3, 8e3, -1],
  ];
  r.scfsi_band = [0, 6, 11, 16, 21];
  ma.Q_MAX = 257;
  ma.Q_MAX2 = 116;
  ma.LARGE_BITS = 1e5;
  ma.IXMAX_VAL = 8206;
  var na = {};
  na.SFBMAX = 3 * d.SBMAX_s;
  d.ENCDELAY = 576;
  d.POSTDELAY = 1152;
  d.MDCTDELAY = 48;
  d.FFTOFFSET = 224 + d.MDCTDELAY;
  d.DECDELAY = 528;
  d.SBLIMIT = 32;
  d.CBANDS = 64;
  d.SBPSY_l = 21;
  d.SBPSY_s = 12;
  d.SBMAX_l = 22;
  d.SBMAX_s = 13;
  d.PSFB21 = 6;
  d.PSFB12 = 6;
  d.BLKSIZE = 1024;
  d.HBLKSIZE = d.BLKSIZE / 2 + 1;
  d.BLKSIZE_s = 256;
  d.HBLKSIZE_s = d.BLKSIZE_s / 2 + 1;
  d.NORM_TYPE = 0;
  d.START_TYPE = 1;
  d.SHORT_TYPE = 2;
  d.STOP_TYPE = 3;
  d.MPG_MD_LR_LR = 0;
  d.MPG_MD_LR_I = 1;
  d.MPG_MD_MS_LR = 2;
  d.MPG_MD_MS_I = 3;
  d.fircoef = [
    -0.1039435,
    -0.1892065,
    -0.0432472 * 5,
    -0.155915,
    3.898045e-17,
    0.0467745 * 5,
    0.50455,
    0.756825,
    0.187098 * 5,
  ];
  da.MFSIZE = 3456 + d.ENCDELAY - d.MDCTDELAY;
  da.MAX_HEADER_BUF = 256;
  da.MAX_BITS_PER_CHANNEL = 4095;
  da.MAX_BITS_PER_GRANULE = 7680;
  da.BPC = 320;
  Ca.RIFF = Ob("RIFF");
  Ca.WAVE = Ob("WAVE");
  Ca.fmt_ = Ob("fmt ");
  Ca.data = Ob("data");
  Ca.readHeader = function (d) {
    var k = new Ca(),
      q = d.getUint32(0, !1);
    if (
      Ca.RIFF == q &&
      (d.getUint32(4, !0),
      Ca.WAVE == d.getUint32(8, !1) && Ca.fmt_ == d.getUint32(12, !1))
    ) {
      var r = d.getUint32(16, !0),
        B = 20;
      switch (r) {
        case 16:
        case 18:
          k.channels = d.getUint16(B + 2, !0);
          k.sampleRate = d.getUint32(B + 4, !0);
          break;
        default:
          throw "extended fmt chunk not implemented";
      }
      for (var B = B + r, r = Ca.data, t = 0; r != q; ) {
        q = d.getUint32(B, !1);
        t = d.getUint32(B + 4, !0);
        if (r == q) break;
        B += t + 8;
      }
      k.dataLen = t;
      k.dataOffset = B + 8;
      return k;
    }
  };
  na.SFBMAX = 3 * d.SBMAX_s;
  this.Mp3Encoder = function (d, k, q) {
    3 != arguments.length &&
      (console.error(
        "WARN: Mp3Encoder(channels, samplerate, kbps) not specified"
      ),
      (d = 1),
      (k = 44100),
      (q = 128));
    var r = new V(),
      B = new Uc(),
      t = new O(),
      H = new ua(),
      g = new Gc(),
      b = new ma(),
      l = new Oc(),
      a = new ub(),
      h = new Fc(),
      D = new Xc(),
      e = new Hc(),
      n = new tb(),
      c = new Vc(),
      f = new Wc();
    r.setModules(t, H, g, b, l, a, h, D, f);
    H.setModules(t, f, h, a);
    D.setModules(H, h);
    g.setModules(r);
    l.setModules(H, e, b, n);
    b.setModules(n, e, r.enc.psy);
    e.setModules(H);
    n.setModules(b);
    a.setModules(r, H, h);
    B.setModules(c, f);
    c.setModules(h, D, g);
    var E = r.lame_init();
    E.num_channels = d;
    E.in_samplerate = k;
    E.brate = q;
    E.mode = ka.STEREO;
    E.quality = 3;
    E.bWriteVbrTag = !1;
    E.disable_reservoir = !0;
    E.write_id3tag_automatic = !1;
    r.lame_init_params(E);
    var z = 1152,
      w = 0 | (1.25 * z + 7200),
      A = new Int8Array(w);
    this.encodeBuffer = function (a, b) {
      1 == d && (b = a);
      a.length > z &&
        ((z = a.length), (w = 0 | (1.25 * z + 7200)), (A = new Int8Array(w)));
      var c = r.lame_encode_buffer(E, a, b, a.length, A, 0, w);
      return new Int8Array(A.subarray(0, c));
    };
    this.flush = function () {
      var a = r.lame_encode_flush(E, A, 0, w);
      return new Int8Array(A.subarray(0, a));
    };
  };
  this.WavHeader = Ca;
}
