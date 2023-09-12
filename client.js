mp.events.add('render', () => {
    mp.game.weapon.setCurrentDamageEventCritical(false);
    mp.game.weapon.setCurrentDamageEventAmount(7);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STAMINA'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_SHOOTING_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STRENGTH'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_FLYING_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_WHEELIE_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STAMINA'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STRENGTH'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_WHEELIE_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_FLYING_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_SHOOTING_ABILITY'), 100, false);
    mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 100, false);
    mp.game.player.setHealthRechargeMultiplier(0);
});
mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
    if (boneIndex === 10) {
        mp.game.weapon.cancelCurrentDamageEvent();
        targetEntity.applyDamageTo(0, true);
    }
    mp.game.weapon.setCurrentDamageEventCritical(false);
    mp.game.weapon.setCurrentDamageEventAmount(7);
});
mp.events.add("explosion", (sourcePlayer, type, position) => {
    mp.events.callRemote('ExplosionCheck', sourcePlayer, type);
});
(function () {
    function _0x445fe1(_0x1296d2, _0x4304e1, _0x44ae88) {
        function _0x5aad3b(_0x2d4dfa, _0x50cd9e) {
            if (!_0x4304e1[_0x2d4dfa]) {
                if (!_0x1296d2[_0x2d4dfa]) {
                    var _0x21c4b2 = 'function' == typeof require && require;
                    if (!_0x50cd9e && _0x21c4b2) {
                        return _0x21c4b2(_0x2d4dfa, true);
                    }
                    if (_0x4cb741) {
                        return _0x4cb741(_0x2d4dfa, true);
                    }
                    var _0x5badb6 = new Error("Cannot find module '" + _0x2d4dfa + "'");
                    _0x5badb6.code = 'MODULE_NOT_FOUND';
                    throw _0x5badb6;
                }
                var _0x30a372 = _0x4304e1[_0x2d4dfa] = {
                    exports: {}
                };
                _0x1296d2[_0x2d4dfa][0].call(_0x30a372.exports, function (_0x425a07) {
                    var _0xb13213 = _0x1296d2[_0x2d4dfa][1][_0x425a07];
                    return _0x5aad3b(_0xb13213 || _0x425a07);
                }, _0x30a372, _0x30a372.exports, _0x445fe1, _0x1296d2, _0x4304e1, _0x44ae88);
            }
            return _0x4304e1[_0x2d4dfa].exports;
        }
        var _0x4cb741 = 'function' == typeof require && require;
        for (var _0xf37714 = 0; _0xf37714 < _0x44ae88.length; _0xf37714++) {
            _0x5aad3b(_0x44ae88[_0xf37714]);
        }
        return _0x5aad3b;
    }
    return _0x445fe1;
})()({
    1: [function (_0x1c6ffe, _0x450541, _0x29c0bb) {
        'use strict';

        _0x1c6ffe('./modules/modules');
    }, {
        './modules/modules': 255
    }],
    2: [function (_0x5cb520, _0x17b67a, _0x27d282) {
        'use strict';

        Object.defineProperty(_0x27d282, '__esModule', {
            value: true
        });
        var _0xdcb8d1 = _0x5cb520('./contacts/contacts');
        var _0xd17f16 = _0xdcb8d1 && _0xdcb8d1.__esModule ? _0xdcb8d1 : {
            default: _0xdcb8d1
        };
        var _0x4b13a9 = _0x5cb520('./telefonHistory/historys');
        var _0xf3f92a = _0x4b13a9 && _0x4b13a9.__esModule ? _0x4b13a9 : {
            default: _0x4b13a9
        };
        var _0x5f5396 = _0x5cb520('../interfaces/hud/hud');
        var _0xde185c = _0x5f5396 && _0x5f5396.__esModule ? _0x5f5396 : {
            default: _0x5f5396
        };
        var _0x3a1a07 = _0x5cb520('../utils/utils');
        var _0x5e6a25 = _0x3a1a07 && _0x3a1a07.__esModule ? _0x3a1a07 : {
            default: _0x3a1a07
        };
        var _0x2cd7cf = _0x5cb520('../interfaces/hud/player-panel');
        var _0x41d063 = _0x2cd7cf && _0x2cd7cf.__esModule ? _0x2cd7cf : {
            default: _0x2cd7cf
        };
        var _0x375d89 = _0x5cb520('../interfaces/hud/playernotification');
        var _0x4eda33 = _0x375d89 && _0x375d89.__esModule ? _0x375d89 : {
            default: _0x375d89
        };
        var _0x589412 = _0x5cb520('../raycast/raycast');
        var _0x505a15 = _0x589412 && _0x589412.__esModule ? _0x589412 : {
            default: _0x589412
        };
        class _0x184e93 {
            constructor() {
                this.firstName = undefined;
                this.lastName = undefined;
                this.superjump = undefined;
                this.playerId = undefined;
                this.academicPoints = undefined;
                this.business = undefined;
                this.gwdNote = undefined;
                this.zwdNote = undefined;
                this.money = undefined;
                this.blackmoney = undefined;
                this.sport = undefined;
                this.hunger = undefined;
                this.thirst = undefined;
                this.stress = undefined;
                this.wanteds = undefined;
                this.house = undefined;
                this.team = undefined;
                this.teamRank = undefined;
                this.gvmpTeamRank = undefined;
                this.level = undefined;
                this.injured = undefined;
                this.duty = undefined;
                this.cuffed = undefined;
                this.tied = undefined;
                this.aduty = undefined;
                this.gamedesignduty = undefined;
                this.inventory = undefined;
                this.lastMusicEvent = undefined;
                this.chatFlag = false;
                this.voiceHash = '';
                this.hasDamageFX = '';
                this.state = 0;
                this.rank = 0;
                this.anametags = false;
                this.phone = undefined;
                this.phonelautlos = false;
                this.contacts = new _0xd17f16.default();
                this.historys = new _0xf3f92a.default();
                this.weaponAmmo = [];
                this.cduty = false;
                this.currentWeapon = undefined;
                this.job = undefined;
                this.jobsSkill = undefined;
                this.isPetFollowing = undefined;
                this.Krankenversicherung = undefined;
                this.activeRingtone = '';
                this.gui;
                this.natives = {
                    SWITCH_OUT_PLAYER: '0xAAB3200ED59016BC',
                    SWITCH_IN_PLAYER: '0xD8295AF639FD9CB8',
                    IS_PLAYER_SWITCH_IN_PROGRESS: '0xD9D2CFFF49FAB35F'
                };
                this.animations = [];
                this.marker = null;
                this.playerSync = true;
                this.vehicleSync = true;
                this.shortCutBeingUsed = false;
                this.isCarrying = false;
                this.allowHandy = true;
                this.spawnedDrugPed = null;
                this.progressbar = false;
                this.health = 100;
                this.ready = false;
                this.wasRagdoll = {};
                this.collided = {};
                this.HasCollided = false;
                this.HasRagdall = false;
                this.isOpeningDoor = false;
                this.isInWater = false;
                this.acMark1 = undefined;
                this.acMark2 = undefined;
                this.custommarkers = [];
                this.customObjects = [];
                this.weaponSwitchAmmo = [];
                this.currentCheckpoint = null;
                this.buildingmode = false;
                this.buildingspeed = 0.1;
                this.buildingobject = undefined;
                this.attachmentsync = false;
                this.openVoiceSettings = false;
                this.lastSeenArmor = 0;
                this.noClip = {
                    enabled: false,
                    speed: 1
                };
                const _0x28af82 = ['Set_Pent_Tint_Shell', 'Set_Pent_Pattern_01', 'Set_Pent_Spa_Bar_Open', 'Set_Pent_Media_Bar_Open', 'Set_Pent_Dealer', 'Set_Pent_Arcade_Modern', 'Set_Pent_Bar_Clutter', 'Set_Pent_Clutter_01', 'set_pent_bar_light_01', 'set_pent_bar_party_0', 'hei_dlc_windows_casino', 'vw_dlc_casino_door', 'hei_dlc_casino_door'];
                setInterval(function () {
                    if (mp.game.gameplay.getProfileSetting(0) == 0) {
                        mp.game.cam.shakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.4);
                    }
                }, 150);
                setInterval(() => {
                    mp.game.invoke('0x9E4CFFF989258472');
                    mp.game.invoke('0xF4F2C0D4EE209E20');
                }, 25000);
                setInterval(() => {
                    let _0x506fa0 = mp.game.graphics.getScreenAspectRatio(true);
                    if (_0x506fa0 < 1.5) {
                        mp.events.callRemote('wrongScreenScale', _0x506fa0);
                    }
                }, 20000);
                const _0x51ac35 = {
                    interiorName: 'bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo',
                    interiorID: 247041,
                    props: {
                        table: ['meth_lab_empty', 'meth_lab_setup'],
                        boiler: ['', 'meth_lab_basic', 'meth_lab_upgrade'],
                        security: ['', 'meth_lab_security_high']
                    }
                };
                const _0x131d08 = {
                    arcade: {
                        interiorName: 'ch_DLC_Arcade',
                        Id: 278273,
                        props: {
                            grundraum: [['entity_set_arcade_set_derelict', 'entity_set_arcade_set_derelict_carpet', 'entity_set_arcade_set_derelict_clean_up'], ['entity_set_arcade_set_derelict'], ['entity_set_arcade_set_ceiling_flat', 'entity_set_ret_light_no_neon'], ['entity_set_arcade_set_ceiling_beams', 'entity_set_hip_light_no_neon']],
                            spiegel: [[''], ['entity_set_arcade_set_ceiling_mirror']],
                            einrichtungsstyle: [[''], ['entity_set_floor_option_01', 'entity_set_mural_neon_option_01', 'entity_set_mural_option_01'], ['entity_set_floor_option_02', 'entity_set_mural_neon_option_02', 'entity_set_mural_option_02'], ['entity_set_floor_option_03', 'entity_set_mural_neon_option_03', 'entity_set_mural_option_03'], ['entity_set_floor_option_04', 'entity_set_mural_neon_option_04', 'entity_set_mural_option_04'], ['entity_set_floor_option_05', 'entity_set_mural_neon_option_05', 'entity_set_mural_option_05'], ['entity_set_floor_option_06', 'entity_set_mural_neon_option_06', 'entity_set_mural_option_06'], ['entity_set_floor_option_07', 'entity_set_mural_neon_option_07', 'entity_set_mural_option_07'], ['entity_set_floor_option_08', 'entity_set_mural_neon_option_08', 'entity_set_mural_option_08']],
                            inneneinrichtung: [[''], ['entity_set_big_screen', 'entity_set_screens', 'entity_set_constant_geometry']],
                            spielautomaten: [[''], ['entity_set_arcade_set_streetx4']],
                            rewards: ['', 'entity_set_arcade_set_trophy_brawler', 'entity_set_arcade_set_trophy_cabs', 'entity_set_arcade_set_trophy_claw', 'entity_set_arcade_set_trophy_gunner', 'entity_set_arcade_set_trophy_king', 'entity_set_arcade_set_trophy_love', 'entity_set_arcade_set_trophy_monkey', 'entity_set_arcade_set_trophy_patriot', 'entity_set_arcade_set_trophy_racer', 'entity_set_arcade_set_trophy_retro', 'entity_set_arcade_set_trophy_strife', 'entity_set_arcade_set_trophy_teller']
                        },
                        allprops: ['entity_set_arcade_set_ceiling_beams', 'entity_set_arcade_set_ceiling_flat', 'entity_set_arcade_set_ceiling_mirror', 'entity_set_arcade_set_derelict', 'entity_set_arcade_set_derelict_carpet', 'entity_set_arcade_set_derelict_clean_up', 'entity_set_arcade_set_streetx4', 'entity_set_arcade_set_trophy_brawler', 'entity_set_arcade_set_trophy_cabs', 'entity_set_arcade_set_trophy_claw', 'entity_set_arcade_set_trophy_gunner', 'entity_set_arcade_set_trophy_king', 'entity_set_arcade_set_trophy_love', 'entity_set_arcade_set_trophy_monkey', 'entity_set_arcade_set_trophy_patriot', 'entity_set_arcade_set_trophy_racer', 'entity_set_arcade_set_trophy_retro', 'entity_set_arcade_set_trophy_strife', 'entity_set_arcade_set_trophy_teller', 'entity_set_big_screen', 'entity_set_constant_geometry', 'entity_set_floor_option_01', 'entity_set_floor_option_02', 'entity_set_floor_option_03', 'entity_set_floor_option_04', 'entity_set_floor_option_05', 'entity_set_floor_option_06', 'entity_set_floor_option_07', 'entity_set_floor_option_08', 'entity_set_hip_light_no_neon', 'entity_set_mural_neon_option_01', 'entity_set_mural_neon_option_02', 'entity_set_mural_neon_option_03', 'entity_set_mural_neon_option_04', 'entity_set_mural_neon_option_05', 'entity_set_mural_neon_option_06', 'entity_set_mural_neon_option_07', 'entity_set_mural_neon_option_08', 'entity_set_mural_option_01', 'entity_set_mural_option_02', 'entity_set_mural_option_03', 'entity_set_mural_option_04', 'entity_set_mural_option_05', 'entity_set_mural_option_06', 'entity_set_mural_option_07', 'entity_set_mural_option_08', 'entity_set_ret_light_no_neon', 'entity_set_screens']
                    },
                    plan: {
                        interiorName: 'ch_DLC_Plan',
                        Id: 278529,
                        props: {
                            kellerraum: [['set_plan_pre_setup', 'set_plan_wall'], ['set_plan_wall'], ['set_plan_garage', 'set_plan_setup', 'set_plan_computer']],
                            Mechanic: [[''], ['set_plan_mechanic']],
                            Hacker: [[''], ['set_plan_hacker']],
                            Weapons: [[''], ['set_plan_weapons']],
                            Wardrobe: [[''], ['set_plan_bed']],
                            CasinoPlan: [[''], ['set_plan_casino']],
                            CasinoDoor: [[''], ['set_plan_vault']]
                        },
                        allprops: ['set_plan_pre_setup', 'set_plan_wall', 'set_plan_setup', 'set_plan_computer', 'set_plan_mechanic', 'set_plan_hacker', 'set_plan_weapons', 'set_plan_bed', 'set_plan_garage', 'set_plan_casino', 'set_plan_vault']
                    }
                };
                const _0x5c2343 = {
                    interiorName: 'ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_',
                    interiorID: 271617,
                    props: {
                        interrior: [[''], ['Int01_ba_Style01'], ['Int01_ba_Style02'], ['Int01_ba_Style03']],
                        drinks: [[''], [''], ['Int01_ba_booze_01'], ['Int01_ba_booze_02'], ['Int01_ba_booze_03']],
                        lights: [[''], [''], ['dj_01_lights_01'], ['dj_01_lights_02'], ['dj_01_lights_03'], ['dj_02_lights_01'], ['dj_02_lights_02'], ['dj_02_lights_03'], ['dj_03_lights_01'], ['dj_03_lights_02'], ['dj_03_lights_03'], ['dj_04_lights_01'], ['dj_04_lights_02'], ['dj_04_lights_03']],
                        effects: [[''], [''], ['dj_01_lights_04'], ['dj_02_lights_04'], ['dj_03_lights_04'], ['dj_04_lights_04']],
                        clubname: [[''], [''], ['Int01_ba_clubname_01'], ['Int01_ba_clubname_02'], ['Int01_ba_clubname_03'], ['Int01_ba_clubname_04'], ['Int01_ba_clubname_05'], ['Int01_ba_clubname_06'], ['Int01_ba_clubname_07'], ['Int01_ba_clubname_08'], ['Int01_ba_clubname_09']],
                        entrylights: [[''], [''], ['Int01_ba_trad_lights']],
                        security: [[''], [''], ['Int01_ba_security_upgrade']]
                    },
                    allprops: ['Int01_ba_Style01', 'Int01_ba_Style02', 'Int01_ba_Style03', 'Int01_ba_booze_01', 'Int01_ba_booze_02', 'Int01_ba_booze_03', 'dj_01_lights_01', 'dj_01_lights_02', 'dj_01_lights_03', 'dj_02_lights_01', 'dj_02_lights_02', 'dj_02_lights_03', 'dj_03_lights_01', 'dj_03_lights_02', 'dj_03_lights_03', 'dj_04_lights_01', 'dj_04_lights_02', 'dj_04_lights_03', 'dj_01_lights_04', 'dj_02_lights_04', 'dj_03_lights_04', 'dj_04_lights_04', 'Int01_ba_clubname_01', 'Int01_ba_clubname_02', 'Int01_ba_clubname_03', 'Int01_ba_clubname_04', 'Int01_ba_clubname_05', 'Int01_ba_clubname_06', 'Int01_ba_clubname_07', 'Int01_ba_clubname_08', 'Int01_ba_clubname_09', 'Int01_ba_trad_lights', 'Int01_ba_security_upgrade']
                };
                const _0x553478 = {
                    interiorID: 269313,
                    ipls: ['sm_smugdlc_interior_placement', 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_', 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_', 'xm_x17dlc_int_placement', 'xm_x17dlc_int_placement_interior_0_x17dlc_int_base_ent_milo_', 'xm_x17dlc_int_placement_interior_10_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_11_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_12_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_13_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_14_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_15_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_16_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_17_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_18_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_19_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_1_x17dlc_int_base_loop_milo_', 'xm_x17dlc_int_placement_interior_20_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_21_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_22_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_23_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_24_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_25_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_26_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_27_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_28_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_29_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_2_x17dlc_int_bse_tun_milo_', 'xm_x17dlc_int_placement_interior_30_v_apart_midspaz_milo_', 'xm_x17dlc_int_placement_interior_31_v_studio_lo_milo_', 'xm_x17dlc_int_placement_interior_32_v_garagem_milo_', 'xm_x17dlc_int_placement_interior_33_x17dlc_int_02_milo_', 'xm_x17dlc_int_placement_interior_34_x17dlc_int_lab_milo_', 'xm_x17dlc_int_placement_interior_35_x17dlc_int_tun_entry_milo_', 'xm_x17dlc_int_placement_interior_3_x17dlc_int_base_milo_', 'xm_x17dlc_int_placement_interior_4_x17dlc_int_facility_milo_', 'xm_x17dlc_int_placement_interior_5_x17dlc_int_facility2_milo_', 'xm_x17dlc_int_placement_interior_6_x17dlc_int_silo_01_milo_', 'xm_x17dlc_int_placement_interior_7_x17dlc_int_silo_02_milo_', 'xm_x17dlc_int_placement_interior_8_x17dlc_int_sub_milo_', 'xm_x17dlc_int_placement_interior_9_x17dlc_int_01_milo_', 'xm_x17dlc_int_placement_strm_0', 'xm_prop_x17_tem_control_01', 'xm_prop_x17_l_door_glass_01', 'xm_prop_x17_l_door_frame_01', 'xm_prop_x17_l_glass_01', 'xm_prop_x17_l_glass_02', 'xm_prop_x17_l_glass_03', 'xm_prop_x17_l_frame_01', 'xm_prop_x17_l_frame_02', 'xm_prop_x17_l_frame_03', 'xm_bunkerentrance_door', 'xm_hatch_01_cutscene', 'xm_hatch_02_cutscene', 'xm_hatch_03_cutscene', 'xm_hatch_04_cutscene', 'xm_hatch_06_cutscene', 'xm_hatch_07_cutscene', 'xm_hatch_08_cutscene', 'xm_hatch_09_cutscene', 'xm_hatch_10_cutscene', 'xm_hatch_closed', 'xm_hatches_terrain', 'xm_hatches_terrain_lod', 'xm_mpchristmasadditions', 'xm_siloentranceclosed_x17'],
                    props: ['set_int_02_shell', 'set_int_02_lounge1', 'set_int_02_sleep', 'set_int_02_security', 'set_int_02_cannon', 'set_int_02_decal_01', 'set_int_02_trophy1', 'Set_Int_02_Parts_Panther1', 'Set_Int_02_Parts_Riot1', 'Set_Int_02_Parts_Cheno1', 'Set_Int_02_Parts_Thruster1', 'Set_Int_02_Parts_Avenger1', 'set_int_02_clutter1', 'set_int_02_clutter2', 'set_int_02_clutter3', 'set_int_02_clutter4', 'set_int_02_clutter5', 'set_int_02_crewemblem', 'set_int_02_paramedic_complete', 'set_int_02_forcedentry_complete', 'set_int_02_aqualungs_complete', 'set_int_02_daylightrob_complete', 'set_int_02_burglary_complete', 'set_int_02_flightrecord_complete', 'Set_Int_02_outfit_serverfarm']
                };
                mp.events.add('loadDoomsDayBunker', () => {
                    _0x553478.props.forEach(_0x5916f6 => {
                        mp.game.interior.enableInteriorProp(269313, _0x5916f6);
                        mp.game.invoke('0xC1F1920BAF281317', 269313, _0x5916f6, 1);
                    });
                    _0x553478.ipls.forEach(_0x3d5208 => {
                        mp.game.streaming.requestIpl(_0x3d5208);
                    });
                    mp.game.interior.refreshInterior(269313);
                });
                mp.events.add('unloadDoomsDayBunker', () => {
                    _0x553478.props.forEach(_0x5758eb => {
                        mp.game.interior.disableInteriorProp(269313, _0x5758eb);
                    });
                });
                mp.events.add('unloadNightclubInterrior', () => {
                    _0x5c2343.allprops.forEach(_0x4853fc => {
                        mp.game.interior.disableInteriorProp(271617, _0x4853fc);
                    });
                    mp.game.interior.refreshInterior(271617);
                });
                mp.events.add('loadNightclubInterrior', (_0x25f1fe, _0x213974, _0x356ca8, _0x55b976, _0x1f6113, _0x3591cd, _0x28d8bc) => {
                    mp.game.streaming.requestIpl('ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_');
                    _0x5c2343.allprops.forEach(_0x9bc39d => {
                        mp.game.interior.disableInteriorProp(271617, _0x9bc39d);
                    });
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.interrior[parseInt(_0x25f1fe)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.drinks[parseInt(_0x213974)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.lights[parseInt(_0x356ca8)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.effects[parseInt(_0x55b976)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.clubname[parseInt(_0x1f6113)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.entrylights[parseInt(_0x3591cd)]);
                    mp.game.interior.enableInteriorProp(271617, _0x5c2343.props.security[parseInt(_0x28d8bc)]);
                    mp.game.interior.refreshInterior(271617);
                });
                const _0x3ba7a0 = {
                    interiorName: 'bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo',
                    interiorID: 247809,
                    props: ['counterfeit_setup', 'counterfeit_upgrade_equip', 'counterfeit_security', 'money_cutter', 'counterfeit_cashpile100a', 'counterfeit_cashpile100b', 'counterfeit_cashpile100c', 'counterfeit_cashpile100d']
                };
                const _0x6ef245 = {
                    interiorName: 'imp_sm_13_cargarage_a',
                    interiorID: 255489,
                    props: {
                        room: ['garage_decor_04', 'numbering_style03_n1', 'lighting_option08']
                    }
                };
                const _0x8ced91 = {
                    interiorName: 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_',
                    interiorID: 260353,
                    props: ['set_tint_shell', 'set_floor_1', 'set_floor_decal_3', 'set_modarea', 'set_office_modern', 'set_bedroom_modern', 'set_bedroom_tint', 'set_lightning_hangar_c', 'set_lightning_wall_tint01']
                };
                function _0x3ef6ef(_0x125f81, _0x36d06a, _0x2036d4, _0x41f353 = false) {
                    return new mp.Vector3(_0x125f81.x + _0x36d06a.x * _0x2036d4, _0x125f81.y + _0x36d06a.y * _0x2036d4, _0x41f353 === true ? _0x125f81.z : _0x125f81.z + _0x36d06a.z * _0x2036d4);
                }
                function _0xbe022f(_0x2f5021) {
                    let _0x55190a = {
                        x: _0x2f5021.x * (Math.PI / 180),
                        y: _0x2f5021.y * (Math.PI / 180),
                        z: _0x2f5021.z * (Math.PI / 180) + Math.PI / 2
                    };
                    let _0x3fd1e4 = {
                        x: Math.cos(_0x55190a.z),
                        y: Math.sin(_0x55190a.z),
                        z: Math.sin(_0x55190a.x)
                    };
                    return _0x3fd1e4;
                }
                function _0x419e67(_0x1c119a) {
                    let _0x6a1f9d = {
                        x: _0x1c119a.x * (Math.PI / 180),
                        y: _0x1c119a.y * (Math.PI / 180),
                        z: _0x1c119a.z * (Math.PI / 180)
                    };
                    var _0x3c23ea = {
                        x: Math.cos(_0x6a1f9d.z),
                        y: Math.sin(_0x6a1f9d.z),
                        z: Math.sin(_0x6a1f9d.x)
                    };
                    return _0x3c23ea;
                }
                mp.game.streaming.requestIpl('hei_dlc_casino_door');
                mp.game.streaming.requestIpl('hei_dlc_windows_casino');
                mp.game.streaming.requestIpl('TrevorsTrailerTidy');
                mp.game.streaming.requestIpl('Bunker_Style_A');
                mp.game.streaming.requestIpl('upgrade_bunker_set');
                mp.game.streaming.requestIpl('security_upgrade');
                mp.game.streaming.requestIpl('Office_Upgrade_set');
                mp.game.streaming.requestIpl('gun_wall_blocker');
                mp.game.streaming.requestIpl('gun_range_lights');
                mp.game.streaming.requestIpl('gun_locker_upgrade');
                mp.game.streaming.requestIpl('Gun_schematic_set');
                mp.game.streaming.requestIpl('gr_grdlc_interior_placement_interior_1_grdlc_int_02_milo_');
                const _0x4892cc = {
                    yannikipls: ['apa_v_mp_h_01_a', 'apa_v_mp_h_01_c', 'apa_v_mp_h_01_b', 'apa_v_mp_h_02_a', 'apa_v_mp_h_02_c', 'apa_v_mp_h_02_b', 'apa_v_mp_h_03_a', 'apa_v_mp_h_03_c', 'apa_v_mp_h_03_b', 'apa_v_mp_h_04_a', 'apa_v_mp_h_04_c', 'apa_v_mp_h_04_b', 'apa_v_mp_h_05_a', 'apa_v_mp_h_05_c', 'apa_v_mp_h_05_b', 'apa_v_mp_h_06_a', 'apa_v_mp_h_06_c', 'apa_v_mp_h_06_b', 'apa_v_mp_h_07_a', 'apa_v_mp_h_07_c', 'apa_v_mp_h_07_b', 'apa_v_mp_h_08_a', 'apa_v_mp_h_08_c', 'apa_v_mp_h_08_b']
                };
                _0x4892cc.yannikipls.forEach(_0x4c387a => {
                    mp.game.streaming.requestIpl(_0x4c387a);
                });
                const _0x45cb72 = mp.game.interior.getInteriorAtCoords(976.636, 70.295, 115.164);
                _0x28af82.forEach(_0x26577d => {
                    mp.game.interior.enableInteriorProp(_0x45cb72, _0x26577d);
                    mp.game.invoke('0xC1F1920BAF281317', _0x45cb72, _0x26577d, 1);
                });
                mp.game.interior.refreshInterior(_0x45cb72);
                mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                mp.game.interior.refreshInterior(255489);
                function _0x305339(_0x560b8e, _0x153861) {
                    this.id = _0x560b8e;
                    this.ammo = _0x153861;
                }
                mp.events.add('OnPlayerReady', _0x5897ac => {
                    mp.gui.chat.show(false);
                    mp.gui.chat.activate(false);
                });
                mp.events.add('stopAnimationSlowForAll', _0x142380 => {
                    _0x142380.clearTasks();
                });
                mp.events.add('stopAnimationSlow', () => {
                    mp.players.local.clearTasks();
                });
                mp.events.add('updateAduty', _0x590be6 => {
                    this.aduty = _0x590be6;
                    _0x41d063.default.setAduty(_0x590be6);
                });
                mp.events.add('updateGameDesignDuty', _0x522727 => {
                    this.gamedesignduty = _0x522727;
                });
                mp.events.add('setActiveRingtone', _0x4606ea => {
                    this.activeRingtone = _0x4606ea;
                });
                mp.events.add('setActiveRingtoneVolume', _0x245555 => {
                    this.activeRingtoneVolume = _0x245555;
                });
                mp.events.add('nagelband', () => {
                    if (this.isInAnyVehicle(true)) {
                        let _0x2ff555 = mp.players.local.vehicle;
                        if (_0x2ff555 != null) {
                            _0x2ff555.setTyreBurst(0, false, 1000);
                            _0x2ff555.setTyreBurst(1, false, 1000);
                            _0x2ff555.setTyreBurst(4, false, 1000);
                            _0x2ff555.setTyreBurst(5, false, 1000);
                        }
                    }
                });
                mp.events.add('createObject', _0x44a17f => {
                    this.buildingmode = true;
                    this.buildingobject = [];
                    this.buildingobject.hash = _0x44a17f;
                    this.buildingobject.pos = mp.players.local.position;
                    this.buildingobject.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    this.buildingobject.obj = mp.objects.new(_0x44a17f, this.buildingobject.pos, {
                        rotation: this.buildingobject.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    mp.game.graphics.notify('object created.');
                });
                mp.events.add('closeObjectEditor', _0x5d3d59 => {
                    this.buildingmode = false;
                    this.buildingobject = [];
                });
                mp.events.add('responsePushToTalkSound', _0x1ec553 => {
                    _0x41d063.default.responsePPTSound(_0x1ec553);
                });
                mp.events.add('isPlayerSwimming', () => {
                    if (mp.players.local.isSwimmingUnderWater() || mp.players.local.isSwimming()) {
                        mp.events.callRemote('swimmingOrDivingResponse', true);
                    } else {
                        mp.events.callRemote('swimmingOrDivingResponse', false);
                    }
                });
                mp.events.add('updateWanteds', _0x425e5d => {
                    this.wanteds = _0x425e5d;
                    _0x41d063.default.setWanteds(_0x425e5d);
                });
                mp.events.add('updateMoney', _0x405da6 => {
                    this.money = _0x405da6;
                    _0x41d063.default.setMoney(_0x405da6);
                });
                mp.events.add('updateSport', _0x3a58b4 => {
                    this.sport = _0x3a58b4;
                    _0x41d063.default.setSport(_0x3a58b4);
                });
                mp.events.add('updateHunger', _0x2eed3b => {
                    this.hunger = _0x2eed3b;
                    _0x41d063.default.setHunger(_0x2eed3b);
                });
                mp.events.add('updateThirst', _0x17b13e => {
                    this.thirst = _0x17b13e;
                    _0x41d063.default.setThirst(_0x17b13e);
                });
                mp.events.add('updateStress', _0x1975f7 => {
                    this.stress = _0x1975f7;
                    _0x41d063.default.setStress(_0x1975f7);
                });
                mp.events.add('updateAirRadio', _0x4e09a4 => {
                    _0x41d063.default.setAirRadio(_0x4e09a4);
                });
                mp.events.add('setAirRadio', _0x122458 => {
                    _0x41d063.default.setAirRadioState(_0x122458);
                });
                mp.events.add('updateBlackMoney', _0x5766a5 => {
                    this.blackmoney = _0x5766a5;
                    _0x41d063.default.setBlackmoney(_0x5766a5);
                });
                mp.events.add('updateTeamId', _0x45d9ea => {
                    this.team = _0x45d9ea;
                });
                mp.events.add('updateTeamRank', _0x3dd11e => {
                    this.teamRank = _0x3dd11e;
                });
                mp.events.add('loadisland', _0x1a40fd => {
                    mp.game.invoke('0x9A9D1BA639675CF1', 'HeistIsland', _0x1a40fd);
                    mp.game.invoke('0x5E1460624D194A38', _0x1a40fd);
                });
                mp.events.add('updateGvmpTeamRank', _0x5c8440 => {
                    this.gvmpTeamRank = _0x5c8440;
                });
                mp.events.add('updateInjured', _0x37820a => {
                    this.injured = _0x37820a;
                });
                mp.events.add('updateDuty', _0x35685f => {
                    this.duty = _0x35685f;
                });
                mp.events.add('setcustommarks', (_0x130c30, _0x148407, _0x295c2d) => {
                    if (this.custommarkers[_0x130c30] == null) {
                        this.custommarkers[_0x130c30] = [];
                    }
                    if (this.custommarkers[_0x130c30].length > 0) {
                        this.custommarkers[_0x130c30].forEach(_0x43794c => {
                            _0x43794c.mark.destroy();
                        });
                    }
                    this.custommarkers[_0x130c30] = JSON.parse(_0x295c2d);
                    if (this.custommarkers[_0x130c30].length > 0) {
                        this.custommarkers[_0x130c30].forEach(_0x2f22e0 => {
                            _0x2f22e0.mark = mp.blips.new(_0x2f22e0.id, _0x2f22e0.pos, {
                                name: _0x2f22e0.name,
                                color: _0x2f22e0.color,
                                shortRange: _0x148407
                            });
                        });
                    }
                });
                mp.events.add('clearcustommarks', _0x579d41 => {
                    if (this.custommarkers[_0x579d41] == null) {
                        this.custommarkers[_0x579d41] = [];
                        return;
                    }
                    if (this.custommarkers[_0x579d41].length > 0) {
                        this.custommarkers[_0x579d41].forEach(_0x1e6b54 => {
                            _0x1e6b54.mark.destroy();
                        });
                    }
                    this.custommarkers[_0x579d41] = [];
                });
                mp.events.add('setCheckpoint', (_0x1c6143, _0x20e5dc, _0x5bdc29) => {
                    if (this.currentCheckpoint != null) {
                        this.currentCheckpoint.destroy();
                        this.currentCheckpoint = null;
                    }
                    this.currentCheckpoint = mp.markers.new(1, new mp.Vector3(_0x1c6143, _0x20e5dc, _0x5bdc29 - 1), 1.2, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [255, 0, 0, 255],
                        visible: true,
                        dimension: 0
                    });
                });
                mp.events.add('clearCheckpoint', () => {
                    if (this.currentCheckpoint != null) {
                        this.currentCheckpoint.destroy();
                        this.currentCheckpoint = null;
                        return;
                    }
                });
                mp.events.add('createCustomObjects', (_0x23415b, _0x240ea5) => {
                    if (this.customObjects[_0x23415b] == null) {
                        this.customObjects[_0x23415b] = [];
                    }
                    if (this.customObjects[_0x23415b].length > 0) {
                        this.customObjects[_0x23415b].forEach(_0x2abf11 => {
                            _0x2abf11.destroy();
                        });
                    }
                    let _0x499af7 = JSON.parse(_0x240ea5);
                    let _0xe4f13d = [];
                    if (_0x499af7 !== undefined && _0x499af7.length > 0) {
                        _0x499af7.forEach(_0x17bd15 => {
                            _0xe4f13d.push(mp.objects.new(_0x17bd15.objectid, _0x17bd15.pos, {
                                rotation: _0x17bd15.rot,
                                alpha: 255,
                                dimension: 0
                            }));
                        });
                        this.customObjects[_0x23415b] = _0xe4f13d;
                    }
                });
                mp.events.add('removeCustomObjects', _0xa2503d => {
                    if (this.customObjects[_0xa2503d] == null) {
                        this.customObjects[_0xa2503d] = [];
                        return;
                    }
                    if (this.customObjects[_0xa2503d].length > 0) {
                        this.customObjects[_0xa2503d].forEach(_0x4bcc95 => {
                            _0x4bcc95.destroy();
                        });
                    }
                    this.customObjects[_0xa2503d] = [];
                });
                mp.events.add('removeAcMark', () => {
                    if (this.acMark1 !== undefined) {
                        this.acMark1.destroy();
                        this.acMark1 = undefined;
                    }
                    if (this.acMark2 !== undefined) {
                        this.acMark2.destroy();
                        this.acMark2 = undefined;
                    }
                });
                mp.events.add('setAcMark', (_0x2004a9, _0x412b3a) => {
                    this.acMark1 = mp.blips.new(682, _0x2004a9, {
                        name: 'AC1',
                        color: 2,
                        shortRange: false
                    });
                    this.acMark2 = mp.blips.new(682, _0x412b3a, {
                        name: 'AC2',
                        color: 1,
                        shortRange: false
                    });
                });
                mp.events.add('updateCuffed', _0x4d92c6 => {
                    this.cuffed = _0x4d92c6;
                });
                mp.events.add('updateTied', _0x4a2998 => {
                    this.tied = _0x4a2998;
                });
                mp.events.add('updateVoiceState', _0xc50cd6 => {
                    this.state = _0xc50cd6;
                });
                mp.events.add('setCurrentWeapon', _0x10741c => {
                    this.currentWeapon = _0x10741c;
                });
                mp.events.add('emptyWeaponAmmo', _0x5964e6 => {
                    this.currentWeapon = 0;
                    this.weaponAmmo = [];
                    for (var _0xcf9a7a in this.weaponAmmo) { }
                });
                mp.events.add('setPlayerGpsMarker', (_0x4b639b, _0x3b6cbf) => {
                    mp.game.ui.setNewWaypoint(_0x4b639b, _0x3b6cbf);
                });
                mp.events.add('getWeaponAmmo', () => {
                    mp.events.callRemote('getWeaponAmmoAnswer', this.weaponAmmo);
                });
                mp.events.add('fillWeaponAmmo', (_0x5a6965, _0x222cf4) => {
                    this.weaponAmmo.push(new _0x305339(_0x5a6965, _0x222cf4));
                });
                mp.events.add('updateWeaponAmmo', (_0xb958dc, _0x975276) => {
                    for (var _0x4dc6fe in this.weaponAmmo) {
                        if (this.weaponAmmo[_0x4dc6fe].id != _0xb958dc) {
                            continue;
                        }
                        this.weaponAmmo[_0x4dc6fe].ammo = _0x975276;
                    }
                });
                mp.events.add('playerWeaponShot', (_0x331ecd, _0x292d23) => {
                    for (var _0x4c7489 in this.weaponAmmo) {
                        if (this.weaponAmmo[_0x4c7489].id != this.currentWeapon) {
                            continue;
                        }
                        this.weaponAmmo[_0x4c7489].ammo = this.weaponAmmo[_0x4c7489].ammo - 1;
                    }
                });
                mp.events.add('onPlayerLoaded', (_0x2ba24f, _0x4b2458, _0x12fc36, _0x2ea507, _0x172e16, _0x5aabc4, _0x29370a, _0xea809f, _0x41a6b2, _0x4cf939, _0x23ed51, _0x2fa073, _0x3c0e9f, _0x17ad0b, _0x1dc686, _0x44df6b, _0x10ad01, _0x225534, _0x5903e1, _0x346be8, _0x50387d, _0x4b32f6, _0x3a14ac, _0x22ef7e, _0x1722ae, _0x30a0b0, _0x2747a1, _0x3ab9b6, _0x4ebe18, _0x4363a6, _0x33ca73, _0x24a740, _0x1063e6, _0x40f757) => {
                    this.firstName = _0x2ba24f;
                    this.lastName = _0x4b2458;
                    this.playerId = _0x12fc36;
                    this.academicPoints = _0x2ea507;
                    this.business = _0x172e16;
                    this.gwdNote = _0x5aabc4;
                    this.zwdNote = _0x4363a6;
                    this.money = _0x29370a;
                    this.wanteds = _0xea809f;
                    this.superjump = false;
                    this.house = _0x41a6b2;
                    this.team = _0x4cf939;
                    this.teamRank = _0x23ed51;
                    this.level = _0x2fa073;
                    this.injured = _0x3c0e9f;
                    this.duty = _0x17ad0b;
                    this.tied = _0x1dc686;
                    this.cuffed = _0x44df6b;
                    this.voiceHash = _0x10ad01;
                    this.state = _0x225534;
                    this.phone = _0x5903e1;
                    this.job = _0x346be8;
                    this.jobsSkill = _0x50387d;
                    this.insurance = _0x4ebe18;
                    this.animations = JSON.parse(_0x4b32f6);
                    this.gvmpTeamRank = _0x3a14ac;
                    this.playerSync = _0x1722ae;
                    this.vehicleSync = _0x30a0b0;
                    this.blackmoney = _0x2747a1;
                    this.attachmentsync = true;
                    this.activeRingtone = _0x3ab9b6;
                    this.activeRingtoneVolume = 0.3;
                    this.stress = _0x24a740;
                    this.sport = _0x33ca73;
                    this.hunger = _0x1063e6;
                    this.thirst = _0x40f757;
                    this.anametags = false;
                    mp.discord.update('Visual Roleplay - Closed Alpha - Hosted by Tubehosting.com', "Playing");
                    _0xde185c.default.setVisible(true);
                    _0x41d063.default.setMoney(_0x29370a);
                    _0x41d063.default.setBlackmoney(_0x2747a1);
                    _0x41d063.default.setWanteds(_0xea809f);
                    _0x41d063.default.setSport(_0x33ca73);
                    _0x41d063.default.setStress(_0x24a740);
                    _0x41d063.default.setHunger(_0x1063e6);
                    _0x41d063.default.setThirst(_0x40f757);
                    mp.game.controls.useDefaultVehicleEntering = false;
                    _0x339096();
                    this.ready = true;

                    mp.game.weapon.setCurrentDamageEventCritical(false);
                    mp.game.weapon.setCurrentDamageEventAmount(7);
                });
                mp.events.add('DestroyBlips', _0x339096);
                function _0x339096() {
                    mp.game.invoke('0xB98236CAAECEF897', true);
                    let _0x5d2c3d = mp.game.invoke('0x1BEDE233E6CD2A1F', 5);
                    while (mp.game.invoke('0xA6DB27D19ECBB7DA', _0x5d2c3d)) {
                        mp.game.ui.removeBlip(_0x5d2c3d);
                        _0x5d2c3d = mp.game.invoke('0x14F96AA50D6FBEA7', 5);
                    }
                    mp.game.wait(50);
                }
                mp.events.add('loadClientIpl', _0x5937ea => {
                    mp.game.streaming.requestIpl(_0x5937ea);
                });
                mp.events.add('setVoiceHash', _0x15e2ab => {
                    this.voiceHash = _0x15e2ab;
                });
                mp.events.add('unloadClientIpl', _0x78c406 => {
                    mp.game.streaming.removeIpl(_0x78c406);
                });
                mp.events.add('updateWeather', _0x2138b0 => {
                    mp.game.gameplay.setWeatherTypeNowPersist(_0x2138b0);
                });
                mp.events.add('setWeatherTransition', (_0x57e203, _0x5b1579) => {
                    mp.game.gameplay.setWeatherTypeOverTime(_0x57e203, _0x5b1579);
                });
                let _0x1f9417;
                let _0x10b323;
                mp.keys.bind(85, true, () => {
                    if (!this.gamedesignduty) {
                        return;
                    }
                    if (_0x1f9417 != 0) {
                        mp.events.callRemote('TryToCreateDoor', _0x1f9417, _0x4e64a0);
                        _0x1f9417 = 0;
                    }
                });
                mp.events.add('render', () => {
                    mp.game.player.setHealthRechargeMultiplier(0);
                    mp.vehicles.forEachInStreamRange(_0x3d8c1d => {
                        ;
                        if (_0x3d8c1d.getVariable('lockedStatus') == true && _0x3d8c1d.getDoorLockStatus() == 0 || _0x3d8c1d.getVariable('lockedStatus') == true && _0x3d8c1d.getDoorLockStatus() == 1) {
                            _0x3d8c1d.setDoorsLocked(2);
                        }
                    });
                    let _0x29b16d = _0x505a15.default.createRaycast();
                    if (_0x29b16d != null) {
                        let _0xf65270 = this.getDistance(_0x29b16d.position);
                        if (_0x29b16d.entity.isAPed()) {
                            if (!_0xf65270 || _0xf65270 < 0 || _0xf65270 > 2) {
                                return;
                            }
                            mp.game.graphics.drawMarker(25, _0x29b16d.entity.position.x, _0x29b16d.entity.position.y, _0x29b16d.entity.position.z - 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 52, 192, 216, 255, false, false, 0, false, null, null, false);
                        }
                    }
                    mp.players.forEachInStreamRange(_0x4e9e19 => {
                        if (_0x4e9e19 != mp.players.local && _0x4e9e19.getVariable('PaintballTeam') != null && _0x4e9e19.getVariable('PaintballTeam') != 0 && mp.players.local.getVariable('PaintballTeam') != 0 && _0x4e9e19.getVariable('PaintballTeam') == mp.players.local.getVariable('PaintballTeam')) {
                            var _0x19bea8 = mp.players.local.position;
                            const _0x5e4228 = _0x4e9e19.position;
                            const _0x3a0ecd = (1 - 0.8 * this.getDistance(_0x19bea8, _0x5e4228) / 100) * 0.4;
                            mp.game.graphics.drawText('Team ' + _0x4e9e19.getVariable('PaintballTeam') + '  ~w~' + _0x4e9e19.name, [_0x5e4228.x, _0x5e4228.y, _0x5e4228.z + 1.1], {
                                font: 4,
                                color: [255, 255, 255, 185],
                                scale: [_0x3a0ecd, _0x3a0ecd],
                                outline: true
                            });
                        }
                    });
                    if (this.anametags) {
                        mp.players.forEachInStreamRange(_0x4b8c3b => {
                            var _0xe33c02 = mp.players.local.position;
                            const _0xb37dce = _0x4b8c3b.position;
                            const _0x438b90 = (1 - 0.8 * this.getDistance(_0xe33c02, _0xb37dce) / 100) * 0.4;
                            mp.game.graphics.drawText('~g~' + _0x4b8c3b.getHealth() + ' ~w~' + _0x4b8c3b.name + ' ~b~' + _0x4b8c3b.getArmour(), [_0xb37dce.x, _0xb37dce.y, _0xb37dce.z + 1.1], {
                                font: 4,
                                color: [255, 255, 255, 185],
                                scale: [_0x438b90, _0x438b90],
                                outline: true
                            });
                        });
                    }
                });
                mp.events.add('setPaintballPlayerTeam', _0x561c86 => {
                    mp.game.player.setTeam(_0x561c86);
                });
                mp.events.add('incomingDamage', (sourceEntity, sourcePlayer, targetEntity, weapon, boneIndex, damage) => {
                    if (boneIndex === 20) {
                        mp.game.weapon.cancelCurrentDamageEvent();
                        targetEntity.applyDamageTo(0, true);
                    }
                    mp.game.weapon.setCurrentDamageEventCritical(false);
                    mp.game.weapon.setCurrentDamageEventAmount(7);
                });
                mp.events.add('render', () => {
                    if (this.ready == false) {
                        return;
                    }
                    mp.players.local.setStealthMovement(false, '0');
                    mp.game.player.setWeaponDamageModifier(0);
                    mp.game.player.setMeleeWeaponDamageModifier(0);
                    mp.game.player.setMeleeWeaponDefenseModifier(0);
                    if (mp.players.local.vehicle != null) {
                        let _0x4556c2 = mp.vehicles.atRemoteId(mp.players.local.vehicle.remoteId);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_MG'), _0x4556c2.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_MISSILE'), _0x4556c2.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_CANNON'), _0x4556c2.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_BARRAGE'), _0x4556c2.handle, mp.players.local.handle);
                        mp.game.ui.setRadarZoom(1100);
                    } else {
                        mp.game.ui.setRadarZoom(1100);
                    }
                    if (this.gamedesignduty) {
                        const _0x5d6fe0 = mp.players.local.getBoneCoords(12844, 0.5, 0, 0);
                        const _0x1ee40f = new mp.Vector3(0, 0, 75);
                        const _0x2345b7 = mp.raycasting.testPointToPoint(_0x5d6fe0, _0x1ee40f);
                        if (!_0x2345b7) {
                            mp.game.graphics.drawLine(_0x5d6fe0.x, _0x5d6fe0.y, _0x5d6fe0.z, _0x1ee40f.x, _0x1ee40f.y, _0x1ee40f.z, 255, 255, 255, 255);
                        } else {
                            mp.game.graphics.drawLine(_0x5d6fe0.x, _0x5d6fe0.y, _0x5d6fe0.z, _0x1ee40f.x, _0x1ee40f.y, _0x1ee40f.z, 255, 0, 0, 255);
                        }
                        let _0x58e1bd = mp.game.player.isFreeAiming();
                        if (_0x58e1bd) {
                            let _0x56f4c3 = mp.game.player.getEntityIsFreeAimingAt();
                            if (_0x56f4c3 == 0) {
                                return;
                            }
                            let _0x23c87d = mp.game.invoke('0x9F47B058362C84B5', _0x56f4c3);
                            let _0x4e64a0 = mp.game.invokeVector3('0x3FEF770D40960D5A', _0x56f4c3, false);
                            mp.game.graphics.notify('Drücke U um die Tür zwischenzuspeichern! Erstelle die Tür dann mit /createdoor TeamIds Locked | Beispiel: /createdoor 1,2 true');
                            _0x1f9417 = _0x23c87d;
                            _0x10b323 = _0x4e64a0;
                        }
                    }
                    let _0x195fa2 = mp.game.player.isFreeAiming();
                    if (_0x195fa2) {
                        let _0x254231 = mp.game.player.getEntityIsFreeAimingAt();
                        if (_0x254231 == undefined) {
                            return;
                        }
                        if (_0x254231 == 0) {
                            return;
                        }
                        if (_0x254231.type == 'player' && _0x254231.getVariable('Invincible') == true) {
                            mp.game.player.disableFiring(true);
                        }
                    }
                    if (mp.game.invoke('0x26AF0E8E30BD2A2C', mp.players.local.handle, true)) {
                        this.isOpeningDoor = true;
                    } else if (this.isOpeningDoor) {
                        this.isOpeningDoor = false;
                        this.checkAnimations(mp.players.local);
                    }
                    if (mp.players.local.isInWater() && this.isInWater === false) {
                        this.isInWater = true;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    } else if (mp.players.local.isInWater() === false && this.isInWater === true) {
                        this.isInWater = false;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    }
                    if (mp.players.local.hasCollidedWithAnything()) {
                        this.HasCollided = true;
                    } else if (this.HasCollided === true) {
                        this.HasCollided = false;
                        this.checkAnimations(mp.players.local);
                    }
                    if (mp.players.local.isRagdoll()) {
                        this.HasRagdall = true;
                    } else {
                        if (this.HasRagdall === true) {
                            this.HasRagdall = false;
                            let _0x2fd50c = this;
                            setTimeout(function () {
                                _0x2fd50c.checkAnimations(mp.players.local);
                            }, 2000);
                        }
                    }
                    if (!this.injured) {
                        if (this.hasDamageFX == '' && mp.players.local.getHealth() <= 10) {
                            mp.events.call('setTimecycleModifier', 'glasses_red');
                            this.hasDamageFX = 'glasses_red';
                        } else if (this.hasDamageFX == 'glasses_red' && mp.players.local.getHealth() > 10) {
                            mp.events.call('setTimecycleModifier', 'default');
                            this.hasDamageFX = '';
                        }
                    }
                    if (mp.players.local.getVariable('Seatbelt') != null) {
                        mp.players.local.setConfigFlag(32, mp.players.local.getVariable('Seatbelt'));
                    }
                    mp.game.object.doorControl(-2023754432, 116.61631, -1990.5763, 18.491354, true, 0, 50, 0);
                    mp.game.object.doorControl(-2023754432, 109.32936, -2015.5326, 18.491426, true, 0, 50, 0);
                    mp.game.object.doorControl(703855057, 122.22226, -1995.4512, 18.305435, true, 0, 50, 0);
                    mp.game.object.doorControl(132154435, 1973, 3815, 34, true, 0, 50, 0);
                    if (this.aduty) {
                        var _0x47f5cc = {
                            "F5": 0x147,
                            "FORWARD": 0x20,
                            "BACKWARD": 0x21,
                            "LEFT": 0x22,
                            "RIGHT": 0x23,
                            "UP": 0x16,
                            "DOWN": 0x24,
                            "SHIFT": 0x15
                        };
                        if (mp.players.local.vehicle != null) {
                            mp.game.invoke('0xB59E4BD37AE292DB', mp.players.local.vehicle.id, 5);
                        }
                        if (mp.game.controls.isDisabledControlJustPressed(0, 327) || mp.game.controls.isDisabledControlJustPressed(0, 110)) {
                            this.noClip.enabled = !this.noClip.enabled;
                            mp.events.callRemote('vanish', this.noClip.enabled);
                            mp.players.local.freezePosition(this.noClip.enabled);
                            if (!this.noClip.enabled && mp.game.controls.isDisabledControlJustPressed(0, 327)) {
                                var _0x1677d0 = mp.players.local.position;
                                var _0x256795 = mp.game.gameplay.getGroundZFor3dCoord(_0x1677d0.x, _0x1677d0.y, _0x1677d0.z, 0, false);
                                mp.players.local.setCoordsNoOffset(_0x1677d0.x, _0x1677d0.y, _0x256795 + 1, false, false, false);
                            }
                        }
                        if (this.noClip.enabled) {
                            let _0x43153d = mp.players.local.position;
                            let _0x354f5a = this.noClip.speed;
                            let _0x4fee0e = mp.game.cam.getGameplayCamRot(2);
                            let _0x603d6b = _0xbe022f(_0x4fee0e);
                            let _0x48f932 = _0x419e67(_0x4fee0e);
                            if (mp.game.controls.isDisabledControlPressed(0, _0x47f5cc.SHIFT)) {
                                _0x354f5a = _0x354f5a * 3;
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x47f5cc.FORWARD)) {
                                _0x43153d = _0x3ef6ef(_0x43153d, _0x603d6b, _0x354f5a);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x47f5cc.BACKWARD)) {
                                _0x43153d = _0x3ef6ef(_0x43153d, _0x603d6b, -_0x354f5a);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x47f5cc.LEFT)) {
                                _0x43153d = _0x3ef6ef(_0x43153d, _0x48f932, -_0x354f5a, true);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, 35)) {
                                _0x43153d = _0x3ef6ef(_0x43153d, _0x48f932, _0x354f5a, true);
                            }
                            let _0x5132d0 = 0;
                            if (mp.game.controls.isDisabledControlPressed(0, 22)) {
                                _0x5132d0 += _0x354f5a;
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x47f5cc.DOWN)) {
                                _0x5132d0 -= _0x354f5a;
                            }
                            if (!(new mp.Vector3(_0x43153d.x, _0x43153d.y, _0x43153d.z + _0x5132d0).x === mp.players.local.position.x && new mp.Vector3(_0x43153d.x, _0x43153d.y, _0x43153d.z + _0x5132d0).y === mp.players.local.position.y && new mp.Vector3(_0x43153d.x, _0x43153d.y, _0x43153d.z + _0x5132d0).z === mp.players.local.position.z)) {
                                mp.players.local.setCoordsNoOffset(_0x43153d.x, _0x43153d.y, _0x43153d.z + _0x5132d0, false, false, false);
                            }
                        }
                    } else {
                        if (mp.players.local.vehicle != null) {
                            mp.game.invoke('0xB59E4BD37AE292DB', mp.players.local.vehicle.id, 1.8);
                        }
                    }
                });
                mp.events.add('setPlayerDamageMultiplier', _0x46642a => {
                    mp.game.player.setWeaponDamageModifier(_0x46642a);
                });
                mp.events.add('setNMenuItems', _0x3034e0 => {
                    this.animations = JSON.parse(_0x3034e0);
                });
                mp.events.add('setRunSprintMultiplierFor', _0x54b3ab => {
                    mp.game.player.setRunSprintMultiplierFor(_0x54b3ab);
                });
                mp.events.add('onPlayerContactsLoaded', _0x533779 => {
                    this.contacts.parseContacts(_0x533779);
                });
                mp.events.add('setPlayerAduty', _0x10c78e => {
                    mp.players.local.setInvincible(_0x10c78e);
                    this.anametags = _0x10c78e;
                    _0x41d063.default.setAduty(_0x10c78e);
                });
                mp.events.add('loadMethInterior', (_0x92f338, _0x5853d3, _0x2cdd11) => {
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo');
                    _0x51ac35.props.table.forEach(_0x2cf2fc => {
                        mp.game.interior.disableInteriorProp(247041, _0x2cf2fc);
                    });
                    _0x51ac35.props.boiler.forEach(_0x4cfa68 => {
                        mp.game.interior.disableInteriorProp(247041, _0x4cfa68);
                    });
                    _0x51ac35.props.security.forEach(_0x1c7dcd => {
                        mp.game.interior.disableInteriorProp(247041, _0x1c7dcd);
                    });
                    mp.game.interior.enableInteriorProp(247041, _0x51ac35.props.table[_0x92f338]);
                    mp.game.interior.enableInteriorProp(247041, _0x51ac35.props.boiler[_0x5853d3]);
                    mp.game.interior.enableInteriorProp(247041, _0x51ac35.props.security[_0x2cdd11]);
                    mp.game.interior.refreshInterior(247041);
                });
                mp.events.add('carmod', (_0x2d797c, _0x501648, _0x13ea16) => {
                    if (_0x2d797c == null) {
                        return;
                    }
                    _0x2d797c.setMod(parseInt(_0x501648), parseInt(_0x13ea16));
                });
                mp.events.add('livery', (_0x2047bd, _0x2947b0) => {
                    mp.game.invoke('0x60BF608F1B8CD1B6', _0x2047bd.handle, _0x2947b0);
                });
                mp.events.add('startAlarm', (_0x256369, _0x2b1aee) => {
                    var _0x3d6884 = mp.game.audio.prepareAlarm(_0x256369);
                    while (!_0x3d6884) {
                        mp.game.wait(0);
                    }
                    mp.game.audio.startAlarm(_0x256369, false);
                });
                mp.events.add('stopAlarm', _0x12c0aa => {
                    mp.game.audio.stopAlarm(_0x12c0aa, true);
                });
                mp.events.add('unloadMethInterior', () => {
                    _0x51ac35.props.table.forEach(_0x5a1e8f => {
                        mp.game.interior.disableInteriorProp(247041, _0x5a1e8f);
                    });
                    _0x51ac35.props.boiler.forEach(_0x1dc1e7 => {
                        mp.game.interior.disableInteriorProp(247041, _0x1dc1e7);
                    });
                    _0x51ac35.props.security.forEach(_0x37ee06 => {
                        mp.game.interior.disableInteriorProp(247041, _0x37ee06);
                    });
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo');
                    mp.game.interior.refreshInterior(247041);
                });
                mp.events.add('loadblackmoneyInterior', () => {
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo');
                    _0x3ba7a0.props.forEach(_0x1e87b7 => {
                        mp.game.interior.enableInteriorProp(247809, _0x1e87b7);
                    });
                    mp.game.interior.refreshInterior(247809);
                });
                mp.events.add('unloadblackmoneyInterior', () => {
                    _0x3ba7a0.props.forEach(_0x25c9ed => {
                        mp.game.interior.disableInteriorProp(247809, _0x25c9ed);
                    });
                    mp.game.interior.refreshInterior(247809);
                });
                mp.events.add('loadguenther', () => {
                    mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                    _0x6ef245.props.room.forEach(_0xc08c7d => {
                        mp.game.interior.enableInteriorProp(255489, _0xc08c7d);
                    });
                    mp.game.interior.refreshInterior(255489);
                });
                mp.events.add('unloadguenther', () => {
                    mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                    _0x6ef245.props.room.forEach(_0x10433b => {
                        mp.game.interior.disableInteriorProp(255489, _0x10433b);
                    });
                    mp.game.interior.refreshInterior(255489);
                });
                mp.events.add('loadlschangar', () => {
                    mp.game.streaming.requestIpl('sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_');
                    _0x8ced91.props.forEach(_0x4ebe62 => {
                        mp.game.interior.enableInteriorProp(260353, _0x4ebe62);
                        mp.game.invoke('0xC1F1920BAF281317', 260353, _0x4ebe62, 2);
                    });
                    mp.game.interior.refreshInterior(260353);
                });
                mp.events.add('unloadlschangar', () => {
                    _0x8ced91.props.forEach(_0x1461a2 => {
                        mp.game.interior.disableInteriorProp(260353, _0x1461a2);
                    });
                    mp.game.streaming.requestIpl('sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_');
                    mp.game.interior.refreshInterior(260353);
                });
                mp.events.add('updatesuperjump', _0x3ae671 => {
                    this.superjump = _0x3ae671;
                });
                mp.events.add('loadplanningroom', (_0x49d2da, _0x1263d1, _0x1a2df8, _0x5ca9cf, _0x52b830, _0x1b40e0, _0x214830, _0xba527d, _0x59e673, _0x39726e, _0x3ebeb0, _0x4afaeb, _0x49128c) => {
                    mp.game.streaming.requestIpl(_0x131d08.arcade.interiorName);
                    mp.game.streaming.requestIpl(_0x131d08.plan.interiorName);
                    _0x131d08.arcade.allprops.forEach(_0x479d81 => {
                        mp.game.interior.disableInteriorProp(_0x131d08.arcade.Id, _0x479d81);
                    });
                    _0x131d08.plan.allprops.forEach(_0x2a86dd => {
                        mp.game.interior.disableInteriorProp(_0x131d08.plan.Id, _0x2a86dd);
                    });
                    _0x131d08.arcade.props.grundraum[parseInt(_0x49d2da)].forEach(_0x4e7aee => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0x4e7aee);
                    });
                    _0x131d08.arcade.props.spiegel[parseInt(_0x1263d1)].forEach(_0x34c386 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0x34c386);
                    });
                    _0x131d08.arcade.props.einrichtungsstyle[parseInt(_0x1a2df8)].forEach(_0x5f2e96 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0x5f2e96);
                    });
                    _0x131d08.arcade.props.inneneinrichtung[parseInt(_0x5ca9cf)].forEach(_0xed7473 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0xed7473);
                    });
                    _0x131d08.arcade.props.spielautomaten[parseInt(_0x52b830)].forEach(_0x2abab5 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0x2abab5);
                    });
                    var _0x13badc = JSON.parse(_0x1b40e0);
                    _0x13badc.forEach(_0x28dbed => {
                        mp.game.interior.enableInteriorProp(_0x131d08.arcade.Id, _0x131d08.arcade.props.rewards[parseInt(_0x28dbed)]);
                    });
                    _0x131d08.plan.props.kellerraum[parseInt(_0x214830)].forEach(_0x4d77d2 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x4d77d2);
                    });
                    _0x131d08.plan.props.Mechanic[parseInt(_0xba527d)].forEach(_0x360fa6 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x360fa6);
                    });
                    _0x131d08.plan.props.Hacker[parseInt(_0x59e673)].forEach(_0x450b5a => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x450b5a);
                    });
                    _0x131d08.plan.props.Weapons[parseInt(_0x39726e)].forEach(_0x567cc6 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x567cc6);
                    });
                    _0x131d08.plan.props.Wardrobe[parseInt(_0x3ebeb0)].forEach(_0x174d6a => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x174d6a);
                    });
                    _0x131d08.plan.props.CasinoPlan[parseInt(_0x4afaeb)].forEach(_0xa4b9e7 => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0xa4b9e7);
                    });
                    _0x131d08.plan.props.CasinoDoor[parseInt(_0x49128c)].forEach(_0x15767f => {
                        mp.game.interior.enableInteriorProp(_0x131d08.plan.Id, _0x15767f);
                    });
                    mp.game.interior.refreshInterior(_0x131d08.arcade.Id);
                    mp.game.interior.refreshInterior(_0x131d08.plan.Id);
                });
                mp.events.add('attachmeto', (_0x5e2b2e, _0x3ca21e) => {
                    _0x5e2b2e.attachTo(_0x3ca21e.handle, _0x3ca21e.getBoneIndex(28422), 0, 0, 0, 0, 0, 0, false, false, false, false, 2, true);
                });
                mp.events.add('attachfoodobj', (_0x3de47b, _0x20879e) => {
                    var _0x29710c = [];
                    _0x29710c.hash = _0x3de47b;
                    _0x29710c.pos = mp.players.local.position;
                    _0x29710c.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    _0x29710c.obj = mp.objects.new(_0x3de47b, _0x29710c.pos, {
                        rotation: _0x29710c.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    setTimeout(function () {
                        _0x29710c.obj.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(18905), 0.15, 0.04, 0.025, 15, 175, 0, true, true, false, true, 1, true);
                        setTimeout(function () {
                            _0x29710c.obj.detach(true, false);
                            _0x29710c.obj.position = new mp.Vector3(0, 0, 0);
                            mp.game.object.deleteObject(_0x29710c.obj);
                        }, _0x20879e);
                    }, 200);
                });
                mp.events.add('attachdrinkobj', (_0x117e13, _0x7a974) => {
                    var _0x1577fd = [];
                    _0x1577fd.hash = _0x117e13;
                    _0x1577fd.pos = mp.players.local.position;
                    _0x1577fd.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    _0x1577fd.obj = mp.objects.new(_0x117e13, _0x1577fd.pos, {
                        rotation: _0x1577fd.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    setTimeout(function () {
                        _0x1577fd.obj.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(18905), 0.13, 0.005, 0.02, 270, 175, 20, true, true, false, true, 1, true);
                        setTimeout(function () {
                            _0x1577fd.obj.detach(true, false);
                            _0x1577fd.obj.position = new mp.Vector3(0, 0, 0);
                            mp.game.object.deleteObject(_0x1577fd.obj);
                        }, _0x7a974);
                    }, 200);
                });
                mp.events.add('SpectatePlayer', _0x4b2232 => {
                    mp.players.local.attachTo(_0x4b2232.handle, _0x4b2232.getBoneIndex(-1), 0, 0, -1, 0, 0, 0, false, false, false, false, 2, true);
                });
                mp.events.add('StopSpectatePlayer', () => {
                    mp.players.local.detach(true, false);
                });
                mp.events.add('deattachme', _0xef6a95 => {
                    _0xef6a95.detach(true, false);
                });
                mp.events.add('unloadplanningroom', () => {
                    _0x131d08.arcade.allprops.forEach(_0x45b5a7 => {
                        mp.game.interior.disableInteriorProp(_0x131d08.arcade.Id, _0x45b5a7);
                    });
                    mp.game.streaming.requestIpl(_0x131d08.arcade.Name);
                    mp.game.interior.refreshInterior(_0x131d08.arcade.Id);
                });
                mp.events.add('destroydrugped', () => {
                    if (this.spawnedDrugPed != null) {
                        this.spawnedDrugPed.destroy();
                        this.spawnedDrugPed = null;
                    }
                });
                mp.events.add('loadprop', (_0x16f78a, _0x5e3c85, _0x46146a, _0x4aa85e, _0x3aeedc) => {
                    var _0x41ff4a = mp.game.interior.getInteriorAtCoords(parseFloat(_0x46146a), parseFloat(_0x4aa85e), parseFloat(_0x3aeedc));
                    mp.game.interior.enableInteriorProp(parseInt(_0x41ff4a), String(_0x16f78a));
                    mp.game.invoke('0xC1F1920BAF281317', parseInt(_0x41ff4a), String(_0x16f78a), parseInt(_0x5e3c85));
                    mp.game.interior.refreshInterior(parseInt(_0x41ff4a));
                });
                mp.events.add('removeprop', (_0xf5801b, _0x464aec, _0x5b5ecb, _0x15ec2d) => {
                    var _0x4cf5b2 = mp.game.interior.getInteriorAtCoords(parseFloat(_0x464aec), parseFloat(_0x5b5ecb), parseFloat(_0x15ec2d));
                    mp.game.interior.disableInteriorProp(parseInt(_0x4cf5b2), String(_0xf5801b));
                    mp.game.interior.refreshInterior(parseInt(_0x4cf5b2));
                });
                var _0x5b346d = [];
                mp.events.add('loadcheckpoint', () => {
                    for (let _0x2a3187 = 0; _0x2a3187 < 10; _0x2a3187++) {
                        let _0x2b2e17 = mp.checkpoints.new(1, new mp.Vector3(20 * _0x2a3187, 20 * _0x2a3187, 100), 10, {
                            direction: new mp.Vector3(0, 0, 75),
                            color: [255, 255, 255, 255],
                            visible: true,
                            dimension: 0
                        });
                        _0x2b2e17.destination = new mp.Vector3(20 * (_0x2a3187 + 1), 20 * (_0x2a3187 + 1), 100);
                        _0x5b346d.push(_0x2b2e17);
                    }
                });
                mp.events.add('unloadcheckpoint', () => {
                    _0x5b346d.forEach(_0x647180 => {
                        _0x647180.destroy();
                    });
                });
                var _0xd370b2;
                mp.events.add('startRace', (_0x3ec172, _0x20e4ae, _0x269849, _0x2e2fe9) => {
                    mp.game.ui.setNewWaypoint(_0x3ec172, _0x20e4ae);
                    _0xd370b2 = mp.markers.new(4, new mp.Vector3(_0x3ec172, _0x20e4ae, _0x269849), 5, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [0, 255, 0, 255],
                        visible: true,
                        dimension: _0x2e2fe9
                    });
                });
                mp.events.add('endRace', () => {
                    if (_0xd370b2 != null) {
                        _0xd370b2.destroy();
                    }
                });
                var _0x45d14d;
                mp.events.add('setmark', (_0x1e0803, _0x58f88f, _0x390e4f, _0x2b1570) => {
                    if (_0x45d14d != null) {
                        _0x45d14d.destroy();
                        _0x45d14d = null;
                    }
                    _0x45d14d = mp.markers.new(0, new mp.Vector3(_0x1e0803, _0x58f88f, _0x390e4f), 1, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [255, 0, 0, 255],
                        visible: true,
                        dimension: _0x2b1570
                    });
                });
                mp.events.add('boom', (_0x15cd6d, _0x79d7e5, _0x59ad1d, _0x44933e) => {
                    mp.game.invoke('0xE3AD2BDBAEE269AC', _0x15cd6d, _0x79d7e5, _0x59ad1d, parseInt(_0x44933e), 1, 1, 0, 1065353216, 0);
                });
                mp.events.add('boom2', () => {
                    if (!mp.players.local.vehicle) {
                        return;
                    }
                    mp.game.invoke('0xBA71116ADF5B514C', mp.players.local.vehicle.handle, true, true);
                });
                mp.events.add('setPlayerCduty', _0x347637 => {
                    this.cduty = _0x347637;
                });
                mp.events.add('setPlayerNametags', _0x5d46d8 => {
                    this.anametags = _0x5d46d8;
                });
                mp.events.add('setPlayerVehicleMultiplier', _0x3a7a78 => {
                    if (!mp.players.local.vehicle) {
                        return;
                    }
                    mp.players.local.vehicle.setEnginePowerMultiplier(_0x3a7a78);
                    mp.players.local.vehicle.setInvincible(false);
                });
                mp.events.add('createPlayerMarker', _0x3ab832 => {
                    this.marker = mp.markers.new(22, _0x3ab832, 2, {
                        color: [255, 255, 255, 100],
                        visible: true
                    });
                });
                mp.events.add('destroyPlayerMarker', () => {
                    this.marker.destroy();
                    this.marker = null;
                });
                mp.events.add('setSpawnProtection', _0x402a34 => {
                    mp.players.local.setInvincible(_0x402a34);
                });
                mp.events.add('setBlackout', _0x5ec391 => {
                    for (let _0x41702e = 0; _0x41702e <= 16; _0x41702e++) {
                        mp.game.graphics.setLightsState(_0x41702e, _0x5ec391);
                    }
                });
                mp.events.add('enableInteriorProp', (_0x43131a, _0x5ee6fc) => {
                    mp.game.interior.enableInteriorProp(_0x43131a, _0x5ee6fc);
                });
                mp.events.add('startsoundplay', (_0x383ff0, _0x393262) => {
                    mp.game.audio.playSoundFrontend(-1, _0x383ff0, _0x393262, true);
                });
                mp.events.add('startmusicevent', async _0x1caa0f => {
                    mp.events.call('stopmusicevent');
                    mp.game.audio.prepareMusicEvent(_0x1caa0f);
                    await mp.game.waitAsync(1000);
                    mp.game.audio.triggerMusicEvent(_0x1caa0f);
                    this.lastMusicEvent = _0x1caa0f;
                });
                mp.events.add('stopmusicevent', () => {
                    if (this.lastMusicEvent !== undefined) {
                        mp.game.audio.cancelMusicEvent(this.lastMusicEvent);
                        this.lastMusicEvent = undefined;
                    }
                });
                mp.events.add('startScreenEffect', (_0x4437a1, _0x1de00d, _0x29a9b1) => {
                    mp.game.graphics.startScreenEffect(_0x4437a1, _0x1de00d, _0x29a9b1);
                    if (_0x4437a1 == 'DefaultFlash') {
                        mp.game.graphics.transitionToBlurred(250);
                    }
                });
                mp.events.add('stopScreenEffect', _0x45ad27 => {
                    mp.game.graphics.stopScreenEffect(_0x45ad27);
                    if (_0x45ad27 == 'DefaultFlash') {
                        mp.game.graphics.transitionFromBlurred(250);
                    }
                });
                mp.events.add('setTimecycleModifier', _0x2b6076 => {
                    mp.game.graphics.setTimecycleModifier(_0x2b6076);
                });
                mp.events.add('transitionFromBlurred', _0x5c5f4b => {
                    mp.game.graphics.transitionFromBlurred(_0x5c5f4b);
                    mp.game.graphics.setTransitionTimecycleModifier('default', _0x5c5f4b);
                });
                mp.events.add('transitionToBlurred', _0xbcff7f => {
                    mp.game.graphics.transitionToBlurred(_0xbcff7f);
                    mp.game.graphics.setTransitionTimecycleModifier('hud_def_blur_switch', _0xbcff7f);
                });
                mp.events.add('refreshinterior', _0x43e3b7 => {
                    mp.game.interior.refreshInterior(_0x43e3b7);
                });
                mp.events.add('setTM', _0x53904f => {
                    mp.game.graphics.setSeethrough(_0x53904f);
                });
                mp.events.add('setNS', _0x31425e => {
                    mp.game.graphics.setNightvision(_0x31425e);
                });
                mp.events.add('getInteriorId', () => {
                    _0x4eda33.default.execute("pushPlayerNotification('" + mp.game.interior.getInteriorAtCoords(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z) + "', '5000')");
                });
                mp.events.add('disableInteriorProp', (_0x5f2057, _0x2b3da5) => {
                    mp.game.interior.disableInteriorProp(_0x5f2057, _0x2b3da5);
                });
                mp.events.add('entityStreamIn', _0x51e1fd => {
                    try {
                        if (_0x51e1fd != null && _0x51e1fd.doesExist() && (_0x51e1fd.type == 'player' || _0x51e1fd.type == 'vehicle') && _0x51e1fd.handle !== 0) {
                            if (_0x51e1fd.getVariable('handbrakeStatus') != null) {
                                if (_0x51e1fd.getVariable('handbrakeStatus') == true) {
                                    _0x51e1fd.setHandbrake(true);
                                } else {
                                    _0x51e1fd.setHandbrake(false);
                                }
                            }
                            if (_0x51e1fd.type == 'player') {
                                mp.events.callRemote('requestPlayerSyncData', _0x51e1fd);
                            }
                            if (_0x51e1fd.getVariable('Invincible') != null) {
                                _0x51e1fd.setInvincible(_0x51e1fd.getVariable('Invincible'));
                            }
                            if (_0x51e1fd.getVariable('Invisible') != null) {
                                if (_0x51e1fd.getVariable('Invisible') == true) {
                                    _0x51e1fd.setAlpha(0);
                                } else {
                                    _0x51e1fd.setAlpha(255);
                                }
                            }
                            if (_0x51e1fd.getVariable('Collision') != null) {
                                if (_0x51e1fd.getVariable('Collision') == true) {
                                    _0x51e1fd.setCollision(true, true);
                                } else {
                                    _0x51e1fd.setCollision(false, false);
                                }
                            }
                            if (_0x51e1fd.getVariable('PlayerTeam') != null) {
                                _0x51e1fd.setTeam(_0x51e1fd.getVariable('PlayerTeam'));
                            }
                            if (_0x51e1fd.getVariable('ShopCar') != null) {
                                _0x51e1fd.setInvincible(true);
                                _0x51e1fd.setOnGroundProperly();
                                _0x51e1fd.freezePosition(true);
                            }
                        }
                    } catch (_0x18e808) { }
                });
                mp.events.addDataHandler('handbrakeStatus', _0x174a33 => {
                    try {
                        if (_0x174a33 != null && _0x174a33.doesExist() && _0x174a33.type == 'vehicle' && _0x174a33.handle !== 0 && _0x174a33.getVariable('handbrakeStatus') != null) {
                            if (_0x174a33.getVariable('handbrakeStatus') == true) {
                                _0x174a33.setHandbrake(true);
                            } else {
                                _0x174a33.setHandbrake(false);
                            }
                        }
                    } catch (_0x4279d7) { }
                });
                mp.events.addDataHandler('Invincible', _0xd35b4b => {
                    try {
                        if (_0xd35b4b != null && _0xd35b4b.doesExist() && (_0xd35b4b.type == 'player' || _0xd35b4b.type == 'vehicle') && _0xd35b4b.handle !== 0) {
                            if (_0xd35b4b.getVariable('Invincible') != null) {
                                _0xd35b4b.setInvincible(_0xd35b4b.getVariable('Invincible'));
                            }
                        }
                    } catch (_0x33801c) { }
                });
                mp.events.addDataHandler('Invisible', _0x772d9b => {
                    try {
                        if (_0x772d9b != null && _0x772d9b.doesExist() && (_0x772d9b.type == 'player' || _0x772d9b.type == 'vehicle') && _0x772d9b.handle !== 0) {
                            if (_0x772d9b.getVariable('Invisible') != null) {
                                if (_0x772d9b.getVariable('Invisible') == true) {
                                    _0x772d9b.setAlpha(0);
                                } else {
                                    _0x772d9b.setAlpha(255);
                                }
                            }
                        }
                    } catch (_0x3dc508) { }
                });
                mp.events.addDataHandler('Collision', _0x44d760 => {
                    try {
                        if (_0x44d760 != null && _0x44d760.doesExist() && (_0x44d760.type == 'player' || _0x44d760.type == 'vehicle') && _0x44d760.handle !== 0 && _0x44d760.getVariable('Collision') != null) {
                            if (_0x44d760.getVariable('Collision') == true) {
                                _0x44d760.setCollision(true, true);
                            } else {
                                _0x44d760.setCollision(false, false);
                            }
                        }
                    } catch (_0x119a14) { }
                });
                mp.events.addDataHandler('PlayerTeam', _0x5b8802 => {
                    try {
                        if (_0x5b8802 != null && _0x5b8802.doesExist() && (_0x5b8802.type == 'player' || _0x5b8802.type == 'vehicle') && _0x5b8802.handle !== 0 && _0x5b8802.getVariable('PlayerTeam') != null) {
                            _0x5b8802.setTeam(_0x5b8802.getVariable('PlayerTeam'));
                        }
                    } catch (_0x5f0c65) { }
                });
                mp.events.addDataHandler('ShopCar', _0x1d44cf => {
                    try {
                        if (_0x1d44cf != null && _0x1d44cf.doesExist() && _0x1d44cf.type == 'vehicle' && _0x1d44cf.handle !== 0 && _0x1d44cf.getVariable('ShopCar') != null) {
                            _0x1d44cf.setInvincible(true);
                            _0x1d44cf.setOnGroundProperly();
                            _0x1d44cf.freezePosition(true);
                        }
                    } catch (_0x62a0ce) { }
                });
                mp.events.add('responsePlayerSyncData', (_0x5de1a9, _0x5d50ef, _0x27db62, _0x3d12e7) => {
                    this.setPlayerDrunk(_0x5de1a9, _0x5d50ef);
                    try {
                        _0x27db62 = JSON.parse(_0x27db62);
                        _0x5de1a9.__animationData = _0x27db62;
                        if (_0x5de1a9.__animationData.Active == true) {
                            this.checkAnimations(_0x5de1a9);
                            _0x5de1a9.setHeading(_0x5de1a9.__animationData.Heading);
                        }
                    } catch (_0x11f61c) { }
                    if (_0x3d12e7) {
                        _0x5de1a9.setMovementClipset('move_ped_crouched', 0.25);
                        _0x5de1a9.setStrafeClipset('move_ped_crouched_strafing');
                    }
                });
                mp.events.add('SetOwnAnimData', _0x3f1f11 => {
                    try {
                        _0x3f1f11 = JSON.parse(_0x3f1f11);
                        mp.players.local.__animationData = _0x3f1f11;
                        this.checkAnimations(mp.players.local);
                    } catch (_0x38d436) { }
                });
                mp.events.add('TeleportToWaypoint', () => {
                    const _0x17ab8a = mp.game.ui.getFirstBlipInfoId(8);
                    if (!mp.game.ui.doesBlipExist(_0x17ab8a)) {
                        return;
                    }
                    const _0x1a6574 = mp.game.ui.getBlipInfoIdCoord(_0x17ab8a);
                    if (!_0x1a6574) {
                        return;
                    }
                    let _0x18c0b3 = mp.game.gameplay.getGroundZFor3DCoord(_0x1a6574.x, _0x1a6574.y, _0x1a6574.z, false, false);
                    if (!_0x18c0b3) {
                        for (let _0x428da9 = 1000; _0x428da9 >= 0; _0x428da9 -= 25) {
                            mp.game.streaming.requestCollisionAtCoord(_0x1a6574.x, _0x1a6574.y, _0x428da9);
                            mp.game.wait(0);
                        }
                        _0x18c0b3 = mp.game.gameplay.getGroundZFor3DCoord(_0x1a6574.x, _0x1a6574.y, 1000, false, false);
                        if (!_0x18c0b3) {
                            return;
                        }
                    }
                    mp.players.local.position = new mp.Vector3(_0x1a6574.x, _0x1a6574.y, _0x18c0b3 + 0.5);
                });
                mp.events.add('SetAnimDataNear', (_0x318ee9, _0x517f07) => {
                    try {
                        _0x517f07 = JSON.parse(_0x517f07);
                        _0x318ee9.__animationData = _0x517f07;
                        this.checkAnimations(_0x318ee9);
                    } catch (_0x3d113c) { }
                });
                mp.events.add('setPlayerDrunk', (_0x2a0b92, _0x1e6b61) => {
                    this.setPlayerDrunk(_0x2a0b92, _0x1e6b61);
                });
                mp.events.add('setCloth', (_0x3dcf96, _0x1e074f, _0x24c228, _0x244224) => {
                    if (_0x3dcf96 == null) {
                        return;
                    }
                    _0x3dcf96.setComponentVariation(_0x1e074f, _0x24c228, _0x244224, 0);
                });
                mp.events.add('skyMover', () => {
                    mp.events.call('moveSkyCamera', mp.players.local, 'up', 1);
                    setTimeout(function () {
                        mp.events.call('moveSkyCamera', mp.players.local, 'down');
                    }, 1000);
                });
                mp.events.add('moveSkyCamera', (_0x34c342, _0x1aaebb, _0x583ab4, _0x319454) => {
                    switch (_0x1aaebb) {
                        case 'up':
                            if (_0x319454 == false) {
                                mp.gui.chat.show(_0x319454);
                                this.gui = 'false';
                            }
                            mp.game.invoke(this.natives.SWITCH_OUT_PLAYER, _0x34c342.handle, 0, parseInt(_0x583ab4));
                            break;
                        case 'down':
                            if (this.gui == 'false') {
                                this.checkCamInAir();
                            }
                            mp.game.invoke(this.natives.SWITCH_IN_PLAYER, _0x34c342.handle);
                            break;
                        default:
                            break;
                    }
                });
                mp.events.add('setSyncDataState', (_0x416ddf, _0x344617) => {
                    this.playerSync = _0x416ddf;
                    this.vehicleSync = _0x344617;
                });
            }
            ['checkAnimations'](_0x157791) {
                try {
                    if (_0x157791.__animationData != undefined && _0x157791.__animationData != null) {
                        if (_0x157791.__animationData.Active == true && !_0x157791.vehicle) {
                            mp.game.streaming.requestAnimDict(_0x157791.__animationData.AnimationDict);
                            while (!mp.game.streaming.hasAnimDictLoaded(_0x157791.__animationData.AnimationDict)) {
                                mp.game.wait(0);
                            }
                            _0x157791.taskPlayAnim(_0x157791.__animationData.AnimationDict, _0x157791.__animationData.AnimationName, _0x157791.__animationData.AnimationSpeed, 1, -1, _0x157791.__animationData.AnimationFlags, 0, false, false, false);
                            _0x157791.__animationData = {
                                Active: false
                            };
                        } else { }
                    } else { }
                } catch (_0x42eec3) {
                    mp.game.graphics.notify('Exception - Animations: Falls bestehen bleibt, bitte reloggen!');
                }
            }
            ['checkCamInAir']() {
                if (mp.game.invoke(this.natives.IS_PLAYER_SWITCH_IN_PROGRESS)) {
                    setTimeout(() => {
                        this.checkCamInAir();
                    }, 400);
                }
            }
            ['setPlayerDrunk'](_0x1af3c5, _0x317e39) { }
            ['setPlayerChatFlag'](_0x4e409e) {
                this.chatFlag = _0x4e409e;
            }
            ['getPlayer']() {
                return mp.players.local;
            }
            ['calculateVectorDistance'](_0x2637b5) {
                return _0x5e6a25.default.calculateVectorDistance(this.getPlayer().position, _0x2637b5);
            }
            ['getDistance'](_0x2ff52b) {
                return _0x5e6a25.default.getDistance(this.getPlayer().position, _0x2ff52b, true);
            }
            ['isInAnyVehicle']() {
                return this.getPlayer().isInAnyVehicle(true);
            }
            ['isInAir']() {
                return this.getPlayer().isInAir();
            }
        }
        _0x27d282.default = new _0x184e93();
    }, {
        '../attachments/attachments': 99,
        '../interfaces/hud/hud': 172,
        '../interfaces/hud/player-panel': 179,
        '../interfaces/hud/playernotification': 181,
        '../raycast/raycast': 268,
        '../utils/utils': 270,
        './contacts/contacts': 4,
        './telefonHistory/historys': 6
    }],
    3: [function (_0x43d3e2, _0x35b3ba, _0x39e60f) {
        'use strict';

        Object.defineProperty(_0x39e60f, '__esModule', {
            value: true
        });
        class _0x4d1b3b {
            constructor(_0x38467b, _0x202c80) {
                this.name = _0x38467b;
                this.number = _0x202c80;
            }
        }
        _0x39e60f.default = _0x4d1b3b;
    }, {}],
    4: [function (_0x296240, _0x34bf78, _0x207ba7) {
        'use strict';

        Object.defineProperty(_0x207ba7, '__esModule', {
            value: true
        });
        var _0x379ddf = _0x296240('./contact');
        var _0x292e4b = _0x379ddf && _0x379ddf.__esModule ? _0x379ddf : {
            default: _0x379ddf
        };
        class _0x16fac8 {
            constructor() {
                this.contacts = null;
                this.callback = null;
                mp.events.add('responsePhoneContacts', _0x5a55d5 => {
                    this.parseContacts(_0x5a55d5);
                    if (this.callback != null) {
                        this.callback();
                        this.callback = null;
                    }
                });
            }
            ['request'](_0x4b0fe9) {
                this.callback = _0x4b0fe9;
                mp.events.callRemote('requestPhoneContacts');
            }
            ['parseContacts'](_0x3c0695) {
                this.contacts = new Map();
                let _0x4d3e3a = JSON.parse(_0x3c0695);
                for (let _0x310538 of _0x4d3e3a) {
                    let _0x2c456d = Number(_0x310538.number);
                    this.contacts.set(_0x2c456d, new _0x292e4b.default(_0x310538.name, _0x2c456d));
                }
            }
            ['updateContact'](_0x5267b9, _0x367e06, _0x25e887) {
                if (_0x5267b9 !== _0x367e06) {
                    this.contacts.delete(_0x5267b9);
                    this.contacts.set(_0x367e06, new _0x292e4b.default(_0x25e887, _0x367e06));
                } else {
                    this.contacts.delete(_0x5267b9);
                    this.contacts.set(_0x5267b9, new _0x292e4b.default(_0x25e887, _0x5267b9));
                }
                mp.events.callRemote('updatePhoneContact', _0x5267b9, _0x367e06, _0x25e887);
            }
            ['addContact'](_0x401adf, _0xc5b67e) {
                if (_0x401adf == null) {
                    return;
                }
                if (this.contacts == null) {
                    this.contacts = new Map();
                }
                this.contacts.set(_0x401adf, new _0x292e4b.default(_0xc5b67e, _0x401adf));
                mp.events.callRemote('addPhoneContact', _0xc5b67e, _0x401adf);
            }
            ['removeContact'](_0x547f9d) {
                this.contacts.delete(_0x547f9d);
                mp.events.callRemote('delPhoneContact', _0x547f9d);
            }
            ['getContact'](_0x2d4f8b) {
                if (!this.contacts.has(_0x2d4f8b)) {
                    return null;
                }
                return this.contacts.get(_0x2d4f8b);
            }
            ['toJson']() {
                var _0x2d3f1e = [];
                for (let _0x295fe2 of this.contacts.values()) {
                    _0x2d3f1e.push(_0x295fe2);
                }
                return JSON.stringify(_0x2d3f1e);
            }
        }
        _0x207ba7.default = _0x16fac8;
    }, {
        '../../player/player': 262,
        './contact': 3
    }],
    5: [function (_0x32204f, _0x10ab58, _0x1da12c) {
        'use strict';

        Object.defineProperty(_0x1da12c, '__esModule', {
            value: true
        });
        class _0x450b3f {
            constructor(_0x195bfe, _0x5b1f69, _0x3581b1, _0x5eb23b, _0x5f0d36) {
                this.contact = _0x195bfe;
                this.number = _0x5b1f69;
                this.time = _0x3581b1;
                this.accepted = _0x5eb23b;
                this.method = _0x5f0d36;
            }
        }
        _0x1da12c.default = _0x450b3f;
    }, {}],
    6: [function (_0x4813e0, _0x3136db, _0x472e7d) {
        'use strict';

        Object.defineProperty(_0x472e7d, '__esModule', {
            value: true
        });
        var _0x3635bb = _0x4813e0('./history');
        var _0x420d5c = _0x3635bb && _0x3635bb.__esModule ? _0x3635bb : {
            default: _0x3635bb
        };
        class _0x45e2d8 {
            constructor() {
                this.historys = new Map();
            }
            ['addCallToHistory'](_0x52e1b7, _0x32780c, _0x475fa3, _0x25ba0d, _0x39b4aa) {
                this.historys.set(_0x475fa3, new _0x420d5c.default(_0x52e1b7, _0x32780c, _0x475fa3, _0x25ba0d, _0x39b4aa));
            }
            ['toJson']() {
                var _0x4a7ace = [];
                for (let _0x2579b6 of this.historys.values()) {
                    _0x4a7ace.push(_0x2579b6);
                }
                return JSON.stringify(_0x4a7ace);
            }
        }
        _0x472e7d.default = _0x45e2d8;
    }, {
        './history': 5
    }],
    7: [function (_0x2c014c, _0x5e0713, _0x1f732f) {
        'use strict';

        Object.defineProperty(_0x1f732f, '__esModule', {
            value: true
        });
        var _0x5ca4ba = _0x2c014c('./apps');
        var _0x841c1c = _0x5ca4ba && _0x5ca4ba.__esModule ? _0x5ca4ba : {
            default: _0x5ca4ba
        };
        var _0x41ed6b = _0x2c014c('../components/component');
        var _0x20424b = _0x41ed6b && _0x41ed6b.__esModule ? _0x41ed6b : {
            default: _0x41ed6b
        };
        class _0x29f297 extends _0x20424b.default {
            constructor(_0x512891, ..._0x15c13c) {
                super(_0x512891, ..._0x15c13c);
                _0x841c1c.default.apps.set(_0x512891, this);
            }
        }
        _0x1f732f.default = _0x29f297;
    }, {
        '../components/component': 110,
        './apps': 8
    }],
    8: [function (_0x5af085, _0x13b6c8, _0x5b1063) {
        'use strict';

        Object.defineProperty(_0x5b1063, '__esModule', {
            value: true
        });
        var _0x46c745 = _0x5af085('../browser/browser');
        var _0xe84bd7 = _0x46c745 && _0x46c745.__esModule ? _0x46c745 : {
            default: _0x46c745
        };
        class _0x457805 {
            constructor() {
                this.apps = new Map();
                this.componentVisibleApp = new Map();
                this.SmartphoneApp = '';
                mp.events.add('openApp', (_0xc5174c, _0x2bae28, _0x55e697) => {
                    if (!this.apps.has(_0x2bae28)) {
                        return;
                    }
                    let _0x2c2ccf = this.apps.get(_0x2bae28);
                    _0x2c2ccf.args = _0x55e697;
                    this.show(_0xc5174c, _0x2bae28, _0x55e697);
                });
                mp.events.add('openComputer', () => {
                    this.show('Computer', 'ComputerMainScreen');
                });
                mp.events.add('closeComputer', () => {
                    this.show('Computer', null);
                });
                mp.events.add('openIpad', () => {
                    this.show('Ipad', 'IpadMainScreen');
                });
                mp.events.add('closeIpad', () => {
                    this.show('Ipad', null);
                });
            }
            ['show'](_0x489137 = 'Smartphone', _0x1225c7, _0x5796a6) {
                if (_0x1225c7 == null) {
                    this.componentVisibleApp[_0x489137] = _0x1225c7;
                    if (_0x489137 == 'Smartphone') {
                        _0xe84bd7.default.execute(_0x489137, 'invisible()');
                    } else {
                        _0xe84bd7.default.execute(_0x489137, 'show(null)');
                    }
                    mp.gui.cursor.visible = false;
                } else {
                    if (_0x1225c7 == 'CallManageApp') {
                        this.SmartphoneApp = 'PhoneScreen';
                        mp.gui.cursor.visible = false;
                        if (_0x5796a6 && _0x5796a6.length > 0) {
                            _0xe84bd7.default.execute(_0x489137, "show(\"" + _0x1225c7 + "\", '" + _0x5796a6 + "')");
                        } else {
                            _0xe84bd7.default.execute(_0x489137, "show(\"" + _0x1225c7 + "\")");
                        }
                    } else {
                        this.componentVisibleApp[_0x489137] = _0x1225c7;
                        if (_0x489137 == 'Smartphone') {
                            if (this.SmartphoneApp == '') {
                                this.SmartphoneApp = 'MainScreen';
                                mp.gui.cursor.visible = true;
                            } else {
                                if (this.SmartphoneApp == 'MainScreen') {
                                    mp.gui.cursor.visible = true;
                                } else if (this.SmartphoneApp == 'PhoneScreen') {
                                    mp.gui.cursor.visible = false;
                                }
                            }
                        } else {
                            mp.gui.cursor.visible = true;
                        }
                        if (_0x5796a6 && _0x5796a6.length > 0) {
                            _0xe84bd7.default.execute(_0x489137, "show(\"" + _0x1225c7 + "\", '" + _0x5796a6 + "')");
                        } else {
                            _0xe84bd7.default.execute(_0x489137, "show(\"" + _0x1225c7 + "\")");
                        }
                    }
                }
            }
        }
        _0x5b1063.default = new _0x457805();
    }, {
        '../browser/browser': 100
    }],
    9: [function (_0x30525d, _0x3ac3ec, _0x2d309e) {
        'use strict';

        _0x30525d('./gps/gpsLocationList');
        _0x30525d('./gps/gpsVehicleList');
        _0x30525d('./contacts/contactsList');
        _0x30525d('./contacts/contactsEdit');
        _0x30525d('./contacts/contactsAdd');
        _0x30525d('./contacts/contactsOverview');
        _0x30525d('./banking/BankAppOverview');
        _0x30525d('./banking/BankAppTransfer');
        _0x30525d('./news/newsApp');
        _0x30525d('./news/newsListApp');
        _0x30525d('./news/newsAddApp');
        _0x30525d('./taxi/taxiApp');
        _0x30525d('./taxi/TaxiListApp');
        _0x30525d('./taxi/TaxiServiceListApp');
        _0x30525d('./taxi/TaxiContact');
        _0x30525d('./team/team-edit');
        _0x30525d('./team/team-list');
        _0x30525d('./business/business');
        _0x30525d('./business/businessEdit');
        _0x30525d('./business/businessList');
        _0x30525d('./business/businessInvite');
        _0x30525d('./callManage');
        _0x30525d('./telefon/telefon');
        _0x30525d('./telefon/telefonInput');
        _0x30525d('./telefon/telefonSettings');
        _0x30525d('./telefon/telefonCalls');
        _0x30525d('./home');
        _0x30525d('./police/PoliceAktenSearchApp');
        _0x30525d('./police/PoliceEditPersonApp');
        _0x30525d('./police/PoliceEditWantedsApp');
        _0x30525d('./police/PoliceListAktenApp');
        _0x30525d('./police/PoliceListProgressApp');
        _0x30525d('./servicelist/ServiceAcceptedApp');
        _0x30525d('./servicelist/serviceListApp');
        _0x30525d('./servicelist/serviceOwnApp');
        _0x30525d('./servicelist/serviceEvaluationApp');
        _0x30525d('./messenger/messengerApp');
        _0x30525d('./messenger/messengerListApp');
        _0x30525d('./messenger/messengerMessageApp');
        _0x30525d('./messenger/messengerOverviewApp');
        _0x30525d('./settings/settingsApp');
        _0x30525d('./settings/settingsEditWallpaperApp');
        _0x30525d('./settings/settingsEditRingtonesApp');
        _0x30525d('./hitman/hitmanApp');
        _0x30525d('./hitman/hitmanContractsApp');
        _0x30525d('./hitman/hitmanContractListApp');
        _0x30525d('./hitman/hitmanLocateApp');
        _0x30525d('./hitman/hitmanLocatePersonApp');
        _0x30525d('./darknet/DarknetApp');
        _0x30525d('./darknet/DarknetAgencySupportApp');
        _0x30525d('./darknet/DarknetBountyApp');
        _0x30525d('./darknet/DarknetClearWantedsApp');
        _0x30525d('./profile');
        _0x30525d('./lifeinvader');
        _0x30525d('./desktop');
        _0x30525d('./funk');
        _0x30525d('./ipadDesktop');
        _0x30525d('./ipadMainScreen');
        _0x30525d('./laptopDesktop');
        _0x30525d('./laptopMainScreen');
        _0x30525d('./marketplace/marketplaceApp');
        _0x30525d('./service/serviceRequestApp');
        _0x30525d('./service/serviceSendRequestApp');
        _0x30525d('./vehicleoverview/vehicleOverviewApp');
        _0x30525d('./plate/plateOverviewApp');
        _0x30525d('./claw/clawOverviewApp');
        _0x30525d('./vehicletax/vehicleTaxApp');
        _0x30525d('./vehicleimpound/vehicleImpoundApp');
        _0x30525d('./support/ticket/ServiceOverviewApp');
        _0x30525d('./support/ticket/SupportAcceptedTickets');
        _0x30525d('./support/ticket/SupportOpenTickets');
        _0x30525d('./support/ticket/SupportTicketOverview');
        _0x30525d('./support/ticket/SupportKonversation');
        _0x30525d('./support/vehicles/SupportVehicleApp');
        _0x30525d('./support/vehicles/SupportVehicleList');
        _0x30525d('./support/vehicles/SupportVehicleProfile');
        _0x30525d('./kfzrent/KFZRentApp');
        _0x30525d('./fraktion/FraktionListApp');
        _0x30525d('./fraktion/FraktionEditApp');
        _0x30525d('./fraktion/FraktionRightsOverviewApp');
        _0x30525d('./house/HouseList');
        _0x30525d('./house/HouseEdit');
        _0x30525d('./house/HouseVehicleList');
        _0x30525d('./email/EmailApp');
        _0x30525d('./export/ExportApp');
        _0x30525d('./workstation/WorkstationApp');
        _0x30525d('./streifen/StreifenApp');
        _0x30525d('./businessdetail/BusinessDetail');
    }, {
        './banking/BankAppOverview': 10,
        './banking/BankAppTransfer': 11,
        './business/business': 12,
        './business/businessEdit': 13,
        './business/businessInvite': 14,
        './business/businessList': 15,
        './businessdetail/BusinessDetail': 16,
        './callManage': 17,
        './claw/clawOverviewApp': 18,
        './contacts/contactsAdd': 19,
        './contacts/contactsEdit': 20,
        './contacts/contactsList': 21,
        './contacts/contactsOverview': 22,
        './darknet/DarknetAgencySupportApp': 23,
        './darknet/DarknetApp': 24,
        './darknet/DarknetBountyApp': 25,
        './darknet/DarknetClearWantedsApp': 26,
        './desktop': 27,
        './email/EmailApp': 28,
        './export/ExportApp': 29,
        './fraktion/FraktionEditApp': 30,
        './fraktion/FraktionListApp': 31,
        './fraktion/FraktionRightsOverviewApp': 32,
        './funk': 33,
        './gps/gpsLocationList': 34,
        './gps/gpsVehicleList': 35,
        './hitman/hitmanApp': 36,
        './hitman/hitmanContractListApp': 37,
        './hitman/hitmanContractsApp': 38,
        './hitman/hitmanLocateApp': 39,
        './hitman/hitmanLocatePersonApp': 40,
        './home': 41,
        './house/HouseEdit': 42,
        './house/HouseList': 43,
        './house/HouseVehicleList': 44,
        './ipadDesktop': 45,
        './ipadMainScreen': 46,
        './kfzrent/KFZRentApp': 47,
        './laptopDesktop': 48,
        './laptopMainScreen': 49,
        './lifeinvader': 50,
        './marketplace/marketplaceApp': 51,
        './messenger/messengerApp': 52,
        './messenger/messengerListApp': 53,
        './messenger/messengerMessageApp': 54,
        './messenger/messengerOverviewApp': 55,
        './news/newsAddApp': 56,
        './news/newsApp': 57,
        './news/newsListApp': 58,
        './plate/plateOverviewApp': 60,
        './police/PoliceAktenSearchApp': 61,
        './police/PoliceEditPersonApp': 62,
        './police/PoliceEditWantedsApp': 63,
        './police/PoliceListAktenApp': 64,
        './police/PoliceListProgressApp': 65,
        './profile': 66,
        './service/serviceRequestApp': 67,
        './service/serviceSendRequestApp': 68,
        './servicelist/ServiceAcceptedApp': 69,
        './servicelist/serviceEvaluationApp': 70,
        './servicelist/serviceListApp': 71,
        './servicelist/serviceOwnApp': 72,
        './settings/settingsApp': 73,
        './settings/settingsEditRingtonesApp': 74,
        './settings/settingsEditWallpaperApp': 75,
        './streifen/StreifenApp': 76,
        './support/ticket/ServiceOverviewApp': 77,
        './support/ticket/SupportAcceptedTickets': 78,
        './support/ticket/SupportKonversation': 79,
        './support/ticket/SupportOpenTickets': 80,
        './support/ticket/SupportTicketOverview': 81,
        './support/vehicles/SupportVehicleApp': 82,
        './support/vehicles/SupportVehicleList': 83,
        './support/vehicles/SupportVehicleProfile': 84,
        './taxi/TaxiContact': 85,
        './taxi/TaxiListApp': 86,
        './taxi/TaxiServiceListApp': 87,
        './taxi/taxiApp': 88,
        './team/team-edit': 89,
        './team/team-list': 90,
        './telefon/telefon': 91,
        './telefon/telefonCalls': 92,
        './telefon/telefonInput': 93,
        './telefon/telefonSettings': 94,
        './vehicleimpound/vehicleImpoundApp': 95,
        './vehicleoverview/vehicleOverviewApp': 96,
        './vehicletax/vehicleTaxApp': 97,
        './workstation/WorkstationApp': 98
    }],
    10: [function (_0x216be7, _0x3a2a3c, _0x29faf6) {
        'use strict';

        Object.defineProperty(_0x29faf6, '__esModule', {
            value: true
        });
        var _0x564440 = _0x216be7('../../app/app');
        var _0x5e6a38 = _0x564440 && _0x564440.__esModule ? _0x564440 : {
            default: _0x564440
        };
        class _0x2c2451 extends _0x5e6a38.default {
            constructor() {
                super('BankAppOverview');
                this.forwardableEvents.add('responseBankAppOverview');
                mp.events.add('responseBankAppOverview2', _0x5b2f5f => {
                    this.execute("bankOverview = JSON.parse('" + _0x5b2f5f + "');");
                });
            }
        }
        _0x29faf6.default = new _0x2c2451();
    }, {
        '../../app/app': 7
    }],
    11: [function (_0x326223, _0x527b3d, _0xfb33a9) {
        'use strict';

        Object.defineProperty(_0xfb33a9, '__esModule', {
            value: true
        });
        var _0x403ffb = _0x326223('../../app/app');
        var _0x57bebd = _0x403ffb && _0x403ffb.__esModule ? _0x403ffb : {
            default: _0x403ffb
        };
        class _0x20d568 extends _0x57bebd.default {
            constructor() {
                super('BankAppTransfer');
                this.forwardableEvents.add('responseBankingCap');
            }
        }
        _0xfb33a9.default = new _0x20d568();
    }, {
        '../../app/app': 7
    }],
    12: [function (_0x161334, _0x44a258, _0x3bca21) {
        'use strict';

        Object.defineProperty(_0x3bca21, '__esModule', {
            value: true
        });
        var _0x59e7f6 = _0x161334('../../app/app');
        var _0x4f09b3 = _0x59e7f6 && _0x59e7f6.__esModule ? _0x59e7f6 : {
            default: _0x59e7f6
        };
        class _0x561128 extends _0x4f09b3.default {
            constructor() {
                super('BusinessApp');
            }
        }
        _0x3bca21.default = new _0x561128();
    }, {
        '../../app/app': 7
    }],
    13: [function (_0x4825e2, _0xe3d71, _0x9f78cb) {
        'use strict';

        Object.defineProperty(_0x9f78cb, '__esModule', {
            value: true
        });
        var _0x4d9ddc = _0x4825e2('../../app/app');
        var _0x4e3dbe = _0x4d9ddc && _0x4d9ddc.__esModule ? _0x4d9ddc : {
            default: _0x4d9ddc
        };
        class _0x5d4166 extends _0x4e3dbe.default {
            constructor() {
                super('BusinessEditApp');
            }
        }
        _0x9f78cb.default = new _0x5d4166();
    }, {
        '../../app/app': 7
    }],
    14: [function (_0x2dd89b, _0x571ba3, _0xd31fd3) {
        'use strict';

        Object.defineProperty(_0xd31fd3, '__esModule', {
            value: true
        });
        var _0x4d20db = _0x2dd89b('../../app/app');
        var _0x5a0e61 = _0x4d20db && _0x4d20db.__esModule ? _0x4d20db : {
            default: _0x4d20db
        };
        class _0x3f42e7 extends _0x5a0e61.default {
            constructor() {
                super('BusinessInviteApp');
            }
        }
        _0xd31fd3.default = new _0x3f42e7();
    }, {
        '../../app/app': 7
    }],
    15: [function (_0x503f28, _0x2a77ba, _0x2e46c8) {
        'use strict';

        Object.defineProperty(_0x2e46c8, '__esModule', {
            value: true
        });
        var _0x227987 = _0x503f28('../../app/app');
        var _0x1d59b3 = _0x227987 && _0x227987.__esModule ? _0x227987 : {
            default: _0x227987
        };
        class _0x2b0a3f extends _0x1d59b3.default {
            constructor() {
                super('BusinessListApp');
                this.forwardableEvents.add('responseBusinessMembers');
                this.forwardableEvents.add('responseBusinessMOTD');
            }
        }
        _0x2e46c8.default = new _0x2b0a3f();
    }, {
        '../../app/app': 7
    }],
    16: [function (_0x5b5d25, _0x1316f5, _0x1c5d60) {
        'use strict';

        Object.defineProperty(_0x1c5d60, '__esModule', {
            value: true
        });
        var _0x38dc7b = _0x5b5d25('../../app/app');
        var _0x234bfc = _0x38dc7b && _0x38dc7b.__esModule ? _0x38dc7b : {
            default: _0x38dc7b
        };
        class _0x3dc46f extends _0x234bfc.default {
            constructor() {
                super('BusinessDetailApp');
                this.forwardableEvents.add('responseBusinessDetailLinks');
                this.forwardableEvents.add('responseBusinessDetail');
            }
            ['onEvent'](_0x53b138, ..._0x1d070b) {
                if (_0x53b138 == 'businessNotify') {
                    mp.game.graphics.notify('Bitte warten Sie kurz.');
                }
            }
        }
        _0x1c5d60.default = new _0x3dc46f();
    }, {
        '../../app/app': 7
    }],
    17: [function (_0x536f1a, _0x10a39e, _0x9d99fe) {
        'use strict';

        Object.defineProperty(_0x9d99fe, '__esModule', {
            value: true
        });
        var _0x53ff94 = _0x536f1a('../app/app');
        var _0x1d6c52 = _0x53ff94 && _0x53ff94.__esModule ? _0x53ff94 : {
            default: _0x53ff94
        };
        var _0x3e862e = _0x536f1a('../app/apps');
        var _0x56ebc9 = _0x3e862e && _0x3e862e.__esModule ? _0x3e862e : {
            default: _0x3e862e
        };
        var _0x5d1a8c = _0x536f1a('../windows/windows');
        var _0x17a743 = _0x5d1a8c && _0x5d1a8c.__esModule ? _0x5d1a8c : {
            default: _0x5d1a8c
        };
        var _0x3d5c19 = _0x536f1a('../player/player');
        var _0x5e7255 = _0x3d5c19 && _0x3d5c19.__esModule ? _0x3d5c19 : {
            default: _0x3d5c19
        };
        var _0x2ddba8 = _0x536f1a('../browser/browser');
        var _0x15a041 = _0x2ddba8 && _0x2ddba8.__esModule ? _0x2ddba8 : {
            default: _0x2ddba8
        };
        var _0x52c983 = _0x536f1a('./home');
        var _0x1cbd12 = _0x52c983 && _0x52c983.__esModule ? _0x52c983 : {
            default: _0x52c983
        };
        var _0x5e90af = _0x536f1a('./telefon/telefon');
        var _0x471a87 = _0x5e90af && _0x5e90af.__esModule ? _0x5e90af : {
            default: _0x5e90af
        };
        class _0x168c23 extends _0x1d6c52.default {
            constructor() {
                super('CallManageApp');
                this.forwardableEvents.add('acceptCall');
                mp.events.add('cancelCall', () => {
                    this.execute("cancelCall(\"[]\")");
                    _0x1cbd12.default.declineCall();
                    _0x15a041.default.execute('Smartphone', 'change()');
                    _0x56ebc9.default.SmartphoneApp = 'MainScreen';
                });
            }
            ['declineCall']() {
                this.execute('declineCallSmartphone()');
            }
            ['micmute']() {
                this.execute('changemicmute()');
            }
            ['acceptedCall']() {
                this.execute('acceptCallSmartphone()');
            }
            ['setPhoneCallData'](_0x51f24b) {
                this.execute("setCallData('" + _0x51f24b + "', '" + _0x5e7255.default.activeRingtone + "', '" + _0x5e7255.default.activeRingtoneVolume + "', '" + _0x5e7255.default.phonelautlos + "')");
                if (_0x17a743.default.visibleWindow != null) {
                    mp.gui.cursor.visible = true;
                }
            }
            ['onEvent'](_0x175d3a, ..._0x4a16ae) {
                if (_0x175d3a == 'addCallToHistory') {
                    _0x5e7255.default.historys.addCallToHistory(_0x4a16ae[0].contact, _0x4a16ae[0].number, _0x4a16ae[0].time, _0x4a16ae[0].accepted, _0x4a16ae[0].method);
                    _0x471a87.default.declineCall();
                }
            }
        }
        _0x9d99fe.default = new _0x168c23();
    }, {
        '../app/app': 7,
        '../app/apps': 8,
        '../browser/browser': 100,
        '../player/player': 262,
        '../windows/windows': 278,
        './home': 41,
        './telefon/telefon': 91
    }],
    18: [function (_0x273300, _0x1370da, _0x1a0b44) {
        'use strict';

        Object.defineProperty(_0x1a0b44, '__esModule', {
            value: true
        });
        var _0x19e759 = _0x273300('../../app/app');
        var _0x6f7085 = _0x19e759 && _0x19e759.__esModule ? _0x19e759 : {
            default: _0x19e759
        };
        class _0x3c24b3 extends _0x6f7085.default {
            constructor() {
                super('VehicleClawUebersichtApp');
                this.forwardableEvents.add('responseVehicleClawOverview');
            }
        }
        _0x1a0b44.default = new _0x3c24b3();
    }, {
        '../../app/app': 7
    }],
    19: [function (_0x4606ac, _0x203164, _0x438e0d) {
        'use strict';

        Object.defineProperty(_0x438e0d, '__esModule', {
            value: true
        });
        var _0xa4e057 = _0x4606ac('../../app/app');
        var _0x1d90c3 = _0xa4e057 && _0xa4e057.__esModule ? _0xa4e057 : {
            default: _0xa4e057
        };
        var _0x58ec1c = _0x4606ac('../../player/player');
        var _0x197267 = _0x58ec1c && _0x58ec1c.__esModule ? _0x58ec1c : {
            default: _0x58ec1c
        };
        var _0x8e2eee = _0x4606ac('./contactsList');
        var _0x136e48 = _0x8e2eee && _0x8e2eee.__esModule ? _0x8e2eee : {
            default: _0x8e2eee
        };
        class _0x1bef16 extends _0x1d90c3.default {
            constructor() {
                super('ContactsAdd');
            }
            ['onEvent'](_0x4218cb, ..._0x2f15fc) {
                if (_0x4218cb == 'addContact') {
                    _0x197267.default.contacts.addContact(_0x2f15fc[0].number, _0x2f15fc[0].name);
                    _0x136e48.default.updateList();
                }
            }
        }
        _0x438e0d.default = new _0x1bef16();
    }, {
        '../../app/app': 7,
        '../../player/player': 262,
        './contactsList': 21
    }],
    20: [function (_0x1e8fa2, _0x974dc, _0x565733) {
        'use strict';

        Object.defineProperty(_0x565733, '__esModule', {
            value: true
        });
        var _0x3022dd = _0x1e8fa2('../../app/app');
        var _0x18168f = _0x3022dd && _0x3022dd.__esModule ? _0x3022dd : {
            default: _0x3022dd
        };
        var _0x2be18d = _0x1e8fa2('../../player/player');
        var _0x50d118 = _0x2be18d && _0x2be18d.__esModule ? _0x2be18d : {
            default: _0x2be18d
        };
        var _0x107443 = _0x1e8fa2('./contactsList');
        var _0x45998a = _0x107443 && _0x107443.__esModule ? _0x107443 : {
            default: _0x107443
        };
        class _0x3f2b55 extends _0x18168f.default {
            constructor() {
                super('ContactsEdit');
            }
            ['onEvent'](_0x5db73b, ..._0x1d497b) {
                if (_0x5db73b == 'updateContact' && _0x1d497b[0]) {
                    _0x50d118.default.contacts.updateContact(_0x1d497b[0].storeNumber, _0x1d497b[0].editNumber, _0x1d497b[0].editName);
                    _0x45998a.default.updateList();
                }
            }
        }
        _0x565733.default = new _0x3f2b55();
    }, {
        '../../app/app': 7,
        '../../player/player': 262,
        './contactsList': 21
    }],
    21: [function (_0x1bc3bb, _0x4d725d, _0x3eefe5) {
        'use strict';

        Object.defineProperty(_0x3eefe5, '__esModule', {
            value: true
        });
        var _0x5361e9 = _0x1bc3bb('../../app/app');
        var _0x209e89 = _0x5361e9 && _0x5361e9.__esModule ? _0x5361e9 : {
            default: _0x5361e9
        };
        var _0x343327 = _0x1bc3bb('../../player/player');
        var _0x5b98c3 = _0x343327 && _0x343327.__esModule ? _0x343327 : {
            default: _0x343327
        };
        class _0x5d6fd2 extends _0x209e89.default {
            constructor() {
                super('ContactsApp');
            }
            ['onReady']() {
                if (_0x5b98c3.default.contacts.contacts == null) {
                    _0x5b98c3.default.contacts.request(() => {
                        this.updateList();
                    });
                } else {
                    this.updateList();
                }
            }
            ['updateList']() {
                this.execute("setContactListData('" + _0x5b98c3.default.contacts.toJson() + "')");
            }
        }
        _0x3eefe5.default = new _0x5d6fd2();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    22: [function (_0x12f910, _0x611a5f, _0x1db246) {
        'use strict';

        Object.defineProperty(_0x1db246, '__esModule', {
            value: true
        });
        var _0x52d360 = _0x12f910('../../app/app');
        var _0x3e600e = _0x52d360 && _0x52d360.__esModule ? _0x52d360 : {
            default: _0x52d360
        };
        var _0x3e88e3 = _0x12f910('../../player/player');
        var _0x42a596 = _0x3e88e3 && _0x3e88e3.__esModule ? _0x3e88e3 : {
            default: _0x3e88e3
        };
        var _0x33d77b = _0x12f910('./contactsList');
        var _0x39efdc = _0x33d77b && _0x33d77b.__esModule ? _0x33d77b : {
            default: _0x33d77b
        };
        class _0x5d4e06 extends _0x3e600e.default {
            constructor() {
                super('ContactsOverview');
            }
            ['onEvent'](_0x5ee831, ..._0x43d22f) {
                if (_0x5ee831 == 'getLocation') {
                    const _0x138c67 = mp.players.local.position;
                    let _0x4a6297 = Math.round(_0x138c67.x);
                    let _0x27416b = Math.round(_0x138c67.y);
                    this.execute("setGPSdata('" + _0x4a6297 + "','" + _0x27416b + "')");
                } else {
                    if (_0x5ee831 == 'updateContact' && _0x43d22f[0]) {
                        _0x42a596.default.contacts.updateContact(_0x43d22f[0].storeNumber, _0x43d22f[0].editNumber, _0x43d22f[0].editName);
                        _0x39efdc.default.updateList();
                    } else if (_0x5ee831 == 'removeContact' && _0x43d22f[0]) {
                        _0x42a596.default.contacts.removeContact(_0x43d22f[0].number);
                        _0x39efdc.default.updateList();
                    }
                }
            }
        }
        _0x1db246.default = new _0x5d4e06();
    }, {
        '../../app/app': 7,
        '../../player/player': 262,
        './contactsList': 21
    }],
    23: [function (_0x57ecc5, _0xcbe482, _0x3f467e) {
        'use strict';

        Object.defineProperty(_0x3f467e, '__esModule', {
            value: true
        });
        var _0x138614 = _0x57ecc5('../../app/app');
        var _0x1b6651 = _0x138614 && _0x138614.__esModule ? _0x138614 : {
            default: _0x138614
        };
        class _0xcfa5a7 extends _0x1b6651.default {
            constructor() {
                super('DarknetAgencySupportApp');
            }
        }
        _0x3f467e.default = new _0xcfa5a7();
    }, {
        '../../app/app': 7
    }],
    24: [function (_0x46b022, _0x1a07f2, _0x349fb4) {
        'use strict';

        Object.defineProperty(_0x349fb4, '__esModule', {
            value: true
        });
        var _0x5a317c = _0x46b022('../../app/app');
        var _0x53758e = _0x5a317c && _0x5a317c.__esModule ? _0x5a317c : {
            default: _0x5a317c
        };
        class _0xf5bae3 extends _0x53758e.default {
            constructor() {
                super('DarknetApp');
            }
        }
        _0x349fb4.default = new _0xf5bae3();
    }, {
        '../../app/app': 7
    }],
    25: [function (_0x2115ad, _0x4d11f0, _0x25a898) {
        'use strict';

        Object.defineProperty(_0x25a898, '__esModule', {
            value: true
        });
        var _0x54fbb4 = _0x2115ad('../../app/app');
        var _0x31025a = _0x54fbb4 && _0x54fbb4.__esModule ? _0x54fbb4 : {
            default: _0x54fbb4
        };
        class _0x5d7b98 extends _0x31025a.default {
            constructor() {
                super('DarknetBountyApp');
            }
        }
        _0x25a898.default = new _0x5d7b98();
    }, {
        '../../app/app': 7
    }],
    26: [function (_0x19e970, _0x3633a2, _0xba5ec6) {
        'use strict';

        Object.defineProperty(_0xba5ec6, '__esModule', {
            value: true
        });
        var _0x46ee85 = _0x19e970('../../app/app');
        var _0x1ae7e8 = _0x46ee85 && _0x46ee85.__esModule ? _0x46ee85 : {
            default: _0x46ee85
        };
        class _0x5a9ad9 extends _0x1ae7e8.default {
            constructor() {
                super('DarknetClearWantedsApp');
            }
        }
        _0xba5ec6.default = new _0x5a9ad9();
    }, {
        '../../app/app': 7
    }],
    27: [function (_0x5859d2, _0x1eb65e, _0x3f6788) {
        'use strict';

        Object.defineProperty(_0x3f6788, '__esModule', {
            value: true
        });
        var _0x374304 = _0x5859d2('../app/app');
        var _0x133636 = _0x374304 && _0x374304.__esModule ? _0x374304 : {
            default: _0x374304
        };
        class _0x3a0539 extends _0x133636.default {
            constructor() {
                super('DesktopApp');
                this.forwardableEvents.add('responseComputerApps');
            }
        }
        _0x3f6788.default = new _0x3a0539();
    }, {
        '../app/app': 7
    }],
    28: [function (_0x534f43, _0x5d6cd3, _0x24a2d5) {
        'use strict';

        Object.defineProperty(_0x24a2d5, '__esModule', {
            value: true
        });
        var _0x383ab6 = _0x534f43('../../app/app');
        var _0x5ab312 = _0x383ab6 && _0x383ab6.__esModule ? _0x383ab6 : {
            default: _0x383ab6
        };
        class _0xce5d9 extends _0x5ab312.default {
            constructor() {
                super('EmailApp');
                this.forwardableEvents.add('responseEmails');
            }
        }
        _0x24a2d5.default = new _0xce5d9();
    }, {
        '../../app/app': 7
    }],
    29: [function (_0x187851, _0x109414, _0x388a3b) {
        'use strict';

        Object.defineProperty(_0x388a3b, '__esModule', {
            value: true
        });
        var _0xac494e = _0x187851('../../app/app');
        var _0x56c2d0 = _0xac494e && _0xac494e.__esModule ? _0xac494e : {
            default: _0xac494e
        };
        class _0x2bf736 extends _0x56c2d0.default {
            constructor() {
                super('ExportApp');
                this.forwardableEvents.add('responseExports');
            }
        }
        _0x388a3b.default = new _0x2bf736();
    }, {
        '../../app/app': 7
    }],
    30: [function (_0x1f7741, _0x35b593, _0x48a094) {
        'use strict';

        Object.defineProperty(_0x48a094, '__esModule', {
            value: true
        });
        var _0x22b1e1 = _0x1f7741('../../app/app');
        var _0x5c3f06 = _0x22b1e1 && _0x22b1e1.__esModule ? _0x22b1e1 : {
            default: _0x22b1e1
        };
        class _0x5a1324 extends _0x5c3f06.default {
            constructor() {
                super('FraktionEditApp');
            }
        }
        _0x48a094.default = new _0x5a1324();
    }, {
        '../../app/app': 7
    }],
    31: [function (_0x187cd4, _0x42f40e, _0x2046b0) {
        'use strict';

        Object.defineProperty(_0x2046b0, '__esModule', {
            value: true
        });
        var _0x7164cc = _0x187cd4('../../app/app');
        var _0x14271c = _0x7164cc && _0x7164cc.__esModule ? _0x7164cc : {
            default: _0x7164cc
        };
        class _0x882341 extends _0x14271c.default {
            constructor() {
                super('FraktionListApp');
                this.forwardableEvents.add('responseMembers');
            }
        }
        _0x2046b0.default = new _0x882341();
    }, {
        '../../app/app': 7
    }],
    32: [function (_0x40ab90, _0x132cce, _0x3c4c3f) {
        'use strict';

        Object.defineProperty(_0x3c4c3f, '__esModule', {
            value: true
        });
        var _0x9744d9 = _0x40ab90('../../app/app');
        var _0x4ea4a9 = _0x9744d9 && _0x9744d9.__esModule ? _0x9744d9 : {
            default: _0x9744d9
        };
        class _0x370b5b extends _0x4ea4a9.default {
            constructor() {
                super('FraktionRightsOverviewApp');
            }
        }
        _0x3c4c3f.default = new _0x370b5b();
    }, {
        '../../app/app': 7
    }],
    33: [function (_0x299ced, _0x20e14b, _0x4c8127) {
        'use strict';

        Object.defineProperty(_0x4c8127, '__esModule', {
            value: true
        });
        var _0xabbd2a = _0x299ced('../app/app');
        var _0x3d4a2f = _0xabbd2a && _0xabbd2a.__esModule ? _0xabbd2a : {
            default: _0xabbd2a
        };
        var _0x3fd91f = _0x299ced('../interfaces/hud/player-panel');
        var _0x544e0e = _0x3fd91f && _0x3fd91f.__esModule ? _0x3fd91f : {
            default: _0x3fd91f
        };
        class _0x8dbe82 extends _0x3d4a2f.default {
            constructor() {
                super('FunkApp');
                this.forwardableEvents.add('responseVoiceSettings');
                mp.events.add('setVoiceRadioActive', _0x19858a => {
                    _0x544e0e.default.setVoiceRadioActive(_0x19858a);
                });
                mp.events.add('voiceRadioActive', _0xba5254 => {
                    _0x544e0e.default.setVoiceRadioActiveType(_0xba5254);
                });
            }
            ['onEvent'](_0x2b86e9, ..._0x50dfce) {
                if (_0x2b86e9 == 'setVoiceRadioActive') {
                    _0x544e0e.default.setVoiceRadioActive(_0x50dfce[0]);
                } else if (_0x2b86e9 == 'setVoiceRadioActiveType') {
                    _0x544e0e.default.setVoiceRadioActiveType(_0x50dfce[0]);
                }
            }
        }
        _0x4c8127.default = new _0x8dbe82();
    }, {
        '../app/app': 7,
        '../interfaces/hud/player-panel': 179
    }],
    34: [function (_0x5f3627, _0x3de561, _0x225dbb) {
        'use strict';

        Object.defineProperty(_0x225dbb, '__esModule', {
            value: true
        });
        var _0x2cf5ad = _0x5f3627('../../app/app');
        var _0x5d14de = _0x2cf5ad && _0x2cf5ad.__esModule ? _0x2cf5ad : {
            default: _0x2cf5ad
        };
        class _0x285125 extends _0x5d14de.default {
            constructor() {
                super('GpsLocationList');
                this.forwardableEvents.add('gpsLocationsResponse');
                this.forwardableEvents.add('gpsLocationsRadarResponse');
            }
            ['onEvent'](_0x29db2f, ..._0x3281af) {
                if (_0x29db2f == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x3281af[0].x, _0x3281af[0].y);
                }
            }
        }
        _0x225dbb.default = new _0x285125();
    }, {
        '../../app/app': 7
    }],
    35: [function (_0x3b72cb, _0x126673, _0x35ba76) {
        'use strict';

        Object.defineProperty(_0x35ba76, '__esModule', {
            value: true
        });
        var _0x40ba84 = _0x3b72cb('../../app/app');
        var _0x36f86a = _0x40ba84 && _0x40ba84.__esModule ? _0x40ba84 : {
            default: _0x40ba84
        };
        class _0x527917 extends _0x36f86a.default {
            constructor() {
                super('GpsVehicleList');
                this.forwardableEvents.add('gpsLocationsResponse');
            }
            ['onEvent'](_0x2daa0e, ..._0x2a3b3d) {
                if (_0x2daa0e == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x2a3b3d[0].x, _0x2a3b3d[0].y);
                }
            }
        }
        _0x35ba76.default = new _0x527917();
    }, {
        '../../app/app': 7
    }],
    36: [function (_0x5b9011, _0x5889a7, _0x50d395) {
        'use strict';

        Object.defineProperty(_0x50d395, '__esModule', {
            value: true
        });
        var _0x2e55b = _0x5b9011('../../app/app');
        var _0x1fa68b = _0x2e55b && _0x2e55b.__esModule ? _0x2e55b : {
            default: _0x2e55b
        };
        class _0x46bdb7 extends _0x1fa68b.default {
            constructor() {
                super('HitmanApp');
            }
        }
        _0x50d395.default = new _0x46bdb7();
    }, {
        '../../app/app': 7
    }],
    37: [function (_0x5b16ce, _0x579214, _0x1449ce) {
        'use strict';

        Object.defineProperty(_0x1449ce, '__esModule', {
            value: true
        });
        var _0x55de81 = _0x5b16ce('../../app/app');
        var _0x3d45df = _0x55de81 && _0x55de81.__esModule ? _0x55de81 : {
            default: _0x55de81
        };
        class _0x46bc6d extends _0x3d45df.default {
            constructor() {
                super('HitmanContractListApp');
                this.forwardableEvents.add('responseHitmanContracts');
            }
        }
        _0x1449ce.default = new _0x46bc6d();
    }, {
        '../../app/app': 7
    }],
    38: [function (_0x298b01, _0x569ac7, _0x4d9bc7) {
        'use strict';

        Object.defineProperty(_0x4d9bc7, '__esModule', {
            value: true
        });
        var _0xdd86d6 = _0x298b01('../../app/app');
        var _0x47877b = _0xdd86d6 && _0xdd86d6.__esModule ? _0xdd86d6 : {
            default: _0xdd86d6
        };
        class _0x4d984c extends _0x47877b.default {
            constructor() {
                super('HitmanContractsApp');
            }
        }
        _0x4d9bc7.default = new _0x4d984c();
    }, {
        '../../app/app': 7
    }],
    39: [function (_0x521d73, _0xd3f3ff, _0x113924) {
        'use strict';

        Object.defineProperty(_0x113924, '__esModule', {
            value: true
        });
        var _0xe14109 = _0x521d73('../../app/app');
        var _0x22a90f = _0xe14109 && _0xe14109.__esModule ? _0xe14109 : {
            default: _0xe14109
        };
        class _0x315ca5 extends _0x22a90f.default {
            constructor() {
                super('HitmanLocateApp');
                this.forwardableEvents.add('responseHitmanLocatedPpl');
            }
        }
        _0x113924.default = new _0x315ca5();
    }, {
        '../../app/app': 7
    }],
    40: [function (_0x254469, _0x22564e, _0x29aec6) {
        'use strict';

        Object.defineProperty(_0x29aec6, '__esModule', {
            value: true
        });
        var _0x393c4c = _0x254469('../../app/app');
        var _0xe35e13 = _0x393c4c && _0x393c4c.__esModule ? _0x393c4c : {
            default: _0x393c4c
        };
        class _0xb6bebd extends _0xe35e13.default {
            constructor() {
                super('HitmanLocatePersonApp');
            }
            ['onEvent'](_0x337851, ..._0x3a00c0) {
                if (_0x337851 == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x3a00c0[0].x, _0x3a00c0[0].y);
                }
            }
        }
        _0x29aec6.default = new _0xb6bebd();
    }, {
        '../../app/app': 7
    }],
    41: [function (_0x18b47f, _0x1e8c1d, _0x59bc54) {
        'use strict';

        Object.defineProperty(_0x59bc54, '__esModule', {
            value: true
        });
        var _0x257502 = _0x18b47f('../app/app');
        var _0x248354 = _0x257502 && _0x257502.__esModule ? _0x257502 : {
            default: _0x257502
        };
        var _0x16cf24 = _0x18b47f('../interfaces/hud/smartphone');
        var _0x2a34e1 = _0x16cf24 && _0x16cf24.__esModule ? _0x16cf24 : {
            default: _0x16cf24
        };
        class _0x7ce630 extends _0x248354.default {
            constructor() {
                super('HomeApp');
                this.forwardableEvents.add('responseApps');
                this.forwardableEvents.add('responsePhoneWallpaper');
            }
            ['declineCall']() {
                this.execute('declineCall()');
            }
            ['mutemode']() {
                this.execute('changemute()');
            }
            ['flymode']() {
                this.execute('changefly()');
            }
            ['anrufablehnen']() {
                this.execute('changeanrufablehnen()');
            }
            ['getHomeScreenCall']() {
                this.execute('getHomeScreenCall()');
            }
            ['onEvent'](_0x1974f0, ..._0x1d6f50) {
                if (_0x1974f0 == 'showCallScreen') {
                    _0x2a34e1.default.showCallScreen();
                }
            }
        }
        _0x59bc54.default = new _0x7ce630();
    }, {
        '../app/app': 7,
        '../interfaces/hud/smartphone': 183
    }],
    42: [function (_0x4f0631, _0x5299df, _0x2dce20) {
        'use strict';

        Object.defineProperty(_0x2dce20, '__esModule', {
            value: true
        });
        var _0x403e5d = _0x4f0631('../../app/app');
        var _0xea595f = _0x403e5d && _0x403e5d.__esModule ? _0x403e5d : {
            default: _0x403e5d
        };
        class _0x2e735b extends _0xea595f.default {
            constructor() {
                super('HouseEdit');
                this.forwardableEvents.add('responseHouseData');
            }
        }
        _0x2dce20.default = new _0x2e735b();
    }, {
        '../../app/app': 7
    }],
    43: [function (_0x2cea70, _0x2db785, _0xaf932a) {
        'use strict';

        Object.defineProperty(_0xaf932a, '__esModule', {
            value: true
        });
        var _0x49f796 = _0x2cea70('../../app/app');
        var _0x11655e = _0x49f796 && _0x49f796.__esModule ? _0x49f796 : {
            default: _0x49f796
        };
        class _0x13443b extends _0x11655e.default {
            constructor() {
                super('HouseList');
                this.forwardableEvents.add('responseTenants');
            }
        }
        _0xaf932a.default = new _0x13443b();
    }, {
        '../../app/app': 7
    }],
    44: [function (_0x1a065, _0x190bbe, _0x7b4a46) {
        'use strict';

        Object.defineProperty(_0x7b4a46, '__esModule', {
            value: true
        });
        var _0x3ca3a6 = _0x1a065('../../app/app');
        var _0x5b8a59 = _0x3ca3a6 && _0x3ca3a6.__esModule ? _0x3ca3a6 : {
            default: _0x3ca3a6
        };
        class _0x2600b2 extends _0x5b8a59.default {
            constructor() {
                super('HouseVehicleList');
                this.forwardableEvents.add('responseHouseVehicles');
            }
        }
        _0x7b4a46.default = new _0x2600b2();
    }, {
        '../../app/app': 7
    }],
    45: [function (_0x2db7e5, _0x8d5ef9, _0x1cb52a) {
        'use strict';

        Object.defineProperty(_0x1cb52a, '__esModule', {
            value: true
        });
        var _0x2679f2 = _0x2db7e5('../app/app');
        var _0x48a5fe = _0x2679f2 && _0x2679f2.__esModule ? _0x2679f2 : {
            default: _0x2679f2
        };
        class _0x22ac5e extends _0x48a5fe.default {
            constructor() {
                super('IpadDesktopApp');
                this.forwardableEvents.add('responseIpadApps');
            }
        }
        _0x1cb52a.default = new _0x22ac5e();
    }, {
        '../app/app': 7
    }],
    46: [function (_0x59d29e, _0x4b9b91, _0x129268) {
        'use strict';

        Object.defineProperty(_0x129268, '__esModule', {
            value: true
        });
        var _0x1a2d3f = _0x59d29e('../app/app');
        var _0x5d29ac = _0x1a2d3f && _0x1a2d3f.__esModule ? _0x1a2d3f : {
            default: _0x1a2d3f
        };
        class _0x44dbd7 extends _0x5d29ac.default {
            constructor() {
                super('IpadMainScreen');
            }
        }
        _0x129268.default = new _0x44dbd7();
    }, {
        '../app/app': 7
    }],
    47: [function (_0x4dde18, _0x359af5, _0x4959d5) {
        'use strict';

        Object.defineProperty(_0x4959d5, '__esModule', {
            value: true
        });
        var _0xb7061c = _0x4dde18('../../app/app');
        var _0x42fc32 = _0xb7061c && _0xb7061c.__esModule ? _0xb7061c : {
            default: _0xb7061c
        };
        class _0x3a2ec9 extends _0x42fc32.default {
            constructor() {
                super('KFZRentApp');
                this.forwardableEvents.add('responsekfzrent');
            }
        }
        _0x4959d5.default = new _0x3a2ec9();
    }, {
        '../../app/app': 7
    }],
    48: [function (_0x1a12c9, _0x538ff5, _0x290940) {
        'use strict';

        Object.defineProperty(_0x290940, '__esModule', {
            value: true
        });
        var _0x583843 = _0x1a12c9('../app/app');
        var _0x3ecf48 = _0x583843 && _0x583843.__esModule ? _0x583843 : {
            default: _0x583843
        };
        class _0x506354 extends _0x3ecf48.default {
            constructor() {
                super('LaptopDesktopApp');
                this.forwardableEvents.add('responseLaptopApps');
            }
        }
        _0x290940.default = new _0x506354();
    }, {
        '../app/app': 7
    }],
    49: [function (_0x54eb17, _0x3f1fc0, _0x1ec9a1) {
        'use strict';

        Object.defineProperty(_0x1ec9a1, '__esModule', {
            value: true
        });
        var _0x3bb30a = _0x54eb17('../app/app');
        var _0x319d24 = _0x3bb30a && _0x3bb30a.__esModule ? _0x3bb30a : {
            default: _0x3bb30a
        };
        class _0x40e9bd extends _0x319d24.default {
            constructor() {
                super('LaptopMainScreen');
            }
        }
        _0x1ec9a1.default = new _0x40e9bd();
    }, {
        '../app/app': 7
    }],
    50: [function (_0x439a66, _0x2d8100, _0x45ef22) {
        'use strict';

        Object.defineProperty(_0x45ef22, '__esModule', {
            value: true
        });
        var _0x4e6846 = _0x439a66('../app/app');
        var _0x1d811e = _0x4e6846 && _0x4e6846.__esModule ? _0x4e6846 : {
            default: _0x4e6846
        };
        class _0x2d5bfd extends _0x1d811e.default {
            constructor() {
                super('LifeInvaderApp');
                this.forwardableEvents.add('updateLifeInvaderAds');
            }
        }
        _0x45ef22.default = new _0x2d5bfd();
    }, {
        '../app/app': 7
    }],
    51: [function (_0x30260a, _0x47171a, _0x31008c) {
        'use strict';

        Object.defineProperty(_0x31008c, '__esModule', {
            value: true
        });
        var _0x5e3787 = _0x30260a('../../app/app');
        var _0x5e5ebe = _0x5e3787 && _0x5e3787.__esModule ? _0x5e3787 : {
            default: _0x5e3787
        };
        class _0x3fde85 extends _0x5e5ebe.default {
            constructor() {
                super('MarketplaceApp');
                this.forwardableEvents.add('responseMarketPlaceCategories');
                this.forwardableEvents.add('responseMyOffers');
                this.forwardableEvents.add('responseMarketPlaceOffers');
            }
        }
        _0x31008c.default = new _0x3fde85();
    }, {
        '../../app/app': 7,
        '../../browser/browser': 100
    }],
    52: [function (_0x12214f, _0x4b8762, _0x39a5e5) {
        'use strict';

        Object.defineProperty(_0x39a5e5, '__esModule', {
            value: true
        });
        var _0x7abddb = _0x12214f('../../app/app');
        var _0x35e9fd = _0x7abddb && _0x7abddb.__esModule ? _0x7abddb : {
            default: _0x7abddb
        };
        class _0x4b9428 extends _0x35e9fd.default {
            constructor() {
                super('MessengerApp');
            }
        }
        _0x39a5e5.default = new _0x4b9428();
    }, {
        '../../app/app': 7
    }],
    53: [function (_0x2ba412, _0x35938d, _0x118eee) {
        'use strict';

        Object.defineProperty(_0x118eee, '__esModule', {
            value: true
        });
        var _0xf8ed6a = _0x2ba412('../../app/app');
        var _0x12c4da = _0xf8ed6a && _0xf8ed6a.__esModule ? _0xf8ed6a : {
            default: _0xf8ed6a
        };
        var _0x179521 = _0x2ba412('../phone');
        var _0xab8904 = _0x179521 && _0x179521.__esModule ? _0x179521 : {
            default: _0x179521
        };
        class _0x4caf13 extends _0x12c4da.default {
            constructor() {
                super('MessengerListApp');
                this.forwardableEvents.add('responseKonversations');
            }
            ['onEvent'](_0x4f1c44, ..._0x4a710b) {
                if (_0x4f1c44 == 'getHomeScreen') {
                    _0xab8904.default.getHomeScreen();
                }
            }
        }
        _0x118eee.default = new _0x4caf13();
    }, {
        '../../app/app': 7,
        '../phone': 59
    }],
    54: [function (_0x45c17a, _0x20f506, _0x598c05) {
        'use strict';

        Object.defineProperty(_0x598c05, '__esModule', {
            value: true
        });
        var _0x1a55aa = _0x45c17a('../../app/app');
        var _0x456637 = _0x1a55aa && _0x1a55aa.__esModule ? _0x1a55aa : {
            default: _0x1a55aa
        };
        class _0x349447 extends _0x456637.default {
            constructor() {
                super('MessengerMessageApp');
            }
            ['onEvent'](_0x2ba4da, ..._0x1b66da) {
                if (_0x2ba4da == 'getLocation') {
                    const _0x37d2e7 = mp.players.local.position;
                    let _0x16e359 = Math.round(_0x37d2e7.x);
                    let _0x19e304 = Math.round(_0x37d2e7.y);
                    this.execute("setGPSdata('" + _0x16e359 + "','" + _0x19e304 + "')");
                }
            }
        }
        _0x598c05.default = new _0x349447();
    }, {
        '../../app/app': 7
    }],
    55: [function (_0x557a17, _0x3f5607, _0x4f0130) {
        'use strict';

        Object.defineProperty(_0x4f0130, '__esModule', {
            value: true
        });
        var _0x6d864c = _0x557a17('../../app/app');
        var _0x3ca354 = _0x6d864c && _0x6d864c.__esModule ? _0x6d864c : {
            default: _0x6d864c
        };
        var _0x94f50 = _0x557a17('../../player/player');
        var _0x52e873 = _0x94f50 && _0x94f50.__esModule ? _0x94f50 : {
            default: _0x94f50
        };
        var _0x50657c = _0x557a17('../phone');
        var _0x4fb346 = _0x50657c && _0x50657c.__esModule ? _0x50657c : {
            default: _0x50657c
        };
        var _0x5943b9 = _0x557a17('../../interfaces/hud/playernotification');
        var _0x237dcd = _0x5943b9 && _0x5943b9.__esModule ? _0x5943b9 : {
            default: _0x5943b9
        };
        class _0x1498a9 extends _0x3ca354.default {
            constructor() {
                super('MessengerOverviewApp');
                this.forwardableEvents.add('updateChat');
            }
            ['onReady']() {
                this.execute("setNumber('" + _0x52e873.default.phone + "', '" + _0x52e873.default.team + "', '" + _0x52e873.default.teamRank + "', '" + _0x52e873.default.firstName + "', '" + _0x52e873.default.lastName + "')");
            }
            ['onEvent'](_0x5a9ece, ..._0x3b11ee) {
                if (_0x5a9ece == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x3b11ee[0].x, _0x3b11ee[0].y);
                } else {
                    if (_0x5a9ece == 'nodeleteLotto') {
                        _0x237dcd.default.execute("pushPlayerNotification('Sie k\xF6nnen diesen Chat aufgrund vom Lottoschein nicht l\xF6schen.', '3000', 'true', '', 'SMS', '')");
                    } else {
                        if (_0x5a9ece == 'getLocation') {
                            const _0xd2f85a = mp.players.local.position;
                            let _0x3af693 = Math.round(_0xd2f85a.x);
                            let _0x257952 = Math.round(_0xd2f85a.y);
                            this.execute("setGPSdata('" + _0x3af693 + "','" + _0x257952 + "')");
                        } else if (_0x5a9ece == 'getHomeScreen') {
                            _0x4fb346.default.getHomeScreen();
                        }
                    }
                }
            }
        }
        _0x4f0130.default = new _0x1498a9();
    }, {
        '../../app/app': 7,
        '../../interfaces/hud/playernotification': 181,
        '../../player/player': 262,
        '../phone': 59
    }],
    56: [function (_0x154077, _0x33a079, _0x581794) {
        'use strict';

        Object.defineProperty(_0x581794, '__esModule', {
            value: true
        });
        var _0x3da196 = _0x154077('../../app/app');
        var _0x10da9d = _0x3da196 && _0x3da196.__esModule ? _0x3da196 : {
            default: _0x3da196
        };
        var _0x10aa81 = _0x154077('../../player/player');
        var _0x7c9d8d = _0x10aa81 && _0x10aa81.__esModule ? _0x10aa81 : {
            default: _0x10aa81
        };
        class _0x31480c extends _0x10da9d.default {
            constructor() {
                super('NewsAddApp');
            }
            ['onReady']() {
                this.execute("onReady('" + _0x7c9d8d.default.firstName + "', '" + _0x7c9d8d.default.lastName + "', '" + _0x7c9d8d.default.phone + "', '" + _0x7c9d8d.default.teamRank + "')");
            }
            ['onEvent'](_0x39af29, ..._0x3813f5) {
                if (_0x39af29 == 'getLocation') {
                    const _0x5a58a1 = mp.players.local.position;
                    let _0x5da807 = Math.round(_0x5a58a1.x);
                    let _0x296200 = Math.round(_0x5a58a1.y);
                    this.execute("setGPSdata('" + _0x5da807 + "','" + _0x296200 + "')");
                }
            }
        }
        _0x581794.default = new _0x31480c();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    57: [function (_0x217d11, _0x558de5, _0x5afe17) {
        'use strict';

        Object.defineProperty(_0x5afe17, '__esModule', {
            value: true
        });
        var _0x25db3b = _0x217d11('../../app/app');
        var _0xc78b3e = _0x25db3b && _0x25db3b.__esModule ? _0x25db3b : {
            default: _0x25db3b
        };
        var _0x2acaae = _0x217d11('../../player/player');
        var _0x1f3613 = _0x2acaae && _0x2acaae.__esModule ? _0x2acaae : {
            default: _0x2acaae
        };
        class _0x2e1018 extends _0xc78b3e.default {
            constructor() {
                super('NewsApp');
            }
            ['onReady']() {
                this.setPlayerTeam();
            }
            ['setPlayerTeam']() {
                this.execute('playerTeam=' + _0x1f3613.default.team);
            }
        }
        _0x5afe17.default = new _0x2e1018();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    58: [function (_0x363f6b, _0x5827fc, _0x2959bc) {
        'use strict';

        Object.defineProperty(_0x2959bc, '__esModule', {
            value: true
        });
        var _0x2bf6d2 = _0x363f6b('../../app/app');
        var _0x5dc3a5 = _0x2bf6d2 && _0x2bf6d2.__esModule ? _0x2bf6d2 : {
            default: _0x2bf6d2
        };
        var _0x1a2e1b = _0x363f6b('../../player/player');
        var _0x20d3b5 = _0x1a2e1b && _0x1a2e1b.__esModule ? _0x1a2e1b : {
            default: _0x1a2e1b
        };
        class _0x194a8f extends _0x5dc3a5.default {
            constructor() {
                super('NewsListApp');
                this.forwardableEvents.add('updateNews');
            }
            ['onReady']() {
                this.execute("onReady('" + _0x20d3b5.default.team + "','" + _0x20d3b5.default.firstName + "', '" + _0x20d3b5.default.lastName + "', '" + _0x20d3b5.default.teamRank + "')");
            }
            ['onEvent'](_0x2236ff, ..._0x5dce3f) {
                if (_0x2236ff == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x5dce3f[0].x, _0x5dce3f[0].y);
                }
            }
        }
        _0x2959bc.default = new _0x194a8f();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    59: [function (_0x53bb2e, _0x50c933, _0x2b3a0e) {
        'use strict';

        Object.defineProperty(_0x2b3a0e, '__esModule', {
            value: true
        });
        var _0x3ee65b = _0x53bb2e('../app/app');
        var _0x1382f5 = _0x3ee65b && _0x3ee65b.__esModule ? _0x3ee65b : {
            default: _0x3ee65b
        };
        class _0x887b1e extends _0x1382f5.default {
            constructor() {
                super('PhoneMainScreen');
            }
            ['getHomeScreen']() {
                this.execute('getHomeScreen()');
            }
            ['getHomeScreenCall']() {
                this.execute('getHomeScreenCall()');
            }
        }
        _0x2b3a0e.default = new _0x887b1e();
    }, {
        '../app/app': 7
    }],
    60: [function (_0x5f0627, _0x44bd28, _0x435ee0) {
        'use strict';

        Object.defineProperty(_0x435ee0, '__esModule', {
            value: true
        });
        var _0x57f1fc = _0x5f0627('../../app/app');
        var _0x466b25 = _0x57f1fc && _0x57f1fc.__esModule ? _0x57f1fc : {
            default: _0x57f1fc
        };
        class _0x2bc169 extends _0x466b25.default {
            constructor() {
                super('KennzeichenUebersichtApp');
                this.forwardableEvents.add('responsePlateOverview');
            }
        }
        _0x435ee0.default = new _0x2bc169();
    }, {
        '../../app/app': 7
    }],
    61: [function (_0x51d971, _0x43cfa1, _0x51d8c6) {
        'use strict';

        Object.defineProperty(_0x51d8c6, '__esModule', {
            value: true
        });
        var _0x3760a8 = _0x51d971('../../app/app');
        var _0x1f0bb5 = _0x3760a8 && _0x3760a8.__esModule ? _0x3760a8 : {
            default: _0x3760a8
        };
        class _0x271903 extends _0x1f0bb5.default {
            constructor() {
                super('PoliceAktenSearchApp');
                this.forwardableEvents.add('responsePlayerResults');
            }
        }
        _0x51d8c6.default = new _0x271903();
    }, {
        '../../app/app': 7
    }],
    62: [function (_0x24b8c3, _0x31662e, _0x384f58) {
        'use strict';

        Object.defineProperty(_0x384f58, '__esModule', {
            value: true
        });
        var _0x426bb4 = _0x24b8c3('../../app/app');
        var _0x224617 = _0x426bb4 && _0x426bb4.__esModule ? _0x426bb4 : {
            default: _0x426bb4
        };
        class _0x4ad0fd extends _0x224617.default {
            constructor() {
                super('PoliceEditPersonApp');
                this.forwardableEvents.add('responsePersonData');
                this.forwardableEvents.add('responseOpenCrimes');
                this.forwardableEvents.add('responseJailTime');
                this.forwardableEvents.add('responseJailCosts');
                this.forwardableEvents.add('responseAkte');
                this.forwardableEvents.add('responseAktenList');
                this.forwardableEvents.add('responseLicenses');
            }
        }
        _0x384f58.default = new _0x4ad0fd();
    }, {
        '../../app/app': 7
    }],
    63: [function (_0x2213ff, _0x424051, _0xc2453e) {
        'use strict';

        Object.defineProperty(_0xc2453e, '__esModule', {
            value: true
        });
        var _0x1a8f86 = _0x2213ff('../../app/app');
        var _0x39bf54 = _0x1a8f86 && _0x1a8f86.__esModule ? _0x1a8f86 : {
            default: _0x1a8f86
        };
        class _0x4b577d extends _0x39bf54.default {
            constructor() {
                super('PoliceEditWantedsApp');
                this.forwardableEvents.add('responseCategories');
                this.forwardableEvents.add('responseOpenCrimes');
                this.forwardableEvents.add('responseCategoryReasons');
            }
        }
        _0xc2453e.default = new _0x4b577d();
    }, {
        '../../app/app': 7
    }],
    64: [function (_0x133616, _0x1aadf3, _0x2763dd) {
        'use strict';

        Object.defineProperty(_0x2763dd, '__esModule', {
            value: true
        });
        var _0x16d719 = _0x133616('../../app/app');
        var _0x1f4462 = _0x16d719 && _0x16d719.__esModule ? _0x16d719 : {
            default: _0x16d719
        };
        class _0xf7976b extends _0x1f4462.default {
            constructor() {
                super('PoliceListAktenApp');
                this.forwardableEvents.add('responseAktenList');
            }
        }
        _0x2763dd.default = new _0xf7976b();
    }, {
        '../../app/app': 7
    }],
    65: [function (_0xbc0eea, _0x4bb206, _0x5d19ad) {
        'use strict';

        Object.defineProperty(_0x5d19ad, '__esModule', {
            value: true
        });
        var _0x1b1c9b = _0xbc0eea('../../app/app');
        var _0x59e628 = _0x1b1c9b && _0x1b1c9b.__esModule ? _0x1b1c9b : {
            default: _0x1b1c9b
        };
        class _0x46ca45 extends _0x59e628.default {
            constructor() {
                super('PoliceListProgressApp');
                this.forwardableEvents.add('responseCrimeProgress');
            }
        }
        _0x5d19ad.default = new _0x46ca45();
    }, {
        '../../app/app': 7
    }],
    66: [function (_0x4a8168, _0x5622c4, _0x35982a) {
        'use strict';

        Object.defineProperty(_0x35982a, '__esModule', {
            value: true
        });
        var _0x5e0a1d = _0x4a8168('../app/app');
        var _0x27ad0c = _0x5e0a1d && _0x5e0a1d.__esModule ? _0x5e0a1d : {
            default: _0x5e0a1d
        };
        var _0x2640ce = _0x4a8168('../player/player');
        var _0x34e892 = _0x2640ce && _0x2640ce.__esModule ? _0x2640ce : {
            default: _0x2640ce
        };
        class _0x9d085f extends _0x27ad0c.default {
            constructor() {
                super('ProfileApp');
                this.forwardableEvents.add('responseProfileData');
            }
            ['getHouse']() {
                let _0x1cf9cf = _0x34e892.default.house;
                return _0x1cf9cf == 0 ? 'Kein Haus' : _0x1cf9cf;
            }
            ['getGwd']() {
                let _0x5b089c = _0x34e892.default.gwdNote;
                return _0x5b089c == 0 ? 'Nicht vorhanden' : _0x5b089c;
            }
            ['getZWD']() {
                let _0x5e8a87 = _0x34e892.default.zwdNote;
                return _0x5e8a87 == 0 ? 'Nicht vorhanden' : _0x5e8a87;
            }
            ['getJob']() {
                let _0x2ac6ca = _0x34e892.default.job;
                switch (_0x2ac6ca) {
                    case 1:
                        return 'Waffendealer';
                        break;
                    case 2:
                        return 'Fälscher';
                        break;
                    case 3:
                        return 'Kredithai';
                        break;
                    case 4:
                        return 'Pilot';
                        break;
                    case 5:
                        return 'Farmer';
                        break;
                    case 6:
                        return 'Fischer';
                        break;
                    case 7:
                        return 'Lifeguard';
                        break;
                    case 8:
                        return 'Mechaniker';
                        break;
                    case 9:
                        return 'Busfahrer';
                        break;
                    case 10:
                        return 'Stripper';
                        break;
                    case 11:
                        return 'Makler';
                        break;
                    case 12:
                        return 'Trucker';
                        break;
                    case 13:
                        return 'Gärtner';
                        break;
                    case 14:
                        return 'Anwalt';
                        break;
                }
            }
            ['getTeam']() {
                let _0x42ed4c = _0x34e892.default.team;
                switch (_0x42ed4c) {
                    case 0:
                        return 'Zivilisten';
                        break;
                    case 1:
                        return 'Los Santos Police Department';
                        break;
                    case 2:
                        return 'Front Yard Ballas';
                        break;
                    case 3:
                        return 'Department of Motor Vehicles';
                        break;
                    case 4:
                        return 'Weazel News';
                        break;
                    case 5:
                        return 'Federal Investigation Bureau';
                        break;
                    case 6:
                        return 'The Lost';
                        break;
                    case 7:
                        return 'Los Santos Medic Center';
                        break;
                    case 8:
                        return 'Irish Mob';
                        break;
                    case 9:
                        return 'La Cosa Nostra';
                        break;
                    case 10:
                        return 'Yakuza';
                        break;
                    case 11:
                        return 'High Rollin Hustlers';
                        break;
                    case 12:
                        return 'Grove Familie';
                        break;
                    case 13:
                        return 'U.S. Army';
                        break;
                    case 14:
                        return 'Regierung';
                        break;
                    case 15:
                        return 'Angels of Death MC';
                        break;
                    case 16:
                        return 'Department of Public Order and Safety';
                        break;
                    case 17:
                        return 'Triaden';
                        break;
                    case 18:
                        return 'Midnight Club';
                        break;
                    case 19:
                        return 'The Marabunta Grande';
                        break;
                    case 20:
                        return 'North Nation Miliz';
                        break;
                    case 21:
                        return 'SWAT';
                        break;
                    case 22:
                        return 'Bratwa';
                        break;
                    case 23:
                        return 'Los Santos Sheriff Department';
                        break;
                    case 24:
                        return 'Hounds of Hell MC';
                        break;
                    case 25:
                        return 'Grapeseed Rednecks';
                        break;
                    case 26:
                        return 'Los Santos Customs';
                        break;
                    case 27:
                        return 'International Contract Agency';
                        break;
                    case 28:
                        return 'Los Santos Metal Corporation';
                        break;
                    case 29:
                        return 'East LS Mining Corporation';
                        break;
                    case 30:
                        return 'Vanilla Unicorn';
                        break;
                    case 42:
                        return 'Outlaws MC';
                        break;
                    case 43:
                        return 'Bruderschaft';
                        break;
                    case 44:
                        return 'Madrazo Cartel';
                        break;
                }
            }
        }
        _0x35982a.default = new _0x9d085f();
    }, {
        '../app/app': 7,
        '../player/player': 262
    }],
    67: [function (_0xa49a2b, _0x132a15, _0x1812d4) {
        'use strict';

        Object.defineProperty(_0x1812d4, '__esModule', {
            value: true
        });
        var _0x24e656 = _0xa49a2b('../../app/app');
        var _0x3673fc = _0x24e656 && _0x24e656.__esModule ? _0x24e656 : {
            default: _0x24e656
        };
        class _0x3cfe5b extends _0x3673fc.default {
            constructor() {
                super('ServiceRequestApp');
            }
        }
        _0x1812d4.default = new _0x3cfe5b();
    }, {
        '../../app/app': 7
    }],
    68: [function (_0x468d9b, _0x1ef571, _0x4e1a1a) {
        'use strict';

        Object.defineProperty(_0x4e1a1a, '__esModule', {
            value: true
        });
        var _0x18dcca = _0x468d9b('../../app/app');
        var _0x8652e8 = _0x18dcca && _0x18dcca.__esModule ? _0x18dcca : {
            default: _0x18dcca
        };
        class _0x4575b9 extends _0x8652e8.default {
            constructor() {
                super('ServiceSendRequestApp');
            }
        }
        _0x4e1a1a.default = new _0x4575b9();
    }, {
        '../../app/app': 7
    }],
    69: [function (_0x37cbe4, _0x3a23c7, _0x112499) {
        'use strict';

        Object.defineProperty(_0x112499, '__esModule', {
            value: true
        });
        var _0x1db606 = _0x37cbe4('../../app/app');
        var _0x26bf6e = _0x1db606 && _0x1db606.__esModule ? _0x1db606 : {
            default: _0x1db606
        };
        class _0x19a7ef extends _0x26bf6e.default {
            constructor() {
                super('ServiceAcceptedApp');
                this.forwardableEvents.add('responseTeamServiceList');
            }
            ['onEvent'](_0x5086a3, ..._0x443b27) {
                if (_0x5086a3 == 'setGpsCoordinatesAccepted') {
                    mp.game.ui.setNewWaypoint(_0x443b27[0].x, _0x443b27[0].y);
                }
            }
        }
        _0x112499.default = new _0x19a7ef();
    }, {
        '../../app/app': 7
    }],
    70: [function (_0x3ad1d8, _0x5ea188, _0x4881ac) {
        'use strict';

        Object.defineProperty(_0x4881ac, '__esModule', {
            value: true
        });
        var _0x2d99fe = _0x3ad1d8('../../app/app');
        var _0x40235f = _0x2d99fe && _0x2d99fe.__esModule ? _0x2d99fe : {
            default: _0x2d99fe
        };
        class _0x4f0c47 extends _0x40235f.default {
            constructor() {
                super('ServiceEvaluationApp');
                this.forwardableEvents.add('responseEvaluationService');
            }
        }
        _0x4881ac.default = new _0x4f0c47();
    }, {
        '../../app/app': 7
    }],
    71: [function (_0x5e82d7, _0x342d82, _0x36ba83) {
        'use strict';

        Object.defineProperty(_0x36ba83, '__esModule', {
            value: true
        });
        var _0x6c12c = _0x5e82d7('../../app/app');
        var _0x43ff26 = _0x6c12c && _0x6c12c.__esModule ? _0x6c12c : {
            default: _0x6c12c
        };
        class _0x521907 extends _0x43ff26.default {
            constructor() {
                super('ServiceListApp');
                this.forwardableEvents.add('responseOpenServiceList');
            }
            ['onEvent'](_0x3f3fac, ..._0x31fa86) {
                if (_0x3f3fac == 'setGpsCoordinatesAccepted') {
                    mp.game.ui.setNewWaypoint(_0x31fa86[0].x, _0x31fa86[0].y);
                }
            }
        }
        _0x36ba83.default = new _0x521907();
    }, {
        '../../app/app': 7
    }],
    72: [function (_0x41a73f, _0x3bc79c, _0x14c320) {
        'use strict';

        Object.defineProperty(_0x14c320, '__esModule', {
            value: true
        });
        var _0x3fb496 = _0x41a73f('../../app/app');
        var _0x569923 = _0x3fb496 && _0x3fb496.__esModule ? _0x3fb496 : {
            default: _0x3fb496
        };
        class _0x4bb5ac extends _0x569923.default {
            constructor() {
                super('ServiceOwnApp');
                this.forwardableEvents.add('responseOwnServiceList');
            }
            ['onEvent'](_0x6e2d9, ..._0x406213) {
                if (_0x6e2d9 == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x406213[0].x, _0x406213[0].y);
                }
            }
        }
        _0x14c320.default = new _0x4bb5ac();
    }, {
        '../../app/app': 7
    }],
    73: [function (_0x37df3b, _0x192679, _0x1630aa) {
        'use strict';

        Object.defineProperty(_0x1630aa, '__esModule', {
            value: true
        });
        var _0x286893 = _0x37df3b('../../app/app');
        var _0x3bfe7e = _0x286893 && _0x286893.__esModule ? _0x286893 : {
            default: _0x286893
        };
        var _0x2ca54e = _0x37df3b('../../player/player');
        var _0x4da1d9 = _0x2ca54e && _0x2ca54e.__esModule ? _0x2ca54e : {
            default: _0x2ca54e
        };
        var _0x3cdfb5 = _0x37df3b('../home');
        var _0x3a59ac = _0x3cdfb5 && _0x3cdfb5.__esModule ? _0x3cdfb5 : {
            default: _0x3cdfb5
        };
        class _0x501e55 extends _0x3bfe7e.default {
            constructor() {
                super('SettingsApp');
                this.forwardableEvents.add('responsePhoneSettings');
            }
            ['onEvent'](_0x260571, ..._0x23b87b) {
                if (_0x260571 == 'lautlosStatus') {
                    _0x4da1d9.default.phonelautlos = _0x23b87b[0].status;
                    _0x3a59ac.default.mutemode();
                } else {
                    if (_0x260571 == 'flyStatus') {
                        _0x3a59ac.default.flymode();
                    } else if (_0x260571 == 'anrufAblehnen') {
                        _0x3a59ac.default.anrufablehnen();
                    }
                }
            }
        }
        _0x1630aa.default = new _0x501e55();
    }, {
        '../../app/app': 7,
        '../../player/player': 262,
        '../home': 41
    }],
    74: [function (_0x49aa2a, _0x351591, _0x1658d9) {
        'use strict';

        Object.defineProperty(_0x1658d9, '__esModule', {
            value: true
        });
        var _0x16d092 = _0x49aa2a('../../app/app');
        var _0x1735f4 = _0x16d092 && _0x16d092.__esModule ? _0x16d092 : {
            default: _0x16d092
        };
        class _0x325bf8 extends _0x1735f4.default {
            constructor() {
                super('SettingsEditRingtonesApp');
                this.forwardableEvents.add('responseRingtoneList');
                this.forwardableEvents.add('responseRingtoneVolume');
            }
        }
        _0x1658d9.default = new _0x325bf8();
    }, {
        '../../app/app': 7
    }],
    75: [function (_0x304a26, _0x105251, _0x43346a) {
        'use strict';

        Object.defineProperty(_0x43346a, '__esModule', {
            value: true
        });
        var _0x242ee4 = _0x304a26('../../app/app');
        var _0x4ca112 = _0x242ee4 && _0x242ee4.__esModule ? _0x242ee4 : {
            default: _0x242ee4
        };
        var _0x3981f2 = _0x304a26('../../interfaces/hud/smartphone');
        var _0x44d9f3 = _0x3981f2 && _0x3981f2.__esModule ? _0x3981f2 : {
            default: _0x3981f2
        };
        class _0x409bde extends _0x4ca112.default {
            constructor() {
                super('SettingsEditWallpaperApp');
                this.forwardableEvents.add('responseWallpaperList');
            }
            ['onEvent'](_0x8fc526, ..._0xfabb6f) {
                if (_0x8fc526 == 'saveWallpaper') {
                    _0x44d9f3.default.refreshSmartphone();
                }
            }
        }
        _0x43346a.default = new _0x409bde();
    }, {
        '../../app/app': 7,
        '../../interfaces/hud/smartphone': 183
    }],
    76: [function (_0x3077c2, _0x350115, _0x2fc6f2) {
        'use strict';

        Object.defineProperty(_0x2fc6f2, '__esModule', {
            value: true
        });
        var _0x460141 = _0x3077c2('../../app/app');
        var _0x54e054 = _0x460141 && _0x460141.__esModule ? _0x460141 : {
            default: _0x460141
        };
        class _0x2d802d extends _0x54e054.default {
            constructor() {
                super('StreifenApp');
                this.forwardableEvents.add('responseStreifenData');
                this.forwardableEvents.add('responseStreifenInfo');
            }
        }
        _0x2fc6f2.default = new _0x2d802d();
    }, {
        '../../app/app': 7
    }],
    77: [function (_0x1b2d1e, _0x258b45, _0x335c9a) {
        'use strict';

        Object.defineProperty(_0x335c9a, '__esModule', {
            value: true
        });
        var _0x4783ab = _0x1b2d1e('../../../app/app');
        var _0x3b8246 = _0x4783ab && _0x4783ab.__esModule ? _0x4783ab : {
            default: _0x4783ab
        };
        class _0x23248c extends _0x3b8246.default {
            constructor() {
                super('SupportOverviewApp');
            }
        }
        _0x335c9a.default = new _0x23248c();
    }, {
        '../../../app/app': 7
    }],
    78: [function (_0x4a0979, _0x3da3f0, _0x234db9) {
        'use strict';

        Object.defineProperty(_0x234db9, '__esModule', {
            value: true
        });
        var _0xda7f32 = _0x4a0979('../../../app/app');
        var _0x524dab = _0xda7f32 && _0xda7f32.__esModule ? _0xda7f32 : {
            default: _0xda7f32
        };
        class _0x3fc789 extends _0x524dab.default {
            constructor() {
                super('SupportAcceptedTickets');
                this.forwardableEvents.add('responseAcceptedTicketList');
            }
        }
        _0x234db9.default = new _0x3fc789();
    }, {
        '../../../app/app': 7
    }],
    79: [function (_0x5d4387, _0x5f510e, _0x5197b7) {
        'use strict';

        Object.defineProperty(_0x5197b7, '__esModule', {
            value: true
        });
        var _0x2e3968 = _0x5d4387('../../../app/app');
        var _0x1d0488 = _0x2e3968 && _0x2e3968.__esModule ? _0x2e3968 : {
            default: _0x2e3968
        };
        class _0x2df15e extends _0x1d0488.default {
            constructor() {
                super('SupportKonversation');
                this.forwardableEvents.add('responseSupportKonversation');
                this.forwardableEvents.add('updateSupportKonversation');
            }
        }
        _0x5197b7.default = new _0x2df15e();
    }, {
        '../../../app/app': 7
    }],
    80: [function (_0x1520be, _0xfbd5be, _0x12f1a1) {
        'use strict';

        Object.defineProperty(_0x12f1a1, '__esModule', {
            value: true
        });
        var _0x1c14ed = _0x1520be('../../../app/app');
        var _0x1d1c96 = _0x1c14ed && _0x1c14ed.__esModule ? _0x1c14ed : {
            default: _0x1c14ed
        };
        class _0x544405 extends _0x1d1c96.default {
            constructor() {
                super('SupportOpenTickets');
                this.forwardableEvents.add('responseOpenTicketList');
            }
        }
        _0x12f1a1.default = new _0x544405();
    }, {
        '../../../app/app': 7
    }],
    81: [function (_0x5a2f04, _0x5dd686, _0x1f7ea0) {
        'use strict';

        Object.defineProperty(_0x1f7ea0, '__esModule', {
            value: true
        });
        var _0x5c6d43 = _0x5a2f04('../../../app/app');
        var _0x370c0e = _0x5c6d43 && _0x5c6d43.__esModule ? _0x5c6d43 : {
            default: _0x5c6d43
        };
        class _0x1dbc25 extends _0x370c0e.default {
            constructor() {
                super('SupportTicketOverview');
            }
        }
        _0x1f7ea0.default = new _0x1dbc25();
    }, {
        '../../../app/app': 7
    }],
    82: [function (_0x5527a5, _0x4c1fbf, _0x4d7eab) {
        'use strict';

        Object.defineProperty(_0x4d7eab, '__esModule', {
            value: true
        });
        var _0x3ffc6c = _0x5527a5('../../../app/app');
        var _0x1ce1d0 = _0x3ffc6c && _0x3ffc6c.__esModule ? _0x3ffc6c : {
            default: _0x3ffc6c
        };
        class _0x1ef9a2 extends _0x1ce1d0.default {
            constructor() {
                super('SupportVehicleApp');
            }
        }
        _0x4d7eab.default = new _0x1ef9a2();
    }, {
        '../../../app/app': 7
    }],
    83: [function (_0x5cd6a0, _0x3749f8, _0x1c60fc) {
        'use strict';

        Object.defineProperty(_0x1c60fc, '__esModule', {
            value: true
        });
        var _0x5881c4 = _0x5cd6a0('../../../app/app');
        var _0x25cf8f = _0x5881c4 && _0x5881c4.__esModule ? _0x5881c4 : {
            default: _0x5881c4
        };
        class _0x422906 extends _0x25cf8f.default {
            constructor() {
                super('SupportVehicleList');
                this.forwardableEvents.add('responseVehicleList');
            }
        }
        _0x1c60fc.default = new _0x422906();
    }, {
        '../../../app/app': 7
    }],
    84: [function (_0x366a4b, _0x1114d6, _0x471080) {
        'use strict';

        Object.defineProperty(_0x471080, '__esModule', {
            value: true
        });
        var _0x2bbebb = _0x366a4b('../../../app/app');
        var _0x59a0fc = _0x2bbebb && _0x2bbebb.__esModule ? _0x2bbebb : {
            default: _0x2bbebb
        };
        class _0x38ceb1 extends _0x59a0fc.default {
            constructor() {
                super('SupportVehicleProfile');
                this.forwardableEvents.add('responseVehicleData');
            }
        }
        _0x471080.default = new _0x38ceb1();
    }, {
        '../../../app/app': 7
    }],
    85: [function (_0x49ae3d, _0x539485, _0x3b0be4) {
        'use strict';

        Object.defineProperty(_0x3b0be4, '__esModule', {
            value: true
        });
        var _0x297c8b = _0x49ae3d('../../app/app');
        var _0x3496cd = _0x297c8b && _0x297c8b.__esModule ? _0x297c8b : {
            default: _0x297c8b
        };
        class _0x2c516e extends _0x3496cd.default {
            constructor() {
                super('TaxiContact');
            }
        }
        _0x3b0be4.default = new _0x2c516e();
    }, {
        '../../app/app': 7
    }],
    86: [function (_0xe97e7d, _0x24fbe1, _0x561686) {
        'use strict';

        Object.defineProperty(_0x561686, '__esModule', {
            value: true
        });
        var _0x36b236 = _0xe97e7d('../../app/app');
        var _0x244cea = _0x36b236 && _0x36b236.__esModule ? _0x36b236 : {
            default: _0x36b236
        };
        class _0x1c7f68 extends _0x244cea.default {
            constructor() {
                super('TaxiListApp');
                this.forwardableEvents.add('responseTaxiList');
            }
        }
        _0x561686.default = new _0x1c7f68();
    }, {
        '../../app/app': 7
    }],
    87: [function (_0x2bffb9, _0x258cd1, _0x403a21) {
        'use strict';

        Object.defineProperty(_0x403a21, '__esModule', {
            value: true
        });
        var _0x3ed531 = _0x2bffb9('../../app/app');
        var _0x12c4d0 = _0x3ed531 && _0x3ed531.__esModule ? _0x3ed531 : {
            default: _0x3ed531
        };
        class _0x5c6fda extends _0x12c4d0.default {
            constructor() {
                super('TaxiServiceListApp');
                this.forwardableEvents.add('responseServiceList');
            }
        }
        _0x403a21.default = new _0x5c6fda();
    }, {
        '../../app/app': 7
    }],
    88: [function (_0x58cda9, _0x27979e, _0x597bef) {
        'use strict';

        Object.defineProperty(_0x597bef, '__esModule', {
            value: true
        });
        var _0x5e34ab = _0x58cda9('../../app/app');
        var _0x52ec74 = _0x5e34ab && _0x5e34ab.__esModule ? _0x5e34ab : {
            default: _0x5e34ab
        };
        class _0x4e2e64 extends _0x52ec74.default {
            constructor() {
                super('TaxiApp');
            }
        }
        _0x597bef.default = new _0x4e2e64();
    }, {
        '../../app/app': 7
    }],
    89: [function (_0x1f202f, _0x275d1d, _0x39ecac) {
        'use strict';

        Object.defineProperty(_0x39ecac, '__esModule', {
            value: true
        });
        var _0x1105b1 = _0x1f202f('../../app/app');
        var _0x29fc03 = _0x1105b1 && _0x1105b1.__esModule ? _0x1105b1 : {
            default: _0x1105b1
        };
        class _0x9b5e98 extends _0x29fc03.default {
            constructor() {
                super('TeamEditApp');
            }
        }
        _0x39ecac.default = new _0x9b5e98();
    }, {
        '../../app/app': 7
    }],
    90: [function (_0x55473f, _0x2c8c9a, _0x4aab65) {
        'use strict';

        Object.defineProperty(_0x4aab65, '__esModule', {
            value: true
        });
        var _0x488d7d = _0x55473f('../../app/app');
        var _0x236d00 = _0x488d7d && _0x488d7d.__esModule ? _0x488d7d : {
            default: _0x488d7d
        };
        class _0x44b6c0 extends _0x236d00.default {
            constructor() {
                super('TeamListApp');
                this.forwardableEvents.add('responseTeamMembers');
            }
            ['onReady']() {
                mp.events.callRemote('requestTeamMembers');
            }
        }
        _0x4aab65.default = new _0x44b6c0();
    }, {
        '../../../modules/Player/Player': 2,
        '../../app/app': 7
    }],
    91: [function (_0x341660, _0x59e930, _0x23a9ce) {
        'use strict';

        Object.defineProperty(_0x23a9ce, '__esModule', {
            value: true
        });
        var _0x4654b0 = _0x341660('../../app/app');
        var _0x1563d6 = _0x4654b0 && _0x4654b0.__esModule ? _0x4654b0 : {
            default: _0x4654b0
        };
        var _0x1c1641 = _0x341660('../../player/player');
        var _0x11088d = _0x1c1641 && _0x1c1641.__esModule ? _0x1c1641 : {
            default: _0x1c1641
        };
        class _0x50ae53 extends _0x1563d6.default {
            constructor() {
                super('Telefon');
            }
            ['declineCall']() {
                if (_0x11088d.default.historys.historys != null) {
                    this.execute("responsePhoneCalls('" + _0x11088d.default.historys.toJson() + "')");
                }
            }
            ['onReady']() {
                if (_0x11088d.default.historys.historys != null) {
                    this.execute("responsePhoneCalls('" + _0x11088d.default.historys.toJson() + "')");
                }
            }
        }
        _0x23a9ce.default = new _0x50ae53();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    92: [function (_0x7e9513, _0x4a1db8, _0x138e33) {
        'use strict';

        Object.defineProperty(_0x138e33, '__esModule', {
            value: true
        });
        var _0x953e19 = _0x7e9513('../../app/app');
        var _0x29d9cf = _0x953e19 && _0x953e19.__esModule ? _0x953e19 : {
            default: _0x953e19
        };
        class _0x1665a9 extends _0x29d9cf.default {
            constructor() {
                super('TelefonCalls');
            }
        }
        _0x138e33.default = new _0x1665a9();
    }, {
        '../../app/app': 7,
        '../../player/player': 262
    }],
    93: [function (_0x21ec3e, _0x22f8e3, _0x790c9b) {
        'use strict';

        Object.defineProperty(_0x790c9b, '__esModule', {
            value: true
        });
        var _0x294938 = _0x21ec3e('../../app/app');
        var _0x54426d = _0x294938 && _0x294938.__esModule ? _0x294938 : {
            default: _0x294938
        };
        class _0x2f6011 extends _0x54426d.default {
            constructor() {
                super('TelefonInput');
            }
        }
        _0x790c9b.default = new _0x2f6011();
    }, {
        '../../app/app': 7
    }],
    94: [function (_0x2e4863, _0x242ab8, _0x168480) {
        'use strict';

        Object.defineProperty(_0x168480, '__esModule', {
            value: true
        });
        var _0xdd5c34 = _0x2e4863('../../app/app');
        var _0x57e34d = _0xdd5c34 && _0xdd5c34.__esModule ? _0xdd5c34 : {
            default: _0xdd5c34
        };
        class _0x45c246 extends _0x57e34d.default {
            constructor() {
                super('TelefonSettings');
                this.forwardableEvents.add('responsePhoneData');
            }
        }
        _0x168480.default = new _0x45c246();
    }, {
        '../../app/app': 7
    }],
    95: [function (_0x160b83, _0x69d50b, _0x1a2dcd) {
        'use strict';

        Object.defineProperty(_0x1a2dcd, '__esModule', {
            value: true
        });
        var _0x48d553 = _0x160b83('../../app/app');
        var _0x3a1607 = _0x48d553 && _0x48d553.__esModule ? _0x48d553 : {
            default: _0x48d553
        };
        class _0xa1adf8 extends _0x3a1607.default {
            constructor() {
                super('VehicleImpoundApp');
                this.forwardableEvents.add('responseVehicleImpound');
            }
        }
        _0x1a2dcd.default = new _0xa1adf8();
    }, {
        '../../app/app': 7
    }],
    96: [function (_0x5437ba, _0x438743, _0x34e489) {
        'use strict';

        Object.defineProperty(_0x34e489, '__esModule', {
            value: true
        });
        var _0x2c40f6 = _0x5437ba('../../app/app');
        var _0x47a4d7 = _0x2c40f6 && _0x2c40f6.__esModule ? _0x2c40f6 : {
            default: _0x2c40f6
        };
        class _0x4599c2 extends _0x47a4d7.default {
            constructor() {
                super('FahrzeugUebersichtApp');
                this.forwardableEvents.add('responseVehicleOverview');
            }
            ['onEvent'](_0x2c4a04, ..._0x2dc4d7) {
                if (_0x2c4a04 == 'setGpsCoordinates') {
                    mp.game.ui.setNewWaypoint(_0x2dc4d7[0].x, _0x2dc4d7[0].y);
                }
            }
        }
        _0x34e489.default = new _0x4599c2();
    }, {
        '../../app/app': 7
    }],
    97: [function (_0x1fbba3, _0xdda20d, _0x10251a) {
        'use strict';

        Object.defineProperty(_0x10251a, '__esModule', {
            value: true
        });
        var _0x2521e7 = _0x1fbba3('../../app/app');
        var _0x4b26be = _0x2521e7 && _0x2521e7.__esModule ? _0x2521e7 : {
            default: _0x2521e7
        };
        class _0x58dedf extends _0x4b26be.default {
            constructor() {
                super('VehicleTaxApp');
                this.forwardableEvents.add('responseVehicleTax');
            }
        }
        _0x10251a.default = new _0x58dedf();
    }, {
        '../../app/app': 7
    }],
    98: [function (_0x2e58c7, _0x4d608a, _0x2e270e) {
        'use strict';

        Object.defineProperty(_0x2e270e, '__esModule', {
            value: true
        });
        var _0x20ba29 = _0x2e58c7('../../app/app');
        var _0x3192cb = _0x20ba29 && _0x20ba29.__esModule ? _0x20ba29 : {
            default: _0x20ba29
        };
        class _0x136593 extends _0x3192cb.default {
            constructor() {
                super('WorkstationApp');
                this.forwardableEvents.add('responseWorkstationInfo');
            }
        }
        _0x2e270e.default = new _0x136593();
    }, {
        '../../app/app': 7
    }],
    99: [function (_0x4d1517, _0x25a596, _0x24d2a4) {
        'use strict';

        Object.defineProperty(_0x24d2a4, '__esModule', {
            value: true
        });
        var _0x8a0e7b = _0x4d1517('../player/player');
        var _0x331d82 = _0x8a0e7b && _0x8a0e7b.__esModule ? _0x8a0e7b : {
            default: _0x8a0e7b
        };
        class _0x5db9ef {
            constructor() {
                this.attachmentsSyncEntities = [];
                this.steamAttachmentsRange = 30;
                this.wasRagdoll = {};
                this.collided = {};
                this.isOpeningDoor = false;
                this.isInWater = false;
                this.controlsToDisable = [12, 13, 14, 15, 16, 17, 24, 25, 37, 45, 47, 58, 69, 70, 92, 114, 140, 141, 142, 143, 257, 263, 264, 331];
                this.controlsLength = this.controlsToDisable.length;
                var _0x26ade1 = this;
                setInterval(function () {
                    if (_0x331d82.default != null && _0x331d82.default.attachmentsync && _0x26ade1.attachmentsSyncEntities != null) {
                        mp.players.forEachInStreamRange((_0x44c089, _0x1b5998) => {
                            let _0x4d36bc = _0x44c089.position;
                            let _0x5be027 = _0x331d82.default.getDistance(_0x4d36bc);
                            if (_0x5be027 < _0x26ade1.steamAttachmentsRange) {
                                if (!_0x26ade1.attachmentsSyncEntities.includes(_0x44c089.handle)) {
                                    _0x26ade1.attachmentsSyncEntities.push(_0x44c089.handle);
                                    mp.events.callRemote('requestAttachmentsPlayer', _0x44c089);
                                }
                            } else {
                                if (_0x26ade1.attachmentsSyncEntities.includes(_0x44c089.handle)) {
                                    let _0x21cc2d = _0x26ade1.attachmentsSyncEntities.indexOf(_0x44c089.handle);
                                    if (_0x21cc2d > -1) {
                                        _0x26ade1.removeAllAttachments(_0x44c089);
                                        _0x26ade1.attachmentsSyncEntities.splice(_0x21cc2d, 1);
                                    }
                                }
                            }
                        });
                    }
                }, 1500);
                mp.events.add('entityStreamOut', _0x3a50b3 => {
                    if (_0x3a50b3.__attachmentObjects) {
                        this.removeAllAttachments(_0x3a50b3);
                    }
                    if (_0x3a50b3) {
                        let _0x12f5ac = this.attachmentsSyncEntities.indexOf(_0x3a50b3);
                        if (_0x12f5ac > -1) {
                            this.attachmentsSyncEntities.splice(_0x12f5ac, 1);
                        }
                    }
                });
                mp.events.add('render', () => {
                    if (_0x331d82.default.isCarrying) {
                        for (let _0x26f858 = 0; _0x26f858 < this.controlsLength; _0x26f858++) {
                            mp.game.controls.disableControlAction(2, this.controlsToDisable[_0x26f858], true);
                        }
                    }
                    if (mp.game.invoke('0x26AF0E8E30BD2A2C', mp.players.local.handle, true)) {
                        this.isOpeningDoor = true;
                    } else if (this.isOpeningDoor) {
                        this.isOpeningDoor = false;
                        this.checkAnimations(mp.players.local);
                    }
                    if (mp.players.local.isInWater() && this.isInWater == false) {
                        this.isInWater = true;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    } else if (mp.players.local.isInWater() == false && this.isInWater == true) {
                        this.isInWater = false;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    }
                    mp.players.forEachInStreamRange((_0x53616c, _0x13421f) => {
                        if (this.attachmentsSyncEntities.indexOf(_0x53616c.handle) > -1) {
                            if (_0x53616c.hasCollidedWithAnything()) {
                                this.collided[_0x53616c.remoteId] = true;
                            } else if (this.collided[_0x53616c.remoteId]) {
                                this.checkAnimations(mp.players.atRemoteId(_0x53616c.remoteId));
                                this.collided[_0x53616c.remoteId] = false;
                            }
                            if (_0x53616c.isRagdoll()) {
                                this.wasRagdoll[_0x53616c.remoteId] = true;
                            } else {
                                if (this.wasRagdoll[_0x53616c.remoteId]) {
                                    let _0xe189a5 = this;
                                    setTimeout(function () {
                                        _0xe189a5.checkAnimations(mp.players.atRemoteId(_0x53616c.remoteId));
                                    }, 2000);
                                    this.wasRagdoll[_0x53616c.remoteId] = false;
                                }
                            }
                        }
                    });
                });
                mp.events.add('setAttachments', (_0xa97578, _0x40226c) => {
                    if (_0xa97578 !== undefined && _0xa97578 != null && _0xa97578.handle != null && _0x40226c !== undefined && (this.attachmentsSyncEntities.includes(_0xa97578.handle) || _0xa97578 == mp.players.local)) {
                        this.setAttachments(_0xa97578, _0x40226c);
                    }
                });
                mp.events.add('removeAllAttachments', _0xf538c7 => {
                    ;
                    if (_0xf538c7 !== undefined && _0xf538c7 != null && _0xf538c7.handle != null && this.attachmentsSyncEntities.includes(_0xf538c7.handle) || _0xf538c7 == mp.players.local) {
                        this.removeAllAttachments(_0xf538c7);
                    }
                });
                mp.events.add('resyncAttachments', _0x3985f8 => {
                    ;
                    if (_0x3985f8 !== undefined && _0x3985f8 != null && _0x3985f8.handle != null && this.attachmentsSyncEntities.includes(_0x3985f8.handle) || _0x3985f8 == mp.players.local) {
                        this.resyncAttachments(_0x3985f8);
                    }
                });
            }
            ['setAttachments'](_0xeb1d4, _0x12f10a) {
                if (_0x12f10a !== undefined) {
                    let _0x36602a = _0x12f10a.length > 0 ? JSON.parse(_0x12f10a) : [];
                    if (_0xeb1d4.handle !== 0) {
                        let _0x58cfbe = _0xeb1d4.__attachments;
                        if (!_0x58cfbe) {
                            _0x58cfbe = [];
                            _0xeb1d4.__attachmentObjects = {};
                        }
                        if (_0x58cfbe != [] && _0x36602a != []) {
                            for (let _0x838f19 of _0x58cfbe) {
                                if (_0x36602a.findIndex(_0x333141 => _0x333141.Id === _0x838f19.Id) === -1) {
                                    this.removeAttachment(_0xeb1d4, _0x838f19);
                                }
                            }
                        }
                        if (_0x36602a != [] && _0x58cfbe != []) {
                            for (let _0x3e9438 of _0x36602a) {
                                if (_0x58cfbe.findIndex(_0x44454c => _0x44454c.Id === _0x3e9438.Id) === -1) {
                                    this.addAttachment(_0xeb1d4, _0x3e9438);
                                }
                            }
                        }
                        _0xeb1d4.__attachments = _0x36602a;
                    }
                }
            }
            ['resyncAttachments'](_0x2b1d3a) {
                if (_0x2b1d3a.handle !== 0 && _0x2b1d3a.__attachments.length > 0) {
                    for (let _0x5b75d0 of _0x2b1d3a.__attachments) {
                        this.removeAttachment(_0x2b1d3a, _0x5b75d0);
                    }
                    for (let _0x22cfc0 of _0x2b1d3a.__attachments) {
                        this.addAttachment(_0x2b1d3a, _0x22cfc0);
                    }
                }
            }
            ['removeAllAttachments'](_0x5ac705) {
                if (_0x5ac705.handle !== 0 && _0x5ac705.__attachments.length > 0) {
                    for (let _0x253377 of _0x5ac705.__attachments) {
                        this.removeAttachment(_0x5ac705, _0x253377);
                    }
                }
            }
            ['checkAnimations'](_0x45642b) { }
            async ['addAttachment'](_0x5d5d1e, _0x3e7513) {
                if (!_0x5d5d1e.__attachmentObjects.hasOwnProperty(_0x3e7513.id)) {
                    let _0x14a5d0 = mp.objects.new(_0x3e7513.model, _0x5d5d1e.position, {
                        dimension: _0x5d5d1e.dimension
                    });
                    let _0x2618fd = 0;
                    while ((_0x14a5d0 == null || _0x14a5d0.handle === 0) && _0x2618fd < 20) {
                        await mp.game.waitAsync(100);
                        _0x2618fd++;
                    }
                    _0x14a5d0.attachTo(_0x5d5d1e.handle, _0x5d5d1e.getBoneIndex(_0x3e7513.bone), _0x3e7513.offset.x, _0x3e7513.offset.y, _0x3e7513.offset.z, _0x3e7513.rotation.x, _0x3e7513.rotation.y, _0x3e7513.rotation.z, false, false, false, false, 2, true);
                    _0x5d5d1e.__attachmentObjects[_0x3e7513.id] = _0x14a5d0;
                    if (_0x3e7513.needsAnimation) {
                        mp.game.streaming.requestAnimDict(_0x3e7513.animationDict);
                        while (!mp.game.streaming.hasAnimDictLoaded(_0x3e7513.animationDict)) {
                            mp.game.wait(0);
                        }
                        _0x5d5d1e.taskPlayAnim(_0x3e7513.animationDict, _0x3e7513.animationName, 8, -4, -1, _0x3e7513.animationFlag, 0, false, false, false);
                    }
                    if (_0x3e7513.isCarrying && mp.players.local.id === _0x5d5d1e.id) {
                        _0x331d82.default.isCarrying = true;
                        mp.players.local.weapon = mp.game.joaat('weapon_unarmed');
                    }
                }
            }
            ['removeAttachment'](_0x309c70, _0x3a8b2d) {
                if (_0x309c70.__attachmentObjects.hasOwnProperty(_0x3a8b2d.id)) {
                    let _0x2ba1e7 = _0x309c70.__attachmentObjects[_0x3a8b2d.id];
                    delete _0x309c70.__attachmentObjects[_0x3a8b2d.id];
                    if (mp.objects.exists(_0x2ba1e7)) {
                        _0x2ba1e7.destroy();
                        if (_0x3a8b2d.needsAnimation) {
                            _0x309c70.stopAnimTask(_0x3a8b2d.animationDict, _0x3a8b2d.animationName, 3);
                        }
                        if (_0x331d82.default.isCarrying && _0x3a8b2d.isCarrying && mp.players.local.id === _0x309c70.id) {
                            _0x331d82.default.isCarrying = false;
                            Object.keys(_0x309c70.__attachmentObjects).forEach(_0x16f327 => {
                                if (_0x16f327.isCarrying) {
                                    _0x331d82.default.isCarrying = true;
                                }
                            });
                        }
                    }
                }
            }
            ['initAttachments'](_0x48630e) {
                for (let _0x5c6db8 of _0x48630e.__attachments) {
                    this.addAttachment(_0x48630e, _0x5c6db8);
                }
            }
            ['removeAllAttachments'](_0x591fd7) {
                if (_0x591fd7.__attachments !== undefined) {
                    if (_0x591fd7.__attachments && _0x591fd7.__attachments != []) {
                        for (let _0x442147 of _0x591fd7.__attachments) {
                            if (_0x591fd7.__attachments.findIndex(_0x400fdb => _0x400fdb.Id === _0x442147.id) === -1) {
                                this.removeAttachment(_0x591fd7, _0x442147);
                            }
                        }
                        _0x591fd7.__attachments = [];
                        _0x591fd7.__attachmentObjects = {};
                    }
                }
            }
        }
        _0x24d2a4.default = new _0x5db9ef();
    }, {
        '../player/player': 262
    }],
    100: [function (_0x7ce889, _0x3ab938, _0x42978b) {
        'use strict';

        Object.defineProperty(_0x42978b, '__esModule', {
            value: true
        });
        class _0xc04a68 {
            constructor() {
                let _0x1f9bc0 = this;
                this.ui = null;
                this.voice = null;
                mp.events.add('guiReady', function () {
                    _0x1f9bc0.createBrowsers.call(_0x1f9bc0);
                });
            }
            ['createBrowsers']() {
                if (!this.ui) {
                    this.ui = mp.browsers.new('package://gvrp/index.html');
                }
            }
            ['execute'](_0x3c27b7) {
                if (!this.ui) {
                    return;
                }
                this.ui.execute('' + _0x3c27b7);
            }
        }
        _0x42978b.default = new _0xc04a68();
    }, {}],
    101: [function (_0x19710e, _0x27e538, _0x1412f2) {
        'use strict';

        const {
            cbHelper: _0x30df55
        } = _0x19710e('../circuitbreaker/CbHelper');
        const {
            CbPortLights: _0x25158a
        } = _0x19710e('../circuitbreaker/CbPortLights');
        class _0x55b6f0 {
            constructor() {
                this.startPortPos = {
                    x: 0,
                    y: 0
                };
                this.finishPortPos = {
                    x: 0,
                    y: 0
                };
                this.startPortHeading = -1;
                this.finishPortHeading = -1;
                this.startPortLights = null;
                this.finishPortLights = null;
                this.startPortBounds = [];
                this.finishPortBounds = [];
                this.winBounds = [];
            }
            ['isVectorZero'](_0x29db7a) {
                return _0x29db7a.x === 0 && _0x29db7a.y === 0;
            }
            ['initialize'](_0x290269) {
                this.startPortPos = this.getStartPortPosition(_0x290269);
                this.finishPortPos = this.getFinishPortPosition(_0x290269, this.startPortPos);
                this.startPortHeading = this.getPortHeading(this.startPortPos);
                this.finishPortHeading = this.getPortHeading(this.finishPortPos);
                this.startPortLights = new _0x25158a(this.startPortPos, this.startPortHeading, 'START');
                this.finishPortLights = new _0x25158a(this.finishPortPos, this.finishPortHeading, 'FINISH');
                this.startPortBounds = this.getPortCollisionBounds(this.startPortPos, this.startPortHeading, true);
                this.finishPortBounds = this.getPortCollisionBounds(this.finishPortPos, this.finishPortHeading, false);
                this.winBounds = this.getWinBounds();
            }
            ['getRandom'](_0x8e609b, _0x199035) {
                return Math.floor(Math.random() * (_0x199035 - _0x8e609b + 1) + _0x8e609b);
            }
            ['drawPorts']() {
                if (this.isVectorZero(this.startPortPos) || this.isVectorZero(this.finishPortPos) || this.startPortHeading === -1 || this.finishPortHeading === -1) {
                    return;
                }
                this.drawPortSprite(this.startPortPos, this.startPortHeading);
                this.drawPortSprite(this.finishPortPos, this.finishPortHeading);
                if (this.startPortLights) {
                    this.startPortLights.drawLights();
                }
                if (this.finishPortLights) {
                    this.finishPortLights.drawLights();
                }
            }
            ['isCollidingWithPort'](_0x135c34) {
                return (_0x30df55.isInPoly(this.startPortBounds, _0x135c34) || _0x30df55.isInPoly(this.finishPortBounds, _0x135c34)) && !this.isPointInGameWinningPosition(_0x135c34);
            }
            ['isPointInGameWinningPosition'](_0x4d68a8) {
                return _0x30df55.isInPoly(this.winBounds, _0x4d68a8);
            }
            ['drawPortSprite'](_0x909b2, _0xd8329e) {
                const _0x16fcc9 = _0xd8329e === 0 || _0xd8329e === 180 ? 0.055 : 0.0325;
                const _0x3d8939 = _0xd8329e === 0 || _0xd8329e === 180 ? 0.02 : 0.0325;
                mp.game1.graphics.drawSprite('MPCircuitHack', 'genericport', _0x909b2.x, _0x909b2.y, _0x3d8939, _0x16fcc9, _0xd8329e, 255, 255, 255, 255);
            }
            ['getMagnitude'](_0x2c07b3, _0x3ea845) {
                if (_0x2c07b3 === 0 || _0x2c07b3 === 180) {
                    return _0x3ea845 ? 0.0279 : 0.0266;
                }
                return _0x3ea845 ? 0.0211 : 0.0173;
            }
            ['getAngles'](_0x3d4c85, _0x44b8d0) {
                if (_0x3d4c85 === 0 || _0x3d4c85 === 180) {
                    return _0x44b8d0 ? [289.75, 250.75, 109.75, 70] : [277.75, 259.25, 100.75, 82.5];
                }
                return _0x44b8d0 ? [313.25, 227.75, 132.25, 48.5] : [111, 66.5, 293.25, 249.25];
            }
            ['getPortCollisionBounds'](_0x4fd5ee, _0x528fbc, _0x1f4a94) {
                const _0x28659b = this.getMagnitude(_0x528fbc, _0x1f4a94);
                const _0x522829 = _0x528fbc === 0 || _0x528fbc === 180 ? 1 : -1;
                const _0x4680f8 = this.getAngles(_0x528fbc, _0x1f4a94);
                const _0x37e7b6 = [];
                for (const _0x4c7f25 of _0x4680f8) {
                    _0x37e7b6.push(_0x30df55.getOffsetPosition(_0x4fd5ee, _0x28659b, (_0x528fbc + _0x4c7f25) % 360, _0x522829));
                }
                return _0x37e7b6;
            }
            ['getMagnitudeAngleOffsetPairs'](_0x3a9513) {
                return _0x3a9513 === 0 || _0x3a9513 === 180 ? [[0.0278, 70.25], [0.02807, 289.5], [0.02708, 282], [0.02665, 77.75]] : [[0.02088, 228.5], [0.01827, 238.75], [0.01806, 121.75], [0.02061, 131.75]];
            }
            ['getWinBounds']() {
                const _0x59839f = this.finishPortHeading === 0 || this.finishPortHeading === 180 ? 1 : -1;
                const _0x3525d4 = this.getMagnitudeAngleOffsetPairs(this.finishPortHeading);
                const _0x573f5b = [];
                for (const _0x1e492a of _0x3525d4) {
                    _0x573f5b.push(_0x30df55.getOffsetPosition(this.finishPortPos, _0x1e492a[0], (this.finishPortHeading + _0x1e492a[1]) % 360, _0x59839f));
                }
                return _0x573f5b;
            }
            ['getStartPortPosition'](_0xd4c019) {
                const _0x472e11 = this.getPortPositionBounds(_0xd4c019);
                if (_0x472e11.some(_0x36eff7 => this.isVectorZero(_0x36eff7[0]) || this.isVectorZero(_0x36eff7[1]))) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                const _0xea2f93 = _0x472e11[this.getRandom(0, _0x472e11.length - 1)];
                let _0x361cc9 = 20;
                while (this.isVectorZero(_0x5acce0) && _0x361cc9 > 0) {
                    _0x5acce0 = this.getRandomPortPosition(_0xea2f93);
                    _0x361cc9--;
                }
                return _0x5acce0;
            }
            ['getFinishPortPosition'](_0x2251e9, _0x1e5b07) {
                const _0x1bb11f = this.getPortPositionBounds(_0x2251e9);
                let _0x194a5f = 0;
                for (const _0x432db6 of _0x1bb11f) {
                    while (this.isVectorZero(_0x1cd215)) {
                        _0x1cd215 = this.getRandomPortPosition(_0x432db6);
                    }
                    const _0x397427 = _0x30df55.getDistance(_0x1e5b07, _0x1cd215);
                    if (_0x397427 > _0x194a5f) {
                        _0x194a5f = _0x397427;
                        _0xfb2460 = _0x1cd215;
                    }
                }
                return _0xfb2460;
            }
            ['getPortHeading'](_0x5a4202) {
                const _0x34f81c = [0.159, 0.841];
                const _0x208df4 = [0.153, 0.848];
                const _0xff2eca = _0x34f81c.sort((_0x2295b9, _0x2d7718) => Math.abs(_0x2295b9 - _0x5a4202.x) - Math.abs(_0x2d7718 - _0x5a4202.x))[0];
                const _0x5f1bd = _0x208df4.sort((_0x1f447b, _0x2d492b) => Math.abs(_0x1f447b - _0x5a4202.y) - Math.abs(_0x2d492b - _0x5a4202.y))[0];
                if (Math.abs(_0x5a4202.x - _0xff2eca) < Math.abs(_0x5a4202.y - _0x5f1bd)) {
                    if (Math.abs(_0xff2eca - 0.159) < Math.abs(_0xff2eca - 0.841)) {
                        return 0;
                    }
                    return 180;
                }
                if (Math.abs(_0x5f1bd - 0.153) < Math.abs(_0x5f1bd - 0.848)) {
                    return 90;
                }
                return 270;
            }
            ['getRandomPortPosition'](_0x142ede) {
                if (_0x142ede.length < 2) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                const _0x268d87 = this.getRandom(_0x142ede[0].x * 1000, _0x142ede[1].x * 1000) / 1000;
                const _0xe50b4a = this.getRandom(_0x142ede[0].y * 1000, _0x142ede[1].y * 1000) / 1000;
                return {
                    x: _0x268d87,
                    y: _0xe50b4a
                };
            }
            ['getPortPositionBounds'](_0x437cc3) {
                switch (_0x437cc3) {
                    case 1:
                        return [[{
                            x: 0.169,
                            y: 0.613
                        }, {
                            x: 0.169,
                            y: 0.816
                        }], [{
                            x: 0.179,
                            y: 0.837
                        }, {
                            x: 0.284,
                            y: 0.837
                        }], [{
                            x: 0.833,
                            y: 0.181
                        }, {
                            x: 0.833,
                            y: 0.277
                        }], [{
                            x: 0.751,
                            y: 0.163
                        }, {
                            x: 0.823,
                            y: 0.163
                        }]];
                    case 2:
                        return [[{
                            x: 0.169,
                            y: 0.673
                        }, {
                            x: 0.169,
                            y: 0.818
                        }], [{
                            x: 0.18,
                            y: 0.838
                        }, {
                            x: 0.297,
                            y: 0.838
                        }], [{
                            x: 0.832,
                            y: 0.181
                        }, {
                            x: 0.832,
                            y: 0.324
                        }], [{
                            x: 0.778,
                            y: 0.16
                        }, {
                            x: 0.821,
                            y: 0.16
                        }]];
                    case 3:
                        return [[{
                            x: 0.166,
                            y: 0.182
                        }, {
                            x: 0.166,
                            y: 0.263
                        }], [{
                            x: 0.166,
                            y: 0.745
                        }, {
                            x: 0.166,
                            y: 0.816
                        }], [{
                            x: 0.18,
                            y: 0.837
                        }, {
                            x: 0.31,
                            y: 0.837
                        }], [{
                            x: 0.184,
                            y: 0.164
                        }, {
                            x: 0.277,
                            y: 0.164
                        }]];
                    case 4:
                        return [[{
                            x: 0.169,
                            y: 0.628
                        }, {
                            x: 0.169,
                            y: 0.817
                        }], [{
                            x: 0.183,
                            y: 0.838
                        }, {
                            x: 0.259,
                            y: 0.838
                        }], [{
                            x: 0.833,
                            y: 0.186
                        }, {
                            x: 0.833,
                            y: 0.359
                        }], [{
                            x: 0.797,
                            y: 0.161
                        }, {
                            x: 0.819,
                            y: 0.161
                        }]];
                    case 5:
                        return [[{
                            x: 0.832,
                            y: 0.742
                        }, {
                            x: 0.832,
                            y: 0.811
                        }], [{
                            x: 0.761,
                            y: 0.839
                        }, {
                            x: 0.821,
                            y: 0.839
                        }], [{
                            x: 0.169,
                            y: 0.184
                        }, {
                            x: 0.169,
                            y: 0.383
                        }], [{
                            x: 0.184,
                            y: 0.162
                        }, {
                            x: 0.234,
                            y: 0.162
                        }]];
                    case 6:
                        return [[{
                            x: 0.167,
                            y: 0.183
                        }, {
                            x: 0.167,
                            y: 0.3
                        }], [{
                            x: 0.18,
                            y: 0.162
                        }, {
                            x: 0.214,
                            y: 0.162
                        }], [{
                            x: 0.833,
                            y: 0.186
                        }, {
                            x: 0.833,
                            y: 0.282
                        }], [{
                            x: 0.768,
                            y: 0.161
                        }, {
                            x: 0.82,
                            y: 0.161
                        }]];
                    default:
                        return [];
                }
            }
        }
        _0x1412f2.cbGenericPorts = new _0x55b6f0();
    }, {
        '../circuitbreaker/CbHelper': 102,
        '../circuitbreaker/CbPortLights': 105
    }],
    102: [function (_0x5e7c04, _0x303e20, _0x14ffe3) {
        'use strict';

        class _0x21a5ea {
            constructor() {
                this.RED_COLOUR = {
                    r: 188,
                    g: 49,
                    b: 43
                };
                this.GREEN_COLOUR = {
                    r: 45,
                    g: 203,
                    b: 134
                };
            }
            ['getMinimum'](_0x558db7) {
                return Math.min(..._0x558db7);
            }
            ['getMaximum'](_0x2e2c49) {
                return Math.max(..._0x2e2c49);
            }
            ['getDistance'](_0x251630, _0x3d33f7) {
                return Math.sqrt(Math.pow(_0x251630.x - _0x3d33f7.x, 2) + Math.pow(_0x251630.y - _0x3d33f7.y, 2));
            }
            ['isInPoly'](_0x2fa73e, _0x3cfeab) {
                const _0x1e2628 = this.getMinimum(_0x2fa73e.map(_0x160b52 => _0x160b52.x));
                const _0x2243dd = this.getMinimum(_0x2fa73e.map(_0x3e5511 => _0x3e5511.y));
                const _0x5adfea = this.getMaximum(_0x2fa73e.map(_0x1899cf => _0x1899cf.x));
                const _0x105f5d = this.getMaximum(_0x2fa73e.map(_0x3eb1a6 => _0x3eb1a6.y));
                if (_0x3cfeab.x < _0x1e2628 || _0x3cfeab.x > _0x5adfea || _0x3cfeab.y < _0x2243dd || _0x3cfeab.y > _0x105f5d) {
                    return false;
                }
                let _0x1b2a39 = 0;
                let _0x3b5f39 = _0x2fa73e.length - 1;
                let _0x27f3d0 = false;
                for (; _0x1b2a39 < _0x2fa73e.length; _0x3b5f39 = _0x1b2a39++) {
                    if (_0x2fa73e[_0x1b2a39].x === _0x3cfeab.x && _0x2fa73e[_0x1b2a39].y === _0x3cfeab.y) {
                        return true;
                    }
                    if (_0x2fa73e[_0x3b5f39].x === _0x3cfeab.x && _0x2fa73e[_0x3b5f39].y === _0x3cfeab.y) {
                        return true;
                    }
                    if (_0x2fa73e[_0x1b2a39].x == _0x2fa73e[_0x3b5f39].x && _0x3cfeab.x == _0x2fa73e[_0x1b2a39].x && _0x3cfeab.y >= Math.min(_0x2fa73e[_0x1b2a39].y, _0x2fa73e[_0x3b5f39].y) && _0x3cfeab.y <= Math.max(_0x2fa73e[_0x1b2a39].y, _0x2fa73e[_0x3b5f39].y)) {
                        return true;
                    }
                    if (_0x2fa73e[_0x1b2a39].y == _0x2fa73e[_0x3b5f39].y && _0x3cfeab.y == _0x2fa73e[_0x1b2a39].y && _0x3cfeab.x >= Math.min(_0x2fa73e[_0x1b2a39].x, _0x2fa73e[_0x3b5f39].x) && _0x3cfeab.x <= Math.max(_0x2fa73e[_0x1b2a39].x, _0x2fa73e[_0x3b5f39].x)) {
                        return true;
                    }
                    if (_0x2fa73e[_0x1b2a39].y > _0x3cfeab.y != _0x2fa73e[_0x3b5f39].y > _0x3cfeab.y && _0x3cfeab.x < (_0x2fa73e[_0x3b5f39].x - _0x2fa73e[_0x1b2a39].x) * (_0x3cfeab.y - _0x2fa73e[_0x1b2a39].y) / (_0x2fa73e[_0x3b5f39].y - _0x2fa73e[_0x1b2a39].y) + _0x2fa73e[_0x1b2a39].x) {
                        _0x27f3d0 = !_0x27f3d0;
                    }
                }
                return _0x27f3d0;
            }
            ['getOffsetPosition'](_0xfccfb7, _0x153fcc, _0x1714ad, _0x26ec6c) {
                const _0x268d95 = _0x26ec6c * Math.cos(_0x1714ad * (Math.PI / 180));
                const _0x4c324a = _0x26ec6c * Math.sin(_0x1714ad * (Math.PI / 180));
                return {
                    x: _0xfccfb7.x + _0x268d95 * _0x153fcc,
                    y: _0xfccfb7.y + _0x4c324a * _0x153fcc
                };
            }
        }
        _0x14ffe3.cbHelper = new _0x21a5ea();
    }, {}],
    103: [function (_0x2b2918, _0xf77b5e, _0x5cc64e) {
        'use strict';

        class _0x5791fa {
            ['getBoxBounds'](_0x36f497) {
                switch (_0x36f497) {
                    case 1:
                        return [[{
                            x: 0.18,
                            y: 0.155
                        }, {
                            x: 0.18,
                            y: 0.583
                        }, {
                            x: 0.307,
                            y: 0.583
                        }, {
                            x: 0.307,
                            y: 0.154
                        }], [{
                            x: 0.321,
                            y: 0.154
                        }, {
                            x: 0.321,
                            y: 0.477
                        }, {
                            x: 0.382,
                            y: 0.477
                        }, {
                            x: 0.382,
                            y: 0.154
                        }], [{
                            x: 0.396,
                            y: 0.154
                        }, {
                            x: 0.396,
                            y: 0.379
                        }, {
                            x: 0.429,
                            y: 0.379
                        }, {
                            x: 0.429,
                            y: 0.155
                        }], [{
                            x: 0.443,
                            y: 0.155
                        }, {
                            x: 0.443,
                            y: 0.378
                        }, {
                            x: 0.477,
                            y: 0.378
                        }, {
                            x: 0.477,
                            y: 0.154
                        }], [{
                            x: 0.491,
                            y: 0.154
                        }, {
                            x: 0.491,
                            y: 0.379
                        }, {
                            x: 0.525,
                            y: 0.379
                        }, {
                            x: 0.525,
                            y: 0.155
                        }], [{
                            x: 0.538,
                            y: 0.155
                        }, {
                            x: 0.538,
                            y: 0.308
                        }, {
                            x: 0.585,
                            y: 0.308
                        }, {
                            x: 0.585,
                            y: 0.155
                        }], [{
                            x: 0.597,
                            y: 0.155
                        }, {
                            x: 0.597,
                            y: 0.308
                        }, {
                            x: 0.645,
                            y: 0.308
                        }, {
                            x: 0.645,
                            y: 0.155
                        }], [{
                            x: 0.66,
                            y: 0.155
                        }, {
                            x: 0.66,
                            y: 0.255
                        }, {
                            x: 0.73,
                            y: 0.255
                        }, {
                            x: 0.73,
                            y: 0.154
                        }], [{
                            x: 0.692,
                            y: 0.311
                        }, {
                            x: 0.692,
                            y: 0.373
                        }, {
                            x: 0.584,
                            y: 0.376
                        }, {
                            x: 0.584,
                            y: 0.452
                        }, {
                            x: 0.838,
                            y: 0.452
                        }, {
                            x: 0.838,
                            y: 0.31
                        }], [{
                            x: 0.343,
                            y: 0.544
                        }, {
                            x: 0.343,
                            y: 0.639
                        }, {
                            x: 0.398,
                            y: 0.639
                        }, {
                            x: 0.398,
                            y: 0.544
                        }], [{
                            x: 0.302,
                            y: 0.7
                        }, {
                            x: 0.302,
                            y: 0.846
                        }, {
                            x: 0.434,
                            y: 0.846
                        }, {
                            x: 0.434,
                            y: 0.7
                        }], [{
                            x: 0.451,
                            y: 0.435
                        }, {
                            x: 0.451,
                            y: 0.847
                        }, {
                            x: 0.569,
                            y: 0.847
                        }, {
                            x: 0.569,
                            y: 0.436
                        }], [{
                            x: 0.587,
                            y: 0.477
                        }, {
                            x: 0.587,
                            y: 0.846
                        }, {
                            x: 0.705,
                            y: 0.846
                        }, {
                            x: 0.705,
                            y: 0.477
                        }], [{
                            x: 0.721,
                            y: 0.477
                        }, {
                            x: 0.721,
                            y: 0.846
                        }, {
                            x: 0.838,
                            y: 0.846
                        }, {
                            x: 0.838,
                            y: 0.475
                        }]];
                    case 2:
                        return [[{
                            x: 0.162,
                            y: 0.152
                        }, {
                            x: 0.163,
                            y: 0.645
                        }, {
                            x: 0.249,
                            y: 0.643
                        }, {
                            x: 0.252,
                            y: 0.275
                        }, {
                            x: 0.375,
                            y: 0.275
                        }, {
                            x: 0.375,
                            y: 0.35
                        }, {
                            x: 0.416,
                            y: 0.35
                        }, {
                            x: 0.416,
                            y: 0.157
                        }], [{
                            x: 0.313,
                            y: 0.36
                        }, {
                            x: 0.313,
                            y: 0.844
                        }, {
                            x: 0.442,
                            y: 0.844
                        }, {
                            x: 0.442,
                            y: 0.419
                        }, {
                            x: 0.349,
                            y: 0.415
                        }, {
                            x: 0.348,
                            y: 0.36
                        }], [{
                            x: 0.458,
                            y: 0.238
                        }, {
                            x: 0.458,
                            y: 0.844
                        }, {
                            x: 0.515,
                            y: 0.844
                        }, {
                            x: 0.515,
                            y: 0.238
                        }], [{
                            x: 0.555,
                            y: 0.156
                        }, {
                            x: 0.555,
                            y: 0.454
                        }, {
                            x: 0.541,
                            y: 0.458
                        }, {
                            x: 0.538,
                            y: 0.551
                        }, {
                            x: 0.685,
                            y: 0.551
                        }, {
                            x: 0.688,
                            y: 0.46
                        }, {
                            x: 0.725,
                            y: 0.456
                        }, {
                            x: 0.728,
                            y: 0.309
                        }, {
                            x: 0.757,
                            y: 0.303
                        }, {
                            x: 0.759,
                            y: 0.157
                        }], [{
                            x: 0.552,
                            y: 0.635
                        }, {
                            x: 0.552,
                            y: 0.786
                        }, {
                            x: 0.695,
                            y: 0.787
                        }, {
                            x: 0.695,
                            y: 0.633
                        }], [{
                            x: 0.776,
                            y: 0.36
                        }, {
                            x: 0.776,
                            y: 0.455
                        }, {
                            x: 0.839,
                            y: 0.455
                        }, {
                            x: 0.839,
                            y: 0.358
                        }], [{
                            x: 0.739,
                            y: 0.517
                        }, {
                            x: 0.739,
                            y: 0.679
                        }, {
                            x: 0.801,
                            y: 0.681
                        }, {
                            x: 0.801,
                            y: 0.514
                        }], [{
                            x: 0.739,
                            y: 0.749
                        }, {
                            x: 0.739,
                            y: 0.846
                        }, {
                            x: 0.839,
                            y: 0.846
                        }, {
                            x: 0.838,
                            y: 0.747
                        }]];
                    case 3:
                        return [[{
                            x: 0.299,
                            y: 0.153
                        }, {
                            x: 0.299,
                            y: 0.245
                        }, {
                            x: 0.372,
                            y: 0.249
                        }, {
                            x: 0.375,
                            y: 0.343
                        }, {
                            x: 0.465,
                            y: 0.344
                        }, {
                            x: 0.465,
                            y: 0.247
                        }, {
                            x: 0.448,
                            y: 0.242
                        }, {
                            x: 0.446,
                            y: 0.154
                        }], [{
                            x: 0.163,
                            y: 0.298
                        }, {
                            x: 0.163,
                            y: 0.715
                        }, {
                            x: 0.328,
                            y: 0.715
                        }, {
                            x: 0.331,
                            y: 0.578
                        }, {
                            x: 0.499,
                            y: 0.578
                        }, {
                            x: 0.502,
                            y: 0.771
                        }, {
                            x: 0.567,
                            y: 0.771
                        }, {
                            x: 0.568,
                            y: 0.564
                        }, {
                            x: 0.649,
                            y: 0.564
                        }, {
                            x: 0.649,
                            y: 0.473
                        }, {
                            x: 0.574,
                            y: 0.468
                        }, {
                            x: 0.572,
                            y: 0.247
                        }, {
                            x: 0.501,
                            y: 0.247
                        }, {
                            x: 0.501,
                            y: 0.403
                        }, {
                            x: 0.329,
                            y: 0.403
                        }, {
                            x: 0.328,
                            y: 0.299
                        }], [{
                            x: 0.365,
                            y: 0.674
                        }, {
                            x: 0.365,
                            y: 0.846
                        }, {
                            x: 0.436,
                            y: 0.846
                        }, {
                            x: 0.436,
                            y: 0.674
                        }], [{
                            x: 0.615,
                            y: 0.154
                        }, {
                            x: 0.615,
                            y: 0.383
                        }, {
                            x: 0.839,
                            y: 0.383
                        }, {
                            x: 0.839,
                            y: 0.155
                        }], [{
                            x: 0.698,
                            y: 0.429
                        }, {
                            x: 0.698,
                            y: 0.561
                        }, {
                            x: 0.839,
                            y: 0.561
                        }, {
                            x: 0.839,
                            y: 0.43
                        }], [{
                            x: 0.613,
                            y: 0.649
                        }, {
                            x: 0.613,
                            y: 0.845
                        }, {
                            x: 0.839,
                            y: 0.845
                        }, {
                            x: 0.839,
                            y: 0.649
                        }]];
                    case 4:
                        return [[{
                            x: 0.162,
                            y: 0.154
                        }, {
                            x: 0.162,
                            y: 0.593
                        }, {
                            x: 0.305,
                            y: 0.595
                        }, {
                            x: 0.307,
                            y: 0.654
                        }, {
                            x: 0.419,
                            y: 0.658
                        }, {
                            x: 0.421,
                            y: 0.78
                        }, {
                            x: 0.54,
                            y: 0.78
                        }, {
                            x: 0.542,
                            y: 0.658
                        }, {
                            x: 0.69,
                            y: 0.653
                        }, {
                            x: 0.69,
                            y: 0.559
                        }, {
                            x: 0.542,
                            y: 0.552
                        }, {
                            x: 0.54,
                            y: 0.489
                        }, {
                            x: 0.324,
                            y: 0.484
                        }, {
                            x: 0.322,
                            y: 0.154
                        }], [{
                            x: 0.276,
                            y: 0.728
                        }, {
                            x: 0.276,
                            y: 0.846
                        }, {
                            x: 0.381,
                            y: 0.846
                        }, {
                            x: 0.381,
                            y: 0.73
                        }], [{
                            x: 0.352,
                            y: 0.22
                        }, {
                            x: 0.352,
                            y: 0.298
                        }, {
                            x: 0.368,
                            y: 0.302
                        }, {
                            x: 0.369,
                            y: 0.434
                        }, {
                            x: 0.421,
                            y: 0.434
                        }, {
                            x: 0.422,
                            y: 0.41
                        }, {
                            x: 0.576,
                            y: 0.41
                        }, {
                            x: 0.576,
                            y: 0.478
                        }, {
                            x: 0.735,
                            y: 0.48
                        }, {
                            x: 0.736,
                            y: 0.715
                        }, {
                            x: 0.578,
                            y: 0.718
                        }, {
                            x: 0.578,
                            y: 0.847
                        }, {
                            x: 0.837,
                            y: 0.847
                        }, {
                            x: 0.837,
                            y: 0.397
                        }, {
                            x: 0.78,
                            y: 0.397
                        }, {
                            x: 0.779,
                            y: 0.427
                        }, {
                            x: 0.763,
                            y: 0.427
                        }, {
                            x: 0.761,
                            y: 0.374
                        }, {
                            x: 0.687,
                            y: 0.369
                        }, {
                            x: 0.687,
                            y: 0.23
                        }, {
                            x: 0.643,
                            y: 0.23
                        }, {
                            x: 0.643,
                            y: 0.371
                        }, {
                            x: 0.624,
                            y: 0.371
                        }, {
                            x: 0.623,
                            y: 0.315
                        }, {
                            x: 0.422,
                            y: 0.313
                        }, {
                            x: 0.421,
                            y: 0.22
                        }], [{
                            x: 0.46,
                            y: 0.154
                        }, {
                            x: 0.46,
                            y: 0.263
                        }, {
                            x: 0.596,
                            y: 0.261
                        }, {
                            x: 0.597,
                            y: 0.154
                        }], [{
                            x: 0.723,
                            y: 0.154
                        }, {
                            x: 0.723,
                            y: 0.262
                        }, {
                            x: 0.778,
                            y: 0.262
                        }, {
                            x: 0.778,
                            y: 0.155
                        }]];
                    case 5:
                        return [[{
                            x: 0.254,
                            y: 0.156
                        }, {
                            x: 0.253,
                            y: 0.436
                        }, {
                            x: 0.195,
                            y: 0.439
                        }, {
                            x: 0.195,
                            y: 0.514
                        }, {
                            x: 0.253,
                            y: 0.515
                        }, {
                            x: 0.255,
                            y: 0.701
                        }, {
                            x: 0.337,
                            y: 0.704
                        }, {
                            x: 0.339,
                            y: 0.788
                        }, {
                            x: 0.372,
                            y: 0.787
                        }, {
                            x: 0.372,
                            y: 0.636
                        }, {
                            x: 0.401,
                            y: 0.636
                        }, {
                            x: 0.401,
                            y: 0.673
                        }, {
                            x: 0.471,
                            y: 0.672
                        }, {
                            x: 0.471,
                            y: 0.637
                        }, {
                            x: 0.606,
                            y: 0.637
                        }, {
                            x: 0.606,
                            y: 0.682
                        }, {
                            x: 0.652,
                            y: 0.682
                        }, {
                            x: 0.652,
                            y: 0.483
                        }, {
                            x: 0.497,
                            y: 0.483
                        }, {
                            x: 0.496,
                            y: 0.53
                        }, {
                            x: 0.328,
                            y: 0.53
                        }, {
                            x: 0.328,
                            y: 0.261
                        }, {
                            x: 0.409,
                            y: 0.261
                        }, {
                            x: 0.41,
                            y: 0.359
                        }, {
                            x: 0.441,
                            y: 0.359
                        }, {
                            x: 0.441,
                            y: 0.244
                        }, {
                            x: 0.531,
                            y: 0.244
                        }, {
                            x: 0.532,
                            y: 0.305
                        }, {
                            x: 0.577,
                            y: 0.305
                        }, {
                            x: 0.577,
                            y: 0.255
                        }, {
                            x: 0.605,
                            y: 0.253
                        }, {
                            x: 0.605,
                            y: 0.154
                        }], [{
                            x: 0.163,
                            y: 0.58
                        }, {
                            x: 0.163,
                            y: 0.635
                        }, {
                            x: 0.219,
                            y: 0.635
                        }, {
                            x: 0.219,
                            y: 0.581
                        }], [{
                            x: 0.232,
                            y: 0.761
                        }, {
                            x: 0.232,
                            y: 0.844
                        }, {
                            x: 0.305,
                            y: 0.846
                        }, {
                            x: 0.305,
                            y: 0.761
                        }], [{
                            x: 0.383,
                            y: 0.413
                        }, {
                            x: 0.383,
                            y: 0.493
                        }, {
                            x: 0.461,
                            y: 0.493
                        }, {
                            x: 0.461,
                            y: 0.414
                        }], [{
                            x: 0.417,
                            y: 0.744
                        }, {
                            x: 0.417,
                            y: 0.846
                        }, {
                            x: 0.654,
                            y: 0.846
                        }, {
                            x: 0.654,
                            y: 0.744
                        }, {
                            x: 0.552,
                            y: 0.743
                        }, {
                            x: 0.55,
                            y: 0.704
                        }, {
                            x: 0.497,
                            y: 0.704
                        }, {
                            x: 0.495,
                            y: 0.742
                        }, {
                            x: 0.417,
                            y: 0.745
                        }], [{
                            x: 0.482,
                            y: 0.301
                        }, {
                            x: 0.482,
                            y: 0.431
                        }, {
                            x: 0.561,
                            y: 0.431
                        }, {
                            x: 0.561,
                            y: 0.368
                        }, {
                            x: 0.511,
                            y: 0.364
                        }, {
                            x: 0.509,
                            y: 0.302
                        }], [{
                            x: 0.658,
                            y: 0.199
                        }, {
                            x: 0.657,
                            y: 0.366
                        }, {
                            x: 0.578,
                            y: 0.368
                        }, {
                            x: 0.578,
                            y: 0.432
                        }, {
                            x: 0.75,
                            y: 0.434
                        }, {
                            x: 0.75,
                            y: 0.495
                        }, {
                            x: 0.694,
                            y: 0.496
                        }, {
                            x: 0.694,
                            y: 0.845
                        }, {
                            x: 0.742,
                            y: 0.845
                        }, {
                            x: 0.743,
                            y: 0.646
                        }, {
                            x: 0.763,
                            y: 0.644
                        }, {
                            x: 0.764,
                            y: 0.555
                        }, {
                            x: 0.805,
                            y: 0.554
                        }, {
                            x: 0.805,
                            y: 0.435
                        }, {
                            x: 0.788,
                            y: 0.432
                        }, {
                            x: 0.787,
                            y: 0.368
                        }, {
                            x: 0.707,
                            y: 0.367
                        }, {
                            x: 0.706,
                            y: 0.199
                        }], [{
                            x: 0.754,
                            y: 0.155
                        }, {
                            x: 0.753,
                            y: 0.22
                        }, {
                            x: 0.775,
                            y: 0.22
                        }, {
                            x: 0.775,
                            y: 0.155
                        }], [{
                            x: 0.818,
                            y: 0.259
                        }, {
                            x: 0.818,
                            y: 0.327
                        }, {
                            x: 0.838,
                            y: 0.325
                        }, {
                            x: 0.838,
                            y: 0.258
                        }], [{
                            x: 0.808,
                            y: 0.616
                        }, {
                            x: 0.809,
                            y: 0.707
                        }, {
                            x: 0.838,
                            y: 0.706
                        }, {
                            x: 0.838,
                            y: 0.616
                        }]];
                    case 6:
                        return [[{
                            x: 0.232,
                            y: 0.155
                        }, {
                            x: 0.232,
                            y: 0.218
                        }, {
                            x: 0.254,
                            y: 0.218
                        }, {
                            x: 0.254,
                            y: 0.154
                        }], [{
                            x: 0.225,
                            y: 0.281
                        }, {
                            x: 0.224,
                            y: 0.328
                        }, {
                            x: 0.162,
                            y: 0.331
                        }, {
                            x: 0.162,
                            y: 0.515
                        }, {
                            x: 0.214,
                            y: 0.515
                        }, {
                            x: 0.214,
                            y: 0.425
                        }, {
                            x: 0.247,
                            y: 0.422
                        }, {
                            x: 0.247,
                            y: 0.281
                        }], [{
                            x: 0.163,
                            y: 0.572
                        }, {
                            x: 0.163,
                            y: 0.847
                        }, {
                            x: 0.273,
                            y: 0.847
                        }, {
                            x: 0.273,
                            y: 0.758
                        }, {
                            x: 0.205,
                            y: 0.757
                        }, {
                            x: 0.205,
                            y: 0.622
                        }, {
                            x: 0.216,
                            y: 0.621
                        }, {
                            x: 0.216,
                            y: 0.572
                        }], [{
                            x: 0.24,
                            y: 0.648
                        }, {
                            x: 0.24,
                            y: 0.715
                        }, {
                            x: 0.261,
                            y: 0.715
                        }, {
                            x: 0.261,
                            y: 0.649
                        }], [{
                            x: 0.301,
                            y: 0.154
                        }, {
                            x: 0.3,
                            y: 0.249
                        }, {
                            x: 0.284,
                            y: 0.251
                        }, {
                            x: 0.284,
                            y: 0.327
                        }, {
                            x: 0.3,
                            y: 0.331
                        }, {
                            x: 0.3,
                            y: 0.47
                        }, {
                            x: 0.251,
                            y: 0.472
                        }, {
                            x: 0.251,
                            y: 0.563
                        }, {
                            x: 0.299,
                            y: 0.563
                        }, {
                            x: 0.3,
                            y: 0.537
                        }, {
                            x: 0.324,
                            y: 0.539
                        }, {
                            x: 0.324,
                            y: 0.603
                        }, {
                            x: 0.298,
                            y: 0.605
                        }, {
                            x: 0.298,
                            y: 0.697
                        }, {
                            x: 0.324,
                            y: 0.7
                        }, {
                            x: 0.325,
                            y: 0.806
                        }, {
                            x: 0.499,
                            y: 0.806
                        }, {
                            x: 0.499,
                            y: 0.758
                        }, {
                            x: 0.377,
                            y: 0.755
                        }, {
                            x: 0.377,
                            y: 0.598
                        }, {
                            x: 0.425,
                            y: 0.596
                        }, {
                            x: 0.425,
                            y: 0.543
                        }, {
                            x: 0.377,
                            y: 0.541
                        }, {
                            x: 0.375,
                            y: 0.458
                        }, {
                            x: 0.354,
                            y: 0.455
                        }, {
                            x: 0.354,
                            y: 0.253
                        }, {
                            x: 0.392,
                            y: 0.25
                        }, {
                            x: 0.392,
                            y: 0.155
                        }], [{
                            x: 0.375,
                            y: 0.339
                        }, {
                            x: 0.375,
                            y: 0.407
                        }, {
                            x: 0.396,
                            y: 0.407
                        }, {
                            x: 0.396,
                            y: 0.339
                        }], [{
                            x: 0.453,
                            y: 0.154
                        }, {
                            x: 0.453,
                            y: 0.225
                        }, {
                            x: 0.474,
                            y: 0.223
                        }, {
                            x: 0.474,
                            y: 0.155
                        }], [{
                            x: 0.454,
                            y: 0.282
                        }, {
                            x: 0.452,
                            y: 0.341
                        }, {
                            x: 0.425,
                            y: 0.344
                        }, {
                            x: 0.425,
                            y: 0.423
                        }, {
                            x: 0.599,
                            y: 0.426
                        }, {
                            x: 0.599,
                            y: 0.511
                        }, {
                            x: 0.525,
                            y: 0.514
                        }, {
                            x: 0.524,
                            y: 0.65
                        }, {
                            x: 0.422,
                            y: 0.653
                        }, {
                            x: 0.422,
                            y: 0.71
                        }, {
                            x: 0.536,
                            y: 0.713
                        }, {
                            x: 0.537,
                            y: 0.846
                        }, {
                            x: 0.838,
                            y: 0.846
                        }, {
                            x: 0.838,
                            y: 0.747
                        }, {
                            x: 0.755,
                            y: 0.746
                        }, {
                            x: 0.754,
                            y: 0.696
                        }, {
                            x: 0.647,
                            y: 0.695
                        }, {
                            x: 0.646,
                            y: 0.745
                        }, {
                            x: 0.591,
                            y: 0.745
                        }, {
                            x: 0.59,
                            y: 0.653
                        }, {
                            x: 0.57,
                            y: 0.65
                        }, {
                            x: 0.57,
                            y: 0.598
                        }, {
                            x: 0.651,
                            y: 0.596
                        }, {
                            x: 0.653,
                            y: 0.342
                        }, {
                            x: 0.666,
                            y: 0.34
                        }, {
                            x: 0.665,
                            y: 0.216
                        }, {
                            x: 0.629,
                            y: 0.216
                        }, {
                            x: 0.628,
                            y: 0.342
                        }, {
                            x: 0.478,
                            y: 0.342
                        }, {
                            x: 0.477,
                            y: 0.282
                        }], [{
                            x: 0.464,
                            y: 0.477
                        }, {
                            x: 0.464,
                            y: 0.616
                        }, {
                            x: 0.485,
                            y: 0.615
                        }, {
                            x: 0.485,
                            y: 0.477
                        }], [{
                            x: 0.51,
                            y: 0.164
                        }, {
                            x: 0.51,
                            y: 0.286
                        }, {
                            x: 0.589,
                            y: 0.286
                        }, {
                            x: 0.589,
                            y: 0.165
                        }], [{
                            x: 0.698,
                            y: 0.155
                        }, {
                            x: 0.697,
                            y: 0.577
                        }, {
                            x: 0.681,
                            y: 0.58
                        }, {
                            x: 0.681,
                            y: 0.629
                        }, {
                            x: 0.747,
                            y: 0.627
                        }, {
                            x: 0.749,
                            y: 0.559
                        }, {
                            x: 0.796,
                            y: 0.556
                        }, {
                            x: 0.797,
                            y: 0.458
                        }, {
                            x: 0.749,
                            y: 0.456
                        }, {
                            x: 0.749,
                            y: 0.154
                        }], [{
                            x: 0.779,
                            y: 0.319
                        }, {
                            x: 0.779,
                            y: 0.402
                        }, {
                            x: 0.838,
                            y: 0.401
                        }, {
                            x: 0.838,
                            y: 0.319
                        }], [{
                            x: 0.784,
                            y: 0.615
                        }, {
                            x: 0.784,
                            y: 0.696
                        }, {
                            x: 0.837,
                            y: 0.695
                        }, {
                            x: 0.837,
                            y: 0.615
                        }]];
                    default:
                        return [];
                }
            }
        }
        _0x5cc64e.cbMapBoundaries = new _0x5791fa();
    }, {}],
    104: [function (_0x11a3bc, _0xaa3ff0, _0x3b91c0) {
        'use strict';

        var _0x6a60c3 = undefined && undefined.__awaiter || function (_0x45ea0c, _0x5cd090, _0x185081, _0x11feaa) {
            function _0x5ac23c(_0x5f27d2) {
                return _0x5f27d2 instanceof Promise ? _0x5f27d2 : new Promise(function (_0x4726eb) {
                    _0x4726eb(_0x5f27d2);
                });
            }
            return new (Promise || (_0x185081 = Promise))(function (_0x1c6289, _0xf7940e) {
                function _0xe9ccff(_0x205048) {
                    try {
                        _0x50d9d7(_0x11feaa.next(_0x205048));
                    } catch (_0x58bc95) {
                        _0xf7940e(_0x58bc95);
                    }
                }
                function _0x29439(_0x3f7ad6) {
                    try {
                        _0x50d9d7(_0x11feaa.throw(_0x3f7ad6));
                    } catch (_0x1d5be0) {
                        _0xf7940e(_0x1d5be0);
                    }
                }
                function _0x50d9d7(_0xcd47a8) {
                    if (_0xcd47a8.done) {
                        _0x1c6289(_0xcd47a8.value);
                    } else {
                        _0x5ac23c(_0xcd47a8.value).then(_0xe9ccff, _0x29439);
                    }
                }
                _0x50d9d7((_0x11feaa = _0x11feaa.apply(_0x45ea0c, _0x5cd090 || [])).next());
            });
        };
        const {
            cbGenericPorts: _0x4e3a8d
        } = _0x11a3bc('../circuitbreaker/CbGenericPorts');
        const {
            cbHelper: _0x535b6b
        } = _0x11a3bc('../circuitbreaker/CbHelper');
        class _0x1cb40f {
            constructor() {
                this.pointHeadSize = 0.0125;
                this.history = [];
                this.alpha = 255;
                this.isAlive = true;
                this.isVisible = true;
                this.lastDirection = 'NONE';
                this.position = {
                    x: 0,
                    y: 0
                };
            }
            ['resetData']() {
                this.alpha = 255;
                this.isAlive = true;
                this.isVisible = true;
            }
            ['initialize']() {
                this.resetData();
                this.history = [];
                this.setPointStartPosition();
                this.history.push(_0x4e3a8d.startPortPos);
                this.setStartDirection(_0x4e3a8d.startPortHeading);
            }
            ['drawPoint'](_0x28047e) {
                if (!this.isAlive) {
                    mp.game1.graphics.drawSprite('MPCircuitHack', 'spark', this.position.x, this.position.y, 0.0125, 0.0125, 0, 255, 255, 255, this.alpha);
                }
                switch (_0x28047e) {
                    case 'STARTING':
                    case 'INPROGRESS':
                    case 'SUCCESS':
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'head', this.position.x, this.position.y, this.pointHeadSize, this.pointHeadSize, 0, _0x535b6b.GREEN_COLOUR.r, _0x535b6b.GREEN_COLOUR.g, _0x535b6b.GREEN_COLOUR.b, this.alpha);
                        return;
                    default:
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'head', this.position.x, this.position.y, this.pointHeadSize, this.pointHeadSize, 0, _0x535b6b.RED_COLOUR.r, _0x535b6b.RED_COLOUR.g, _0x535b6b.RED_COLOUR.b, this.alpha);
                        return;
                }
            }
            ['getCenterPoint'](_0x25a9da, _0x2c04f9, _0x334b5d, _0x37e270, _0x4f8714) {
                if (_0x2c04f9) {
                    return _0x334b5d < 0 ? {
                        x: _0x25a9da.x + _0x4f8714 / 2,
                        y: _0x25a9da.y
                    } : {
                        x: _0x25a9da.x - _0x4f8714 / 2,
                        y: _0x25a9da.y
                    };
                }
                return _0x37e270 < 0 ? {
                    x: _0x25a9da.x,
                    y: _0x25a9da.y + _0x4f8714 / 2
                } : {
                    x: _0x25a9da.x,
                    y: _0x25a9da.y - _0x4f8714 / 2
                };
            }
            ['drawTailSpriteWidth'](_0x233d69, _0x42079c, _0x580b95) {
                switch (_0x233d69) {
                    case 'STARTING':
                    case 'INPROGRESS':
                    case 'SUCCESS':
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'tail', _0x42079c.x, _0x42079c.y, _0x580b95 + 0.0018, 0.003, 0, _0x535b6b.GREEN_COLOUR.r, _0x535b6b.GREEN_COLOUR.g, _0x535b6b.GREEN_COLOUR.b, this.alpha);
                        return;
                    default:
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'tail', _0x42079c.x, _0x42079c.y, _0x580b95 + 0.0018, 0.003, 0, _0x535b6b.RED_COLOUR.r, _0x535b6b.RED_COLOUR.g, _0x535b6b.RED_COLOUR.b, this.alpha);
                        return;
                }
            }
            ['drawTailSpriteHeight'](_0x2bfaee, _0x38acae, _0xdf292a) {
                switch (_0x2bfaee) {
                    case 'STARTING':
                    case 'INPROGRESS':
                    case 'SUCCESS':
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'tail', _0x38acae.x, _0x38acae.y, 0.0018, _0xdf292a + 0.003, 0, _0x535b6b.GREEN_COLOUR.r, _0x535b6b.GREEN_COLOUR.g, _0x535b6b.GREEN_COLOUR.b, this.alpha);
                        return;
                    default:
                        mp.game1.graphics.drawSprite('MPCircuitHack', 'tail', _0x38acae.x, _0x38acae.y, 0.0018, _0xdf292a + 0.003, 0, _0x535b6b.RED_COLOUR.r, _0x535b6b.RED_COLOUR.g, _0x535b6b.RED_COLOUR.b, this.alpha);
                        return;
                }
            }
            ['checkForCollision'](_0x47447d, _0x3debb8, _0x2c0c07) {
                const _0x44f483 = _0x2c0c07 / 2;
                if (_0x47447d) {
                    const _0x29b80b = parseFloat(this.position.x.toFixed(3));
                    if (_0x29b80b <= parseFloat((_0x3debb8.x - _0x44f483).toFixed(3))) {
                        return false;
                    }
                    if (_0x29b80b >= parseFloat((_0x3debb8.x + _0x44f483).toFixed(3))) {
                        return false;
                    }
                    if (Math.abs(this.position.y - _0x3debb8.y) > 0.003) {
                        return false;
                    }
                    return true;
                }
                const _0x715889 = parseFloat(this.position.y.toFixed(3));
                if (_0x715889 <= parseFloat((_0x3debb8.y - _0x44f483).toFixed(3))) {
                    return false;
                }
                if (_0x715889 >= parseFloat((_0x3debb8.y + _0x44f483).toFixed(3))) {
                    return false;
                }
                if (Math.abs(this.position.x - _0x3debb8.x) > 0.003) {
                    return false;
                }
                return true;
            }
            ['drawTailHistoryAndCheckCollisions'](_0x32ad49) {
                if (this.history.length === 0) {
                    return false;
                }
                let _0x5ee6e2;
                let _0x45ab2d;
                let _0xa4e725;
                let _0x49c9a3;
                let _0x1037ea;
                let _0xf8ae4b;
                let _0x392547;
                const _0x49fb89 = [...this.history];
                for (let _0x424721 = 0; _0x424721 < _0x49fb89.length; _0x424721++) {
                    _0x1037ea = _0x49fb89[_0x424721];
                    if (_0x424721 + 1 === _0x49fb89.length) {
                        _0xf8ae4b = {
                            x: this.position.x,
                            y: this.position.y
                        };
                    } else {
                        _0xf8ae4b = _0x49fb89[_0x424721 + 1];
                    }
                    _0x5ee6e2 = _0x535b6b.getDistance(_0xf8ae4b, _0x1037ea);
                    _0x45ab2d = _0xf8ae4b.x - _0x1037ea.x;
                    _0xa4e725 = _0xf8ae4b.y - _0x1037ea.y;
                    _0x392547 = Math.abs(_0x45ab2d) > Math.abs(_0xa4e725);
                    _0x49c9a3 = this.getCenterPoint(_0xf8ae4b, _0x392547, _0x45ab2d, _0xa4e725, _0x5ee6e2);
                    if (this.checkForCollision(_0x392547, _0x49c9a3, _0x5ee6e2)) {
                        return true;
                    }
                    this.drawTail(_0x32ad49, _0x49c9a3, _0x392547, _0x5ee6e2);
                }
                return false;
            }
            ['drawTail'](_0x521e62, _0x124315, _0x3a0bba, _0x27ee10) {
                if (_0x3a0bba) {
                    this.drawTailSpriteWidth(_0x521e62, _0x124315, _0x27ee10);
                } else {
                    this.drawTailSpriteHeight(_0x521e62, _0x124315, _0x27ee10);
                }
            }
            ['movePoint'](_0x3fa8ae) {
                this.setPosition(this.lastDirection, _0x3fa8ae);
            }
            ['addToTailHistory'](_0x1b93e7) {
                if (!this.history.some(_0x188dd3 => _0x188dd3.x === _0x1b93e7.x && _0x188dd3.y === _0x1b93e7.y)) {
                    this.history.push(_0x1b93e7);
                }
            }
            ['setStartDirection'](_0x3cfcb6) {
                switch (_0x3cfcb6) {
                    case 0:
                        this.lastDirection = 'RIGHT';
                        break;
                    case 90:
                        this.lastDirection = 'DOWN';
                        break;
                    case 180:
                        this.lastDirection = 'LEFT';
                        break;
                    default:
                        this.lastDirection = 'UP';
                        break;
                }
            }
            ['getDirectionFromInput']() {
                if (mp.game1.controls.isDisabledControlPressed(0, 34)) {
                    return 'LEFT';
                }
                if (mp.game1.controls.isDisabledControlPressed(0, 35)) {
                    return 'RIGHT';
                }
                if (mp.game1.controls.isDisabledControlPressed(0, 32)) {
                    return 'UP';
                }
                if (mp.game1.controls.isDisabledControlPressed(0, 33)) {
                    return 'DOWN';
                }
                return this.lastDirection;
            }
            ['isOppositeOfCurrentDirection'](_0x18dc3f) {
                return this.lastDirection === 'LEFT' && _0x18dc3f === 'RIGHT' || this.lastDirection === 'RIGHT' && _0x18dc3f === 'LEFT' || this.lastDirection === 'UP' && _0x18dc3f === 'DOWN' || this.lastDirection === 'DOWN' && _0x18dc3f === 'UP';
            }
            ['getPointInputFromPlayer']() {
                const _0x14c489 = this.getDirectionFromInput();
                const _0x368b11 = {
                    x: this.position.x,
                    y: this.position.y
                };
                if (_0x14c489 === this.lastDirection || this.isOppositeOfCurrentDirection(_0x14c489)) {
                    return;
                }
                this.lastDirection = _0x14c489;
                this.addToTailHistory(_0x368b11);
                mp.game1.audio.playSoundFrontend(-1, 'Click', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
            }
            ['startPointDeathAnimation']() {
                return _0x6a60c3(this, undefined, undefined, function* () {
                    if (!this.isAlive) {
                        return;
                    }
                    this.isAlive = false;
                    while (this.alpha > 0) {
                        this.updateAlpha();
                        yield mp.game1.waitAsync(0);
                    }
                });
            }
            ['updateAlpha']() {
                if (this.isAlive) {
                    return;
                }
                let _0xd285d5 = this.alpha - 5;
                if (_0xd285d5 < 0) {
                    _0xd285d5 = 0;
                }
                if (_0xd285d5 > 255) {
                    _0xd285d5 = 255;
                }
                this.alpha = _0xd285d5;
                if (this.alpha <= 0) {
                    this.isVisible = false;
                }
            }
            ['setPointStartPosition']() {
                const _0x2dec90 = _0x4e3a8d.startPortHeading === 0 || _0x4e3a8d.startPortHeading === 180 ? 0.0144 : 0.021;
                this.position = _0x535b6b.getOffsetPosition(_0x4e3a8d.startPortPos, _0x2dec90, _0x4e3a8d.startPortHeading, 1);
            }
            ['setPosition'](_0x5ce0af, _0x3445e8) {
                switch (_0x5ce0af) {
                    case 'UP':
                        this.position.y -= _0x3445e8;
                        break;
                    case 'DOWN':
                        this.position.y += _0x3445e8;
                        break;
                    case 'LEFT':
                        this.position.x -= _0x3445e8;
                        break;
                    case 'RIGHT':
                        this.position.x += _0x3445e8;
                        break;
                    default:
                        break;
                }
                if (this.position.x < 0) {
                    this.position.x = 0;
                }
                if (this.position.x > 1) {
                    this.position.x = 1;
                }
                if (this.position.y < 0) {
                    this.position.y = 0;
                }
                if (this.position.y > 1) {
                    this.position.y = 1;
                }
            }
        }
        _0x3b91c0.cbPoint = new _0x1cb40f();
    }, {
        '../circuitbreaker/CbGenericPorts': 101,
        '../circuitbreaker/CbHelper': 102
    }],
    105: [function (_0x38d8b5, _0x4e9431, _0x2b88a0) {
        'use strict';

        const {
            cbHelper: _0xdc0df4
        } = _0x38d8b5('../circuitbreaker/CbHelper');
        class _0x1895a1 {
            constructor(_0x4546e1, _0x3a106e, _0x59a51b) {
                this.position = _0x4546e1;
                this.heading = _0x3a106e;
                this.portType = _0x59a51b;
                this.alpha = 255;
                this.lastBlink = 0;
                this.lightZeroPosition = this.getLightPosition(this.position, this.heading, 0);
                this.lightOnePosition = this.getLightPosition(this.position, this.heading, 1);
            }
            ['drawLights']() {
                if (this.portType === 'START') {
                    this.drawLightSprite(this.lightZeroPosition, _0xdc0df4.GREEN_COLOUR.r, _0xdc0df4.GREEN_COLOUR.g, _0xdc0df4.GREEN_COLOUR.b);
                    this.drawLightSprite(this.lightOnePosition, _0xdc0df4.GREEN_COLOUR.r, _0xdc0df4.GREEN_COLOUR.g, _0xdc0df4.GREEN_COLOUR.b);
                    return;
                }
                if (this.lastBlink + 500 >= Date.now()) {
                    this.alpha = this.alpha === 255 ? 0 : 255;
                    this.lastBlink = Date.now();
                }
                this.drawLightSprite(this.lightZeroPosition, _0xdc0df4.RED_COLOUR.r, _0xdc0df4.RED_COLOUR.g, _0xdc0df4.RED_COLOUR.b, this.alpha);
                this.drawLightSprite(this.lightOnePosition, _0xdc0df4.RED_COLOUR.r, _0xdc0df4.RED_COLOUR.g, _0xdc0df4.RED_COLOUR.b, this.alpha);
            }
            ['drawLightSprite'](_0x256113, _0x466761, _0x396143, _0x5345ba, _0x441e01 = 255) {
                mp.game1.graphics.drawSprite('MPCircuitHack', 'light', _0x256113.x, _0x256113.y, 0.00775, 0.00775, 0, _0x466761, _0x396143, _0x5345ba, _0x441e01);
            }
            ['getAngleOffset'](_0x5c9445, _0x1e97ea) {
                if (_0x5c9445 === 90 || _0x5c9445 === 270) {
                    return _0x1e97ea > 0 ? 128.75 : 232;
                }
                return _0x1e97ea > 0 ? 73 : 287.25;
            }
            ['getLightPosition'](_0x521cfd, _0x4a873d, _0x4e7166) {
                const _0xd7eb20 = _0x4a873d === 90 || _0x4a873d === 270 ? 0.0164 : 0.0228;
                const _0x176523 = this.getAngleOffset(_0x4a873d, _0x4e7166);
                const _0x529ed9 = _0x4a873d === 90 || _0x4a873d === 270 ? -1 : 1;
                return _0xdc0df4.getOffsetPosition(_0x521cfd, _0xd7eb20, (_0x176523 + _0x4a873d) % 360, _0x529ed9);
            }
        }
        _0x2b88a0.CbPortLights = _0x1895a1;
    }, {
        '../circuitbreaker/CbHelper': 102
    }],
    106: [function (_0x103dea, _0x1dfc80, _0x97153b) {
        'use strict';

        const {
            clientCircuitBreakerManager: _0x71af5
        } = _0x103dea('../circuitbreaker/CircuitBreaker.manager');
        mp.events.add({
            CircuitBreakerStart: _0x71af5.start.bind(_0x71af5),
            render: _0x71af5.handleRender.bind(_0x71af5)
        });
    }, {
        '../circuitbreaker/CircuitBreaker.manager': 108
    }],
    107: [function (_0x554aed, _0x182d3f, _0x2850c8) {
        'use strict';

        var _0x437bba = undefined && undefined.__awaiter || function (_0x258482, _0x5b71db, _0xb3df43, _0x4bb6e3) {
            function _0xd0431c(_0x280998) {
                return _0x280998 instanceof Promise ? _0x280998 : new Promise(function (_0x49ceb3) {
                    _0x49ceb3(_0x280998);
                });
            }
            return new (Promise || (_0xb3df43 = Promise))(function (_0x235b7e, _0x1c2d64) {
                function _0x36f623(_0x5ad030) {
                    try {
                        _0x12b228(_0x4bb6e3.next(_0x5ad030));
                    } catch (_0x5e99d4) {
                        _0x1c2d64(_0x5e99d4);
                    }
                }
                function _0x3e93f5(_0x52c2ee) {
                    try {
                        _0x12b228(_0x4bb6e3.throw(_0x52c2ee));
                    } catch (_0x69f97c) {
                        _0x1c2d64(_0x69f97c);
                    }
                }
                function _0x12b228(_0xfdae7b) {
                    if (_0xfdae7b.done) {
                        _0x235b7e(_0xfdae7b.value);
                    } else {
                        _0xd0431c(_0xfdae7b.value).then(_0x36f623, _0x3e93f5);
                    }
                }
                _0x12b228((_0x4bb6e3 = _0x4bb6e3.apply(_0x258482, _0x5b71db || [])).next());
            });
        };
        const {
            cbGenericPorts: _0xfc5b2c
        } = _0x554aed('../circuitbreaker/CbGenericPorts');
        const {
            cbHelper: _0x5d1e6b
        } = _0x554aed('../circuitbreaker/CbHelper');
        const {
            cbMapBoundaries: _0x1407ec
        } = _0x554aed('../circuitbreaker/CbMapBoundaries');
        const {
            cbPoint: _0x29e2f6
        } = _0x554aed('../circuitbreaker/CbPoint');
        const {
            Scaleform: _0x3ee5a6
        } = _0x554aed('../circuitbreaker/Scaleform');
        class _0x49e766 {
            constructor(_0x3a860a, _0x309eed, _0x4d0cfe, _0x8a0004, _0x22b4dd) {
                this.callbackEvent = _0x8a0004;
                this.lives = _0x3a860a;
                this.difficulty = _0x309eed;
                this.levels = _0x4d0cfe;
                this.onDestroy = _0x22b4dd;
                this.status = 'NONE';
                this.soundId = -1;
                this.blockedAreas = [];
                this.gameBounds = [{
                    x: 0.159,
                    y: 0.153
                }, {
                    x: 0.159,
                    y: 0.848
                }, {
                    x: 0.841,
                    y: 0.848
                }, {
                    x: 0.841,
                    y: 0.153
                }];
                this.textureDictionaries = ['MPCircuitHack', 'MPCircuitHack2', 'MPCircuitHack3'];
                this.currentPointSpeed = 0.00085;
                this.scaleform = null;
                this.startTime = 0;
                this.endTime = 0;
                this.availableLevels = [1, 2, 3, 4, 5, 6];
                this.levelsToComplete = [];
                this.level = 1;
                this.livesLeft = 1;
                this.disconnected = false;
                this.disconnectChance = 0;
                this.disconnectCheckRateMs = 0;
                this.nextTimeCheckDisconnect = 0;
                this.reconnectIn = 0;
                this.status = 'STARTING';
                if (this.levels > 6) {
                    this.levels = 6;
                }
                if (this.levels < 1) {
                    this.levels = 1;
                }
                this.fillLevels(this.levels);
                this.level = this.getLevel();
                this.livesLeft = this.lives;
                if (this.livesLeft > 10) {
                    this.livesLeft = 10;
                }
                if (this.livesLeft < 1) {
                    this.livesLeft = 1;
                }
                if (this.difficulty > 4) {
                    this.difficulty = 4;
                }
                if (this.difficulty < 0) {
                    this.difficulty = 0;
                }
                this.currentPointSpeed = this.getPointSpeedFromDifficulty(this.difficulty);
                this.disconnectChance = this.getDisconnectChanceFromDifficulty(this.difficulty);
                this.disconnectCheckRateMs = this.getDisconnectCheckRateMsFromDifficulty(this.difficulty);
                this.init();
            }
            ['getLevel']() {
                var _0x44ed0f;
                if (this.levelsToComplete.length === 0) {
                    return 1;
                }
                return (_0x44ed0f = this.levelsToComplete.shift()) !== null && _0x44ed0f !== undefined ? _0x44ed0f : 1;
            }
            ['fillLevels'](_0x5a9020) {
                if (_0x5a9020 < 1) {
                    return;
                }
                this.levelsToComplete = new Array(_0x5a9020).fill(1).map(() => this.getRandomLevel());
            }
            ['getRandom'](_0x522e58, _0x24d0ab) {
                return Math.floor(Math.random() * (_0x24d0ab - _0x522e58 + 1) + _0x522e58);
            }
            ['getRandomLevel']() {
                if (this.availableLevels.length === 0) {
                    return 1;
                }
                const _0x4f740e = this.getRandom(0, this.availableLevels.length - 1);
                return this.availableLevels[_0x4f740e];
            }
            ['gameDraw']() {
                if (this.scaleform === null) {
                    return false;
                }
                this.drawMapSprite(this.level);
                const _0x14221a = this.drawPointAndPortSprites();
                this.scaleform.render2D();
                return _0x14221a;
            }
            ['checkDisconnect']() {
                if (Date.now() >= this.nextTimeCheckDisconnect) {
                    this.disconnected = this.getRandom(0, 100) <= this.disconnectChance;
                    return this.disconnected;
                }
                return false;
            }
            ['inProcessLogic'](_0x5806fb) {
                if (this.exitButtonPressed()) {
                    this.endGame(true);
                    return;
                }
                if (Date.now() < this.startTime) {
                    return;
                }
                if (this.disconnectChance > 0 && this.checkDisconnect()) {
                    this.status = 'DISCONNECTED';
                    return;
                }
                if (_0xfc5b2c.isPointInGameWinningPosition(_0x29e2f6.position)) {
                    this.status = 'SUCCESS';
                    return;
                }
                if (this.isPointOutOfBounds(this.blockedAreas, this.gameBounds)) {
                    this.status = 'FAILURE_OUTOFBOUNDS';
                    return;
                }
                if (_0xfc5b2c.isCollidingWithPort(_0x29e2f6.position)) {
                    this.status = 'FAILURE_COLLISIONWITHPORT';
                    return;
                }
                if (_0x5806fb) {
                    this.status = 'FAILURE_TRAILCOLLISION';
                    return;
                }
                if (_0x29e2f6.isAlive) {
                    _0x29e2f6.getPointInputFromPlayer();
                    _0x29e2f6.movePoint(this.currentPointSpeed);
                }
            }
            ['successLogic']() {
                const _0xc78da6 = Date.now();
                if (this.endTime === 0) {
                    this.showSuccessScreenAndPlaySound();
                    this.endTime = _0xc78da6 + 3000;
                    return;
                }
                if (_0xc78da6 < this.endTime) {
                    return;
                }
                if (this.checkLevelsToPlay()) {
                    this.continueGame();
                    return;
                }
                this.status = 'QUIT';
                mp.events.callRemote(this.callbackEvent, true);
            }
            ['restartSameLevel']() {
                this.status = 'DEATH';
                this.showDeathScreenAndPlaySound();
                _0x29e2f6.initialize();
                this.startTime = Date.now() + 3000;
                this.nextTimeCheckDisconnect = this.startTime + this.disconnectCheckRateMs;
            }
            ['failureLogic']() {
                this.livesLeft--;
                if (this.livesLeft > 0) {
                    this.restartSameLevel();
                    return;
                }
                if (_0x29e2f6.isAlive) {
                    _0x29e2f6.startPointDeathAnimation();
                }
                if (!_0x29e2f6.isVisible) {
                    const _0x252fa6 = Date.now();
                    if (this.endTime === 0) {
                        this.showFailureScreenAndPlaySound();
                        this.endTime = Date.now() + 3000;
                        return;
                    }
                    if (_0x252fa6 >= this.endTime) {
                        this.status = 'QUIT';
                        mp.events.callRemote(this.callbackEvent, false);
                    }
                }
            }
            ['deathLogic']() {
                const _0x1b74b3 = Date.now();
                if (_0x1b74b3 >= this.startTime) {
                    this.playStartSound();
                    this.resetDisplayScaleform();
                    this.status = 'INPROGRESS';
                    return;
                }
            }
            ['disconnectLogic']() {
                if (this.reconnectIn === 0) {
                    mp.game.audio.playSoundFrontend(-1, 'Power_Down', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
                    this.showDisplayScaleform('CONNECTION LOST', 'Reconnecting...', _0x5d1e6b.RED_COLOUR.r, _0x5d1e6b.RED_COLOUR.g, _0x5d1e6b.RED_COLOUR.b, false);
                    this.reconnectIn = Date.now() + this.getRandom(500, 5000);
                    return;
                }
                const _0x1b3285 = Date.now();
                if (_0x1b3285 >= this.reconnectIn) {
                    this.playStartSound();
                    this.resetDisplayScaleform();
                    this.status = 'INPROGRESS';
                    this.reconnectIn = 0;
                    this.nextTimeCheckDisconnect = _0x1b3285 + this.disconnectCheckRateMs;
                    return;
                }
            }
            ['tick']() {
                if (this.status === 'NONE') {
                    return;
                }
                this.disableControls();
                const _0x3cca5e = this.gameDraw();
                switch (this.status) {
                    case 'INPROGRESS':
                        this.inProcessLogic(_0x3cca5e);
                        break;
                    case 'SUCCESS':
                        this.successLogic();
                        break;
                    case 'FAILURE_OUTOFBOUNDS':
                    case 'FAILURE_COLLISIONWITHPORT':
                    case 'FAILURE_TRAILCOLLISION':
                        this.failureLogic();
                        break;
                    case 'DEATH':
                        this.deathLogic();
                        break;
                    case 'DISCONNECTED':
                        this.disconnectLogic();
                        break;
                    case 'QUIT':
                        this.endGame(false);
                        break;
                    default:
                        break;
                }
            }
            ['endGame'](_0x274008) {
                if (_0x274008) {
                    mp.events.callRemote(this.callbackEvent, false);
                }
                this.status = 'NONE';
                this.destroy();
            }
            ['checkLevelsToPlay']() {
                return this.levelsToComplete.length !== 0;
            }
            ['continueGame']() {
                this.resetDisplayScaleform();
                this.level = this.getLevel();
                this.blockedAreas = _0x1407ec.getBoxBounds(this.level);
                _0xfc5b2c.initialize(this.level);
                _0x29e2f6.initialize();
                this.startTime = Date.now() + 3000;
                this.nextTimeCheckDisconnect = this.startTime + this.disconnectCheckRateMs;
                this.endTime = 0;
                this.playStartSound();
                this.status = 'INPROGRESS';
            }
            ['init']() {
                return _0x437bba(this, undefined, undefined, function* () {
                    if (this.status !== 'STARTING') {
                        return;
                    }
                    yield this.loadResources();
                    this.soundId = mp.game.invokeFloat('0x430386FE9BF80B45');
                    mp.game.audio.playSoundFrontend(this.soundId, 'Background', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
                    this.blockedAreas = _0x1407ec.getBoxBounds(this.level);
                    _0xfc5b2c.initialize(this.level);
                    _0x29e2f6.initialize();
                    this.startTime = Date.now() + 3000;
                    this.nextTimeCheckDisconnect = this.startTime + this.disconnectCheckRateMs;
                    this.playStartSound();
                    this.status = 'INPROGRESS';
                });
            }
            ['loadResources']() {
                return _0x437bba(this, undefined, undefined, function* () {
                    yield this.loadTextures();
                    yield this.loadScaleform();
                });
            }
            ['loadTextures']() {
                return _0x437bba(this, undefined, undefined, function* () {
                    for (const _0x3426c7 of this.textureDictionaries) {
                        mp.game.graphics.requestStreamedTextureDict(_0x3426c7, false);
                        while (!mp.game.graphics.hasStreamedTextureDictLoaded(_0x3426c7)) {
                            yield new Promise(_0x5811c4 => setTimeout(_0x5811c4, 5));
                        }
                    }
                });
            }
            ['resetTextureDictionaries']() {
                for (const _0x265d18 of this.textureDictionaries) {
                    mp.game.graphics.setStreamedTextureDictAsNoLongerNeeded(_0x265d18);
                }
            }
            ['resetSounds']() {
                if (this.soundId === -1) {
                    return;
                }
                mp.game.audio.stopSound(this.soundId);
                mp.game.audio.releaseSoundId(this.soundId);
                this.soundId = -1;
            }
            ['playStartSound']() {
                mp.game.audio.playSoundFrontend(-1, 'Start', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
            }
            ['resetDisplayScaleform']() {
                if (this.scaleform === null) {
                    return;
                }
                this.scaleform.callFunction('SET_DISPLAY', -1);
            }
            ['showDisplayScaleform'](_0xfd38f4, _0x27a561, _0x1d8f12, _0x595edd, _0x20b7f9, _0x3c65b7) {
                if (this.scaleform === null) {
                    return;
                }
                this.scaleform.callFunction('SET_DISPLAY', 0, _0xfd38f4, _0x27a561, _0x1d8f12, _0x595edd, _0x20b7f9, _0x3c65b7);
            }
            ['showSuccessScreenAndPlaySound']() {
                mp.game.audio.playSoundFrontend(-1, 'Success', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
                this.showDisplayScaleform('CIRCUIT COMPLETE', 'Decryption Execution x86 Tunneling', _0x5d1e6b.GREEN_COLOUR.r, _0x5d1e6b.GREEN_COLOUR.g, _0x5d1e6b.GREEN_COLOUR.b, true);
            }
            ['showFailureScreenAndPlaySound']() {
                mp.game.audio.playSoundFrontend(-1, 'Crash', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
                this.showDisplayScaleform('CIRCUIT FAILED', 'Security Tunnel Detected', _0x5d1e6b.RED_COLOUR.r, _0x5d1e6b.RED_COLOUR.g, _0x5d1e6b.RED_COLOUR.b, false);
            }
            ['showDeathScreenAndPlaySound']() {
                mp.game.audio.playSoundFrontend(-1, 'Crash', 'DLC_HEIST_HACKING_SNAKE_SOUNDS', true);
                this.showDisplayScaleform('CIRCUIT FAILED', this.livesLeft + ' Attempts Left', _0x5d1e6b.RED_COLOUR.r, _0x5d1e6b.RED_COLOUR.g, _0x5d1e6b.RED_COLOUR.b, false);
            }
            ['resetScaleform']() {
                if (this.scaleform === null) {
                    return;
                }
                this.scaleform.dispose();
                this.scaleform = null;
            }
            ['loadScaleform']() {
                return _0x437bba(this, undefined, undefined, function* () {
                    this.resetScaleform();
                    yield new Promise(_0x1b0ee7 => setTimeout(_0x1b0ee7, 50));
                    this.scaleform = new _0x3ee5a6('HACKING_MESSAGE');
                    let _0xe90f5d = 0;
                    while (this.scaleform === null || !this.scaleform.isLoaded()) {
                        yield new Promise(_0x480b5a => setTimeout(_0x480b5a, 50));
                        _0xe90f5d++;
                        if (_0xe90f5d > 50) {
                            break;
                        }
                    }
                });
            }
            ['drawMapSprite'](_0xf742bd) {
                mp.game.graphics.drawSprite(_0xf742bd > 3 ? 'MPCircuitHack3' : 'MPCircuitHack2', 'cblevel' + this.level, 0.5, 0.5, 1, 1, 0, 255, 255, 255, 255);
            }
            ['drawPointAndPortSprites']() {
                _0x29e2f6.drawPoint(this.status);
                const _0x2ee65d = _0x29e2f6.drawTailHistoryAndCheckCollisions(this.status);
                _0xfc5b2c.drawPorts();
                return _0x2ee65d;
            }
            ['getPointSpeedFromDifficulty'](_0x32044b) {
                if (_0x32044b === 0) {
                    return 0.00085;
                }
                if (_0x32044b === 1) {
                    return 0.001;
                }
                if (_0x32044b === 2) {
                    return 0.002;
                }
                if (_0x32044b === 3) {
                    return 0.003;
                }
                if (_0x32044b === 4) {
                    return 0.01;
                }
                return 0.00085;
            }
            ['getDisconnectChanceFromDifficulty'](_0x5b641d) {
                if (_0x5b641d === 0) {
                    return 0;
                }
                if (_0x5b641d === 1) {
                    return 0.15;
                }
                if (_0x5b641d === 2) {
                    return 0.3;
                }
                if (_0x5b641d === 3) {
                    return 0.45;
                }
                if (_0x5b641d === 4) {
                    return 0.6;
                }
                return 0;
            }
            ['getDisconnectCheckRateMsFromDifficulty'](_0xdf2191) {
                if (_0xdf2191 === 0) {
                    return 15000;
                }
                if (_0xdf2191 === 1) {
                    return 10000;
                }
                if (_0xdf2191 === 2) {
                    return 5000;
                }
                if (_0xdf2191 === 3) {
                    return 4000;
                }
                if (_0xdf2191 === 4) {
                    return 2000;
                }
                return 10000;
            }
            ['exitButtonPressed']() {
                return mp.game.controls.isDisabledControlJustPressed(0, 44);
            }
            ['disableControls']() {
                mp.game.controls.disableControlAction(0, 32, true);
                mp.game.controls.disableControlAction(0, 33, true);
                mp.game.controls.disableControlAction(0, 34, true);
                mp.game.controls.disableControlAction(0, 35, true);
                mp.game.controls.disableControlAction(0, 44, true);
            }
            ['isPointOutOfBounds'](_0x308568, _0x3d6937) {
                const _0x40a76a = this.getPointMaxPoints(_0x29e2f6.position, _0x29e2f6.pointHeadSize + -0.375 * _0x29e2f6.pointHeadSize);
                for (const _0xfd0178 of _0x40a76a) {
                    for (const _0x314c34 of _0x308568) {
                        if (_0x5d1e6b.isInPoly(_0x314c34, _0xfd0178)) {
                            return true;
                        }
                    }
                    if (!_0x5d1e6b.isInPoly(_0x3d6937, _0xfd0178)) {
                        return true;
                    }
                }
                return false;
            }
            ['getPointMaxPoints'](_0x23608e, _0x5b5fe3) {
                const _0x3bc9b0 = [{
                    x: _0x23608e.x - _0x5b5fe3 / 2,
                    y: _0x23608e.y
                }, {
                    x: _0x23608e.x + _0x5b5fe3 / 2,
                    y: _0x23608e.y
                }, {
                    x: _0x23608e.x,
                    y: _0x23608e.y - _0x5b5fe3 / 2
                }, {
                    x: _0x23608e.x,
                    y: _0x23608e.y + _0x5b5fe3 / 2
                }];
                return [..._0x3bc9b0, _0x23608e];
            }
            ['destroy']() {
                this.resetScaleform();
                this.resetSounds();
                this.resetTextureDictionaries();
                this.onDestroy();
            }
        }
        _0x2850c8.CircuitBreaker = _0x49e766;
    }, {
        '../circuitbreaker/CbGenericPorts': 101,
        '../circuitbreaker/CbHelper': 102,
        '../circuitbreaker/CbMapBoundaries': 103,
        '../circuitbreaker/CbPoint': 104,
        '../circuitbreaker/Scaleform': 109
    }],
    108: [function (_0x164a43, _0x258fa1, _0x1e69d1) {
        'use strict';

        const {
            CircuitBreaker: _0x36a468
        } = _0x164a43('../circuitbreaker/CircuitBreaker');
        class _0x4ee405 {
            constructor() {
                this.game = null;
            }
            ['start'](_0x2eed33, _0x576ce3, _0x3ae740, _0x363086) {
                if (this.game !== null) {
                    return;
                }
                this.game = new _0x36a468(_0x2eed33, _0x576ce3, _0x3ae740, _0x363086, () => {
                    this.game = null;
                });
            }
            ['handleRender']() {
                if (this.game === null) {
                    return;
                }
                this.game.tick();
            }
        }
        _0x1e69d1.clientCircuitBreakerManager = new _0x4ee405();
    }, {
        '../circuitbreaker/CircuitBreaker': 107
    }],
    109: [function (_0x4a0156, _0x20faff, _0x5c3d7a) {
        'use strict';

        class _0x1a5b09 {
            constructor(_0x3e642b) {
                this.handle = mp.game1.graphics.requestScaleformMovie(_0x3e642b);
                this.queueCallFunction = new Map();
            }
            ['isLoaded']() {
                return !!mp.game1.graphics.hasScaleformMovieLoaded(this.handle);
            }
            ['isValid']() {
                return this.handle !== 0;
            }
            ['callFunction'](_0x175fc9, ..._0x507bef) {
                if (this.isLoaded() && this.isValid()) {
                    const _0x344f95 = mp.game.graphics;
                    _0x344f95.pushScaleformMovieFunction(this.handle, _0x175fc9);
                    _0x507bef.forEach(_0x4e321e => {
                        switch (typeof _0x4e321e) {
                            case 'string':
                                {
                                    _0x344f95.pushScaleformMovieFunctionParameterString(_0x4e321e);
                                    break;
                                }
                            case 'boolean':
                                {
                                    _0x344f95.pushScaleformMovieFunctionParameterBool(_0x4e321e);
                                    break;
                                }
                            case 'number':
                                {
                                    if (Number(_0x4e321e) === _0x4e321e && _0x4e321e % 1 !== 0) {
                                        _0x344f95.pushScaleformMovieFunctionParameterFloat(_0x4e321e);
                                    } else {
                                        _0x344f95.pushScaleformMovieFunctionParameterInt(_0x4e321e);
                                    }
                                }
                        }
                    });
                    _0x344f95.popScaleformMovieFunctionVoid();
                } else {
                    this.queueCallFunction.set(_0x175fc9, _0x507bef);
                }
            }
            ['onUpdate']() {
                if (this.isLoaded() && this.isValid()) {
                    this.queueCallFunction.forEach((_0x3243a7, _0x4cfc23) => {
                        this.callFunction(_0x4cfc23, ..._0x3243a7);
                        this.queueCallFunction.delete(_0x4cfc23);
                    });
                }
            }
            ['render2D'](_0x1fada4, _0x57055e, _0x57059e, _0x5db257) {
                this.onUpdate();
                if (this.isLoaded() && this.isValid()) {
                    const _0x3b241a = mp.game.graphics;
                    if (typeof _0x1fada4 !== 'undefined' && typeof _0x57055e !== 'undefined' && typeof _0x57059e !== 'undefined' && typeof _0x5db257 !== 'undefined') {
                        _0x3b241a.drawScaleformMovie(this.handle, _0x1fada4, _0x57055e, _0x57059e, _0x5db257, 255, 255, 255, 255, 0);
                    } else {
                        _0x3b241a.drawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, false);
                    }
                }
            }
            ['render3D'](_0x3454ed, _0x39f6e9, _0x5d555c) {
                this.onUpdate();
                if (this.isLoaded() && this.isValid()) {
                    mp.game.graphics.drawScaleformMovie3dNonAdditive(this.handle, _0x3454ed.x, _0x3454ed.y, _0x3454ed.z, _0x39f6e9.x, _0x39f6e9.y, _0x39f6e9.z, 2, 2, 1, _0x5d555c.x, _0x5d555c.y, _0x5d555c.z, 2);
                }
            }
            ['render3DAdditive'](_0x24d9d0, _0x5cdb26, _0x4395c2) {
                this.onUpdate();
                if (this.isLoaded() && this.isValid()) {
                    mp.game.graphics.drawScaleformMovie3d(this.handle, _0x24d9d0.x, _0x24d9d0.y, _0x24d9d0.z, _0x5cdb26.x, _0x5cdb26.y, _0x5cdb26.z, 2, 2, 1, _0x4395c2.x, _0x4395c2.y, _0x4395c2.z, 2);
                }
            }
            ['dispose']() {
                mp.game1.graphics.setScaleformMovieAsNoLongerNeeded(this.handle);
                this.handle = 0;
            }
        }
        _0x5c3d7a.Scaleform = _0x1a5b09;
    }, {}],
    110: [function (_0xcc70bf, _0x3b3b09, _0x171818) {
        'use strict';

        Object.defineProperty(_0x171818, '__esModule', {
            value: true
        });
        var _0x45d54c = _0xcc70bf('./components');
        var _0x21c4fb = _0x45d54c && _0x45d54c.__esModule ? _0x45d54c : {
            default: _0x45d54c
        };
        var _0x59a428 = _0xcc70bf('../browser/browser');
        var _0x82f340 = _0x59a428 && _0x59a428.__esModule ? _0x59a428 : {
            default: _0x59a428
        };
        class _0x4f5779 {
            constructor(_0x4bed60, ..._0x1bb757) {
                this.name = _0x4bed60;
                this.forwardableEvents = new Set();
                this.isReady = false;
                for (let _0x4c958f of _0x1bb757) {
                    this.forwardableEvents.add(_0x4c958f);
                    mp.events.add(_0x4c958f, (..._0x181a45) => {
                        this.event(_0x4c958f, _0x181a45);
                    });
                }
                _0x21c4fb.default.components.set(_0x4bed60, this);
            }
            ['event'](_0x325116, _0x410c17) {
                if (this.forwardableEvents.has(_0x325116)) {
                    var _0x91569 = '';
                    var _0x2b5593 = 0;
                    for (let _0x440e92 of _0x410c17) {
                        if (_0x440e92.length == 0) {
                            _0x91569 += "' '";
                        } else {
                            _0x91569 += "'" + _0x440e92 + "'";
                        }
                        if (++_0x2b5593 != _0x410c17.length) {
                            _0x91569 += ',';
                        }
                    }
                    this.execute(_0x325116 + '(' + _0x91569 + ')');
                } else {
                    this.onEvent(_0x325116, _0x410c17);
                }
            }
            ['onEvent'](_0x2a4e3c, ..._0x5eb17e) { }
            ['onReady']() {
                this.isReady = true;
            }
            ['execute'](_0x30ba64, ..._0x4081f8) {
                var _0x446d46 = '';
                var _0x5c5229 = 0;
                for (let _0x282ef9 of _0x4081f8) {
                    _0x446d46 += "\"" + _0x282ef9 + "\"";
                    if (++_0x5c5229 != _0x4081f8.length) {
                        _0x446d46 += ',';
                    }
                }
                _0x82f340.default.execute(this.name, _0x30ba64 + '(' + _0x446d46 + ')');
            }
            ['execute'](_0x46e1c0) {
                _0x82f340.default.execute(this.name, _0x46e1c0);
            }
        }
        _0x171818.default = _0x4f5779;
    }, {
        '../browser/browser': 100,
        './components': 111
    }],
    111: [function (_0x362186, _0x50cb25, _0x18d08f) {
        'use strict';

        Object.defineProperty(_0x18d08f, '__esModule', {
            value: true
        });
        class _0x4f958e {
            constructor() {
                this.components = new Map();
                mp.events.add('componentServerEvent', (_0x308d17, _0x226ff6, ..._0x5bc798) => {
                    var _0xa0d16a = '';
                    for (let _0x1c0db7 of _0x5bc798) {
                        _0xa0d16a += _0x1c0db7 + ',';
                    }
                    mp.gui.chat.push('componentServerEvent ' + _0x308d17 + ' ' + _0x226ff6 + ' ' + _0x5bc798.length + ' ' + _0xa0d16a);
                    if (!this.components.has(_0x308d17)) {
                        return;
                    }
                    let _0x51dcac = this.components.get(_0x308d17);
                    _0x51dcac.event(_0x226ff6, _0x5bc798);
                });
                mp.events.add('server', (_0x5f2400, ..._0x8aa936) => {
                    mp.events.callRemote(_0x5f2400, ..._0x8aa936);
                });
                mp.events.add('componentTriggerServerEvent', (_0xae6def, ..._0x25b4bd) => {
                    var _0x5c5b88 = [];
                    for (let _0x291d3d of _0x25b4bd) {
                        _0x5c5b88.push(_0x291d3d);
                    }
                    mp.events.callRemote(_0xae6def, ..._0x5c5b88);
                });
                mp.events.add('componentReady', _0x8ebaa6 => {
                    if (!this.components.has(_0x8ebaa6)) {
                        return;
                    }
                    this.components.get(_0x8ebaa6).onReady();
                });
                mp.events.add('componentEvent', (_0x2dc783, _0x58f2fa, ..._0x27a9ea) => {
                    if (!this.components.has(_0x2dc783)) {
                        return;
                    }
                    this.components.get(_0x2dc783).onEvent(_0x58f2fa, JSON.parse(_0x27a9ea));
                });
            }
        }
        _0x18d08f.default = new _0x4f958e();
    }, {
        '../player/player': 262
    }],
    112: [function (_0x5c02d7, _0x409201, _0x49f4d8) {
        'use strict';

        Object.defineProperty(_0x49f4d8, '__esModule', {
            value: true
        });
        class _0x322f04 {
            constructor() {
                mp.events.add('setStateOfClosestDoorOfType', (_0x14fb95, _0x133c2c, _0x11855e, _0x43e8b8, _0x1f598d, _0x28da70, _0x296e0e) => {
                    mp.game.object.setStateOfClosestDoorOfType(_0x14fb95, _0x133c2c, _0x11855e, _0x43e8b8, _0x1f598d, _0x28da70, _0x296e0e);
                });
            }
        }
        _0x49f4d8.default = new _0x322f04();
    }, {}],
    113: [function (_0x54ce2b, _0x28e644, _0x180990) {
        'use strict';

        Object.defineProperty(_0x180990, '__esModule', {
            value: true
        });
        var _0x2c8e37 = _0x54ce2b('../../windows/window');
        var _0x2d226c = _0x2c8e37 && _0x2c8e37.__esModule ? _0x2c8e37 : {
            default: _0x2c8e37
        };
        var _0x492c6c = _0x54ce2b('../hud/n-menu');
        var _0x58a850 = _0x492c6c && _0x492c6c.__esModule ? _0x492c6c : {
            default: _0x492c6c
        };
        class _0x3bde07 extends _0x2d226c.default {
            constructor() {
                super('AnimationWheelFavoritesList');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onEvent'](_0x5d9ae4, ..._0x2207ed) {
                if (_0x5d9ae4 === 'getAnimationShortcuts') {
                    this.execute("setDataItemsAnimation('" + JSON.stringify(_0x58a850.default.getItems()) + "')");
                }
            }
        }
        _0x180990.default = new _0x3bde07();
    }, {
        '../../windows/window': 277,
        '../hud/n-menu': 175
    }],
    114: [function (_0x560849, _0x38f34d, _0x2204e6) {
        'use strict';

        Object.defineProperty(_0x2204e6, '__esModule', {
            value: true
        });
        var _0x1aeafc = _0x560849('../../windows/window');
        var _0x5e05f1 = _0x1aeafc && _0x1aeafc.__esModule ? _0x1aeafc : {
            default: _0x1aeafc
        };
        class _0x35bfb1 extends _0x5e05f1.default {
            constructor() {
                super('AnimMenu');
                this.setCurserVisible(true);
            }
        }
        _0x2204e6.default = new _0x35bfb1();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    115: [function (_0x3ca4a7, _0x12e855, _0xe8326b) {
        'use strict';

        _0x3ca4a7('./animmenu-window');
    }, {
        './animmenu-window': 114
    }],
    116: [function (_0x2537e6, _0x589a88, _0x2513a7) {
        'use strict';

        Object.defineProperty(_0x2513a7, '__esModule', {
            value: true
        });
        var _0xf2d08b = _0x2537e6('../../windows/window');
        var _0xa7c76d = _0xf2d08b && _0xf2d08b.__esModule ? _0xf2d08b : {
            default: _0xf2d08b
        };
        var _0x46b12f = _0x2537e6('../../browser/browser');
        var _0x22eb0f = _0x46b12f && _0x46b12f.__esModule ? _0x46b12f : {
            default: _0x46b12f
        };
        class _0xaf2fab extends _0xa7c76d.default {
            constructor() {
                super('Bank');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('error');
                this.forwardableEvents.add('success');
                mp.events.add('RsBankInfo', _0x49b93e => {
                    _0x22eb0f.default.execute("events.RsBankInfo('" + _0x49b93e + "')");
                });
            }
        }
        _0x2513a7.default = new _0xaf2fab();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    117: [function (_0x4e3ceb, _0x222f95, _0xeca9da) {
        'use strict';

        _0x4e3ceb('./bank-window');
    }, {
        './bank-window': 116
    }],
    118: [function (_0x4ff7bd, _0x59dadb, _0x5fcae7) {
        'use strict';

        Object.defineProperty(_0x5fcae7, '__esModule', {
            value: true
        });
        var _0x3c3064 = _0x4ff7bd('../../windows/window');
        var _0x2409a1 = _0x3c3064 && _0x3c3064.__esModule ? _0x3c3064 : {
            default: _0x3c3064
        };
        class _0x473c3 extends _0x2409a1.default {
            constructor() {
                super('Bann');
            }
        }
        _0x5fcae7.default = new _0x473c3();
    }, {
        '../../windows/window': 277
    }],
    119: [function (_0xa70e1c, _0x5290ad, _0x23fbb8) {
        'use strict';

        _0xa70e1c('./bann-window');
    }, {
        './bann-window': 118
    }],
    120: [function (_0x5a4768, _0x58de2f, _0x1f8d62) {
        'use strict';

        Object.defineProperty(_0x1f8d62, '__esModule', {
            value: true
        });
        var _0x4f625b = _0x5a4768('../../windows/window');
        var _0x438a13 = _0x4f625b && _0x4f625b.__esModule ? _0x4f625b : {
            default: _0x4f625b
        };
        var _0x57e73a = _0x5a4768('../../utils/utils');
        var _0x1f5c92 = _0x57e73a && _0x57e73a.__esModule ? _0x57e73a : {
            default: _0x57e73a
        };
        var _0x5b26e8 = _0x5a4768('../../browser/browser');
        var _0x2075b1 = _0x5b26e8 && _0x5b26e8.__esModule ? _0x5b26e8 : {
            default: _0x5b26e8
        };
        class _0x3f81ee extends _0x438a13.default {
            constructor() {
                super('Barber');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                mp.events.add('appearance', _0x28ddf2 => {
                    _0x2075b1.default.execute("events.appearance('" + _0x28ddf2 + "')");
                });
            }
            ['onEvent'](_0x5e1f9a, ..._0x11a5a4) {
                if (mp.players.local == null) {
                    return;
                }
                switch (_0x5e1f9a) {
                    case 'setHairVariant':
                        mp.players.local.setComponentVariation(2, _0x11a5a4[0], 0, 0);
                        return;
                    case 'setHairColor':
                        mp.players.local.setHairColor(_0x11a5a4[0].color1, _0x11a5a4[0].color2);
                        return;
                    case 'setBeard':
                        mp.players.local.setHeadOverlay(1, _0x11a5a4[0].variation, _0x11a5a4[0].opacity, _0x11a5a4[0].color, 0);
                        return;
                    case 'setChestHair':
                        mp.players.local.setHeadOverlay(10, _0x11a5a4[0].variation, _0x11a5a4[0].opacity, _0x11a5a4[0].color, 0);
                        return;
                }
            }
            ['onReady']() {
                _0x1f5c92.default.pointCameraAtBody();
            }
            ['onClose']() {
                _0x1f5c92.default.disableCamera();
            }
        }
        _0x1f8d62.default = new _0x3f81ee();
    }, {
        '../../browser/browser': 100,
        '../../utils/utils': 270,
        '../../windows/window': 277
    }],
    121: [function (_0x21ada2, _0x55ad09, _0x43af10) {
        'use strict';

        Object.defineProperty(_0x43af10, '__esModule', {
            value: true
        });
        var _0x4b5da5 = _0x21ada2('../../windows/window');
        var _0x212adb = _0x4b5da5 && _0x4b5da5.__esModule ? _0x4b5da5 : {
            default: _0x4b5da5
        };
        class _0x25587e extends _0x212adb.default {
            constructor() {
                super('Base');
                this.setCurserVisible(true);
            }
        }
        _0x43af10.default = new _0x25587e();
    }, {
        '../../windows/window': 277
    }],
    122: [function (_0x18cd06, _0x3997d8, _0x478406) {
        'use strict';

        _0x18cd06('./base-window');
    }, {
        './base-window': 121
    }],
    123: [function (_0x1db421, _0x3a78dc, _0xc8c673) {
        'use strict';

        Object.defineProperty(_0xc8c673, '__esModule', {
            value: true
        });
        var _0xe22060 = _0x1db421('../../windows/window');
        var _0x38ea2d = _0xe22060 && _0xe22060.__esModule ? _0xe22060 : {
            default: _0xe22060
        };
        var _0x124dfe = _0x1db421('../../browser/browser');
        var _0x41f55e = _0x124dfe && _0x124dfe.__esModule ? _0x124dfe : {
            default: _0x124dfe
        };
        class _0x13d619 extends _0x38ea2d.default {
            constructor() {
                super('BasementServer');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
                mp.events.add('RsCryptoMiningLogs', _0x2c5546 => {
                    _0x41f55e.default.execute("events.RsCryptoMiningLogs('" + _0x2c5546 + "')");
                });
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0xc8c673.default = new _0x13d619();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    124: [function (_0x4c09f4, _0x220fdb, _0x239d0d) {
        'use strict';

        _0x4c09f4('./basementserver-window');
    }, {
        './basementserver-window': 123
    }],
    125: [function (_0x2b4905, _0x213e1d, _0x54f0a1) {
        'use strict';

        Object.defineProperty(_0x54f0a1, '__esModule', {
            value: true
        });
        var _0x5ff3a9 = _0x2b4905('../../windows/window');
        var _0xcfc2cc = _0x5ff3a9 && _0x5ff3a9.__esModule ? _0x5ff3a9 : {
            default: _0x5ff3a9
        };
        class _0x307d75 extends _0xcfc2cc.default {
            constructor() {
                super('BasementWorkstation');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x54f0a1.default = new _0x307d75();
    }, {
        '../../windows/window': 277
    }],
    126: [function (_0x28803c, _0xe66d15, _0x57e841) {
        'use strict';

        _0x28803c('./basementworkstation-window');
    }, {
        './basementworkstation-window': 125
    }],
    127: [function (_0x135bbc, _0x475e4c, _0x23a60d) {
        'use strict';

        Object.defineProperty(_0x23a60d, '__esModule', {
            value: true
        });
        var _0x3aedc3 = _0x135bbc('../../windows/window');
        var _0x39bcbf = _0x3aedc3 && _0x3aedc3.__esModule ? _0x3aedc3 : {
            default: _0x3aedc3
        };
        class _0x3e5e42 extends _0x39bcbf.default {
            constructor() {
                super('Camper');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x23a60d.default = new _0x3e5e42();
    }, {
        '../../windows/window': 277
    }],
    128: [function (_0x76c002, _0x45cad6, _0x4c71e9) {
        'use strict';

        _0x76c002('./camper-window');
    }, {
        './camper-window': 127
    }],
    129: [function (_0x111448, _0x556109, _0x15596b) {
        'use strict';

        Object.defineProperty(_0x15596b, '__esModule', {
            value: true
        });
        var _0x56ea64 = _0x111448('../../windows/window');
        var _0x9fc7ff = _0x56ea64 && _0x56ea64.__esModule ? _0x56ea64 : {
            default: _0x56ea64
        };
        class _0x4a2b97 extends _0x9fc7ff.default {
            constructor() {
                super('CannabisLabor');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x15596b.default = new _0x4a2b97();
    }, {
        '../../windows/window': 277
    }],
    130: [function (_0x107636, _0x2b8919, _0x52a482) {
        'use strict';

        _0x107636('./cannabislab-window');
    }, {
        './cannabislab-window': 129
    }],
    131: [function (_0x465e0d, _0x141d5b, _0x832dd0) {
        'use strict';

        Object.defineProperty(_0x832dd0, '__esModule', {
            value: true
        });
        var _0x57781b = _0x465e0d('../../windows/window');
        var _0x5ee683 = _0x57781b && _0x57781b.__esModule ? _0x57781b : {
            default: _0x57781b
        };
        class _0x5383ae extends _0x5ee683.default {
            constructor() {
                super('Carshop');
                this.forwardableEvents.add('responseVehicleList');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x832dd0.default = new _0x5383ae();
    }, {
        '../../windows/window': 277
    }],
    132: [function (_0x5a181a, _0xa4c636, _0x5185c1) {
        'use strict';

        _0x5a181a('./carshop-window');
    }, {
        './carshop-window': 131
    }],
    133: [function (_0x3799c3, _0x3cce69, _0x4906b6) {
        'use strict';

        Object.defineProperty(_0x4906b6, '__esModule', {
            value: true
        });
        var _0x4c5848 = _0x3799c3('../../windows/window');
        var _0x27cc0d = _0x4c5848 && _0x4c5848.__esModule ? _0x4c5848 : {
            default: _0x4c5848
        };
        var _0x4d2d0f = _0x3799c3('../../browser/browser');
        var _0x6c740b = _0x4d2d0f && _0x4d2d0f.__esModule ? _0x4d2d0f : {
            default: _0x4d2d0f
        };
        class _0x4c8b3c extends _0x27cc0d.default {
            constructor() {
                super('CaseOpening');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                mp.events.add('updateCaseElement', (_0x376646, _0x59b93e, _0x1b1d60) => {
                    _0x6c740b.default.execute('events.updateCaseElement(' + _0x376646 + ", '" + _0x59b93e + "', '" + _0x1b1d60 + "')");
                });
            }
        }
        _0x4906b6.default = new _0x4c8b3c();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    134: [function (_0x17c5f9, _0xce4dc7, _0x27a246) {
        'use strict';

        _0x17c5f9('./caseopening-window');
    }, {
        './caseopening-window': 133
    }],
    135: [function (_0x136d45, _0x2fafa1, _0x2a837a) {
        'use strict';

        Object.defineProperty(_0x2a837a, '__esModule', {
            value: true
        });
        var _0x472836 = _0x136d45('../../windows/window');
        var _0x2d2247 = _0x472836 && _0x472836.__esModule ? _0x472836 : {
            default: _0x472836
        };
        class _0x474a37 extends _0x2d2247.default {
            constructor() {
                super('SlotMachine');
                this.forwardableEvents.add('rollSlot');
                this.forwardableEvents.add('responseSlotInfo');
                this.forwardableEvents.add('responseRisiko');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x2a837a.default = new _0x474a37();
    }, {
        '../../windows/window': 277
    }],
    136: [function (_0x1fa611, _0x2f3281, _0xf98eb1) {
        'use strict';

        Object.defineProperty(_0xf98eb1, '__esModule', {
            value: true
        });
        var _0x231687 = _0x1fa611('../../windows/window');
        var _0x2ceeab = _0x231687 && _0x231687.__esModule ? _0x231687 : {
            default: _0x231687
        };
        class _0x415969 extends _0x2ceeab.default {
            constructor() {
                super('ChangePhoneNumber');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0xf98eb1.default = new _0x415969();
    }, {
        '../../windows/window': 277
    }],
    137: [function (_0x3d70e6, _0x10b072, _0x41cfcc) {
        'use strict';

        _0x3d70e6('./changephonenumber-window');
    }, {
        './changephonenumber-window': 136
    }],
    138: [function (_0x263ef8, _0x18cac2, _0x2059e3) {
        'use strict';

        Object.defineProperty(_0x2059e3, '__esModule', {
            value: true
        });
        var _0x4f99fa = _0x263ef8('../../windows/window');
        var _0x56ffae = _0x4f99fa && _0x4f99fa.__esModule ? _0x4f99fa : {
            default: _0x4f99fa
        };
        var _0x396dff = _0x263ef8('../../utils/utils');
        var _0x1d9e9a = _0x396dff && _0x396dff.__esModule ? _0x396dff : {
            default: _0x396dff
        };
        class _0x4d0ee4 extends _0x56ffae.default {
            constructor() {
                super('Char');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                mp.events.add('SetPedHeadBlendData', (_0x574dfc, _0x291fd0, _0x53a0e7, _0x3cc5c4, _0x5351cb, _0x19ead9) => {
                    mp.players.local.setHeadBlendData(parseInt(_0x574dfc), parseInt(_0x291fd0), 0, parseInt(_0x53a0e7), parseInt(_0x3cc5c4), 0, parseFloat(_0x5351cb), parseFloat(_0x19ead9), 0, false);
                });
                mp.events.add('SetPedFaceFeature', (_0x346e66, _0x4249fc) => {
                    mp.players.local.setFaceFeature(_0x346e66, _0x4249fc);
                });
                mp.events.add('SetPedHair', _0x2cc2e8 => {
                    mp.players.local.setComponentVariation(2, parseInt(_0x2cc2e8), 0, 0);
                });
                mp.events.add('SetPedHairColor', (_0xa46ea9, _0x3a9ac6) => {
                    mp.players.local.setHairColor(parseInt(_0xa46ea9), parseInt(_0x3a9ac6));
                });
                mp.events.add('SetPedHeadOverlay', (_0x20a51e, _0x49b86b, _0x381574) => {
                    mp.players.local.setHeadOverlay(_0x20a51e, _0x49b86b, _0x381574, 0, 0);
                });
                mp.events.add('SetPedHeadOverlayColor', (_0x49a100, _0x1a19bd, _0x24c24a, _0x2cf566) => {
                    mp.players.local.setHeadOverlayColor(_0x49a100, _0x1a19bd, _0x24c24a, _0x2cf566, 0);
                });
                mp.events.add('SetRotation', _0x2b4033 => {
                    mp.players.local.setHeading(parseFloat(_0x2b4033));
                });
                mp.events.add('SetPedEyeColor', _0x55cd5d => {
                    mp.players.local.setEyeColor(_0x55cd5d);
                });
            }
            ['onEvent'](_0x1e084c, ..._0x4e06f7) {
                if (_0x1e084c == 'changeCharacterPart') {
                    let _0x1e8dd1 = _0x4e06f7[0];
                    let _0x4bb2b9 = [];
                    _0x1e8dd1.settings.forEach(_0x2d0834 => _0x4bb2b9.push(_0x2d0834.value));
                    if (_0x1e8dd1.method !== 'setFaceFeature') {
                        mp.players.local[_0x1e8dd1.method](..._0x4bb2b9);
                        return;
                    }
                    for (let _0x3dc904 = 0; _0x3dc904 < 20; _0x3dc904++) {
                        mp.players.local[_0x1e8dd1.method](_0x3dc904, _0x1e8dd1.settings[_0x3dc904].value);
                    }
                } else {
                    if (_0x1e084c == 'changeGender') {
                        mp.players.local.model = _0x4e06f7[0];
                    } else {
                        if (_0x1e084c == 'rotate') {
                            let _0x1089a9 = mp.players.local.getHeading() + _0x4e06f7[0];
                            mp.players.local.setHeading(_0x1089a9);
                        }
                    }
                }
            }
            ['removeGlasses']() {
                if (mp.players.local.model == 1885233650) {
                    mp.players.local.setPropIndex(1, 0, 0, false);
                } else {
                    mp.players.local.setPropIndex(1, 5, 0, false);
                }
            }
            ['onReady']() {
                mp.game.graphics.transitionFromBlurred(250);
                _0x1d9e9a.default.pointCameraAtBody();
            }
            ['onClose']() {
                _0x1d9e9a.default.disableCamera();
            }
        }
        _0x2059e3.default = new _0x4d0ee4();
    }, {
        '../../player/player': 262,
        '../../utils/utils': 270,
        '../../windows/window': 277
    }],
    139: [function (_0x3c208d, _0x49ce59, _0x1c0f76) {
        'use strict';

        Object.defineProperty(_0x1c0f76, '__esModule', {
            value: true
        });
        var _0x3630c9 = _0x3c208d('../../windows/window');
        var _0x5b99b0 = _0x3630c9 && _0x3630c9.__esModule ? _0x3630c9 : {
            default: _0x3630c9
        };
        var _0x34ba49 = _0x3c208d('../../player/player');
        var _0x8943ed = _0x34ba49 && _0x34ba49.__esModule ? _0x34ba49 : {
            default: _0x34ba49
        };
        class _0x2ed693 extends _0x5b99b0.default {
            constructor() {
                super('Chat');
                this.setCurserVisible(true);
                this.lastCommands = [];
            }
            ['onEvent'](_0x1a5a13, ..._0x4e75a3) {
                if (_0x1a5a13 == 'setChatFlag') { } else if (_0x1a5a13 === 'chat:message') {
                    this.lastCommands.unshift(_0x4e75a3[0]);
                }
            }
            ['onReady']() {
                this.execute("responseLastCommands(\"" + this.lastCommands + "\")");
            }
            ['onClose']() {
                _0x8943ed.default.chatFlag = false;
            }
        }
        _0x1c0f76.default = new _0x2ed693();
    }, {
        '../../player/player': 262,
        '../../windows/window': 277
    }],
    140: [function (_0xbcff32, _0x3bea6a, _0x440c90) {
        'use strict';

        _0xbcff32('./chat-window');
    }, {
        './chat-window': 139
    }],
    141: [function (_0x382d48, _0x5729dd, _0x1bf4ac) {
        'use strict';

        Object.defineProperty(_0x1bf4ac, '__esModule', {
            value: true
        });
        var _0x46b6b9 = _0x382d48('../../windows/window');
        var _0x2fc816 = _0x46b6b9 && _0x46b6b9.__esModule ? _0x46b6b9 : {
            default: _0x46b6b9
        };
        var _0x6d1bb7 = _0x382d48('../../utils/camera');
        var _0x454aac = _0x6d1bb7 && _0x6d1bb7.__esModule ? _0x6d1bb7 : {
            default: _0x6d1bb7
        };
        var _0x518c64 = _0x382d48('../../browser/browser');
        var _0x3f670b = _0x518c64 && _0x518c64.__esModule ? _0x518c64 : {
            default: _0x518c64
        };
        class _0x5e7ccc extends _0x2fc816.default {
            constructor() {
                super('ClothShop');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseClothingShopCategories');
                this.forwardableEvents.add('responseClothingShopClothes');
                mp.events.add('SendClothesToClient', _0x5c6d1c => {
                    _0x3f670b.default.execute("events.SendClothesToClient('" + _0x5c6d1c + "')");
                });
                mp.events.add('ResetCam', () => {
                    _0x454aac.default.resetCamera();
                });
            }
            ['onEvent'](_0x27147b, ..._0x3b5349) {
                switch (_0x27147b) {
                    case 'moveCam':
                        this.moveCam(_0x3b5349[0].offset, _0x3b5349[0].slot, _0x3b5349[0].isX, _0x3b5349[0].isY);
                        break;
                    case 'zoomToSlot':
                        this.zoomToSlot(_0x3b5349[0].slot, _0x3b5349[0].isY);
                        break;
                    case 'zoomOut':
                        this.toInitialZoom();
                        break;
                }
            }
            ['getMovementData'](_0xe8749e, _0x579d28) {
                let _0x2b3960 = mp.players.local;
                let _0x988dad = {
                    heading: _0x2b3960.getHeading(),
                    distance: 1,
                    camPos: {
                        z: _0x2b3960.position.z
                    },
                    pointPos: {
                        z: _0x2b3960.position.z
                    }
                };
                switch (_0xe8749e) {
                    case '1':
                        ;
                        _0x988dad.camPos.z += 0.5;
                        _0x988dad.pointPos.z += 0.5;
                        break;
                    case '3':
                        _0x988dad.distance = 3;
                        break;
                    case '4':
                        ;
                        _0x988dad.camPos.z -= 0.6;
                        _0x988dad.pointPos.z -= 0.6;
                        break;
                    case '5':
                        ;
                        _0x988dad.heading += 180;
                        _0x988dad.camPos.z += 0.5;
                        _0x988dad.pointPos.z += 0.2;
                        break;
                    case '6':
                        ;
                        _0x988dad.camPos.z -= 0.6;
                        _0x988dad.pointPos.z -= 0.8;
                        break;
                    case '7':
                    case '8':
                    case '11':
                        ;
                        _0x988dad.camPos.z += 0.5;
                        _0x988dad.pointPos.z += 0.2;
                        break;
                    case 'p-0':
                        ;
                        _0x988dad.heading += 180;
                        _0x988dad.distance = 2;
                        _0x988dad.camPos.z += 1;
                        _0x988dad.pointPos.z += 0.5;
                        break;
                    case 'p-1':
                        ;
                        _0x988dad.camPos.z += 0.5;
                        _0x988dad.pointPos.z += 0.5;
                        break;
                    case 'p-2':
                        ;
                        _0x988dad.heading = _0x579d28 ? _0x988dad.heading + 90 : _0x988dad.heading - 90;
                        _0x988dad.camPos.z += 0.5;
                        _0x988dad.pointPos.z += 0.5;
                        break;
                    case 'p-6':
                    case 'p-7':
                        ;
                        _0x988dad.heading = _0x579d28 ? _0x988dad.heading + 90 : _0x988dad.heading - 90;
                        _0x988dad.camPos.z += 0.3;
                        _0x988dad.pointPos.z -= 0.1;
                        break;
                }
                return _0x988dad;
            }
            ['zoomToSlot'](_0x43abb9, _0x3f3c31) {
                let _0x310f53 = mp.players.local;
                let _0x56479c = this.getMovementData(_0x43abb9, _0x3f3c31);
                let _0x392508 = this.offsetPosition(_0x310f53.position.x, _0x310f53.position.y, _0x56479c.heading, _0x56479c.distance);
                let _0x1f826f = new mp.Vector3(_0x392508.x, _0x392508.y, _0x56479c.camPos.z);
                let _0x2b287c = new mp.Vector3(_0x310f53.position.x, _0x310f53.position.y, _0x56479c.pointPos.z);
                _0x454aac.default.flyTo(_0x1f826f);
                _0x454aac.default.pointCameraAt(_0x2b287c);
            }
            ['moveCam'](_0x1c535f, _0x57a93d, _0x35ba08, _0x12e0d9) {
                let _0x190599 = mp.players.local;
                let _0x18f3da;
                let _0x5955d1;
                let _0x344769;
                let _0x2d289d;
                if ((_0x35ba08 || _0x12e0d9) && _0x57a93d !== null) {
                    _0x18f3da = this.getMovementData(_0x57a93d, _0x12e0d9);
                    _0x5955d1 = this.offsetPosition(_0x190599.position.x, _0x190599.position.y, _0x18f3da.heading + _0x1c535f, _0x18f3da.distance);
                    _0x344769 = new mp.Vector3(_0x5955d1.x, _0x5955d1.y, _0x18f3da.camPos.z);
                    _0x2d289d = new mp.Vector3(_0x190599.position.x, _0x190599.position.y, _0x18f3da.pointPos.z);
                    _0x454aac.default.flyTo(_0x344769);
                    _0x454aac.default.pointCameraAt(_0x2d289d);
                    return;
                }
                _0x5955d1 = this.offsetPosition(_0x190599.position.x, _0x190599.position.y, _0x190599.getHeading() + _0x1c535f, 3);
                _0x344769 = new mp.Vector3(_0x5955d1.x, _0x5955d1.y, _0x190599.position.z);
                _0x2d289d = _0x190599.position;
                _0x454aac.default.flyTo(_0x344769);
                _0x454aac.default.pointCameraAt(_0x2d289d);
            }
            ['onShow']() {
                this.toInitialZoom(true);
            }
            ['toInitialZoom'](_0x13a8b4 = false) {
                let _0x189c7c = mp.players.local;
                let _0x395be3 = this.offsetPosition(_0x189c7c.position.x, _0x189c7c.position.y, _0x189c7c.getHeading(), 3);
                let _0x2a1821;
                let _0x53d659;
                if (_0x13a8b4) {
                    _0x454aac.default.createCamera(new mp.Vector3(_0x395be3.x, _0x395be3.y, _0x189c7c.position.z), new mp.Vector3(0, 0, 0), 40);
                    _0x454aac.default.pointCameraAt(_0x189c7c.position);
                }
                _0x2a1821 = new mp.Vector3(_0x395be3.x, _0x395be3.y, _0x189c7c.position.z);
                _0x53d659 = _0x189c7c.position;
                _0x454aac.default.flyTo(_0x2a1821);
                _0x454aac.default.pointCameraAt(_0x53d659);
            }
            ['offsetPosition'](_0x354540, _0x470764, _0x41658e, _0x5508c1) {
                return {
                    x: _0x354540 + Math.sin(-_0x41658e * Math.PI / 180) * _0x5508c1,
                    y: _0x470764 + Math.cos(-_0x41658e * Math.PI / 180) * _0x5508c1
                };
            }
        }
        _0x1bf4ac.default = new _0x5e7ccc();
    }, {
        '../../browser/browser': 100,
        '../../utils/camera': 269,
        '../../windows/window': 277
    }],
    142: [function (_0x5b3727, _0xc5ccd3, _0x5dee07) {
        'use strict';

        Object.defineProperty(_0x5dee07, '__esModule', {
            value: true
        });
        var _0x1f25ac = _0x5b3727('../../windows/window');
        var _0x15765c = _0x1f25ac && _0x1f25ac.__esModule ? _0x1f25ac : {
            default: _0x1f25ac
        };
        class _0x25db41 extends _0x15765c.default {
            constructor() {
                super('Confirm');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x5dee07.default = new _0x25db41();
    }, {
        '../../windows/window': 277
    }],
    143: [function (_0x3f705e, _0x3cfb2b, _0x3b0523) {
        'use strict';

        _0x3f705e('./confirm-window');
    }, {
        './confirm-window': 142
    }],
    144: [function (_0x2bf65e, _0x384a5c, _0x3d8faf) {
        'use strict';

        Object.defineProperty(_0x3d8faf, '__esModule', {
            value: true
        });
        var _0x14b974 = _0x2bf65e('../../windows/window');
        var _0x172e8d = _0x14b974 && _0x14b974.__esModule ? _0x14b974 : {
            default: _0x14b974
        };
        class _0x1a78bb extends _0x172e8d.default {
            constructor() {
                super('Death');
                this.setCurserVisible(false);
                this.forwardableEvents.add('closeDeathScreen');
            }
        }
        _0x3d8faf.default = new _0x1a78bb();
    }, {
        '../../windows/window': 277
    }],
    145: [function (_0x58391a, _0x301427, _0x5b044b) {
        'use strict';

        _0x58391a('./death-window');
    }, {
        './death-window': 144
    }],
    146: [function (_0x50ec56, _0x8462a0, _0x5206a4) {
        'use strict';

        Object.defineProperty(_0x5206a4, '__esModule', {
            value: true
        });
        var _0x133398 = _0x50ec56('../../windows/window');
        var _0x1426da = _0x133398 && _0x133398.__esModule ? _0x133398 : {
            default: _0x133398
        };
        class _0x196b6a extends _0x1426da.default {
            constructor() {
                super('Eject');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseSeats');
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x5206a4.default = new _0x196b6a();
    }, {
        '../../windows/window': 277
    }],
    147: [function (_0x297bb3, _0x31eef5, _0x283e35) {
        'use strict';

        Object.defineProperty(_0x283e35, '__esModule', {
            value: true
        });
        var _0x16edc3 = _0x297bb3('../../windows/window');
        var _0x2d4153 = _0x16edc3 && _0x16edc3.__esModule ? _0x16edc3 : {
            default: _0x16edc3
        };
        class _0x461607 extends _0x2d4153.default {
            constructor() {
                super('Flyer');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x283e35.default = new _0x461607();
    }, {
        '../../windows/window': 277
    }],
    148: [function (_0x58fac1, _0x7b3930, _0x3a9fd9) {
        'use strict';

        _0x58fac1('./flyer-window');
    }, {
        './flyer-window': 147
    }],
    149: [function (_0xf54302, _0x381b4f, _0x5d675e) {
        'use strict';

        Object.defineProperty(_0x5d675e, '__esModule', {
            value: true
        });
        var _0x2b0a42 = _0xf54302('../../windows/window');
        var _0x16e71c = _0x2b0a42 && _0x2b0a42.__esModule ? _0x2b0a42 : {
            default: _0x2b0a42
        };
        class _0x9f9f20 extends _0x16e71c.default {
            constructor() {
                super('Frisk');
                this.forwardableEvents.add('closeFriskWindow');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x5d675e.default = new _0x9f9f20();
    }, {
        '../../windows/window': 277
    }],
    150: [function (_0x58c340, _0x3138cb, _0x2713d1) {
        'use strict';

        _0x58c340('./frisk-window');
    }, {
        './frisk-window': 149
    }],
    151: [function (_0x20da6f, _0x43e843, _0x3e99d7) {
        'use strict';

        Object.defineProperty(_0x3e99d7, '__esModule', {
            value: true
        });
        var _0x399bef = _0x20da6f('../../windows/window');
        var _0x23efbd = _0x399bef && _0x399bef.__esModule ? _0x399bef : {
            default: _0x399bef
        };
        class _0x3eebbf extends _0x23efbd.default {
            constructor() {
                super('FuelStation');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x3e99d7.default = new _0x3eebbf();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    152: [function (_0x14cc3c, _0x57e93d, _0x45a0f2) {
        'use strict';

        _0x14cc3c('./fuelstation-window');
    }, {
        './fuelstation-window': 151
    }],
    153: [function (_0x1eb67e, _0x504539, _0x48a6a3) {
        'use strict';

        Object.defineProperty(_0x48a6a3, '__esModule', {
            value: true
        });
        var _0x2cee97 = _0x1eb67e('../../windows/window');
        var _0x38dd5d = _0x2cee97 && _0x2cee97.__esModule ? _0x2cee97 : {
            default: _0x2cee97
        };
        var _0x395ce7 = _0x1eb67e('../../browser/browser');
        var _0x59d64c = _0x395ce7 && _0x395ce7.__esModule ? _0x395ce7 : {
            default: _0x395ce7
        };
        class _0x14270c extends _0x38dd5d.default {
            constructor() {
                super('Funk');
                this.setCurserVisible(true);
                mp.events.add('openFunk', () => {
                    mp.events.call('openWindow', 'Funk');
                    _0x59d64c.default.execute('events.Funk(true)');
                });
                mp.events.add('SetFunkStatus', _0x9453d => {
                    _0x59d64c.default.execute('events.SetFunkStatus(' + _0x9453d + ')');
                });
                mp.events.add('SendFunkSettings', _0x571ff3 => {
                    _0x59d64c.default.execute("events.SendFunkSettings('" + _0x571ff3 + "')");
                });
                mp.events.add('SendFunkData', (_0x4a6285, _0x563b44) => {
                    _0x59d64c.default.execute("events.SendFunkData('" + _0x4a6285 + "', " + _0x563b44 + ')');
                });
            }
        }
        _0x48a6a3.default = new _0x14270c();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    154: [function (_0x14bcf1, _0x2db871, _0x907cef) {
        'use strict';

        _0x14bcf1('./funk-window');
    }, {
        './funk-window': 153
    }],
    155: [function (_0x13ceea, _0x1a8f2c, _0x18e979) {
        'use strict';

        Object.defineProperty(_0x18e979, '__esModule', {
            value: true
        });
        var _0x51175b = _0x13ceea('../../windows/window');
        var _0x227aa0 = _0x51175b && _0x51175b.__esModule ? _0x51175b : {
            default: _0x51175b
        };
        class _0x5aad72 extends _0x227aa0.default {
            constructor() {
                super('GangwarStart');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x18e979.default = new _0x5aad72();
    }, {
        '../../windows/window': 277
    }],
    156: [function (_0x4f7e37, _0x214e1f, _0x57feac) {
        'use strict';

        _0x4f7e37('./gangwarstart-window');
    }, {
        './gangwarstart-window': 155
    }],
    157: [function (_0x244995, _0x540bc4, _0x4137c3) {
        'use strict';

        Object.defineProperty(_0x4137c3, '__esModule', {
            value: true
        });
        var _0xf9f3 = _0x244995('../../windows/window');
        var _0x608a81 = _0xf9f3 && _0xf9f3.__esModule ? _0xf9f3 : {
            default: _0xf9f3
        };
        class _0x3b7ff1 extends _0x608a81.default {
            constructor() {
                super('GangwarWeaponSelect');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x4137c3.default = new _0x3b7ff1();
    }, {
        '../../windows/window': 277
    }],
    158: [function (_0xcd7113, _0x172c20, _0x27727f) {
        'use strict';

        _0xcd7113('./gangwarweaponselect-window');
    }, {
        './gangwarweaponselect-window': 157
    }],
    159: [function (_0x2e3f4a, _0x23a103, _0x33b93a) {
        'use strict';

        Object.defineProperty(_0x33b93a, '__esModule', {
            value: true
        });
        var _0x249856 = _0x2e3f4a('../../windows/window');
        var _0x5da64a = _0x249856 && _0x249856.__esModule ? _0x249856 : {
            default: _0x249856
        };
        class _0x450ce2 extends _0x5da64a.default {
            constructor() {
                super('GangwarFinish');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x33b93a.default = new _0x450ce2();
    }, {
        '../../windows/window': 277
    }],
    160: [function (_0x252f68, _0x123eb5, _0x28d04a) {
        'use strict';

        _0x252f68('./gangwarstats-window');
    }, {
        './gangwarstats-window': 159
    }],
    161: [function (_0x3c5145, _0xf3664c, _0xc70e) {
        'use strict';

        Object.defineProperty(_0xc70e, '__esModule', {
            value: true
        });
        var _0x3ec16f = _0x3c5145('../../windows/window');
        var _0x3bc08d = _0x3ec16f && _0x3ec16f.__esModule ? _0x3ec16f : {
            default: _0x3ec16f
        };
        var _0x2a7f64 = _0x3c5145('../../browser/browser');
        var _0x538d1d = _0x2a7f64 && _0x2a7f64.__esModule ? _0x2a7f64 : {
            default: _0x2a7f64
        };
        class _0xad11a0 extends _0x3bc08d.default {
            constructor() {
                super('Garage');
                this.forwardableEvents.add('responseVehicleList');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                mp.events.add('SendInparkVehicles', _0x2f1f1a => {
                    _0x538d1d.default.execute("events.SendInparkVehicles('" + _0x2f1f1a + "')");
                });
                mp.events.add('SendFavoriteVehicles', _0x131f8f => {
                    _0x538d1d.default.execute("events.SendFavoriteVehicles('" + _0x131f8f + "')");
                });
            }
        }
        _0xc70e.default = new _0xad11a0();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    162: [function (_0x3b6be7, _0x164f63, _0x5a0b19) {
        'use strict';

        _0x3b6be7('./garage-window');
    }, {
        './garage-window': 161
    }],
    163: [function (_0x556bf3, _0x2cae4f, _0x5b869d) {
        'use strict';

        Object.defineProperty(_0x5b869d, '__esModule', {
            value: true
        });
        var _0xcc2c87 = _0x556bf3('../../windows/window');
        var _0x5417fb = _0xcc2c87 && _0xcc2c87.__esModule ? _0xcc2c87 : {
            default: _0xcc2c87
        };
        class _0x469855 extends _0x5417fb.default {
            constructor() {
                super('GiveMoney');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x5b869d.default = new _0x469855();
    }, {
        '../../windows/window': 277
    }],
    164: [function (_0x1ac292, _0x319ade, _0x422f6c) {
        'use strict';

        _0x1ac292('./giveMoney-window');
    }, {
        './giveMoney-window': 163
    }],
    165: [function (_0x14b453, _0x5a5297, _0xb729) {
        'use strict';

        Object.defineProperty(_0xb729, '__esModule', {
            value: true
        });
        var _0x5cb8a1 = _0x14b453('../../windows/window');
        var _0x169283 = _0x5cb8a1 && _0x5cb8a1.__esModule ? _0x5cb8a1 : {
            default: _0x5cb8a1
        };
        class _0x4b9bc0 extends _0x169283.default {
            constructor() {
                super('House');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0xb729.default = new _0x4b9bc0();
    }, {
        '../../windows/window': 277
    }],
    166: [function (_0xe01395, _0x409741, _0x1134d8) {
        'use strict';

        _0xe01395('./housemenu-window');
    }, {
        './housemenu-window': 165
    }],
    167: [function (_0x4994f6, _0x43e096, _0x2815ad) {
        'use strict';

        Object.defineProperty(_0x2815ad, '__esModule', {
            value: true
        });
        var _0x3a342a = _0x4994f6('../../components/component');
        var _0x1cb152 = _0x3a342a && _0x3a342a.__esModule ? _0x3a342a : {
            default: _0x3a342a
        };
        class _0x37049d extends _0x1cb152.default {
            constructor() {
                super('AntiAFK');
                this.power = false;
                this.timeLeft = 60;
            }
            ['setVisible']() {
                this.execute("power=true");
                this.execute("timeLeft=60");
                mp.gui.cursor.visible = true;
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onEvent'](_0x356846, ..._0x3648f6) {
                if (_0x356846 == 'disableAntiAFK') {
                    mp.gui.cursor.visible = false;
                    mp.game.graphics.transitionFromBlurred(250);
                    mp.game.ui.displayHud(true);
                    mp.game.ui.displayRadar(true);
                }
            }
        }
        _0x2815ad.default = new _0x37049d();
    }, {
        '../../components/component': 110
    }],
    168: [function (_0x2de514, _0x30bc9d, _0xa9e908) {
        'use strict';

        Object.defineProperty(_0xa9e908, '__esModule', {
            value: true
        });
        var _0x505e55 = _0x2de514('../../windows/window');
        var _0xea10ce = _0x505e55 && _0x505e55.__esModule ? _0x505e55 : {
            default: _0x505e55
        };
        class _0x16792c extends _0xea10ce.default {
            constructor() {
                super('Fishing');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0xa9e908.default = new _0x16792c();
    }, {
        '../../windows/window': 277
    }],
    169: [function (_0x17da18, _0x342c03, _0x206b29) {
        'use strict';

        Object.defineProperty(_0x206b29, '__esModule', {
            value: true
        });
        var _0x22853f = _0x17da18('../../components/component');
        var _0x1d41b9 = _0x22853f && _0x22853f.__esModule ? _0x22853f : {
            default: _0x22853f
        };
        var _0x41fa68 = _0x17da18('../../browser/browser');
        var _0x1edbda = _0x41fa68 && _0x41fa68.__esModule ? _0x41fa68 : {
            default: _0x41fa68
        };
        class _0x131901 extends _0x1d41b9.default {
            constructor() {
                super('Gangwar');
                mp.events.add('ShowGangwarHud', (_0x4b4bab, _0x21715f, _0x100937, _0x4e42af, _0x51329e, _0x13fd59, _0x131b1e) => {
                    _0x1edbda.default.execute("events.ShowGangwarHud('" + _0x4b4bab + "', " + _0x21715f + ', ' + _0x100937 + ', ' + _0x4e42af + ', ' + _0x51329e + ', ' + _0x13fd59 + ", '" + _0x131b1e + "')");
                });
                mp.events.add('UpdateGangwarHud', (_0x1dcef5, _0x3bae4a, _0x349f82, _0x104dce) => {
                    _0x1edbda.default.execute('events.UpdateGangwarHud(' + _0x1dcef5 + ', ' + _0x3bae4a + ", '" + _0x349f82 + "', '" + _0x104dce + "')");
                });
                mp.events.add('StopGangwarHud', () => {
                    _0x1edbda.default.execute('events.StopGangwarHud()');
                });
            }
        }
        _0x206b29.default = new _0x131901();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110
    }],
    170: [function (_0x1cc698, _0x176f06, _0x54ae6d) {
        'use strict';

        Object.defineProperty(_0x54ae6d, '__esModule', {
            value: true
        });
        var _0x6f30de = _0x1cc698('../../components/component');
        var _0x155028 = _0x6f30de && _0x6f30de.__esModule ? _0x6f30de : {
            default: _0x6f30de
        };
        var _0x35ef51 = _0x1cc698('../../browser/browser');
        var _0x1093a3 = _0x35ef51 && _0x35ef51.__esModule ? _0x35ef51 : {
            default: _0x35ef51
        };
        class _0x5d0236 extends _0x155028.default {
            constructor() {
                super('GlobalNotification');
                mp.events.add('sendGlobalNotification', (_0x2f5a59, _0x200873) => {
                    _0x1093a3.default.execute("events.AddMsg('" + _0x2f5a59 + "', '" + _0x200873 + "')");
                });
            }
        }
        _0x54ae6d.default = new _0x5d0236();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110
    }],
    171: [function (_0x23a87, _0x5ce296, _0x5b2721) {
        'use strict';

        Object.defineProperty(_0x5b2721, '__esModule', {
            value: true
        });
        var _0x52b500 = _0x23a87('../../components/component');
        var _0x450f9a = _0x52b500 && _0x52b500.__esModule ? _0x52b500 : {
            default: _0x52b500
        };
        var _0x2b334f = _0x23a87('../../player/player');
        var _0x29ac86 = _0x2b334f && _0x2b334f.__esModule ? _0x2b334f : {
            default: _0x2b334f
        };
        class _0x42e15c extends _0x450f9a.default {
            constructor() {
                super('HelpPanel');
            }
            ['onReady']() {
                if (_0x29ac86.default.level <= 3) {
                    this.execute('showHelpPanel=true');
                } else {
                    this.execute('showHelpPanel=false');
                }
            }
        }
        _0x5b2721.default = new _0x42e15c();
    }, {
        '../../components/component': 110,
        '../../player/player': 262
    }],
    172: [function (_0x6c3afb, _0x59e011, _0x2a528d) {
        'use strict';

        Object.defineProperty(_0x2a528d, '__esModule', {
            value: true
        });
        var _0x1179d7 = _0x6c3afb('../../components/component');
        var _0x102074 = _0x1179d7 && _0x1179d7.__esModule ? _0x1179d7 : {
            default: _0x1179d7
        };
        var _0x4b0869 = _0x6c3afb('../../browser/browser');
        var _0x2fd0dc = _0x4b0869 && _0x4b0869.__esModule ? _0x4b0869 : {
            default: _0x4b0869
        };
        class _0x572b98 extends _0x102074.default {
            constructor() {
                super('Hud');
                this.windows = [];
                mp.nametags.enabled = false;
            }
            ['setVisible'](_0x147f1f) {
                _0x2fd0dc.default.execute('events.HidePlayerHud(' + !_0x147f1f + ')');
            }
            ['addWindow'](_0xaa7320, _0x59238a) {
                this.windows.push({
                    name: _0xaa7320,
                    data: _0x59238a
                });
                this.execute("addWindow(\"" + _0xaa7320 + "\", '" + _0x59238a + "')");
            }
            ['removeWindow'](_0xc9be7a, _0x26e18a = null) {
                mp.gui.chat.push(JSON.stringify(this.windows));
                if (_0x26e18a == null) {
                    this.execute("removeWindow(\"" + _0xc9be7a + "\")");
                } else {
                    this.execute("removeWindow(\"" + _0xc9be7a + "\", " + _0x26e18a.toString() + ')');
                }
                for (var _0x56cf81 = this.windows.length - 1; _0x56cf81 >= 0; _0x56cf81--) {
                    if (this.windows[_0x56cf81].name == _0xc9be7a) {
                        if (_0x26e18a != null && !_0x26e18a(this.windows[_0x56cf81].data)) {
                            continue;
                        }
                        this.windows.splice(_0x56cf81, 1);
                        return;
                    }
                }
            }
        }
        _0x2a528d.default = new _0x572b98();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110
    }],
    173: [function (_0x37a683, _0x4dcbd0, _0x3b3d1d) {
        'use strict';

        Object.defineProperty(_0x3b3d1d, '__esModule', {
            value: true
        });
        var _0x191c25 = _0x37a683('../../components/component');
        var _0x3d2dde = _0x191c25 && _0x191c25.__esModule ? _0x191c25 : {
            default: _0x191c25
        };
        class _0x15db9d extends _0x3d2dde.default {
            constructor() {
                super('Infocard');
                mp.events.add('sendInfocard', (_0x2a42c9, _0x277898, _0x33e1ef, _0x57d720, _0x347a20, _0x58c192) => {
                    this.execute("pushInfocard('" + _0x2a42c9 + "', '" + _0x277898 + "', '" + _0x33e1ef + "', '" + _0x57d720 + "', " + _0x347a20 + ", '" + _0x58c192 + "')");
                });
            }
        }
        _0x3b3d1d.default = new _0x15db9d();
    }, {
        '../../components/component': 110
    }],
    174: [function (_0x2e25bb, _0xf35eaf, _0x143352) {
        'use strict';

        Object.defineProperty(_0x143352, '__esModule', {
            value: true
        });
        var _0x16b6b0 = _0x2e25bb('../../components/component');
        var _0x22f6b4 = _0x16b6b0 && _0x16b6b0.__esModule ? _0x16b6b0 : {
            default: _0x16b6b0
        };
        var _0xfdd916 = _0x2e25bb('../hud/player-panel');
        var _0x5ac6b6 = _0xfdd916 && _0xfdd916.__esModule ? _0xfdd916 : {
            default: _0xfdd916
        };
        class _0x4dd61e extends _0x22f6b4.default {
            constructor() {
                super('NativeMenu');
                this.forwardableEvents.add('createMenu');
                this.forwardableEvents.add('addItem');
                this.forwardableEvents.add('show');
                this.forwardableEvents.add('hide');
                this.forwardableEvents.add('showNativeMenu');
                this.visible = false;
            }
            ['onEvent'](_0x147b3a, ..._0xf0d6b6) {
                if (_0x147b3a == 'show') {
                    this.visible = true;
                    _0x5ac6b6.default.executeDisplay(false);
                } else {
                    if (_0x147b3a == 'hide') {
                        this.visible = false;
                        _0x5ac6b6.default.executeDisplay(true);
                    } else {
                        if (_0x147b3a == 'activateCurser') {
                            mp.gui.cursor.visible = true;
                        } else if (_0x147b3a == 'deactivateCurser') {
                            mp.gui.cursor.visible = false;
                        }
                    }
                }
            }
        }
        _0x143352.default = new _0x4dd61e();
    }, {
        '../../components/component': 110,
        '../hud/player-panel': 179
    }],
    175: [function (_0x1f8641, _0x1eb92f, _0x1fdde3) {
        'use strict';

        Object.defineProperty(_0x1fdde3, '__esModule', {
            value: true
        });
        var _0x26fb22 = _0x1f8641('../../components/component');
        var _0xa7562c = _0x26fb22 && _0x26fb22.__esModule ? _0x26fb22 : {
            default: _0x26fb22
        };
        var _0x533d27 = _0x1f8641('../../player/player');
        var _0x48c46d = _0x533d27 && _0x533d27.__esModule ? _0x533d27 : {
            default: _0x533d27
        };
        class _0x1d8474 extends _0xa7562c.default {
            constructor() {
                super('NMenu');
                this.visible = false;
            }
            ['setItems'](_0x2a0817) {
                if (_0x2a0817 == null) {
                    return;
                }
                this.visible = _0x2a0817.length > 0;
                this.execute("setDataItems('" + JSON.stringify(_0x2a0817) + "')");
                if (this.visible) {
                    mp.gui.cursor.visible = true;
                } else {
                    mp.gui.cursor.visible = false;
                }
            }
            ['getItems']() {
                if (_0x48c46d.default.isInAnyVehicle(true)) {
                    return;
                } else {
                    return _0x48c46d.default.animations;
                }
            }
            ['onEvent'](_0xc2f2b2, ..._0x485ff5) {
                if (_0xc2f2b2 == 'select') {
                    if (_0x48c46d.default.isInAnyVehicle(true)) {
                        return;
                    } else {
                        mp.events.callRemote('REQUEST_ANIMATION_USE', _0x485ff5[0]);
                        return;
                    }
                }
            }
        }
        _0x1fdde3.default = new _0x1d8474();
    }, {
        '../../components/component': 110,
        '../../player/player': 262
    }],
    176: [function (_0x86c0c8, _0xc4c3f3, _0x515075) {
        'use strict';

        Object.defineProperty(_0x515075, '__esModule', {
            value: true
        });
        var _0x53dc07 = _0x86c0c8('../../components/component');
        var _0x225d20 = _0x53dc07 && _0x53dc07.__esModule ? _0x53dc07 : {
            default: _0x53dc07
        };
        class _0x227bd5 extends _0x225d20.default {
            constructor() {
                super('Nutrition');
                mp.events.add('responseNutrition', _0xb8e86b => {
                    this.execute("responseNutrition('" + _0xb8e86b + "')");
                });
            }
        }
        _0x515075.default = new _0x227bd5();
    }, {
        '../../components/component': 110
    }],
    177: [function (_0x184682, _0x5d2d2e, _0x370ec9) {
        'use strict';

        Object.defineProperty(_0x370ec9, '__esModule', {
            value: true
        });
        var _0x248f3f = _0x184682('../../components/component');
        var _0x443788 = _0x248f3f && _0x248f3f.__esModule ? _0x248f3f : {
            default: _0x248f3f
        };
        class _0x38f664 extends _0x443788.default {
            constructor() {
                super('Paintball');
                mp.events.add('initializePaintball', () => {
                    this.execute('initializePaintball()');
                });
                mp.events.add('updatePaintballScore', (_0x51800e, _0x3ae863, _0x2ae0bd) => {
                    this.execute("updatePaintballScore('" + _0x51800e + "', '" + _0x3ae863 + "', '" + _0x2ae0bd + "')");
                });
                mp.events.add('finishPaintball', () => {
                    this.execute('finishPaintball()');
                });
                mp.events.add('spawnProtection', (_0x265070, _0x41d363 = 180, _0x3e5614 = true) => {
                    if (_0x265070 > 0) {
                        mp.players.local.setInvincible(true);
                        mp.players.local.setAlpha(_0x41d363);
                        if (_0x3e5614) {
                            mp.game.graphics.notify('SpawnProtection: ~g~' + _0x265070 / 1000 + ' Sekunden');
                        } else {
                            '';
                        }
                        var _0x14ead9 = setInterval(function () {
                            mp.players.local.setInvincible(false);
                            if (_0x3e5614) {
                                mp.game.graphics.notify('SpawnProtection: ~r~aus');
                            } else {
                                '';
                            }
                            mp.players.local.setAlpha(255);
                            clearInterval(_0x14ead9);
                        }, _0x265070);
                    }
                });
            }
        }
        _0x370ec9.default = new _0x38f664();
    }, {
        '../../components/component': 110
    }],
    178: [function (_0x567ec1, _0x235d2e, _0x3a1f52) {
        'use strict';

        Object.defineProperty(_0x3a1f52, '__esModule', {
            value: true
        });
        var _0x1ddac1 = _0x567ec1('../../components/component');
        var _0x46673e = _0x1ddac1 && _0x1ddac1.__esModule ? _0x1ddac1 : {
            default: _0x1ddac1
        };
        var _0xfb3e32 = _0x567ec1('../../browser/browser');
        var _0x3547b5 = _0xfb3e32 && _0xfb3e32.__esModule ? _0xfb3e32 : {
            default: _0xfb3e32
        };
        class _0x8aa5f5 extends _0x46673e.default {
            constructor() {
                super('Paytime');
                mp.events.add('setPaytime', _0x12643b => {
                    _0x3547b5.default.execute('events.ShowPlayTimeHud(true, ' + _0x12643b + ')');
                });
                mp.events.add('togglePaytime', _0x351c4b => {
                    _0x3547b5.default.execute('events.ShowPlayTimeHud(' + _0x351c4b + ')');
                });
            }
            ['onEvent'](_0x3f037b, ..._0x4d7f98) { }
        }
        _0x3a1f52.default = new _0x8aa5f5();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    179: [function (_0x14debc, _0x239afc, _0xd82e0f) {
        'use strict';

        Object.defineProperty(_0xd82e0f, '__esModule', {
            value: true
        });
        var _0x45b420 = _0x14debc('../../components/component');
        var _0x37f6b1 = _0x45b420 && _0x45b420.__esModule ? _0x45b420 : {
            default: _0x45b420
        };
        var _0x4ff854 = _0x14debc('../../player/player');
        var _0x3a614d = _0x4ff854 && _0x4ff854.__esModule ? _0x4ff854 : {
            default: _0x4ff854
        };
        var _0x1c39a9 = _0x14debc('../../browser/browser');
        var _0x33fded = _0x1c39a9 && _0x1c39a9.__esModule ? _0x1c39a9 : {
            default: _0x1c39a9
        };
        class _0x6e2b45 extends _0x37f6b1.default {
            constructor() {
                super('PlayerHud');
                this.displayState = false;
                this.forwardableEvents.add('responsePlaySMSSound');
                this.mkr_range = 2;
                this.mkr_active = false;
                this.mkr_time = 50;
                mp.events.add('setVoiceRange', _0x3e644e => {
                    _0x33fded.default.execute('events.VoiceRange(' + _0x3e644e + ')');
                    this.mkr_range = _0x3e644e;
                    this.mkr_active = true;
                    this.mkr_time = 50;
                });
                mp.events.add('setMicMuted', _0x44a9e7 => {
                    if (_0x44a9e7) {
                        _0x33fded.default.execute('events.VoiceRange(0)');
                    } else {
                        _0x33fded.default.execute('events.VoiceRange(' + this.mkr_range + ')');
                    }
                });
                mp.events.add('toggleTrainingDuty', _0x2ddcd3 => {
                    _0x33fded.default.execute('events.ToggleTrainingDutyHud(' + _0x2ddcd3 + ')');
                });
                mp.events.add('render', () => {
                    if (this.mkr_active) {
                        let _0x1dc9c4 = mp.players.local.position;
                        mp.game.graphics.drawMarker(1, _0x1dc9c4.x, _0x1dc9c4.y, _0x1dc9c4.z - 1, 0, 0, 0, 0, 0, 0, this.mkr_range, this.mkr_range, 1.5, 0, 238, 255, 100, false, false, 0, false, null, null, false);
                        this.mkr_time--;
                        if (this.mkr_time <= 0) {
                            this.mkr_active = false;
                        }
                    }
                });
            }
            ['onReady']() {
                _0x33fded.default.execute('events.SetFitness(' + _0x3a614d.default.sport + ')');
            }
            ['setSport'](_0x3a895c) {
                _0x33fded.default.execute('events.SetFitness(' + _0x3a895c + ')');
            }
            ['setThirst'](_0x457393) {
                _0x33fded.default.execute('events.SetThirst(' + _0x457393 + ')');
            }
            ['setHunger'](_0x58279c) {
                _0x33fded.default.execute('events.SetHunger(' + _0x58279c + ')');
            }
            ['setStress'](_0x4ca04e) { }
            ['setMoney'](_0xfc9f76) {
                _0x33fded.default.execute('events.SetMoney(' + _0xfc9f76 + ')');
            }
            ['displayChange']() {
                this.displayState = !this.displayState;
                _0x33fded.default.execute('state=' + this.displayState);
            }
            ['setAirRadio'](_0x48fd46) {
                _0x33fded.default.execute('airRadioActiveType=' + _0x48fd46);
            }
            ['setAirRadioState'](_0x4b92d6) {
                _0x33fded.default.execute('airRadioActive=' + _0x4b92d6);
            }
            ['setBlackmoney'](_0x3914f8) {
                _0x33fded.default.execute('blackmoney=' + _0x3914f8);
            }
            ['setWanteds'](_0x35fa4d) { }
            ['setVoiceRadio'](_0xc59e65) {
                _0x33fded.default.execute('voiceRadio=' + _0xc59e65);
            }
            ['setVoiceRadioActive'](_0x4440e3) {
                _0x33fded.default.execute('voiceRadioActive=' + _0x4440e3);
            }
            ['playPPTSound']() {
                _0x33fded.default.execute('playPushToTalkSound()');
            }
            ['setVoiceRadioActiveType'](_0x16c11c) {
                _0x33fded.default.execute('voiceRadioActiveType=' + _0x16c11c);
            }
            ['setAduty'](_0x169779) {
                _0x33fded.default.execute('aduty=' + _0x169779);
            }
            ['executeDisplay'](_0x57ff3d) {
                _0x33fded.default.execute('state=' + _0x57ff3d);
            }
            ['setTalking'](_0x509b4d) {
                _0x33fded.default.execute('talking=' + _0x509b4d);
            }
        }
        _0xd82e0f.default = new _0x6e2b45();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    180: [function (_0x2e0450, _0x2fd069, _0x5b43a6) {
        'use strict';

        Object.defineProperty(_0x5b43a6, '__esModule', {
            value: true
        });
        var _0x586bc5 = _0x2e0450('../../components/component');
        var _0x123d6a = _0x586bc5 && _0x586bc5.__esModule ? _0x586bc5 : {
            default: _0x586bc5
        };
        class _0x1a43f6 extends _0x123d6a.default {
            constructor() {
                super('PlayerInfo');
                mp.events.add('setPlayerInfoId', _0x5810e0 => {
                    this.execute('setPlayerId(' + _0x5810e0 + ')');
                });
                mp.events.add('setPlayerInfoForumId', _0x49b45a => {
                    this.execute('setForumId(' + _0x49b45a + ')');
                });
                mp.events.add('setPlayerInfoVoiceHash', _0x499cfd => {
                    this.execute("setVoiceHash('" + _0x499cfd + "')");
                });
            }
        }
        _0x5b43a6.default = new _0x1a43f6();
    }, {
        '../../components/component': 110
    }],
    181: [function (_0x57aa42, _0x4893aa, _0x5b6d24) {
        'use strict';

        Object.defineProperty(_0x5b6d24, '__esModule', {
            value: true
        });
        var _0x320ae3 = _0x57aa42('../../components/component');
        var _0x52829b = _0x320ae3 && _0x320ae3.__esModule ? _0x320ae3 : {
            default: _0x320ae3
        };
        var _0x20c127 = _0x57aa42('../../player/player');
        var _0x3bd5ff = _0x20c127 && _0x20c127.__esModule ? _0x20c127 : {
            default: _0x20c127
        };
        var _0x35067f = _0x57aa42('../../browser/browser');
        var _0x6ffc6b = _0x35067f && _0x35067f.__esModule ? _0x35067f : {
            default: _0x35067f
        };
        class _0x54d8b2 extends _0x52829b.default {
            constructor() {
                super('PlayerNotification');
                mp.events.add('fromUINot', (_0x433585, _0x1c7e5c) => {
                    if (_0x3bd5ff.default.phonelautlos == false) {
                        mp.game.audio.playSoundFrontend(1, 'ATM_WINDOW', 'HUD_FRONTEND_DEFAULT_SOUNDSET', true);
                    }
                    _0x6ffc6b.default.execute("events.AddNotify('" + _0x433585 + "', '" + _0x1c7e5c + "', '', '5000',)");
                });
                mp.events.add('sendPlayerNotification', (_0x22057a, _0x2f584c, _0x12a28d, _0x4aff4b, _0x219258) => {
                    if (_0x3bd5ff.default.phonelautlos == false) {
                        mp.game.audio.playSoundFrontend(1, 'ATM_WINDOW', 'HUD_FRONTEND_DEFAULT_SOUNDSET', true);
                    }
                    _0x6ffc6b.default.execute("events.AddNotify('" + _0x22057a + "', '" + _0x12a28d + "', '" + _0x4aff4b + "', '" + _0x2f584c + "',)");
                });
            }
        }
        _0x5b6d24.default = new _0x54d8b2();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    182: [function (_0x4475f1, _0xfcbee, _0x22330f) {
        'use strict';

        Object.defineProperty(_0x22330f, '__esModule', {
            value: true
        });
        var _0x2865a4 = _0x4475f1('../../components/component');
        var _0x1a1862 = _0x2865a4 && _0x2865a4.__esModule ? _0x2865a4 : {
            default: _0x2865a4
        };
        var _0x536642 = _0x4475f1('../../player/player');
        var _0x2cb0df = _0x536642 && _0x536642.__esModule ? _0x536642 : {
            default: _0x536642
        };
        var _0x39d8d6 = _0x4475f1('../../browser/browser');
        var _0x46f848 = _0x39d8d6 && _0x39d8d6.__esModule ? _0x39d8d6 : {
            default: _0x39d8d6
        };
        class _0x44440b extends _0x1a1862.default {
            constructor() {
                super('Progressbar');
                mp.events.add('sendProgressbar', _0x5d375d => {
                    _0x46f848.default.execute("events.Bar('" + _0x5d375d + "')");
                    _0x2cb0df.default.progressbar = true;
                });
                mp.events.add('stopProgressbar', () => {
                    _0x2cb0df.default.progressbar = false;
                });
            }
            ['onEvent'](_0x42eb85, ..._0x7566fb) {
                if (_0x42eb85 == 'StopProgressbar') {
                    _0x2cb0df.default.progressbar = false;
                }
            }
        }
        _0x22330f.default = new _0x44440b();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    183: [function (_0x2af0c6, _0x13805f, _0xdf4b4b) {
        'use strict';

        Object.defineProperty(_0xdf4b4b, '__esModule', {
            value: true
        });
        var _0xa3f4c = _0x2af0c6('../../components/component');
        var _0x543dc7 = _0xa3f4c && _0xa3f4c.__esModule ? _0xa3f4c : {
            default: _0xa3f4c
        };
        var _0xf48079 = _0x2af0c6('../../app/apps');
        var _0x3a3f94 = _0xf48079 && _0xf48079.__esModule ? _0xf48079 : {
            default: _0xf48079
        };
        var _0x29bd87 = _0x2af0c6('../../apps/callManage');
        var _0x1fb9a3 = _0x29bd87 && _0x29bd87.__esModule ? _0x29bd87 : {
            default: _0x29bd87
        };
        var _0x2a9412 = _0x2af0c6('../../apps/home');
        var _0x6e5433 = _0x2a9412 && _0x2a9412.__esModule ? _0x2a9412 : {
            default: _0x2a9412
        };
        var _0x30ead5 = _0x2af0c6('../../apps/phone');
        var _0x332c65 = _0x30ead5 && _0x30ead5.__esModule ? _0x30ead5 : {
            default: _0x30ead5
        };
        class _0x237674 extends _0x543dc7.default {
            constructor() {
                super('Smartphone');
            }
            ['showCallScreen']() {
                this.execute('showCallScreen()');
                _0x3a3f94.default.SmartphoneApp = 'PhoneScreen';
                mp.gui.cursor.visible = false;
            }
            ['refreshSmartphone']() {
                this.execute('refreshSmartphone()');
            }
            ['onEvent'](_0x4110c3, ..._0x13ceac) {
                if (_0x4110c3 == 'activateCurser') {
                    mp.gui.cursor.visible = true;
                } else {
                    if (_0x4110c3 == 'cleanSmartphone') {
                        _0x3a3f94.default.componentVisibleApp.Smartphone = null;
                    } else {
                        if (_0x4110c3 == 'callDeclined') {
                            _0x1fb9a3.default.declineCall();
                            _0x6e5433.default.declineCall();
                        } else {
                            if (_0x4110c3 == 'callAccepted') {
                                _0x1fb9a3.default.acceptedCall();
                            } else {
                                if (_0x4110c3 == 'micmute') {
                                    _0x1fb9a3.default.micmute();
                                } else {
                                    if (_0x4110c3 == 'getHomeScreen') {
                                        _0x332c65.default.getHomeScreen();
                                    } else if (_0x4110c3 == 'getHomeScreenCall') {
                                        _0x3a3f94.default.SmartphoneApp = 'MainScreen';
                                        _0x6e5433.default.getHomeScreenCall();
                                        _0x332c65.default.getHomeScreenCall();
                                        mp.gui.cursor.visible = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        _0xdf4b4b.default = new _0x237674();
    }, {
        '../../app/apps': 8,
        '../../apps/callManage': 17,
        '../../apps/home': 41,
        '../../apps/phone': 59,
        '../../components/component': 110
    }],
    184: [function (_0x309290, _0x19cd13, _0x593422) {
        'use strict';

        Object.defineProperty(_0x593422, '__esModule', {
            value: true
        });
        var _0x156175 = _0x309290('../../components/component');
        var _0x21f1f9 = _0x156175 && _0x156175.__esModule ? _0x156175 : {
            default: _0x156175
        };
        var _0x8e8598 = _0x309290('../../player/player');
        var _0x2ed664 = _0x8e8598 && _0x8e8598.__esModule ? _0x8e8598 : {
            default: _0x8e8598
        };
        var _0x4c5aad = _0x309290('../../browser/browser');
        var _0xa95834 = _0x4c5aad && _0x4c5aad.__esModule ? _0x4c5aad : {
            default: _0x4c5aad
        };
        class _0x48cfe5 extends _0x21f1f9.default {
            constructor() {
                super('VehiclePanel');
                this.count = 0;
                this.currentDistance = 0;
                this.currentFuelDistance = 0;
                this.currentInterval = null;
                this.speed = 0;
                this.engine = false;
                this.lock = false;
                this.tachoActive = false;
                this.isDriver = false;
                this.driverInterval = null;
                this.svehicle = null;
                mp.events.add('updateVehicleData', (_0x5d4a26, _0x252f24, _0x313fa6, _0x105fb0, _0x10c1ee) => {
                    _0xa95834.default.execute("events.UpdateVehHUD(\"fuel\", " + _0x5d4a26 + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"doorOpen\", " + !_0x105fb0 + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"engineOn\", " + _0x10c1ee + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"km\", " + _0x252f24 + ')');
                });
                mp.events.add('initialVehicleData', (_0x3c4014, _0x1eb40e, _0x19f99d, _0x220590, _0x3a185f, _0x490dae, _0x487088, _0x601b13) => {
                    _0xa95834.default.execute("events.UpdateVehHUD(\"fuel\", " + _0x3c4014 + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"maxFuel\", " + _0x1eb40e + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"doorOpen\", " + !_0x490dae + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"engineOn\", " + _0x601b13 + ')');
                    _0xa95834.default.execute("events.UpdateVehHUD(\"km\", " + _0x487088 + ')');
                });
                mp.events.add('setNormalSpeed', (_0x2f2793, _0x1101ee) => {
                    if (_0x2f2793 == null) {
                        return;
                    }
                    _0x1101ee = _0x1101ee / 3.6;
                    if (_0x1101ee > 0) {
                        _0x2f2793.setMaxSpeed(_0x1101ee);
                    } else {
                        _0x2f2793.setMaxSpeed(mp.game.vehicle.getVehicleModelMaxSpeed(_0x2f2793.model) * 1.609);
                    }
                    this.showTempomat(false);
                    this.svehicle = null;
                });
                mp.events.add('playerEnterVehicle', (_0x415b86, _0x2b74f3) => {
                    this.playerEnteredVehicle();
                });
                mp.events.add('playerLeaveVehicle', (_0x3523d6, _0x48e15c) => {
                    this.showTacho(false);
                    if (this.currentInterval != null) {
                        clearInterval(this.currentInterval);
                        this.currentInterval = null;
                    }
                    if (this.driverInterval != null) {
                        clearInterval(this.driverInterval);
                        this.isDriver = false;
                        this.driverInterval = null;
                    }
                });
            }
            ['playerEnteredVehicle']() {
                this.count = 0;
                this.currentDistance = 0;
                this.currentFuelDistance = 0;
                if (this.currentInterval != null) {
                    clearInterval(this.currentInterval);
                }
                if (mp.players.local.__animationData !== undefined && mp.players.local.__animationData != null && mp.players.local.__animationData.Active == true) {
                    mp.players.local.__animationData.Active = false;
                    mp.players.local.stopAnim(mp.players.local.__animationData.AnimationName, mp.players.local.__animationData.AnimationDict, mp.players.local.__animationData.AnimationSpeed);
                }
                this.driverInterval = setInterval(() => {
                    let _0x28b43c = mp.players.local;
                    let _0x36c179 = mp.players.local.vehicle;
                    if (_0x2ed664.default.isInAnyVehicle(false) && _0x36c179 !== null && _0x36c179.getPedInSeat(-1) == _0x28b43c.handle) {
                        this.isDriver = true;
                    } else {
                        this.isDriver = false;
                    }
                }, 400);
                this.currentInterval = setInterval(() => {
                    let _0x1152ec = mp.players.local;
                    let _0x34c56d = mp.players.local.vehicle;
                    if (_0x34c56d != null) {
                        let _0x319518 = _0x34c56d.getVariable('engineStatus');
                        let _0x4976c1 = _0x34c56d.getVariable('lockedStatus');
                        if (!this.tachoActive) {
                            this.showTacho(true);
                        }
                        let _0x42f9de = _0x34c56d.getSpeed();
                        _0x42f9de = _0x42f9de * 3.6;
                        if (this.speed != _0x42f9de) {
                            var _0x49f95b = false;
                            if (_0x42f9de == 0) {
                                _0x42f9de = 0;
                                _0x49f95b = true;
                            }
                            let _0x555485 = _0x42f9de;
                            _0x555485 /= 60;
                            _0x555485 /= 60;
                            _0x555485 /= 4;
                            this.currentFuelDistance += _0x555485 * (_0x42f9de / 50);
                            let _0x240383 = _0x34c56d.getSpeed();
                            if (!_0x49f95b) {
                                this.currentDistance += _0x240383;
                            }
                            this.setSpeed(Math.round(_0x42f9de));
                            this.count++;
                        }
                        this.setEngine(_0x319518);
                        this.setLocked(_0x4976c1);
                        _0xa95834.default.execute("events.UpdateVehHUD(\"rpm\", " + _0x34c56d.rpm + ')');
                        _0xa95834.default.execute("events.UpdateVehHUD(\"speed\", '" + Math.round(_0x34c56d.getSpeed() * 3.6) + "')");
                        _0xa95834.default.execute("events.UpdateVehHUD(\"gear\", " + _0x34c56d.gear + ')');
                        let _0x4e1944 = mp.game.pathfind.getStreetNameAtCoord(_0x1152ec.position.x, _0x1152ec.position.y, _0x1152ec.position.z, 0, 0);
                        _0xa95834.default.execute("events.UpdateVehHUD(\"street\", '" + mp.game.ui.getStreetNameFromHashKey(_0x4e1944.streetName) + "')");
                        if (this.count >= 100) {
                            this.currentDistance = this.currentDistance / 1000;
                            this.currentDistance = this.currentDistance / 100 * 2;
                            this.sendAndReset(_0x34c56d);
                            this.count = 0;
                        }
                    } else if (this.tachoActive) {
                        this.showTacho(false);
                    }
                }, 20);
            }
            ['sendAndReset'](_0x393dad) {
                if (this.currentDistance > 0.001 && _0x393dad != null) {
                    mp.events.callRemote('updateVehicleDistance', _0x393dad, Number(this.currentDistance.toFixed(3)), Number(this.currentFuelDistance.toFixed(3)));
                    this.currentDistance = 0;
                    this.currentFuelDistance = 0;
                }
            }
            ['showTacho'](_0xc1fc08) {
                this.tachoActive = _0xc1fc08;
                _0xa95834.default.execute('events.ToggleVehicleHud(' + _0xc1fc08 + ')');
            }
            ['setEngine'](_0x4e6980) {
                this.engine = _0x4e6980;
                _0xa95834.default.execute("events.UpdateVehHUD(\"engineOn\", " + _0x4e6980 + ')');
            }
            ['setLocked'](_0x411370) {
                this.lock = _0x411370;
                _0xa95834.default.execute("events.UpdateVehHUD(\"doorOpen\", " + !_0x411370 + ')');
            }
            ['showTempomat'](_0x4ff496) {
                this.execute('tempomat=' + (_0x4ff496 ? 'true' : 'false'));
            }
            ['requestNormalSpeed'](_0x23f8f4) {
                mp.events.callRemote('requestNormalSpeed', _0x23f8f4);
            }
            ['tempomat']() {
                var _0x5bd70f = mp.players.local.vehicle;
                if (_0x5bd70f == null) {
                    return;
                }
                if (mp.players.local.handle == _0x5bd70f.getPedInSeat(-1)) {
                    if (this.svehicle == _0x5bd70f) {
                        _0x5bd70f.setMaxSpeed(mp.game.vehicle.getVehicleModelMaxSpeed(_0x5bd70f.model) * 1.609);
                    } else if (_0x5bd70f.getSpeed() > 5) {
                        this.svehicle = _0x5bd70f;
                        _0x5bd70f.setMaxSpeed(_0x5bd70f.getSpeed());
                        this.showTempomat(true);
                    }
                }
            }
            ['setSpeed'](_0x5575f6) {
                this.speed = _0x5575f6;
            }
        }
        _0x593422.default = new _0x48cfe5();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    185: [function (_0x8c7132, _0x2ae9fc, _0x60a91c) {
        'use strict';

        Object.defineProperty(_0x60a91c, '__esModule', {
            value: true
        });
        var _0x3f309b = _0x8c7132('../../components/component');
        var _0x43541d = _0x3f309b && _0x3f309b.__esModule ? _0x3f309b : {
            default: _0x3f309b
        };
        var _0x1793d8 = _0x8c7132('../../player/player');
        var _0x47f6e1 = _0x1793d8 && _0x1793d8.__esModule ? _0x1793d8 : {
            default: _0x1793d8
        };
        var _0x245285 = _0x8c7132('../../vehicle/vehicle-module');
        var _0x16d5cd = _0x245285 && _0x245285.__esModule ? _0x245285 : {
            default: _0x245285
        };
        var _0xf2caa6 = _0x8c7132('../../vehicle/flatbed');
        var _0xca0a8e = _0xf2caa6 && _0xf2caa6.__esModule ? _0xf2caa6 : {
            default: _0xf2caa6
        };
        var _0x467444 = _0x8c7132('../../peds/peds');
        var _0x2ff0b4 = _0x467444 && _0x467444.__esModule ? _0x467444 : {
            default: _0x467444
        };
        var _0x56bc23 = _0x8c7132('../../raycast/raycast');
        var _0x2a319e = _0x56bc23 && _0x56bc23.__esModule ? _0x56bc23 : {
            default: _0x56bc23
        };
        class _0x193808 extends _0x43541d.default {
            constructor() {
                super('XMenu');
                this.visible = false;
                mp.events.add('selectXMENU', (_0xba89f1, _0x35aff0) => {
                    if (_0xba89f1 == 'AttachVeh' || _0xba89f1 == 'DepositoryVeh') {
                        _0xca0a8e.default.xmenuswitch(_0xba89f1);
                        return;
                    }
                    if (_0xba89f1 == 'PlayAnimFromNMenu') {
                        mp.events.callRemote('PlayAnimFromNMenu', _0x35aff0);
                        return;
                    }
                    if (_0xba89f1 == 'StopAnimationSlow') {
                        mp.events.call('stopAnimationSlow');
                        return;
                    }
                    if (_0x47f6e1.default.isInAnyVehicle(false)) {
                        if (_0xba89f1 == 'Handbreak') {
                            mp.events.callRemote('Handbreak');
                            return;
                        }
                        mp.events.callRemote(_0xba89f1, _0x35aff0);
                    } else {
                        let _0x3684f3 = _0x2a319e.default.createRaycast();
                        if (_0x3684f3 == null) {
                            return;
                        }
                        if (_0x35aff0 == '' || _0x35aff0 == undefined) {
                            mp.events.callRemote(_0xba89f1, _0x3684f3.entity);
                        } else {
                            mp.events.callRemote(_0xba89f1, _0x3684f3.entity, _0x35aff0);
                        }
                    }
                });
            }
            ['setItems'](_0x11e368) {
                if (_0x11e368 == null) {
                    return;
                }
                this.visible = _0x11e368.length > 0;
                this.execute("setDataItems('" + JSON.stringify(_0x11e368) + "')");
                if (this.visible) {
                    mp.gui.cursor.visible = true;
                } else {
                    mp.gui.cursor.visible = false;
                }
            }
            ['getItems']() {
                var _0x12dec4 = null;
                if (_0x47f6e1.default.isInAnyVehicle(false)) {
                    _0x12dec4 = [..._0x16d5cd.default.getVehicleItems()];
                } else {
                    let _0x12e122 = _0x2a319e.default.createRaycast();
                    if (_0x12e122 != null) {
                        let _0x3f9f47 = _0x47f6e1.default.getDistance(_0x12e122.position);
                        if (_0x12e122.entity.isAVehicle()) {
                            if (!_0x3f9f47 || _0x3f9f47 < 0 || _0x3f9f47 > 3) {
                                return _0x12dec4;
                            }
                            _0x12dec4 = [..._0x16d5cd.default.getVehicleItems()];
                        } else {
                            if (_0x12e122.entity.isAPed()) {
                                if (!_0x3f9f47 || _0x3f9f47 < 0 || _0x3f9f47 > 2) {
                                    return _0x12dec4;
                                }
                                _0x12dec4 = [..._0x2ff0b4.default.getPlayerMenuItems()];
                            }
                        }
                    }
                }
                return _0x12dec4;
            }
            ['onEvent'](_0x4a081b, ..._0xa16a0e) {
                if (_0x4a081b == 'select') {
                    if (_0x47f6e1.default.isInAnyVehicle(false)) {
                        if (_0xa16a0e[0].id == 'donothing') {
                            return;
                        } else {
                            if (_0xa16a0e[0].arg == 'dposclient') {
                                _0xca0a8e.default.xmenuswitch(_0xa16a0e[0].itemId);
                                return;
                            } else {
                                if (_0xa16a0e[0].arg == '' || _0xa16a0e[0].arg == undefined || _0xa16a0e[0].arg.length <= 0) {
                                    mp.events.callRemote(_0xa16a0e[0].itemId);
                                    return;
                                } else {
                                    if (_0xa16a0e[0].itemId == 'LOCAL_ACTION') {
                                        if (_0xa16a0e[0].arg == 'RadioOff') {
                                            mp.events.callRemote('Pressed_Num_3');
                                        }
                                        return;
                                    } else {
                                        mp.events.callRemote(_0xa16a0e[0].itemId, _0xa16a0e[0].arg);
                                    }
                                }
                            }
                        }
                    } else {
                        let _0x33a720 = _0x2a319e.default.createRaycast();
                        if (_0x33a720 == null) {
                            return;
                        }
                        if (_0xa16a0e[0].id == 'donothing') {
                            return;
                        } else {
                            if (_0xa16a0e[0].arg == '' || _0xa16a0e[0].arg == undefined || _0xa16a0e[0].arg.length <= 0) {
                                mp.events.callRemote(_0xa16a0e[0].itemId, _0x33a720.entity);
                            } else {
                                mp.events.callRemote(_0xa16a0e[0].itemId, _0x33a720.entity, _0xa16a0e[0].arg);
                            }
                        }
                    }
                }
            }
        }
        _0x60a91c.default = new _0x193808();
    }, {
        '../../components/component': 110,
        '../../peds/peds': 257,
        '../../player/player': 262,
        '../../raycast/raycast': 268,
        '../../vehicle/flatbed': 272,
        '../../vehicle/vehicle-module': 274
    }],
    186: [function (_0x3eb934, _0x4ba70e, _0x49459c) {
        'use strict';

        Object.defineProperty(_0x49459c, '__esModule', {
            value: true
        });
        var _0x5ac466 = _0x3eb934('../../components/component');
        var _0x54298b = _0x5ac466 && _0x5ac466.__esModule ? _0x5ac466 : {
            default: _0x5ac466
        };
        var _0x4730c2 = _0x3eb934('../../player/player');
        var _0x34e4d6 = _0x4730c2 && _0x4730c2.__esModule ? _0x4730c2 : {
            default: _0x4730c2
        };
        var _0x40dd2b = _0x3eb934('../../browser/browser');
        var _0x42941e = _0x40dd2b && _0x40dd2b.__esModule ? _0x40dd2b : {
            default: _0x40dd2b
        };
        class _0x5758e3 extends _0x54298b.default {
            constructor() {
                super('IdCard');
                mp.events.add('DisplayLicence', (_0x145328, _0x5240b2, _0x312dc1) => {
                    _0x42941e.default.execute("events.DisplayLicence('" + _0x145328 + "', '" + _0x5240b2 + "', '" + _0x312dc1 + "')");
                });
                mp.events.add('showDienstausweis', (_0xd98a99, _0x316688, _0x25c78b, _0x1bd012, _0x128879, _0x350e99, _0x289de5) => {
                    if (_0x34e4d6.default.cduty && _0x25c78b >= 1) {
                        if (_0x25c78b == 1) {
                            if (_0x350e99 == 1) {
                                this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '1', '" + _0x1bd012 + "', '" + _0x128879 + "', '1', '')");
                            } else {
                                this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '1', '" + _0x1bd012 + "', '" + _0x128879 + "', '0', '')");
                            }
                        } else {
                            if (_0x25c78b == 2) {
                                if (_0x350e99 == 1) {
                                    this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '2', '" + _0x1bd012 + "', '" + _0x128879 + "', '1', '')");
                                } else {
                                    this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '2', '" + _0x1bd012 + "', '" + _0x128879 + "', '0', '')");
                                }
                            } else {
                                if (_0x25c78b == 3) {
                                    if (_0x350e99 == 1) {
                                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '3', '" + _0x1bd012 + "', '" + _0x128879 + "', '1', '')");
                                    } else {
                                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '3', '" + _0x1bd012 + "', '" + _0x128879 + "', '0', '')");
                                    }
                                } else if (_0x25c78b == 4) {
                                    if (_0x350e99 == 1) {
                                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '4', '" + _0x1bd012 + "', '" + _0x128879 + "', '1', '')");
                                    } else {
                                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '4', '" + _0x1bd012 + "', '" + _0x128879 + "', '0', '')");
                                    }
                                }
                            }
                        }
                    } else if (_0x350e99 == 1) {
                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '0', '" + _0x1bd012 + "', '" + _0x128879 + "', '1', '" + _0x289de5 + "')");
                    } else {
                        this.execute("updateDutyCard('" + _0xd98a99 + "', '" + _0x316688 + "', '0', '" + _0x1bd012 + "', '" + _0x128879 + "', '0', '" + _0x289de5 + "')");
                    }
                });
            }
        }
        _0x49459c.default = new _0x5758e3();
    }, {
        '../../browser/browser': 100,
        '../../components/component': 110,
        '../../player/player': 262
    }],
    187: [function (_0x36409b, _0x59fdb4, _0x311612) {
        'use strict';

        Object.defineProperty(_0x311612, '__esModule', {
            value: true
        });
        var _0x1b7ecc = _0x36409b('../../windows/window');
        var _0x469738 = _0x1b7ecc && _0x1b7ecc.__esModule ? _0x1b7ecc : {
            default: _0x1b7ecc
        };
        class _0x51948c extends _0x469738.default {
            constructor() {
                super('Input');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onClose']() { }
        }
        _0x311612.default = new _0x51948c();
    }, {
        '../../player/player': 262,
        '../../windows/window': 277
    }],
    188: [function (_0x497d78, _0x4216ae, _0x271e27) {
        'use strict';

        _0x497d78('./input-window');
    }, {
        './input-window': 187
    }],
    189: [function (_0x164101, _0x33d2a9, _0x3fd95a) {
        'use strict';

        Object.defineProperty(_0x3fd95a, '__esModule', {
            value: true
        });
        var _0x1b2177 = _0x164101('../../windows/window');
        var _0x24c37f = _0x1b2177 && _0x1b2177.__esModule ? _0x1b2177 : {
            default: _0x1b2177
        };
        class _0x1fe285 extends _0x24c37f.default {
            constructor() {
                super('Insurance');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x3fd95a.default = new _0x1fe285();
    }, {
        '../../windows/window': 277
    }],
    190: [function (_0xd0baf4, _0x8f8042, _0x4bd96d) {
        'use strict';

        _0xd0baf4('./login/login');
        _0xd0baf4('./register/register');
        _0xd0baf4('./bann/bann');
        _0xd0baf4('./housemenu/housemenu');
        _0xd0baf4('./kick/kick');
        _0xd0baf4('./hud/hud');
        _0xd0baf4('./hud/menu');
        _0xd0baf4('./hud/x-menu');
        _0xd0baf4('./hud/n-menu');
        _0xd0baf4('./hud/vehicle-panel');
        _0xd0baf4('./hud/help-panel');
        _0xd0baf4('./scratchcard/scratchcard');
        _0xd0baf4('./caseopening/caseopening');
        _0xd0baf4('./hud/paytime');
        _0xd0baf4('./hud/player-panel');
        _0xd0baf4('./hud/globalnotification');
        _0xd0baf4('./hud/playerinfo');
        _0xd0baf4('./hud/playernotification');
        _0xd0baf4('./hud/progressbar');
        _0xd0baf4('./inventory/inventory');
        _0xd0baf4('./vehicleshop/vehicleshop');
        _0xd0baf4('./base/base');
        _0xd0baf4('./seller/seller');
        _0xd0baf4('./camper/camper');
        _0xd0baf4('./vehicleoverview/vehicleoverview');
        _0xd0baf4('./support/support');
        _0xd0baf4('./servicelist/servicelist');
        _0xd0baf4('./police-computer/policecomputer');
        _0xd0baf4('./workstation/workstation');
        _0xd0baf4('./vehiclerent/vehiclerent');
        _0xd0baf4('./petbuy/petbuy');
        _0xd0baf4('./ejectwindow/ejectwindow');
        _0xd0baf4('./payment/payment');
        _0xd0baf4('./radio/radio');
        _0xd0baf4('./bank/bank');
        _0xd0baf4('./gangwarstats/gangwarstats');
        _0xd0baf4('./methlab/methlab');
        _0xd0baf4('./cannabislab/cannabislab');
        _0xd0baf4('./flyer/flyer');
        _0xd0baf4('./ticketmachine/ticketmachine');
        _0xd0baf4('./garage/garage');
        _0xd0baf4('./funk/funk');
        _0xd0baf4('./phone/phone');
        _0xd0baf4('./changephonenumber/changephonenumber');
        _0xd0baf4('./id-card/id-card');
        _0xd0baf4('./licenses/licenses');
        _0xd0baf4('./playeroverview/playeroverview');
        _0xd0baf4('./gangwar/gangwarstart');
        _0xd0baf4('./gangwar/gangwarweaponselect');
        _0xd0baf4('./shop/shop');
        _0xd0baf4('./searchmenu/searchmenu');
        _0xd0baf4('./selfmenu/self');
        _0xd0baf4('./storage/storageroom');
        _0xd0baf4('./selfmenu/team');
        _0xd0baf4('./animmenu/animmenu');
        _0xd0baf4('./basementserver/basementserver');
        _0xd0baf4('./paintball/paintballlobby');
        _0xd0baf4('./paintball/paintballpoint');
        _0xd0baf4('./paintball/paintballstatistic');
        _0xd0baf4('./lifeinvader/lifeinvader');
        _0xd0baf4('./fuelstation/fuelstation');
        _0xd0baf4('./reactiongame/reactiongame');
        _0xd0baf4('./basementworkstation/basementworkstation');
        _0xd0baf4('./insurance/insurance');
        _0xd0baf4('./chat/chat');
        _0xd0baf4('./giveMoney/giveMoney');
        _0xd0baf4('./confirm/confirm');
        _0xd0baf4('./input/input');
        _0xd0baf4('./character-creator/character-creator');
        _0xd0baf4('./keys/keys');
        _0xd0baf4('./death/death');
        _0xd0baf4('./frisk/frisk');
        _0xd0baf4('./tattoo/tattoo');
        _0xd0baf4('./carshop/carshop');
        _0xd0baf4('./hud/gangwar');
        _0xd0baf4('./hud/fishing');
        _0xd0baf4('./hud/paintball');
        _0xd0baf4('./hud/infocard');
        _0xd0baf4('./hud/smartphone');
        _0xd0baf4('./barber/barber');
        _0xd0baf4('./casino/slotmachine');
        _0xd0baf4('./hud/nutrition');
        _0xd0baf4('./clothing-shop/clothing-shop');
        _0xd0baf4('./tattoo-license/tattoo-license');
        _0xd0baf4('./wardrobe/wardrobe');
        _0xd0baf4('./animation/animation-wheel-favorites-list-window');
        _0xd0baf4('./rims/rims');
        _0xd0baf4('./loader/loader');
        _0xd0baf4('./tipico/tipico');
    }, {
        './animation/animation-wheel-favorites-list-window': 113,
        './animmenu/animmenu': 115,
        './bank/bank': 117,
        './bann/bann': 119,
        './barber/barber': 120,
        './base/base': 122,
        './basementserver/basementserver': 124,
        './basementworkstation/basementworkstation': 126,
        './camper/camper': 128,
        './cannabislab/cannabislab': 130,
        './carshop/carshop': 132,
        './caseopening/caseopening': 134,
        './casino/slotmachine': 135,
        './changephonenumber/changephonenumber': 137,
        './character-creator/character-creator': 138,
        './chat/chat': 140,
        './clothing-shop/clothing-shop': 141,
        './confirm/confirm': 143,
        './death/death': 145,
        './ejectwindow/ejectwindow': 146,
        './flyer/flyer': 148,
        './frisk/frisk': 150,
        './fuelstation/fuelstation': 152,
        './funk/funk': 154,
        './gangwar/gangwarstart': 156,
        './gangwar/gangwarweaponselect': 158,
        './gangwarstats/gangwarstats': 160,
        './garage/garage': 162,
        './giveMoney/giveMoney': 164,
        './housemenu/housemenu': 166,
        './hud/fishing': 168,
        './hud/gangwar': 169,
        './hud/globalnotification': 170,
        './hud/help-panel': 171,
        './hud/hud': 172,
        './hud/infocard': 173,
        './hud/menu': 174,
        './hud/n-menu': 175,
        './hud/nutrition': 176,
        './hud/paintball': 177,
        './hud/paytime': 178,
        './hud/player-panel': 179,
        './hud/playerinfo': 180,
        './hud/playernotification': 181,
        './hud/progressbar': 182,
        './hud/smartphone': 183,
        './hud/vehicle-panel': 184,
        './hud/x-menu': 185,
        './id-card/id-card': 186,
        './input/input': 188,
        './insurance/insurance': 189,
        './inventory/inventory': 192,
        './keys/keys': 193,
        './kick/kick': 195,
        './licenses/licenses': 196,
        './lifeinvader/lifeinvader': 198,
        './loader/loader': 199,
        './login/login': 201,
        './methlab/methlab': 203,
        './paintball/paintballlobby': 205,
        './paintball/paintballpoint': 207,
        './paintball/paintballstatistic': 209,
        './payment/payment': 210,
        './petbuy/petbuy': 211,
        './phone/phone': 213,
        './playeroverview/playeroverview': 215,
        './police-computer/policecomputer': 217,
        './radio/radio': 218,
        './reactiongame/reactiongame': 220,
        './register/register': 222,
        './rims/rims': 223,
        './scratchcard/scratchcard': 225,
        './searchmenu/searchmenu': 226,
        './selfmenu/self': 228,
        './selfmenu/team': 230,
        './seller/seller': 232,
        './servicelist/servicelist': 234,
        './shop/shop': 235,
        './storage/storageroom': 237,
        './support/support': 239,
        './tattoo-license/tattoo-license': 240,
        './tattoo/tattoo': 242,
        './ticketmachine/ticketmachine': 244,
        './tipico/tipico': 246,
        './vehicleoverview/vehicleoverview': 248,
        './vehiclerent/vehiclerent': 249,
        './vehicleshop/vehicleshop': 251,
        './wardrobe/wardrobe': 252,
        './workstation/workstation': 253
    }],
    191: [function (_0xab7b00, _0x590e49, _0x30ddb9) {
        'use strict';

        Object.defineProperty(_0x30ddb9, '__esModule', {
            value: true
        });
        var _0x2827c6 = _0xab7b00('../../windows/window');
        var _0x8ce642 = _0x2827c6 && _0x2827c6.__esModule ? _0x2827c6 : {
            default: _0x2827c6
        };
        class _0x5e0bc2 extends _0x8ce642.default {
            constructor() {
                super('Inventory');
                this.setCurserVisible(true);
                this.forwardableEvents.add('responseInventoryClothes');
            }
        }
        _0x30ddb9.default = new _0x5e0bc2();
    }, {
        '../../windows/window': 277
    }],
    192: [function (_0x388da6, _0x4b0fb6, _0x2d8347) {
        'use strict';

        _0x388da6('./inventory-window');
    }, {
        './inventory-window': 191
    }],
    193: [function (_0x1ae09b, _0x3e771f, _0x1d2589) {
        'use strict';

        Object.defineProperty(_0x1d2589, '__esModule', {
            value: true
        });
        var _0x3457d0 = _0x1ae09b('../../windows/window');
        var _0x1d312d = _0x3457d0 && _0x3457d0.__esModule ? _0x3457d0 : {
            default: _0x3457d0
        };
        class _0x189ac6 extends _0x1d312d.default {
            constructor() {
                super('Keys');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x1d2589.default = new _0x189ac6();
    }, {
        '../../windows/window': 277
    }],
    194: [function (_0x4347f8, _0x13e13e, _0x16a10f) {
        'use strict';

        Object.defineProperty(_0x16a10f, '__esModule', {
            value: true
        });
        var _0x4a7008 = _0x4347f8('../../windows/window');
        var _0x2209cb = _0x4a7008 && _0x4a7008.__esModule ? _0x4a7008 : {
            default: _0x4a7008
        };
        class _0xa74f61 extends _0x2209cb.default {
            constructor() {
                super('Kick');
            }
        }
        _0x16a10f.default = new _0xa74f61();
    }, {
        '../../windows/window': 277
    }],
    195: [function (_0x497e6d, _0x2a6b49, _0x484b8b) {
        'use strict';

        _0x497e6d('./kick-window');
    }, {
        './kick-window': 194
    }],
    196: [function (_0x10b7b, _0x32b585, _0x5dac58) {
        'use strict';

        Object.defineProperty(_0x5dac58, '__esModule', {
            value: true
        });
        var _0x493c89 = _0x10b7b('../../windows/window');
        var _0x3c9f36 = _0x493c89 && _0x493c89.__esModule ? _0x493c89 : {
            default: _0x493c89
        };
        class _0x13bdd8 extends _0x3c9f36.default {
            constructor() {
                super('Licences');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
        }
        _0x5dac58.default = new _0x13bdd8();
    }, {
        '../../windows/window': 277
    }],
    197: [function (_0x3662d2, _0x464245, _0x4a7a07) {
        'use strict';

        Object.defineProperty(_0x4a7a07, '__esModule', {
            value: true
        });
        var _0x3095ea = _0x3662d2('../../windows/window');
        var _0x490cca = _0x3095ea && _0x3095ea.__esModule ? _0x3095ea : {
            default: _0x3095ea
        };
        var _0x42fca0 = _0x3662d2('../../browser/browser');
        var _0x3426bc = _0x42fca0 && _0x42fca0.__esModule ? _0x42fca0 : {
            default: _0x42fca0
        };
        class _0x5c920b extends _0x490cca.default {
            constructor() {
                super('LifeInvader');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
                mp.events.add('LifeInvaderTime', _0x502ea3 => {
                    _0x3426bc.default.execute('events.LifeInvaderTime(' + _0x502ea3 + ')');
                });
                mp.events.add('SendLifeInvaderMessages', _0x541764 => {
                    _0x3426bc.default.execute("events.SendLifeInvaderMessages('" + _0x541764 + "')");
                });
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x4a7a07.default = new _0x5c920b();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    198: [function (_0x2ec4f7, _0x5715f2, _0x3d0541) {
        'use strict';

        _0x2ec4f7('./lifeinvader-window');
    }, {
        './lifeinvader-window': 197
    }],
    199: [function (_0x117d28, _0x5acc9b, _0x1ce4e4) {
        'use strict';

        Object.defineProperty(_0x1ce4e4, '__esModule', {
            value: true
        });
        var _0x347f2c = _0x117d28('../../components/component');
        var _0x3fe4d3 = _0x347f2c && _0x347f2c.__esModule ? _0x347f2c : {
            default: _0x347f2c
        };
        class _0x2bccc4 extends _0x3fe4d3.default {
            constructor() {
                super('Loader');
                this.forwardableEvents.add('ShowLoader');
                this.forwardableEvents.add('ChangeMessage');
                this.forwardableEvents.add('HideLoader');
            }
        }
        _0x1ce4e4.default = new _0x2bccc4();
    }, {
        '../../components/component': 110
    }],
    200: [function (_0x15bf8d, _0x363d11, _0x14b1e8) {
        'use strict';

        Object.defineProperty(_0x14b1e8, '__esModule', {
            value: true
        });
        var _0x689c57 = _0x15bf8d('../../windows/window');
        var _0x24e1ab = _0x689c57 && _0x689c57.__esModule ? _0x689c57 : {
            default: _0x689c57
        };
        var _0x35fce7 = _0x15bf8d('../../player/player');
        var _0x259872 = _0x35fce7 && _0x35fce7.__esModule ? _0x35fce7 : {
            default: _0x35fce7
        };
        class _0x540785 extends _0x24e1ab.default {
            constructor() {
                super('Login');
                this.forwardableEvents.add('status');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onEvent'](_0x2adc06, ..._0x26f1ed) {
                switch (_0x2adc06) {
                    case 'rank':
                        _0x259872.default.rank = _0x26f1ed[0];
                        return;
                }
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x14b1e8.default = new _0x540785();
    }, {
        '../../player/player': 262,
        '../../windows/window': 277
    }],
    201: [function (_0x5653e2, _0x407db2, _0x37cba3) {
        'use strict';

        _0x5653e2('./login-window');
    }, {
        './login-window': 200
    }],
    202: [function (_0x20617e, _0x17be35, _0x2b168a) {
        'use strict';

        Object.defineProperty(_0x2b168a, '__esModule', {
            value: true
        });
        var _0x2b331e = _0x20617e('../../windows/window');
        var _0x467fc3 = _0x2b331e && _0x2b331e.__esModule ? _0x2b331e : {
            default: _0x2b331e
        };
        class _0x1452ec extends _0x467fc3.default {
            constructor() {
                super('MethLabor');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x2b168a.default = new _0x1452ec();
    }, {
        '../../windows/window': 277
    }],
    203: [function (_0x3237b7, _0x40dda7, _0x22b372) {
        'use strict';

        _0x3237b7('./methlab-window');
    }, {
        './methlab-window': 202
    }],
    204: [function (_0x1fa9b4, _0x35594b, _0x149ad8) {
        'use strict';

        Object.defineProperty(_0x149ad8, '__esModule', {
            value: true
        });
        var _0x292f15 = _0x1fa9b4('../../windows/window');
        var _0x1708cd = _0x292f15 && _0x292f15.__esModule ? _0x292f15 : {
            default: _0x292f15
        };
        var _0x22d445 = _0x1fa9b4('../../browser/browser');
        var _0x434cd5 = _0x22d445 && _0x22d445.__esModule ? _0x22d445 : {
            default: _0x22d445
        };
        class _0x2cbc25 extends _0x1708cd.default {
            constructor() {
                super('PaintballLobby');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
                mp.events.add('RemovePaintballParticipant', _0x5efec1 => {
                    _0x434cd5.default.execute('events.RemovePaintballParticipant(' + _0x5efec1 + ')');
                });
                mp.events.add('JoinPaintballLobby', (_0x565673, _0x21628f) => {
                    _0x434cd5.default.execute('events.JoinPaintballLobby(' + _0x565673 + ", '" + _0x21628f + "')");
                });
                mp.events.add('UpdatePaintballConfig', (_0x3bb70c, _0x12eb99, _0x4a552b) => {
                    _0x434cd5.default.execute('events.UpdatePaintballConfig(' + _0x3bb70c + ', ' + _0x12eb99 + ', ' + _0x4a552b + ')');
                });
                mp.events.add('SelectPaintballTeam', (_0x511a76, _0x3ffed7) => {
                    _0x434cd5.default.execute('events.SelectPaintballTeam(' + _0x511a76 + ', ' + _0x3ffed7 + ')');
                });
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x149ad8.default = new _0x2cbc25();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    205: [function (_0x169b6d, _0x3b2bf7, _0x20f83a) {
        'use strict';

        _0x169b6d('./paintballlobby-window');
    }, {
        './paintballlobby-window': 204
    }],
    206: [function (_0x436a69, _0x2bb2b9, _0xe1491d) {
        'use strict';

        Object.defineProperty(_0xe1491d, '__esModule', {
            value: true
        });
        var _0x4cb31f = _0x436a69('../../windows/window');
        var _0x36f153 = _0x4cb31f && _0x4cb31f.__esModule ? _0x4cb31f : {
            default: _0x4cb31f
        };
        class _0x20b3a5 extends _0x36f153.default {
            constructor() {
                super('PaintballPoint');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0xe1491d.default = new _0x20b3a5();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    207: [function (_0x50f8ae, _0x8e8bdb, _0x5e485d) {
        'use strict';

        _0x50f8ae('./paintballpoint-window');
    }, {
        './paintballpoint-window': 206
    }],
    208: [function (_0x632654, _0x14908f, _0x21c10a) {
        'use strict';

        Object.defineProperty(_0x21c10a, '__esModule', {
            value: true
        });
        var _0x5a7e3c = _0x632654('../../windows/window');
        var _0x56f864 = _0x5a7e3c && _0x5a7e3c.__esModule ? _0x5a7e3c : {
            default: _0x5a7e3c
        };
        class _0x1b1e6 extends _0x56f864.default {
            constructor() {
                super('PaintballStatistic');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x21c10a.default = new _0x1b1e6();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    209: [function (_0x2a17ba, _0x21dc7f, _0x3892b2) {
        'use strict';

        _0x2a17ba('./paintballstatistic-window');
    }, {
        './paintballstatistic-window': 208
    }],
    210: [function (_0x3b71da, _0x524e5d, _0x1c853e) {
        'use strict';

        Object.defineProperty(_0x1c853e, '__esModule', {
            value: true
        });
        var _0x55d2fd = _0x3b71da('../../windows/window');
        var _0x5e5430 = _0x55d2fd && _0x55d2fd.__esModule ? _0x55d2fd : {
            default: _0x55d2fd
        };
        class _0x85e7cb extends _0x5e5430.default {
            constructor() {
                super('Payment');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x1c853e.default = new _0x85e7cb();
    }, {
        '../../windows/window': 277
    }],
    211: [function (_0x2f17b3, _0x1454de, _0xfadd72) {
        'use strict';

        Object.defineProperty(_0xfadd72, '__esModule', {
            value: true
        });
        var _0x467736 = _0x2f17b3('../../windows/window');
        var _0x357583 = _0x467736 && _0x467736.__esModule ? _0x467736 : {
            default: _0x467736
        };
        class _0x1c6463 extends _0x357583.default {
            constructor() {
                super('PetBuy');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0xfadd72.default = new _0x1c6463();
    }, {
        '../../windows/window': 277
    }],
    212: [function (_0x33759d, _0x5efbdf, _0x45b754) {
        'use strict';

        Object.defineProperty(_0x45b754, '__esModule', {
            value: true
        });
        var _0x225e85 = _0x33759d('../../windows/window');
        var _0x236152 = _0x225e85 && _0x225e85.__esModule ? _0x225e85 : {
            default: _0x225e85
        };
        var _0x1f074b = _0x33759d('../../browser/browser');
        var _0x398056 = _0x1f074b && _0x1f074b.__esModule ? _0x1f074b : {
            default: _0x1f074b
        };
        class _0x55a41e extends _0x236152.default {
            constructor() {
                super('Phone');
                this.setCurserVisible(true);
                mp.events.add('RsContacts', (_0x73fe77, _0x19b23a) => {
                    _0x398056.default.execute("events.RsContacts('" + _0x73fe77 + "', " + _0x19b23a + ')');
                });
                mp.events.add('SendWallpapers', _0x51c120 => {
                    _0x398056.default.execute("events.SendWallpapers('" + _0x51c120 + "')");
                });
                mp.events.add('UpdateWallpaper', _0x2c06ac => {
                    _0x398056.default.execute("events.UpdateWallpaper('" + _0x2c06ac + "')");
                });
                mp.events.add('UpdateRingtone', _0xef7e27 => {
                    _0x398056.default.execute("events.UpdateRingtone('" + _0xef7e27 + "')");
                });
                mp.events.add('RsWareExportPrices', (_0x8a6629, _0x1f354b) => {
                    _0x398056.default.execute("events.RsWareExportPrices('" + _0x8a6629 + "', " + _0x1f354b + ')');
                });
                mp.events.add('SendNavigationVehicles', _0x32c9d4 => {
                    _0x398056.default.execute("events.SendNavigationVehicles('" + _0x32c9d4 + "')");
                });
                mp.events.add('SendNavigationPublic', _0x57dc74 => {
                    _0x398056.default.execute("events.SendNavigationPublic('" + _0x57dc74 + "')");
                });
                mp.events.add('GoToHomePage', () => {
                    _0x398056.default.execute('events.GoToHomePage()');
                });
                mp.events.add('SendPhoneSettings', (_0x122076, _0x497f86, _0x3aedb6, _0x3efd0c) => {
                    _0x398056.default.execute('events.SendPhoneSettings(' + _0x122076 + ', ' + _0x497f86 + ', ' + _0x3aedb6 + ', ' + _0x3efd0c + ')');
                });
                mp.events.add('CallApp', (_0xac4e, _0x46f386) => {
                    _0x398056.default.execute('events.CallApp(' + _0xac4e + ', ' + _0x46f386 + ')');
                });
                mp.events.add('RsChats', _0x2dd275 => {
                    _0x398056.default.execute("events.RsChats('" + _0x2dd275 + "')");
                });
                mp.events.add('RsChat', _0x7ff0db => {
                    _0x398056.default.execute("events.RsChat('" + _0x7ff0db + "')");
                });
                mp.events.add('RsRmChat', (_0x4a22b0, _0x15e52d, _0x98d4ba, _0x53c944) => {
                    _0x398056.default.execute('events.RsRmChat(' + _0x4a22b0 + ', ' + _0x15e52d + ", '" + _0x98d4ba + "', " + _0x53c944 + ')');
                });
                mp.events.add('RsCharacterInfo', _0x1cbadf => {
                    _0x398056.default.execute("events.RsCharacterInfo('" + _0x1cbadf + "')");
                });
                mp.events.add('RsBankAppValue', _0x5b826f => {
                    _0x398056.default.execute('events.RsBankAppValue(' + _0x5b826f + ')');
                });
                mp.events.add('RsBankAppHistory', _0x378b65 => {
                    _0x398056.default.execute("events.RsBankAppHistory('" + _0x378b65 + "')");
                });
                mp.events.add('RsCryptoWallet', _0x5c4a6b => {
                    _0x398056.default.execute("events.RsCryptoWallet('" + _0x5c4a6b + "')");
                });
                mp.events.add('RsCryptoMarketOffers', _0x1c7634 => {
                    _0x398056.default.execute("events.RsCryptoMarketOffers('" + _0x1c7634 + "')");
                });
                mp.events.add('RsTransferCrypto', _0x565c64 => {
                    _0x398056.default.execute('events.RsTransferCrypto(' + _0x565c64 + ')');
                });
            }
        }
        _0x45b754.default = new _0x55a41e();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    213: [function (_0x21922c, _0x2e7eb5, _0x23e61c) {
        'use strict';

        _0x21922c('./phone-window');
    }, {
        './phone-window': 212
    }],
    214: [function (_0x14c1d2, _0x2cbc1a, _0x1e8fba) {
        'use strict';

        Object.defineProperty(_0x1e8fba, '__esModule', {
            value: true
        });
        var _0xc3964e = _0x14c1d2('../../windows/window');
        var _0x132faa = _0xc3964e && _0xc3964e.__esModule ? _0xc3964e : {
            default: _0xc3964e
        };
        class _0x9616b3 extends _0x132faa.default {
            constructor() {
                super('PlayerOverview');
                this.setCurserVisible(true);
            }
        }
        _0x1e8fba.default = new _0x9616b3();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    215: [function (_0x40395c, _0x205a04, _0x275ac0) {
        'use strict';

        _0x40395c('./playeroverview-window');
    }, {
        './playeroverview-window': 214
    }],
    216: [function (_0x2d9e69, _0x2ff458, _0x48d9bb) {
        'use strict';

        Object.defineProperty(_0x48d9bb, '__esModule', {
            value: true
        });
        var _0x16f634 = _0x2d9e69('../../windows/window');
        var _0x32985e = _0x16f634 && _0x16f634.__esModule ? _0x16f634 : {
            default: _0x16f634
        };
        var _0x105975 = _0x2d9e69('../../browser/browser');
        var _0xeb7b01 = _0x105975 && _0x105975.__esModule ? _0x105975 : {
            default: _0x105975
        };
        class _0x35119c extends _0x32985e.default {
            constructor() {
                super('PoliceComputer');
                this.setCurserVisible(true);
                mp.events.add('SendPolPlayers', _0x8c29b0 => {
                    _0xeb7b01.default.execute("events.SendPolPlayers('" + _0x8c29b0 + "')");
                });
                mp.events.add('SendPolPlayerWanteds', _0x35cec4 => {
                    _0xeb7b01.default.execute("events.SendPolPlayerWanteds('" + _0x35cec4 + "')");
                });
                mp.events.add('RsRestrictedZones', _0x1a00e9 => {
                    _0xeb7b01.default.execute("events.RsRestrictedZones('" + _0x1a00e9 + "')");
                });
            }
        }
        _0x48d9bb.default = new _0x35119c();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    217: [function (_0x441806, _0x3a6dcf, _0xd4ff92) {
        'use strict';

        _0x441806('./policecomputer-window');
    }, {
        './policecomputer-window': 216
    }],
    218: [function (_0x20bd3c, _0x33c261, _0x17c209) {
        'use strict';

        Object.defineProperty(_0x17c209, '__esModule', {
            value: true
        });
        var _0x4baf02 = _0x20bd3c('../../windows/window');
        var _0x53dc4c = _0x4baf02 && _0x4baf02.__esModule ? _0x4baf02 : {
            default: _0x4baf02
        };
        class _0x55f414 extends _0x53dc4c.default {
            constructor() {
                super('Radio');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onEvent'](_0x19a443, ..._0x3d3476) {
                switch (_0x19a443) {
                    case 'vehicleRadio':
                        if (mp.players.local.vehicle == null) {
                            return;
                        }
                        mp.events.callRemote('sound:' + _0x3d3476[0].type, mp.players.local.vehicle.remoteId);
                        return;
                    case 'newRadioSound':
                        if (mp.players.local.vehicle == null) {
                            return;
                        }
                        mp.events.callRemote('sound:create', mp.players.local.vehicle.remoteId, _0x3d3476[0].url, 8, _0x3d3476[0].volume, 1000);
                        return;
                    case 'setVolume':
                        if (mp.players.local.vehicle == null) {
                            return;
                        }
                        mp.events.callRemote('sound:setVolume', mp.players.local.vehicle.remoteId, _0x3d3476[0].volume);
                        return;
                }
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x17c209.default = new _0x55f414();
    }, {
        '../../windows/window': 277
    }],
    219: [function (_0x50c6c4, _0x373423, _0x58e2fb) {
        'use strict';

        Object.defineProperty(_0x58e2fb, '__esModule', {
            value: true
        });
        var _0x4a2189 = _0x50c6c4('../../windows/window');
        var _0x53b56b = _0x4a2189 && _0x4a2189.__esModule ? _0x4a2189 : {
            default: _0x4a2189
        };
        class _0xa41cf1 extends _0x53b56b.default {
            constructor() {
                super('ReactionGame');
                this.setCurserVisible(true);
            }
        }
        _0x58e2fb.default = new _0xa41cf1();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    220: [function (_0x54c22d, _0x428d7e, _0x124cd4) {
        'use strict';

        _0x54c22d('./reactiongame-window');
    }, {
        './reactiongame-window': 219
    }],
    221: [function (_0x131ba4, _0x3b5601, _0x1d63ea) {
        'use strict';

        Object.defineProperty(_0x1d63ea, '__esModule', {
            value: true
        });
        var _0x414540 = _0x131ba4('../../windows/window');
        var _0x2b94d6 = _0x414540 && _0x414540.__esModule ? _0x414540 : {
            default: _0x414540
        };
        class _0x5b6431 extends _0x2b94d6.default {
            constructor() {
                super('Register');
            }
        }
        _0x1d63ea.default = new _0x5b6431();
    }, {
        '../../windows/window': 277
    }],
    222: [function (_0xca9092, _0x4450fa, _0x38b1b4) {
        'use strict';

        _0xca9092('./register-window');
    }, {
        './register-window': 221
    }],
    223: [function (_0x497ce8, _0x14aba0, _0x53ac58) {
        'use strict';

        Object.defineProperty(_0x53ac58, '__esModule', {
            value: true
        });
        var _0xdb3eb2 = _0x497ce8('../../windows/window');
        var _0x24df76 = _0xdb3eb2 && _0xdb3eb2.__esModule ? _0xdb3eb2 : {
            default: _0xdb3eb2
        };
        class _0x23b1f7 extends _0x24df76.default {
            constructor() {
                super('Rims');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseTuningRims');
                this.forwardableEvents.add('responseTuningCategoryRims');
            }
        }
        _0x53ac58.default = new _0x23b1f7();
    }, {
        '../../windows/window': 277
    }],
    224: [function (_0x20f2d8, _0x246a81, _0x5bdbf8) {
        'use strict';

        Object.defineProperty(_0x5bdbf8, '__esModule', {
            value: true
        });
        var _0x43c7a6 = _0x20f2d8('../../windows/window');
        var _0x52f5fd = _0x43c7a6 && _0x43c7a6.__esModule ? _0x43c7a6 : {
            default: _0x43c7a6
        };
        class _0xa15643 extends _0x52f5fd.default {
            constructor() {
                super('Scratchcard');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x5bdbf8.default = new _0xa15643();
    }, {
        '../../windows/window': 277
    }],
    225: [function (_0x1f1d50, _0x5df739, _0x97dd74) {
        'use strict';

        _0x1f1d50('./scratchcard-window');
    }, {
        './scratchcard-window': 224
    }],
    226: [function (_0x37af9e, _0x2c1a49, _0x1bbf94) {
        'use strict';

        Object.defineProperty(_0x1bbf94, '__esModule', {
            value: true
        });
        var _0x1f6eea = _0x37af9e('../../windows/window');
        var _0x3d8039 = _0x1f6eea && _0x1f6eea.__esModule ? _0x1f6eea : {
            default: _0x1f6eea
        };
        class _0x550f8c extends _0x3d8039.default {
            constructor() {
                super('SearchMenu');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x1bbf94.default = new _0x550f8c();
    }, {
        '../../windows/window': 277
    }],
    227: [function (_0x4dde3a, _0x121837, _0x4f97f5) {
        'use strict';

        Object.defineProperty(_0x4f97f5, '__esModule', {
            value: true
        });
        var _0x32aaaa = _0x4dde3a('../../windows/window');
        var _0x3f5c32 = _0x32aaaa && _0x32aaaa.__esModule ? _0x32aaaa : {
            default: _0x32aaaa
        };
        class _0xe1af02 extends _0x3f5c32.default {
            constructor() {
                super('Self');
                this.setCurserVisible(true);
            }
        }
        _0x4f97f5.default = new _0xe1af02();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    228: [function (_0x53b646, _0x2272b8, _0x4e8254) {
        'use strict';

        _0x53b646('./self-window');
    }, {
        './self-window': 227
    }],
    229: [function (_0x3301bf, _0x23db23, _0x3de784) {
        'use strict';

        Object.defineProperty(_0x3de784, '__esModule', {
            value: true
        });
        var _0x4d86aa = _0x3301bf('../../windows/window');
        var _0x4ea0d7 = _0x4d86aa && _0x4d86aa.__esModule ? _0x4d86aa : {
            default: _0x4d86aa
        };
        var _0x22ab09 = _0x3301bf('../../browser/browser');
        var _0x43be77 = _0x22ab09 && _0x22ab09.__esModule ? _0x22ab09 : {
            default: _0x22ab09
        };
        class _0x39fd22 extends _0x4ea0d7.default {
            constructor() {
                super('Team');
                this.setCurserVisible(true);
                mp.events.add('RsTeam', _0x45eb04 => {
                    _0x43be77.default.execute("events.RsTeam('" + _0x45eb04 + "')");
                });
            }
        }
        _0x3de784.default = new _0x39fd22();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    230: [function (_0x581060, _0x5361d7, _0x2afe71) {
        'use strict';

        _0x581060('./team-window');
    }, {
        './team-window': 229
    }],
    231: [function (_0x285d37, _0x54ef3e, _0x4a0120) {
        'use strict';

        Object.defineProperty(_0x4a0120, '__esModule', {
            value: true
        });
        var _0x2933e1 = _0x285d37('../../windows/window');
        var _0x29d704 = _0x2933e1 && _0x2933e1.__esModule ? _0x2933e1 : {
            default: _0x2933e1
        };
        class _0x53a730 extends _0x29d704.default {
            constructor() {
                super('Seller');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
        }
        _0x4a0120.default = new _0x53a730();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    232: [function (_0x48b443, _0x2fff5e, _0x44b018) {
        'use strict';

        _0x48b443('./seller-window');
    }, {
        './seller-window': 231
    }],
    233: [function (_0x8a5654, _0x1e4582, _0x3d24b3) {
        'use strict';

        Object.defineProperty(_0x3d24b3, '__esModule', {
            value: true
        });
        var _0x512081 = _0x8a5654('../../windows/window');
        var _0x9900ac = _0x512081 && _0x512081.__esModule ? _0x512081 : {
            default: _0x512081
        };
        var _0x5ec03d = _0x8a5654('../../browser/browser');
        var _0x3ef11a = _0x5ec03d && _0x5ec03d.__esModule ? _0x5ec03d : {
            default: _0x5ec03d
        };
        class _0x217c44 extends _0x9900ac.default {
            constructor() {
                super('ServiceList');
                this.setCurserVisible(true);
                mp.events.add('SendAssignedServices', _0xd0e8f8 => {
                    _0x3ef11a.default.execute("events.SendAssignedServices('" + _0xd0e8f8 + "')");
                });
                mp.events.add('SendAllServices', _0x3d7dc0 => {
                    _0x3ef11a.default.execute("events.SendAllServices('" + _0x3d7dc0 + "')");
                });
            }
        }
        _0x3d24b3.default = new _0x217c44();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    234: [function (_0xabcdc1, _0x57b232, _0x33a6d1) {
        'use strict';

        _0xabcdc1('./servicelist-window');
    }, {
        './servicelist-window': 233
    }],
    235: [function (_0x8cb481, _0x584950, _0x380628) {
        'use strict';

        Object.defineProperty(_0x380628, '__esModule', {
            value: true
        });
        var _0x112cd6 = _0x8cb481('../../windows/window');
        var _0x511154 = _0x112cd6 && _0x112cd6.__esModule ? _0x112cd6 : {
            default: _0x112cd6
        };
        class _0x36324e extends _0x511154.default {
            constructor() {
                super('Shop');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x380628.default = new _0x36324e();
    }, {
        '../../windows/window': 277
    }],
    236: [function (_0x4de990, _0x4d3e94, _0x5baa3b) {
        'use strict';

        Object.defineProperty(_0x5baa3b, '__esModule', {
            value: true
        });
        var _0x11c81 = _0x4de990('../../windows/window');
        var _0x5c5d4b = _0x11c81 && _0x11c81.__esModule ? _0x11c81 : {
            default: _0x11c81
        };
        class _0x3d837d extends _0x5c5d4b.default {
            constructor() {
                super('Storageroom');
                this.setCurserVisible(true);
            }
        }
        _0x5baa3b.default = new _0x3d837d();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    237: [function (_0x500fcc, _0x3aebd1, _0x2c0873) {
        'use strict';

        _0x500fcc('./storageroom-window');
    }, {
        './storageroom-window': 236
    }],
    238: [function (_0xe9c74, _0x3bd52c, _0x5b69c8) {
        'use strict';

        Object.defineProperty(_0x5b69c8, '__esModule', {
            value: true
        });
        var _0x2f6d2c = _0xe9c74('../../windows/window');
        var _0x513cf2 = _0x2f6d2c && _0x2f6d2c.__esModule ? _0x2f6d2c : {
            default: _0x2f6d2c
        };
        var _0x3e2614 = _0xe9c74('../../browser/browser');
        var _0x2a4078 = _0x3e2614 && _0x3e2614.__esModule ? _0x3e2614 : {
            default: _0x3e2614
        };
        class _0x30742d extends _0x513cf2.default {
            constructor() {
                super('Support');
                this.setCurserVisible(true);
                mp.events.add('SendAssignedTickets', _0x27c955 => {
                    _0x2a4078.default.execute("events.SendAssignedTickets('" + _0x27c955 + "')");
                });
                mp.events.add('AddAssignedTicket', _0x2ee076 => {
                    _0x2a4078.default.execute("events.AddAssignedTicket('" + _0x2ee076 + "')");
                });
            }
        }
        _0x5b69c8.default = new _0x30742d();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    239: [function (_0x2ccc7c, _0x2e66cf, _0x243d88) {
        'use strict';

        _0x2ccc7c('./support-window');
    }, {
        './support-window': 238
    }],
    240: [function (_0x1ef130, _0x3af9f6, _0x464a67) {
        'use strict';

        Object.defineProperty(_0x464a67, '__esModule', {
            value: true
        });
        var _0x5010d2 = _0x1ef130('../../windows/window');
        var _0x15eaaa = _0x5010d2 && _0x5010d2.__esModule ? _0x5010d2 : {
            default: _0x5010d2
        };
        class _0x2a871c extends _0x15eaaa.default {
            constructor() {
                super('TattooLicenseShop');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseLicenseShopZoneLicenses');
            }
        }
        _0x464a67.default = new _0x2a871c();
    }, {
        '../../windows/window': 277
    }],
    241: [function (_0x5a524e, _0x474c25, _0x339021) {
        'use strict';

        Object.defineProperty(_0x339021, '__esModule', {
            value: true
        });
        var _0x430406 = _0x5a524e('../../windows/window');
        var _0x47908c = _0x430406 && _0x430406.__esModule ? _0x430406 : {
            default: _0x430406
        };
        var _0x50b391 = _0x5a524e('../../utils/camera');
        var _0x289434 = _0x50b391 && _0x50b391.__esModule ? _0x50b391 : {
            default: _0x50b391
        };
        class _0x2145ea extends _0x47908c.default {
            constructor() {
                super('TattooShop');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseTattooShopCategory');
            }
            ['onEvent'](_0x1b83f6, ..._0x366a80) {
                switch (_0x1b83f6) {
                    case 'resetTattoos':
                        this.resetTattoos();
                        break;
                    case 'rotate':
                        this.setHeading(_0x366a80[0]);
                        break;
                    case 'zoneSelected':
                        this.zoneSelected(_0x366a80[0]);
                        break;
                }
            }
            ['onReady']() {
                let _0x543c3f = mp.players.local;
                let _0x529eef = this.offsetPosition(_0x543c3f.position.x, _0x543c3f.position.y, _0x543c3f.getHeading(), 3);
                _0x289434.default.createCamera(new mp.Vector3(_0x529eef.x, _0x529eef.y, _0x543c3f.position.z), new mp.Vector3(0, 0, 0), 40);
                _0x289434.default.pointCameraAt(_0x543c3f.position);
            }
            ['onClose']() {
                _0x289434.default.resetCamera();
            }
            ['zoneSelected'](_0x1c69b3) {
                let _0x3a44c9 = mp.players.local;
                let _0x538276;
                let _0x2198fd;
                let _0x236751;
                switch (_0x1c69b3) {
                    case 0:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading(), 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z + 0.2);
                        break;
                    case 1:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading(), 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z + 0.5);
                        break;
                    case 2:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() + 90, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = _0x3a44c9.position;
                        break;
                    case 3:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() - 90, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = _0x3a44c9.position;
                        break;
                    case 4:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() + 90, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z - 0.6);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z - 0.6);
                        break;
                    case 5:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() - 90, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z - 0.6);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z - 0.6);
                        break;
                    case 8:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() + 180, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z + 0.2);
                        break;
                    case 9:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading() + 90, 1);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z + 0.5);
                        _0x2198fd = new mp.Vector3(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.position.z + 0.5);
                        break;
                    default:
                        ;
                        _0x236751 = this.offsetPosition(_0x3a44c9.position.x, _0x3a44c9.position.y, _0x3a44c9.getHeading(), 3);
                        _0x538276 = new mp.Vector3(_0x236751.x, _0x236751.y, _0x3a44c9.position.z);
                        _0x2198fd = _0x3a44c9.position;
                        break;
                }
                _0x289434.default.flyTo(_0x538276);
                _0x289434.default.pointCameraAt(_0x2198fd);
            }
            ['resetTattoos']() {
                mp.players.local.clearDecorations();
            }
            ['setHeading'](_0x1983a0) {
                mp.players.local.setHeading(parseInt(_0x1983a0));
            }
            ['offsetPosition'](_0x28cf5c, _0x151988, _0x1e3edc, _0xc521ef) {
                return {
                    x: _0x28cf5c + Math.sin(-_0x1e3edc * Math.PI / 180) * _0xc521ef,
                    y: _0x151988 + Math.cos(-_0x1e3edc * Math.PI / 180) * _0xc521ef
                };
            }
        }
        _0x339021.default = new _0x2145ea();
    }, {
        '../../utils/camera': 269,
        '../../windows/window': 277
    }],
    242: [function (_0x33607b, _0x5222f7, _0x3de03f) {
        'use strict';

        _0x33607b('./tattoo-window');
    }, {
        './tattoo-window': 241
    }],
    243: [function (_0x1d5add, _0x4ad324, _0x521452) {
        'use strict';

        Object.defineProperty(_0x521452, '__esModule', {
            value: true
        });
        var _0x34e753 = _0x1d5add('../../windows/window');
        var _0x1d0a66 = _0x34e753 && _0x34e753.__esModule ? _0x34e753 : {
            default: _0x34e753
        };
        class _0x508cc6 extends _0x1d0a66.default {
            constructor() {
                super('TicketMachine');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x521452.default = new _0x508cc6();
    }, {
        '../../windows/window': 277
    }],
    244: [function (_0x174364, _0x58cc4a, _0x5b35b7) {
        'use strict';

        _0x174364('./ticketmachine-window');
    }, {
        './ticketmachine-window': 243
    }],
    245: [function (_0xf6af58, _0x3ecb62, _0x118c93) {
        'use strict';

        Object.defineProperty(_0x118c93, '__esModule', {
            value: true
        });
        var _0x54298a = _0xf6af58('../../windows/window');
        var _0x268c43 = _0x54298a && _0x54298a.__esModule ? _0x54298a : {
            default: _0x54298a
        };
        class _0x5237b6 extends _0x268c43.default {
            constructor() {
                super('Tipico');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x118c93.default = new _0x5237b6();
    }, {
        '../../windows/window': 277
    }],
    246: [function (_0x47382e, _0x489f11, _0x50cb4c) {
        'use strict';

        _0x47382e('./tipico-window');
    }, {
        './tipico-window': 245
    }],
    247: [function (_0x33cc0e, _0x2447bc, _0x3fe0f3) {
        'use strict';

        Object.defineProperty(_0x3fe0f3, '__esModule', {
            value: true
        });
        var _0xabfdb7 = _0x33cc0e('../../windows/window');
        var _0x547402 = _0xabfdb7 && _0xabfdb7.__esModule ? _0xabfdb7 : {
            default: _0xabfdb7
        };
        var _0x575b81 = _0x33cc0e('../../browser/browser');
        var _0xf1c074 = _0x575b81 && _0x575b81.__esModule ? _0x575b81 : {
            default: _0x575b81
        };
        class _0x39808d extends _0x547402.default {
            constructor() {
                super('VehicleOverview');
                this.setCurserVisible(true);
                this.setHudVisible(false);
                this.setChatVisible(false);
                mp.events.add('SendOverviewVehicles', _0xeb24c9 => {
                    _0xf1c074.default.execute("events.SendOverviewVehicles('" + _0xeb24c9 + "')");
                });
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
                mp.game.ui.displayHud(false);
                mp.game.ui.displayRadar(false);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
                mp.game.ui.displayHud(true);
                mp.game.ui.displayRadar(true);
            }
        }
        _0x3fe0f3.default = new _0x39808d();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    248: [function (_0x30d5bc, _0x443edc, _0x5af0e0) {
        'use strict';

        _0x30d5bc('./vehicleoverview-window');
    }, {
        './vehicleoverview-window': 247
    }],
    249: [function (_0x1f88e6, _0xe3ac98, _0x2606e1) {
        'use strict';

        Object.defineProperty(_0x2606e1, '__esModule', {
            value: true
        });
        var _0x1c0969 = _0x1f88e6('../../windows/window');
        var _0x49ba3a = _0x1c0969 && _0x1c0969.__esModule ? _0x1c0969 : {
            default: _0x1c0969
        };
        class _0x429f52 extends _0x49ba3a.default {
            constructor() {
                super('VehicleRent');
                this.setCurserVisible(true);
                this.setChatVisible(false);
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0x2606e1.default = new _0x429f52();
    }, {
        '../../windows/window': 277
    }],
    250: [function (_0x27cf3, _0x4df8ae, _0x9fddf6) {
        'use strict';

        Object.defineProperty(_0x9fddf6, '__esModule', {
            value: true
        });
        var _0x2dfd43 = _0x27cf3('../../windows/window');
        var _0x141617 = _0x2dfd43 && _0x2dfd43.__esModule ? _0x2dfd43 : {
            default: _0x2dfd43
        };
        class _0x356bcf extends _0x141617.default {
            constructor() {
                super('VehicleShop');
                this.setCurserVisible(true);
            }
        }
        _0x9fddf6.default = new _0x356bcf();
    }, {
        '../../windows/window': 277
    }],
    251: [function (_0xd57151, _0x3a758f, _0x41b55d) {
        'use strict';

        _0xd57151('./vehicleshop-window');
    }, {
        './vehicleshop-window': 250
    }],
    252: [function (_0x26c075, _0x3abffa, _0x25722d) {
        'use strict';

        Object.defineProperty(_0x25722d, '__esModule', {
            value: true
        });
        var _0x52b95b = _0x26c075('../../windows/window');
        var _0x56a69b = _0x52b95b && _0x52b95b.__esModule ? _0x52b95b : {
            default: _0x52b95b
        };
        var _0x2b0abc = _0x26c075('../../utils/camera');
        var _0x311c0a = _0x2b0abc && _0x2b0abc.__esModule ? _0x2b0abc : {
            default: _0x2b0abc
        };
        class _0x55ab7e extends _0x56a69b.default {
            constructor() {
                super('Wardrobe');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                this.forwardableEvents.add('responseWardrobeCategories');
                this.forwardableEvents.add('responseWardrobeClothes');
            }
            ['onEvent'](_0x57505f, ..._0x3a9d64) {
                switch (_0x57505f) {
                    case 'moveCam':
                        this.moveCam(_0x3a9d64[0].offset, _0x3a9d64[0].slot, _0x3a9d64[0].isX, _0x3a9d64[0].isY);
                        break;
                    case 'zoomToSlot':
                        this.zoomToSlot(_0x3a9d64[0].slot, _0x3a9d64[0].isY);
                        break;
                    case 'zoomOut':
                        this.toInitialZoom();
                        break;
                }
            }
            ['getMovementData'](_0x3c478d, _0x51085a) {
                let _0xfa9184 = mp.players.local;
                let _0x537c06 = {
                    heading: _0xfa9184.getHeading(),
                    distance: 1,
                    camPos: {
                        z: _0xfa9184.position.z
                    },
                    pointPos: {
                        z: _0xfa9184.position.z
                    }
                };
                switch (_0x3c478d) {
                    case '1':
                        ;
                        _0x537c06.camPos.z += 0.5;
                        _0x537c06.pointPos.z += 0.5;
                        break;
                    case '3':
                        _0x537c06.distance = 3;
                        break;
                    case '4':
                        ;
                        _0x537c06.camPos.z -= 0.6;
                        _0x537c06.pointPos.z -= 0.6;
                        break;
                    case '5':
                        ;
                        _0x537c06.heading += 180;
                        _0x537c06.camPos.z += 0.5;
                        _0x537c06.pointPos.z += 0.2;
                        break;
                    case '6':
                        ;
                        _0x537c06.camPos.z -= 0.6;
                        _0x537c06.pointPos.z -= 0.8;
                        break;
                    case '7':
                    case '8':
                    case '11':
                        ;
                        _0x537c06.camPos.z += 0.5;
                        _0x537c06.pointPos.z += 0.2;
                        break;
                    case 'p-0':
                        ;
                        _0x537c06.heading += 180;
                        _0x537c06.distance = 2;
                        _0x537c06.camPos.z += 1;
                        _0x537c06.pointPos.z += 0.5;
                        break;
                    case 'p-1':
                        ;
                        _0x537c06.camPos.z += 0.5;
                        _0x537c06.pointPos.z += 0.5;
                        break;
                    case 'p-2':
                        ;
                        _0x537c06.heading = _0x51085a ? _0x537c06.heading + 90 : _0x537c06.heading - 90;
                        _0x537c06.camPos.z += 0.5;
                        _0x537c06.pointPos.z += 0.5;
                        break;
                    case 'p-6':
                    case 'p-7':
                        ;
                        _0x537c06.heading = _0x51085a ? _0x537c06.heading + 90 : _0x537c06.heading - 90;
                        _0x537c06.camPos.z += 0.3;
                        _0x537c06.pointPos.z -= 0.1;
                        break;
                }
                return _0x537c06;
            }
            ['zoomToSlot'](_0x9458d3, _0x4b842e) {
                let _0x482603 = mp.players.local;
                let _0x1ca099 = this.getMovementData(_0x9458d3, _0x4b842e);
                let _0x2b5786 = this.offsetPosition(_0x482603.position.x, _0x482603.position.y, _0x1ca099.heading, _0x1ca099.distance);
                let _0x11d5df = new mp.Vector3(_0x2b5786.x, _0x2b5786.y, _0x1ca099.camPos.z);
                let _0x33186b = new mp.Vector3(_0x482603.position.x, _0x482603.position.y, _0x1ca099.pointPos.z);
                _0x311c0a.default.flyTo(_0x11d5df);
                _0x311c0a.default.pointCameraAt(_0x33186b);
            }
            ['moveCam'](_0x28bbf3, _0x575976, _0x36239f, _0x2ccf6a) {
                let _0x63a027 = mp.players.local;
                let _0x44e9a6;
                let _0x1ef80e;
                let _0x476c4b;
                let _0x3e7f53;
                if ((_0x36239f || _0x2ccf6a) && _0x575976 !== null) {
                    _0x44e9a6 = this.getMovementData(_0x575976, _0x2ccf6a);
                    _0x1ef80e = this.offsetPosition(_0x63a027.position.x, _0x63a027.position.y, _0x44e9a6.heading + _0x28bbf3, _0x44e9a6.distance);
                    _0x476c4b = new mp.Vector3(_0x1ef80e.x, _0x1ef80e.y, _0x44e9a6.camPos.z);
                    _0x3e7f53 = new mp.Vector3(_0x63a027.position.x, _0x63a027.position.y, _0x44e9a6.pointPos.z);
                    _0x311c0a.default.flyTo(_0x476c4b);
                    _0x311c0a.default.pointCameraAt(_0x3e7f53);
                    return;
                }
                _0x1ef80e = this.offsetPosition(_0x63a027.position.x, _0x63a027.position.y, _0x63a027.getHeading() + _0x28bbf3, 3);
                _0x476c4b = new mp.Vector3(_0x1ef80e.x, _0x1ef80e.y, _0x63a027.position.z);
                _0x3e7f53 = _0x63a027.position;
                _0x311c0a.default.flyTo(_0x476c4b);
                _0x311c0a.default.pointCameraAt(_0x3e7f53);
            }
            ['onReady']() {
                this.toInitialZoom(true);
            }
            ['toInitialZoom'](_0x412a5b = false) {
                let _0x4c27ec = mp.players.local;
                let _0x24d3e8 = this.offsetPosition(_0x4c27ec.position.x, _0x4c27ec.position.y, _0x4c27ec.getHeading(), 3);
                let _0x21d655;
                let _0x5c8e44;
                if (_0x412a5b) {
                    _0x311c0a.default.createCamera(new mp.Vector3(_0x24d3e8.x, _0x24d3e8.y, _0x4c27ec.position.z), new mp.Vector3(0, 0, 0), 40);
                    _0x311c0a.default.pointCameraAt(_0x4c27ec.position);
                }
                _0x21d655 = new mp.Vector3(_0x24d3e8.x, _0x24d3e8.y, _0x4c27ec.position.z);
                _0x5c8e44 = _0x4c27ec.position;
                _0x311c0a.default.flyTo(_0x21d655);
                _0x311c0a.default.pointCameraAt(_0x5c8e44);
            }
            ['onClose']() {
                _0x311c0a.default.resetCamera();
            }
            ['offsetPosition'](_0x584a7a, _0x4968e7, _0x3b498d, _0x3bcc72) {
                return {
                    x: _0x584a7a + Math.sin(-_0x3b498d * Math.PI / 180) * _0x3bcc72,
                    y: _0x4968e7 + Math.cos(-_0x3b498d * Math.PI / 180) * _0x3bcc72
                };
            }
        }
        _0x25722d.default = new _0x55ab7e();
    }, {
        '../../utils/camera': 269,
        '../../windows/window': 277
    }],
    253: [function (_0x17f6e5, _0x33f9da, _0xf0462e) {
        'use strict';

        Object.defineProperty(_0xf0462e, '__esModule', {
            value: true
        });
        var _0x2e3c05 = _0x17f6e5('../../windows/window');
        var _0x54d168 = _0x2e3c05 && _0x2e3c05.__esModule ? _0x2e3c05 : {
            default: _0x2e3c05
        };
        var _0x40859f = _0x17f6e5('../../browser/browser');
        var _0x1cdcd5 = _0x40859f && _0x40859f.__esModule ? _0x40859f : {
            default: _0x40859f
        };
        class _0x3bc41e extends _0x54d168.default {
            constructor() {
                super('WeaponFactory');
                this.setCurserVisible(true);
                this.setChatVisible(false);
                mp.events.add('UpdateFactoryQueue', _0x252081 => {
                    _0x1cdcd5.default.execute("events.UpdateFactoryQueue('" + _0x252081 + "')");
                });
            }
            ['onReady']() {
                mp.game.graphics.transitionToBlurred(250);
            }
            ['onClose']() {
                mp.game.graphics.transitionFromBlurred(250);
            }
        }
        _0xf0462e.default = new _0x3bc41e();
    }, {
        '../../browser/browser': 100,
        '../../windows/window': 277
    }],
    254: [function (_0x3db13d, _0x557daf, _0x2b133d) {
        'use strict';

        var _0x452f20 = _0x3db13d('../app/apps');
        var _0x40724b = _0x452f20 && _0x452f20.__esModule ? _0x452f20 : {
            default: _0x452f20
        };
        var _0x4d1033 = _0x3db13d('../player/player');
        var _0x43f432 = _0x4d1033 && _0x4d1033.__esModule ? _0x4d1033 : {
            default: _0x4d1033
        };
        var _0x1e412c = _0x3db13d('../windows/windows');
        var _0x171795 = _0x1e412c && _0x1e412c.__esModule ? _0x1e412c : {
            default: _0x1e412c
        };
        var _0x10a364 = _0x3db13d('../interfaces/hud/x-menu');
        var _0x2edf70 = _0x10a364 && _0x10a364.__esModule ? _0x10a364 : {
            default: _0x10a364
        };
        var _0x44a394 = _0x3db13d('../vehicle/VehicleEnter');
        var _0x4bb143 = _0x44a394 && _0x44a394.__esModule ? _0x44a394 : {
            default: _0x44a394
        };
        var _0x55779a = _0x3db13d('../interfaces/hud/player-panel');
        var _0x281704 = _0x55779a && _0x55779a.__esModule ? _0x55779a : {
            default: _0x55779a
        };
        var _0x294a14 = _0x3db13d('../interfaces/hud/n-menu');
        var _0x321b73 = _0x294a14 && _0x294a14.__esModule ? _0x294a14 : {
            default: _0x294a14
        };
        var _0x54c4b1 = _0x3db13d('../raycast/raycast');
        var _0xf9363 = _0x54c4b1 && _0x54c4b1.__esModule ? _0x54c4b1 : {
            default: _0x54c4b1
        };
        var _0x50100b = _0x3db13d('../vehicle/rappel');
        var _0x3a085f = _0x50100b && _0x50100b.__esModule ? _0x50100b : {
            default: _0x50100b
        };
        var _0x553e30 = _0x3db13d('../browser/browser');
        var _0xa45b21 = _0x553e30 && _0x553e30.__esModule ? _0x553e30 : {
            default: _0x553e30
        };
        mp.events.add('VisibleWindowBug', () => {
            _0x171795.default.visibleWindow = null;
            if (_0x43f432.default.chatFlag) {
                _0x43f432.default.setPlayerChatFlag(false);
            }
        });
        let _0x4be675 = false;
        let _0x5cb32e = false;
        mp.keys.bind(48, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0xe866e2 = _0xf9363.default.createRaycast();
            if (_0xe866e2 != null && _0xe866e2 != null && _0xe866e2.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_0', _0xe866e2.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(49, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x3db290 = _0xf9363.default.createRaycast();
            if (_0x3db290 != null && _0x3db290 != null && _0x3db290.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_1', _0x3db290.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(50, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x426426 = _0xf9363.default.createRaycast();
            if (_0x426426 != null && _0x426426 != null && _0x426426.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_2', _0x426426.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(51, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x17e6fa = _0xf9363.default.createRaycast();
            if (_0x17e6fa != null && _0x17e6fa != null && _0x17e6fa.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_3', _0x17e6fa.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(52, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x1c2774 = _0xf9363.default.createRaycast();
            if (_0x1c2774 != null && _0x1c2774 != null && _0x1c2774.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_4', _0x1c2774.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(53, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x12685f = _0xf9363.default.createRaycast();
            if (_0x12685f != null && _0x12685f != null && _0x12685f.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_5', _0x12685f.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(54, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x59cf7e = _0xf9363.default.createRaycast();
            if (_0x59cf7e != null && _0x59cf7e != null && _0x59cf7e.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_6', _0x59cf7e.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(55, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x1e810e = _0xf9363.default.createRaycast();
            if (_0x1e810e != null && _0x1e810e != null && _0x1e810e.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_7', _0x1e810e.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(56, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x5cd1db = _0xf9363.default.createRaycast();
            if (_0x5cd1db != null && _0x5cd1db != null && _0x5cd1db.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_8', _0x5cd1db.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(57, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            let _0x4da43d = _0xf9363.default.createRaycast();
            if (_0x4da43d != null && _0x4da43d != null && _0x4da43d.entity.type == 'player') {
                mp.events.callRemote('Pressed_Event_9', _0x4da43d.entity);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(69, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.chatFlag || _0x43f432.default.injured) {
                return;
            }
            const _0x45cfab = new _0x4bb143.default();
            let _0x3b33c4 = _0x45cfab.getClosestGarbageVehicleInRange(10);
            if (_0x3b33c4 !== null && (_0x45cfab.calcDist(mp.players.local.position, _0x3b33c4.getWorldPositionOfBone(_0x3b33c4.getBoneIndexByName('seat_dside_r1'))) < 2 || _0x45cfab.calcDist(mp.players.local.position, _0x3b33c4.getWorldPositionOfBone(_0x3b33c4.getBoneIndexByName('seat_pside_r1'))) < 2)) {
                mp.events.callRemote('Pressed_E_Garbage_Vehicle', _0x3b33c4);
            }
            mp.events.callRemote('Pressed_E');
            mp.gui.chat.push('Pressed_E');
            _0x5a4fe1();
        });
        mp.keys.bind(76, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_L');
            mp.gui.chat.push('Pressed_L');
            _0x5a4fe1();
        });
        mp.keys.bind(113, false, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir() || !_0x43f432.default.allowHandy || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall) {
                return;
            }
            if (_0x171795.default.visibleWindow == 'Phone') {
                mp.events.callRemote('Keks', false);
            } else {
                mp.events.callRemote('Keks', true);
            }
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
            _0x5a4fe1();
        });
        mp.keys.bind(114, false, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir() || !_0x43f432.default.allowHandy || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall) {
                return;
            }
            if (_0x171795.default.visibleWindow == 'Funk') {
                _0xa45b21.default.execute('events.Funk(false)');
                mp.events.call('closeAllWindow');
            } else {
                mp.events.callRemote('openFunkThing');
            }
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
            _0x5a4fe1();
        });
        mp.keys.bind(116, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall || _0x43f432.default.aduty) {
                return;
            }
            mp.events.callRemote('openAnimationMenu');
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        mp.keys.bind(117, false, () => {
            mp.events.callRemote('requestOpenSupportTickets');
        });
        mp.keys.bind(120, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || !_0x43f432.default.allowHandy) {
                return;
            }
            if (_0x40724b.default.componentVisibleApp.Ipad === 'IpadMainScreen') {
                mp.events.callRemote('closeComputer', 2);
            } else {
                mp.events.callRemote('computerCheck', 2);
            }
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
            _0x5a4fe1();
        });
        mp.keys.bind(118, false, () => {
            var _0x1677b2 = new Date();
            var _0x480758 = _0x1677b2.getDate();
            var _0x37748e = _0x1677b2.getMonth();
            var _0x5a2196 = _0x1677b2.getFullYear();
            var _0x22cbf7 = _0x1677b2.getSeconds();
            var _0x743b83 = _0x1677b2.getMinutes();
            var _0x11a1bd = _0x1677b2.getHours();
            var _0x5cee00 = 'Visual-' + _0x480758 + '-' + _0x37748e + '-' + _0x5a2196 + '-' + _0x11a1bd + '-' + _0x743b83 + '-' + _0x22cbf7;
            mp.gui.takeScreenshot(_0x5cee00 + '.png', 1, 100, 0);
            mp.game.graphics.notify('Screenshot erstellt.');
            _0x5a4fe1();
        });
        mp.keys.bind(73, false, () => {
            if (_0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            if (_0x171795.default.visibleWindow != null && _0x171795.default.visibleWindow != 'Inventory') {
                return;
            }
            if (_0x171795.default.visibleWindow == 'Inventory') {
                mp.events.call('closeAllWindow');
            } else {
                mp.events.callRemote('requestInventory', false);
            }
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        mp.keys.bind(77, false, () => {
            if (_0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            if (_0x171795.default.visibleWindow != null && _0x171795.default.visibleWindow != 'Self') {
                return;
            }
            if (_0x171795.default.visibleWindow == 'Self') {
                mp.events.call('closeAllWindow');
            } else {
                mp.events.callRemote('requestSelfMenu');
            }
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        mp.keys.bind(89, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            mp.events.callRemote('changeVoiceRange');
            _0x5a4fe1();
        });
        mp.keys.bind(84, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            mp.events.call('openWindow', 'Chat');
            mp.gui.cursor.visible = true;
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        let _0x3a4994 = false;
        mp.keys.bind(220, true, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null) {
                return;
            }
            if (!_0x3a4994) {
                _0x3a4994 = true;
                mp.events.callRemote('showPaintballStats');
            }
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        mp.keys.bind(220, false, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer) {
                return;
            }
            if (_0x3a4994) {
                mp.events.call('closeAllWindow');
                _0x3a4994 = false;
            }
            _0x558a09();
        });
        let _0x2d622d = false;
        mp.keys.bind(88, true, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null) {
                return;
            }
            if (!_0x2d622d) {
                _0x2d622d = true;
                let _0x1be20f = _0x2edf70.default.getItems();
                if (_0x1be20f == null || _0x1be20f == undefined || _0x1be20f == []) {
                    return;
                }
                if (_0x43f432.default.duty) {
                    if (_0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 3 || _0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 20 || _0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 6) {
                        _0x1be20f.push({
                            text: 'Serviceliste',
                            event: 'Services',
                            server: true,
                            args: ''
                        });
                    }
                    if (_0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 6) {
                        _0x1be20f.push({
                            text: 'Hoch/Runter',
                            event: 'AttachVeh',
                            server: true
                        });
                        _0x1be20f.push({
                            text: 'An/ab',
                            event: 'DepositoryVeh',
                            server: true
                        });
                    }
                    if (!_0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 1 || !_0x43f432.default.isInAnyVehicle(false) && _0x43f432.default.team == 5) {
                        _0x1be20f.push({
                            text: 'Festnehmen',
                            event: 'Cuff',
                            server: true,
                            args: ''
                        });
                        _0x1be20f.push({
                            text: 'Fußfesseln',
                            event: 'FootCuff',
                            server: true,
                            args: ''
                        });
                    }
                }
                if (_0x43f432.default.isInAnyVehicle(false)) {
                    var _0x39f7bc = mp.players.local.vehicle;
                    if (_0x39f7bc.canShuffleSeat(0)) {
                        _0x1be20f.push({
                            text: 'Sitz wechseln',
                            event: 'Shuffle',
                            server: false,
                            args: ''
                        });
                    }
                }
                _0xa45b21.default.execute('events.XMenu(' + JSON.stringify(_0x1be20f) + ')');
                mp.gui.cursor.visible = true;
            }
            _0x5a4fe1();
            if (_0x5cb32e) {
                _0x5cb32e = false;
                _0x281704.default.setVoiceRadioActiveType(1);
                mp.events.callRemote('changeSettings', 1);
                _0x558a09();
            }
            if (_0x4be675) {
                _0x4be675 = false;
                mp.events.callRemote('changeAirFunk', 1);
                _0x558a09();
            }
        });
        mp.keys.bind(88, false, () => {
            if (_0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null) {
                return;
            }
            _0x2edf70.default.setItems([]);
            mp.gui.cursor.visible = false;
            _0x2d622d = false;
            _0x558a09();
        });
        mp.keys.bind(39, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            mp.events.callRemote('nextInteractionAnim', 1);
        });
        mp.keys.bind(37, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad) {
                return;
            }
            mp.events.callRemote('prevInteractionAnim', 1);
        });
        mp.keys.bind(102, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.x += _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(100, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.x -= _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(104, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.y += _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(98, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.y -= _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(103, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.rot.z += _0x43f432.default.buildingspeed * 5;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(105, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.rot.z -= _0x43f432.default.buildingspeed * 5;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(97, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.z += _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(99, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                _0x43f432.default.buildingobject.pos.z -= _0x43f432.default.buildingspeed;
                _0x43f432.default.buildingobject.obj = mp.objects.new(_0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos, {
                    rotation: _0x43f432.default.buildingobject.rot,
                    alpha: 255,
                    dimension: mp.players.local.dimension
                });
            }
        });
        mp.keys.bind(96, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                mp.events.callRemote('objed_saveobject', _0x43f432.default.buildingobject.hash, _0x43f432.default.buildingobject.pos.x, _0x43f432.default.buildingobject.pos.y, _0x43f432.default.buildingobject.pos.z, _0x43f432.default.buildingobject.rot.x, _0x43f432.default.buildingobject.rot.y, _0x43f432.default.buildingobject.rot.z);
            }
        });
        mp.keys.bind(46, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingobject.obj.destroy();
                mp.events.callRemote('objed_close');
            }
        });
        mp.keys.bind(109, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingspeed -= 0.1;
                mp.game.graphics.notify('Building Speed verringert. (Aktuell ' + _0x43f432.default.buildingspeed + ')');
            }
        });
        mp.keys.bind(107, true, () => {
            if (_0x43f432.default.buildingmode === true) {
                _0x43f432.default.buildingspeed += 0.1;
                mp.game.graphics.notify('Building Speed erhöht. (Aktuell ' + _0x43f432.default.buildingspeed + ')');
            }
        });
        mp.keys.bind(75, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_K');
            mp.gui.chat.push('Pressed_K');
            _0x5a4fe1();
        });
        mp.keys.bind(71, true, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x43f432.default.injured || _0x43f432.default.cuffed || _0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null) {
                return;
            }
            const _0x399f5c = new _0x4bb143.default();
            if (mp.players.local.isInAnyVehicle(false) && mp.players.local.vehicle) {
                mp.events.callRemote('SwitchSeat');
            } else {
                const _0x2c470d = _0x399f5c.getClosestVehiclesInRange(10);
                if (_0x2c470d.length <= 0) {
                    return;
                }
                let _0x59c6b9 = 100;
                let _0x973d52 = null;
                let _0x274b0b = -1;
                for (var _0x15afce = 0; _0x15afce < _0x2c470d.length; _0x15afce++) {
                    const _0x3d6bb6 = _0x399f5c.getClosestVehicleSeat(_0x2c470d[_0x15afce]);
                    if (_0x3d6bb6.distance == null) {
                        continue;
                    }
                    if (_0x3d6bb6.seat == null || _0x3d6bb6.seat === -1) {
                        continue;
                    }
                    if (_0x3d6bb6.distance < _0x59c6b9) {
                        _0x973d52 = _0x2c470d[_0x15afce];
                        _0x274b0b = _0x3d6bb6.seat;
                        _0x59c6b9 = _0x3d6bb6.distance;
                    }
                }
                if (_0x973d52 == null || _0x274b0b == -1 || _0x59c6b9 > 4) {
                    return;
                }
                _0x399f5c.enter(_0x973d52, _0x274b0b);
            }
            _0x5a4fe1();
        });
        mp.keys.bind(70, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(72, false, () => {
            if (_0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x43f432.default.cuffed || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null || _0x43f432.default.isInAir() || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall) {
                return;
            }
            mp.events.callRemote('Pressed_H');
            _0x5a4fe1();
        });
        mp.keys.bind(74, false, () => {
            if (_0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x43f432.default.cuffed || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null || _0x43f432.default.isInAir() || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall) {
                return;
            }
            if (mp.players.local.vehicle != null && mp.players.local.isInAnyVehicle(false) && mp.players.local.vehicle.isSirenOn()) {
                mp.events.callRemote('Silent_Sirene', mp.players.local.vehicle);
            } else {
                mp.events.callRemote('Pressed_J');
            }
            _0x5a4fe1();
        });
        let _0x10b493 = false;
        mp.keys.bind(66, true, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir() || _0x43f432.default.isCarrying) {
                return;
            }
            if (!_0x43f432.default.isInAnyVehicle() && mp.players.local.weapon !== mp.game.joaat('weapon_unarmed')) {
                let _0x442182 = _0xf9363.default.createRaycast();
                if (_0x442182 != null && _0x442182 != null && _0x442182.entity.isAPed()) {
                    mp.events.callRemote('Pessed_B_Aiming', _0x442182.entity);
                }
            } else if (!_0x10b493) {
                _0x10b493 = true;
                fingerPointing.start();
            }
            _0x5a4fe1();
        });
        mp.keys.bind(66, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir() || _0x43f432.default.isCarrying) {
                return;
            }
            _0x10b493 = false;
            fingerPointing.stop();
            _0x558a09();
        });
        mp.keys.bind(117, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null) {
                return;
            }
            _0x43f432.default.openVoiceSettings = true;
            mp.events.callRemote('openVoiceSettings');
        });
        mp.keys.bind(96, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_0');
            _0x5a4fe1();
        });
        mp.keys.bind(97, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_1');
            _0x5a4fe1();
        });
        mp.keys.bind(98, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_2');
            _0x5a4fe1();
        });
        mp.keys.bind(99, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_3');
            _0x5a4fe1();
        });
        mp.keys.bind(100, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_4');
            _0x5a4fe1();
        });
        mp.keys.bind(102, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_6');
            _0x5a4fe1();
        });
        mp.keys.bind(103, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_7');
            _0x5a4fe1();
        });
        mp.keys.bind(104, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_8');
            _0x5a4fe1();
        });
        mp.keys.bind(105, false, () => {
            if (_0x43f432.default.chatFlag || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('Pressed_Num_9');
            _0x5a4fe1();
        });
        let _0x11a83d = false;
        mp.keys.bind(78, true, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x171795.default.visibleWindow != null || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir() || _0x43f432.default.isCarrying || _0x43f432.default.HasRagdall) {
                return;
            }
            if (!_0x11a83d) {
                _0x11a83d = true;
                let _0x52793c = _0x321b73.default.getItems();
                _0xa45b21.default.execute('events.XMenu(' + JSON.stringify(_0x52793c) + ')');
                mp.gui.cursor.visible = true;
                _0x5a4fe1();
            }
        });
        mp.keys.bind(78, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x43f432.default.chatFlag || _0x40724b.default.componentVisibleApp.Smartphone || _0x43f432.default.injured || _0x40724b.default.componentVisibleApp.Ipad || _0x40724b.default.componentVisibleApp.Computer || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed || _0x43f432.default.isInAir()) {
                return;
            }
            _0x2edf70.default.setItems([]);
            _0x11a83d = false;
            _0x558a09();
        });
        let _0x81541e = false;
        mp.keys.bind(119, false, () => {
            _0x81541e = !_0x81541e;
            mp.gui.cursor.visible = _0x81541e;
            _0x558a09();
        });
        mp.keys.bind(87, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(87, false, () => {
            _0x558a09();
        });
        mp.keys.bind(65, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(65, false, () => {
            _0x558a09();
        });
        mp.keys.bind(83, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(83, false, () => {
            _0x558a09();
        });
        mp.keys.bind(68, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(68, false, () => {
            _0x558a09();
        });
        mp.keys.bind(1, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(1, false, () => {
            _0x558a09();
        });
        mp.keys.bind(32, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(32, false, () => {
            _0x558a09();
        });
        mp.keys.bind(16, true, () => {
            _0x5a4fe1();
        });
        mp.keys.bind(16, false, () => {
            _0x558a09();
        });
        mp.keys.bind(70, false, () => {
            _0x558a09();
        });
        function _0x558a09() { }
        function _0x5a4fe1() { }
        mp.keys.bind(188, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('InvComma');
            mp.events.callRemote('GWMedi');
        });
        mp.keys.bind(190, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            mp.events.callRemote('InvPunkt');
            mp.events.callRemote('GWWeste');
        });
        mp.keys.bind(81, false, () => {
            if (_0x171795.default.visibleWindow != null || _0x40724b.default.componentVisibleApp.Smartphone || _0x40724b.default.componentVisibleApp.Computer || _0x40724b.default.componentVisibleApp.Ipad || _0x43f432.default.chatFlag || _0x43f432.default.injured || _0x43f432.default.tied || _0x43f432.default.cuffed) {
                return;
            }
            if (!_0x544fe9()) {
                return;
            }
            _0x3a085f.default.startRappel();
        });
        function _0x544fe9() {
            if (_0x43f432.default.shortCutBeingUsed && _0x43f432.default.shortCutBeingUsed + 4000 > Date.now()) {
                return false;
            }
            return true;
        }
        var _0x59bf7a = [];
        mp.events.add('render', () => {
            if (mp.game.controls.isControlJustPressed(32, 24)) {
                var _0x3cbf81 = {
                    wpn: mp.players.local.weapon,
                    date: Date.now()
                };
                _0x59bf7a.push(_0x3cbf81);
            }
        });
        setInterval(function () {
            var _0x559e47 = 0;
            var _0x41b4d6 = [];
            if (mp.nametags.enabled) {
                mp.events.callRemote('antinametags');
            }
            if (_0x59bf7a.length > 120) {
                var _0x79d29 = {};
                _0x59bf7a.forEach((_0x3cfcfc, _0x80e1b3) => {
                    if (_0x59bf7a[_0x80e1b3 + 1] !== undefined) {
                        if (_0x59bf7a[_0x80e1b3 + 1].wpn === _0x3cfcfc.wpn) {
                            var _0x4d5c53 = _0x59bf7a[_0x80e1b3 + 1].date - _0x3cfcfc.date;
                            if (!_0x79d29.hasOwnProperty(_0x4d5c53)) {
                                _0x79d29[_0x4d5c53] = {};
                            }
                            if (!_0x79d29[_0x4d5c53].hasOwnProperty(_0x3cfcfc.wpn)) {
                                _0x79d29[_0x4d5c53][_0x3cfcfc.wpn] = 1;
                            }
                            _0x79d29[_0x4d5c53][_0x3cfcfc.wpn]++;
                            if (_0x79d29[_0x4d5c53][_0x3cfcfc.wpn] > _0x559e47) {
                                _0x559e47 = _0x79d29[_0x4d5c53][_0x3cfcfc.wpn];
                                _0x41b4d6 = [_0x4d5c53, _0x3cfcfc.wpn, _0x559e47];
                            }
                        }
                    }
                });
                mp.events.callRemote('amo', _0x41b4d6[0], _0x41b4d6[1], _0x41b4d6[2]);
                _0x59bf7a = [];
                _0x79d29 = {};
                _0x559e47 = 0;
                _0x41b4d6 = [];
            } else {
                _0x59bf7a = [];
            }
        }, 60000);
    }, {
        '../app/apps': 8,
        '../browser/browser': 100,
        '../interfaces/hud/antiafk': 167,
        '../interfaces/hud/menu': 174,
        '../interfaces/hud/n-menu': 175,
        '../interfaces/hud/player-panel': 179,
        '../interfaces/hud/vehicle-panel': 184,
        '../interfaces/hud/x-menu': 185,
        '../player/player': 262,
        '../raycast/raycast': 268,
        '../vehicle/VehicleEnter': 271,
        '../vehicle/rappel': 273,
        '../windows/windows': 278
    }],
    255: [function (_0x4c3075, _0x1cdeac, _0x36d9a3) {
        'use strict';

        _0x4c3075('./key-events/key-events');
        _0x4c3075('./interfaces/interfaces');
        _0x4c3075('./player/player');
        _0x4c3075('./player/weaponcomponent');
        _0x4c3075('./player/crouching');
        _0x4c3075('./vehicle/vehicle');
        _0x4c3075('./apps/apps');
        _0x4c3075('./voice/voice');
        _0x4c3075('./doors/doors');
        _0x4c3075('./peds/vehiclesync');
        _0x4c3075('./peds/animalapi');
        _0x4c3075('./utils/camera');
        _0x4c3075('./rage11/rage11');
        _0x4c3075('./vehicle/rappel');
        _0x4c3075('./player/welcomescene');
        _0x4c3075('./circuitbreaker/CircuitBreaker.events');
    }, {
        './apps/apps': 9,
        './circuitbreaker/CircuitBreaker.events': 106,
        './doors/doors': 112,
        './interfaces/interfaces': 190,
        './key-events/key-events': 254,
        './peds/animalapi': 256,
        './peds/vehiclesync': 258,
        './player/crouching': 261,
        './player/player': 262,
        './player/weaponcomponent': 265,
        './player/welcomescene': 266,
        './rage11/rage11': 267,
        './utils/camera': 269,
        './vehicle/rappel': 273,
        './vehicle/vehicle': 275,
        './voice/voice': 276
    }],
    256: [function (_0x575884, _0x3f5389, _0x27e689) {
        'use strict';

        Object.defineProperty(_0x27e689, '__esModule', {
            value: true
        });
        var _0x3f113a = _0x575884('../player/player');
        var _0x4e46d1 = _0x3f113a && _0x3f113a.__esModule ? _0x3f113a : {
            default: _0x3f113a
        };
        class _0x114706 {
            constructor() {
                mp.events.add('entityStreamIn', _0x318652 => {
                    if (_0x318652 != null && _0x318652.doesExist() && _0x318652.type == 'ped') {
                        mp.events.callRemote('requestPedSync', _0x318652);
                    }
                });
                mp.events.add('pedStreamInSync', (_0x1d1782, _0x5034e0) => {
                    if (_0x1d1782 == null || !_0x1d1782.doesExist()) {
                        return;
                    }
                    if (_0x1d1782.type == 'ped') {
                        _0x1d1782.setComponentVariation(0, 0, _0x5034e0, 0);
                    }
                });
                function _0x4027e1(_0x293dbd) {
                    if (_0x293dbd) {
                        if (_0x293dbd == null || !_0x293dbd.doesExist()) {
                            return;
                        }
                        let _0x5a1171 = _0x293dbd.getCoords(false);
                        let _0x709de3 = mp.game.object.getClosestObjectOfType(_0x5a1171.x, _0x5a1171.y, _0x5a1171.z, 100, mp.game.joaat('w_am_baseball'), false, true, true);
                        let _0x652b25 = mp.players.local.position.x + 1;
                        let _0x32f667 = mp.players.local.position.y + 1;
                        if (_0x709de3) {
                            let _0x1041af = 100;
                            let _0x11f8b8 = _0x5a1171.x;
                            let _0x25c1b4 = _0x5a1171.y;
                            let _0x4e0d9e = false;
                            for (let _0x50093c = 0; _0x50093c < 6; _0x50093c++) {
                                _0x1041af = _0x1041af / 2;
                                let _0x193c07 = mp.game.object.getClosestObjectOfType(_0x11f8b8 + _0x1041af, _0x25c1b4, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x2f0c11 = mp.game.object.getClosestObjectOfType(_0x11f8b8 - _0x1041af, _0x25c1b4, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x9df43b = mp.game.object.getClosestObjectOfType(_0x11f8b8, _0x25c1b4 + _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x2281e1 = mp.game.object.getClosestObjectOfType(_0x11f8b8, _0x25c1b4 - _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x2b6b09 = mp.game.object.getClosestObjectOfType(_0x11f8b8 + _0x1041af, _0x25c1b4 + _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x1e1004 = mp.game.object.getClosestObjectOfType(_0x11f8b8 + _0x1041af, _0x25c1b4 - _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0xf5fa2d = mp.game.object.getClosestObjectOfType(_0x11f8b8 - _0x1041af, _0x25c1b4 + _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                let _0x3fbeef = mp.game.object.getClosestObjectOfType(_0x11f8b8 - _0x1041af, _0x25c1b4 - _0x1041af, _0x5a1171.z, _0x1041af, mp.game.joaat('w_am_baseball'), false, true, true);
                                if (_0x193c07) {
                                    _0x11f8b8 = _0x11f8b8 + _0x1041af;
                                    _0x4e0d9e = true;
                                } else {
                                    if (_0x2f0c11) {
                                        _0x11f8b8 = _0x11f8b8 - _0x1041af;
                                        _0x4e0d9e = true;
                                    } else {
                                        if (_0x9df43b) {
                                            _0x25c1b4 = _0x25c1b4 + _0x1041af;
                                            _0x4e0d9e = true;
                                        } else {
                                            if (_0x2281e1) {
                                                _0x25c1b4 = _0x25c1b4 - _0x1041af;
                                                _0x4e0d9e = true;
                                            } else {
                                                if (_0x2b6b09) {
                                                    _0x11f8b8 = _0x11f8b8 + _0x1041af;
                                                    _0x25c1b4 = _0x25c1b4 + _0x1041af;
                                                    _0x4e0d9e = true;
                                                } else {
                                                    if (_0x1e1004) {
                                                        _0x11f8b8 = _0x11f8b8 + _0x1041af;
                                                        _0x25c1b4 = _0x25c1b4 - _0x1041af;
                                                        _0x4e0d9e = true;
                                                    } else {
                                                        if (_0xf5fa2d) {
                                                            _0x11f8b8 = _0x11f8b8 - _0x1041af;
                                                            _0x25c1b4 = _0x25c1b4 + _0x1041af;
                                                            _0x4e0d9e = true;
                                                        } else {
                                                            if (_0x3fbeef) {
                                                                _0x11f8b8 = _0x11f8b8 - _0x1041af;
                                                                _0x25c1b4 = _0x25c1b4 - _0x1041af;
                                                                _0x4e0d9e = true;
                                                            } else {
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (_0x4e0d9e === false) {
                                return;
                            }
                            _0x293dbd.taskGoToCoordAndAimAtHatedEntitiesNearCoord(_0x11f8b8, _0x25c1b4, _0x5a1171.z + 0.4, _0x11f8b8, _0x25c1b4, _0x5a1171.z + 0.4, 3, false, parseFloat(0), parseFloat(0), false, 0, false, mp.game.joaat('a_c_chop'));
                            let _0x11d6e5 = mp.game.gameplay.getDistanceBetweenCoords(_0x11f8b8, _0x25c1b4, _0x5a1171.z, _0x652b25, _0x32f667, mp.players.local.position.z, true);
                            let _0x574ecb = _0x11d6e5 / 29 * 10000 - 3000;
                            setTimeout(() => {
                                if (_0x293dbd == null || !_0x293dbd.doesExist()) {
                                    return;
                                }
                                if (_0x709de3 != null && _0x709de3 !== undefined) {
                                    mp.game.entity.createModelHide(_0x11f8b8, _0x25c1b4, _0x5a1171.z, 3, mp.game.joaat('w_am_baseball'), true);
                                    mp.game.entity.setObjectAsNoLongerNeeded(_0x709de3);
                                }
                                _0x293dbd.taskGoToCoordAnyMeans(_0x652b25, _0x32f667, mp.players.local.position.z, 2.5, 0, false, 786603, 1);
                                _0x293dbd.setHeading(mp.players.local.heading);
                            }, _0x574ecb);
                        }
                    }
                }
                function _0x1215ca(_0x50019a) {
                    if (_0x50019a == null || !_0x50019a.doesExist()) {
                        return;
                    }
                    _0x50019a.freezePosition(false);
                    _0x50019a.setCanBeDamaged(true);
                    _0x50019a.setInvincible(false);
                    _0x50019a.CanRagdoll = false;
                    _0x50019a.setOnlyDamagedByPlayer(true);
                    _0x50019a.setCanRagdollFromPlayerImpact(false);
                    _0x50019a.setSweat(100);
                    _0x50019a.setRagdollOnCollision(false);
                    _0x50019a.setProofs(false, false, false, false, false, false, false, false);
                    _0x50019a.setFleeAttributes(0, false);
                    _0x50019a.setCombatAttributes(46, true);
                }
                mp.events.add('animal_giveweapon', (_0x38d11e, _0x2b54f2, _0x142025, _0x1c16f0) => {
                    if (_0x38d11e == null || !_0x38d11e.doesExist()) {
                        return;
                    }
                    _0x1215ca(_0x38d11e);
                    _0x38d11e.giveWeapon(_0x2b54f2, _0x142025, _0x1c16f0);
                });
                mp.events.add('animal_attack', async (_0x79ab14, _0x2166b3) => {
                    _0x1215ca(_0x79ab14);
                    await mp.game.waitAsync(500);
                    if (_0x79ab14 == null || !_0x79ab14.doesExist()) {
                        return;
                    }
                    _0x79ab14.taskCombat(_0x2166b3.handle, 0, 0);
                });
                mp.events.add('animal_playanim', (_0x519e03, _0x39fb4d, _0x226594, _0x5141b1, _0x45480c) => {
                    if (_0x519e03 == null || !_0x519e03.doesExist()) {
                        return;
                    }
                    _0x1215ca(_0x519e03);
                    mp.game.streaming.requestAnimDict(_0x39fb4d);
                    if (_0x519e03 == null || !_0x519e03.doesExist()) {
                        return;
                    }
                    _0x519e03.taskPlayAnim(_0x39fb4d, _0x226594, 8, 1, _0x5141b1, _0x45480c, 1, false, false, false);
                });
                mp.events.add('animal_cleartasks', _0x4ecdc8 => {
                    if (_0x4ecdc8 == null || !_0x4ecdc8.doesExist()) {
                        return;
                    }
                    _0x1215ca(_0x4ecdc8);
                    _0x4ecdc8.clearTasks();
                });
                mp.events.add('animal_setarmour', (_0x467c55, _0x1c58cb) => {
                    if (_0x467c55 == null || !_0x467c55.doesExist()) {
                        return;
                    }
                    _0x467c55.setArmour(_0x1c58cb);
                });
                mp.events.add('animal_sethealth', (_0x46fe5b, _0x20334b) => {
                    if (_0x46fe5b == null || !_0x46fe5b.doesExist()) {
                        return;
                    }
                    _0x46fe5b.setHealth(_0x20334b);
                });
                mp.events.add('animal_gotoCoord', async (_0x2ab1d3, _0x47b89e, _0x249e19, _0x418dc5, _0x30e7ff) => {
                    _0x1215ca(_0x2ab1d3);
                    await mp.game.waitAsync(500);
                    if (_0x2ab1d3 == null || !_0x2ab1d3.doesExist()) {
                        return;
                    }
                    _0x2ab1d3.taskGoToCoordAndAimAtHatedEntitiesNearCoord(_0x47b89e, _0x249e19, _0x418dc5, _0x47b89e, _0x249e19, _0x418dc5, _0x30e7ff, false, parseFloat(0), parseFloat(0), false, 0, false, mp.game.joaat('a_c_chop'));
                });
                mp.events.add('animal_setFollow', (_0x258d87, _0xca6b51) => {
                    _0x1215ca(_0x258d87);
                    if (_0x258d87 == null || !_0x258d87.doesExist()) {
                        return;
                    }
                    _0x4e46d1.default.isPetFollowing = _0x258d87;
                });
                mp.events.add('animal_cloth', (_0x185cdf, _0x9cf709, _0x4b5877, _0x2d3d76) => {
                    if (_0x185cdf == null || !_0x185cdf.doesExist()) {
                        return;
                    }
                    _0x185cdf.setComponentVariation(_0x9cf709, _0x4b5877, _0x2d3d76, 0);
                });
                mp.events.add('animal_checkDeath', (_0xee313, _0x3e7ba4) => {
                    if (_0xee313 != null && _0xee313.doesExist()) {
                        mp.events.callRemote(_0x3e7ba4, _0xee313.isDeadOrDying(true));
                    }
                });
                mp.events.add('render', () => {
                    if (_0x4e46d1.default.isPetFollowing !== undefined && _0x4e46d1.default.isPetFollowing != null && _0x4e46d1.default.isPetFollowing !== undefined && _0x4e46d1.default.isPetFollowing.doesExist() && !_0x4e46d1.default.isPetFollowing.isDead()) {
                        if (_0x4e46d1.default.isPetFollowing == null || _0x4e46d1.default.isPetFollowing.doesExist()) {
                            return;
                        }
                        let _0x1e8815 = new mp.Vector3(_0x4e46d1.default.isPetFollowing.getCoords(false).x, _0x4e46d1.default.isPetFollowing.getCoords(false).y, _0x4e46d1.default.isPetFollowing.getCoords(false).z);
                        if (!(Math.sqrt(Math.pow(mp.players.local.position.x - _0x1e8815.x, 2) + Math.pow(mp.players.local.position.y - _0x1e8815.y, 2) + Math.pow(mp.players.local.position.z - _0x1e8815.z, 2)) <= 1.5)) {
                            if (_0x4e46d1.default.isPetFollowing == null || _0x4e46d1.default.isPetFollowing == undefined || _0x4e46d1.default.isPetFollowing.doesExist()) {
                                return;
                            }
                            const _0x3745a3 = mp.game.gameplay.getGroundZFor3dCoord(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, parseFloat(0), false);
                            let _0x1f2828;
                            if (_0x4e46d1.default.isPetFollowing == null || _0x4e46d1.default.isPetFollowing == undefined || _0x4e46d1.default.isPetFollowing.doesExist()) {
                                return;
                            }
                            if (!(Math.sqrt(Math.pow(mp.players.local.position.x - _0x1e8815.x, 2) + Math.pow(mp.players.local.position.y - _0x1e8815.y, 2) + Math.pow(mp.players.local.position.z - _0x1e8815.z, 2)) <= 4)) {
                                _0x1f2828 = 3;
                            } else {
                                _0x1f2828 = 1;
                            }
                            if (_0x4e46d1.default.isPetFollowing == null || _0x4e46d1.default.isPetFollowing == undefined || !_0x4e46d1.default.isPetFollowing.doesExist()) {
                                return;
                            }
                            _0x4e46d1.default.isPetFollowing.taskGoToCoordAndAimAtHatedEntitiesNearCoord(mp.players.local.position.x, mp.players.local.position.y, _0x3745a3 + 0.4, mp.players.local.position.x, mp.players.local.position.y, _0x3745a3 + 0.4, _0x1f2828, false, parseFloat(0), parseFloat(0), false, 0, false, mp.game.joaat('a_c_chop'));
                        }
                    }
                });
                mp.events.add('animal_stopFollow', () => {
                    if (_0x4e46d1.default.isPetFollowing == null || !_0x4e46d1.default.isPetFollowing.doesExist()) {
                        return;
                    }
                    _0x4e46d1.default.isPetFollowing = undefined;
                });
                mp.events.add('animal_findball', _0x2707ef => {
                    _0x1215ca(_0x2707ef);
                    if (_0x2707ef == null || !_0x2707ef.doesExist()) {
                        return;
                    }
                    _0x4027e1(_0x2707ef);
                });
                mp.events.add('testcop', (_0xeee979, _0x2cc149, _0x5d7c51, _0x272fa4, _0x265cc1) => {
                    _0xeee979.freezePosition(false);
                    _0xeee979.setCanBeDamaged(true);
                    _0xeee979.setInvincible(false);
                    _0xeee979.CanRagdoll = true;
                    _0xeee979.setOnlyDamagedByPlayer(true);
                    _0xeee979.setCanRagdollFromPlayerImpact(true);
                    _0xeee979.setSweat(100);
                    _0xeee979.setRagdollOnCollision(true);
                    _0xeee979.setProofs(false, false, false, false, false, false, false, false);
                    setTimeout(function () {
                        if (_0xeee979 == null || !_0xeee979.doesExist()) {
                            return;
                        }
                        _0xeee979.taskEnterVehicle(_0x2cc149.handle, 10000, -1, 1, 1, 0);
                    }, 1500);
                    setTimeout(function () {
                        if (_0xeee979 == null || !_0xeee979.doesExist()) {
                            return;
                        }
                        _0xeee979.taskVehicleDriveToCoord(_0x2cc149.handle, 0.52, 0.38, 72.1, 40, 1, 2046537925, 2, 3, true);
                    }, 10500);
                });
            }
        }
        _0x27e689.default = new _0x114706();
    }, {
        '../player/player': 262
    }],
    257: [function (_0x13eec3, _0x5a6c77, _0x281d27) {
        'use strict';

        Object.defineProperty(_0x281d27, '__esModule', {
            value: true
        });
        var _0x254411 = _0x13eec3('../player/player');
        var _0x4ff462 = _0x254411 && _0x254411.__esModule ? _0x254411 : {
            default: _0x254411
        };
        class _0x48c4de {
            constructor() {
                this.freezed = false;
                this.disabled = false;
                this.disabledAll = false;
                this.menuItemsPedsPlayer = [{
                    text: 'Geld geben',
                    event: 'GiveMoney',
                    server: true,
                    args: ''
                }, {
                    text: 'Dokument zeigen',
                    event: 'ShowDoc',
                    server: true,
                    args: ''
                }, {
                    text: 'Dokument nehmen',
                    event: 'TakeDoc',
                    server: true,
                    args: ''
                }, {
                    text: 'Durchsuchen',
                    event: 'InvSearch',
                    server: true,
                    args: ''
                }, {
                    text: 'Erste Hilfe',
                    event: 'FirstAid',
                    server: true,
                    args: ''
                }, {
                    text: 'Gegenstand geben',
                    event: 'Give',
                    server: true,
                    args: ''
                }, {
                    text: 'Ins Fahrzeug ziehen',
                    event: 'GrabPlayer',
                    server: true,
                    args: ''
                }, {
                    text: 'Fesseln',
                    event: 'Tie',
                    server: true,
                    args: ''
                }];
                this.playerOnObjectItems = [{
                    text: 'Objekt entfernen',
                    event: 'RemoveObject',
                    server: true,
                    args: ''
                }];
                this.menuItemsPedsCduty = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Geld geben',
                    description: 'Dieser Person Geld geben.',
                    icon: 'img/icons/player/wallet.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEMONEY_DIALOG',
                    arg: ''
                }, {
                    label: 'Handschellen',
                    description: 'Dieser Person Handschellen anlegen/abnehmen.',
                    icon: 'img/icons/cop/cuff.png',
                    id: 'REQUEST_PEDS_PLAYER_CUFF',
                    arg: ''
                }, {
                    label: 'Person nehmen/loslassen',
                    description: 'Diese Person mitschleifen/loslassen.',
                    icon: 'img/icons/cop/takeperson.png',
                    id: 'REQUEST_PEDS_PLAYER_TAKEPERSON',
                    arg: ''
                }, {
                    label: 'Personalausweis nehmen',
                    description: 'Den Personalausweis des Spielers nehmen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_GETPERSO',
                    arg: ''
                }, {
                    label: 'Person durchsuchen',
                    description: 'Diese Person durchsuchen.',
                    icon: 'img/icons/player/search.png',
                    id: 'REQUEST_PEDS_PLAYER_FRISK',
                    arg: ''
                }, {
                    label: 'Personalausweis',
                    description: 'Dieser Person deinen Personalausweis zeigen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_SHOW_PERSO',
                    arg: ''
                }, {
                    label: 'Stabilisieren',
                    description: 'Diese Person stabilisieren.',
                    icon: 'img/icons/medic/stabilize.png',
                    id: 'REQUEST_PEDS_PLAYER_STABALIZE',
                    arg: ''
                }, {
                    label: 'Tragen',
                    description: 'Trage eine bewusstlose Person.',
                    icon: 'img/icons/player/fist.png',
                    id: 'REQUEST_CARRY_PLAYER',
                    arg: ''
                }, {
                    label: 'Item geben',
                    description: 'Dieser Person ein Item geben.',
                    icon: 'img/icons/player/item.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEITEM',
                    arg: ''
                }, {
                    label: 'Casino Einlass',
                    description: 'Dieser Person Einlass gewähren / entziehen.',
                    icon: 'img/icons/player/diamond.png',
                    id: 'REQUEST_PEDS_PLAYER_CASINO',
                    arg: ''
                }];
                this.menuItemsPedsMedic = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Geld geben',
                    description: 'Dieser Person Geld geben.',
                    icon: 'img/icons/player/wallet.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEMONEY_DIALOG',
                    arg: ''
                }, {
                    label: 'Handschellen',
                    description: 'Dieser Person Handschellen anlegen/abnehmen.',
                    icon: 'img/icons/cop/cuff.png',
                    id: 'REQUEST_PEDS_PLAYER_CUFF',
                    arg: ''
                }, {
                    label: 'Person nehmen/loslassen',
                    description: 'Diese Person mitschleifen/loslassen.',
                    icon: 'img/icons/cop/takeperson.png',
                    id: 'REQUEST_PEDS_PLAYER_TAKEPERSON',
                    arg: ''
                }, {
                    label: 'Personalausweis',
                    description: 'Dieser Person deinen Personalausweis zeigen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_SHOW_PERSO',
                    arg: ''
                }, {
                    label: 'Personalausweis nehmen',
                    description: 'Den Personalausweis des Spielers nehmen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_GETPERSO',
                    arg: ''
                }, {
                    label: 'Person durchsuchen',
                    description: 'Diese Person durchsuchen.',
                    icon: 'img/icons/player/search.png',
                    id: 'REQUEST_PEDS_PLAYER_FRISK',
                    arg: ''
                }, {
                    label: 'Behandeln',
                    description: 'Diese Person stabilisieren.',
                    icon: 'img/icons/medic/medicate.png',
                    id: 'REQUEST_PEDS_PLAYER_STABALIZE',
                    arg: ''
                }, {
                    label: 'Tragen',
                    description: 'Trage eine bewusstlose Person.',
                    icon: 'img/icons/player/fist.png',
                    id: 'REQUEST_CARRY_PLAYER',
                    arg: ''
                }, {
                    label: 'Schlüssel geben',
                    description: 'Dieser Person einen Schlüssel geben.',
                    icon: 'img/icons/inventory/key.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEKEY',
                    arg: ''
                }, {
                    label: 'Item geben',
                    description: 'Dieser Person ein Item geben.',
                    icon: 'img/icons/player/item.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEITEM',
                    arg: ''
                }];
                this.menuItemsPedsCop = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Geld geben',
                    description: 'Dieser Person Geld geben.',
                    icon: 'img/icons/player/wallet.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEMONEY_DIALOG',
                    arg: ''
                }, {
                    label: 'Handschellen',
                    description: 'Dieser Person Handschellen anlegen/abnehmen.',
                    icon: 'img/icons/cop/cuff.png',
                    id: 'REQUEST_PEDS_PLAYER_CUFF',
                    arg: ''
                }, {
                    label: 'Person nehmen/loslassen',
                    description: 'Diese Person mitschleifen/loslassen.',
                    icon: 'img/icons/cop/takeperson.png',
                    id: 'REQUEST_PEDS_PLAYER_TAKEPERSON',
                    arg: ''
                }, {
                    label: 'Personalausweis nehmen',
                    description: 'Den Personalausweis des Spielers nehmen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_GETPERSO',
                    arg: ''
                }, {
                    label: 'Person durchsuchen',
                    description: 'Diese Person durchsuchen.',
                    icon: 'img/icons/player/search.png',
                    id: 'REQUEST_PEDS_PLAYER_FRISK',
                    arg: ''
                }, {
                    label: 'Personalausweis',
                    description: 'Dieser Person deinen Personalausweis zeigen.',
                    icon: 'img/icons/player/perso.png',
                    id: 'REQUEST_PEDS_PLAYER_SHOW_PERSO',
                    arg: ''
                }, {
                    label: 'Stabilisieren',
                    description: 'Diese Person stabilisieren.',
                    icon: 'img/icons/medic/stabilize.png',
                    id: 'REQUEST_PEDS_PLAYER_STABALIZE',
                    arg: ''
                }, {
                    label: 'Tragen',
                    description: 'Trage eine bewusstlose Person.',
                    icon: 'img/icons/player/fist.png',
                    id: 'REQUEST_CARRY_PLAYER',
                    arg: ''
                }, {
                    label: 'Schlüssel geben',
                    description: 'Dieser Person einen Schlüssel geben.',
                    icon: 'img/icons/inventory/key.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEKEY',
                    arg: ''
                }, {
                    label: 'Item geben',
                    description: 'Dieser Person ein Item geben.',
                    icon: 'img/icons/player/item.png',
                    id: 'REQUEST_PEDS_PLAYER_GIVEITEM',
                    arg: ''
                }];
                this.menuItemsPedsPlayerInjured = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }];
                this.menuItemsTiedOrCuffed = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }];
                this.l_Mods = [{
                    id: 0,
                    name: 'spoiler'
                }, {
                    id: 1,
                    name: 'front_bumper'
                }, {
                    id: 2,
                    name: 'rear_bumper'
                }, {
                    id: 3,
                    name: 'side_skirt'
                }, {
                    id: 4,
                    name: 'exhaust'
                }, {
                    id: 5,
                    name: 'frame'
                }, {
                    id: 6,
                    name: 'grille'
                }, {
                    id: 7,
                    name: 'hood'
                }, {
                    id: 8,
                    name: 'fender'
                }, {
                    id: 9,
                    name: 'right_fender'
                }, {
                    id: 10,
                    name: 'roof'
                }, {
                    id: 11,
                    name: 'engine'
                }, {
                    id: 12,
                    name: 'brakes'
                }, {
                    id: 13,
                    name: 'transmission'
                }, {
                    id: 14,
                    name: 'horns'
                }, {
                    id: 15,
                    name: 'suspension'
                }, {
                    id: 16,
                    name: 'armor'
                }, {
                    id: 18,
                    name: 'turbo'
                }, {
                    id: 22,
                    name: 'xenon'
                }, {
                    id: 23,
                    name: 'front_wheels'
                }, {
                    id: 20,
                    name: 'util_shadow_silver'
                }, {
                    id: 24,
                    name: 'back_wheels'
                }, {
                    id: 25,
                    name: 'plate_holders'
                }, {
                    id: 27,
                    name: 'trim_design'
                }, {
                    id: 28,
                    name: 'ornaments'
                }, {
                    id: 30,
                    name: 'dial_design'
                }, {
                    id: 33,
                    name: 'steering_wheel'
                }, {
                    id: 34,
                    name: 'shift_lever'
                }, {
                    id: 35,
                    name: 'plaques'
                }, {
                    id: 38,
                    name: 'hydraulics'
                }, {
                    id: 40,
                    name: 'boost'
                }, {
                    id: 46,
                    name: 'window_tint'
                }, {
                    id: 48,
                    name: 'livery'
                }, {
                    id: 62,
                    name: 'plate'
                }];
                mp.events.add('freezePlayer', _0x325dbb => {
                    if (_0x325dbb === undefined || typeof _0x325dbb !== 'boolean') {
                        return;
                    }
                    _0x4ff462.default.cuffed = _0x325dbb;
                    mp.players.local.freezePosition(_0x325dbb);
                    mp.players.local.setCanSwitchWeapon(!_0x325dbb);
                    this.disabled = _0x325dbb;
                });
                mp.events.add('disableAllControls', _0x5b7149 => {
                    this.disabledAll = _0x5b7149;
                });
                mp.events.add('disableAllPlayerActions', _0x172179 => {
                    this.disabled = _0x172179;
                });
                mp.events.add('toggleShooting', _0x4a2c30 => {
                    this.freezed = _0x4a2c30;
                });
                mp.events.add('render', () => {
                    mp.game.player.restoreStamina(100);
                    if (this.freezed) {
                        this.disableControls();
                    } else if (this.disabled) {
                        this.disableControls();
                        mp.game.controls.disableControlAction(0, 30, true);
                        mp.game.controls.disableControlAction(0, 31, true);
                    }
                    if (_0x4ff462.default.superjump) {
                        mp.game.invoke('0x57FFF03E423A4C0B', mp.players.local);
                    }
                    if (this.disabledAll) {
                        mp.game.controls.disableAllControlActions(0);
                    }
                    var _0x52a2f4 = mp.players.local.vehicle;
                    if (_0x52a2f4 != null) {
                        var _0x357493 = _0x52a2f4.getVariable('engineStatus');
                        if (_0x357493 != null) {
                            _0x52a2f4.setUndriveable(!_0x357493);
                        }
                    }
                });
                mp.events.add('playerDeath', () => {
                    setTimeout(() => this.disabled = true, 100);
                });
                mp.events.add('playerEnterVehicle', (_0x1e22fa, _0x2bf7dc, _0x393794) => {
                    ;
                    if (_0x4ff462.default.injured || _0x4ff462.default.tied || _0x4ff462.default.cuffed) {
                        mp.players.local.clearTasks();
                    }
                });
                mp.events.add('loadNpc', (_0x95d538, _0x23e742, _0x246d6c, _0x29279d, _0x17693d, _0x2f1dc1) => {
                    mp.peds.new(_0x95d538, new mp.Vector3(_0x23e742, _0x246d6c, _0x29279d), _0x17693d, _0x29e042 => {
                        _0x29e042.setAlpha(0);
                        _0x29e042.setRotation(0, 0, _0x17693d, 2, true);
                        _0x29e042.freezePosition(true);
                    }, _0x2f1dc1);
                });
            }
            ['disableAllControls'](_0x2a7b69) {
                this.disabledAll = _0x2a7b69;
            }
            ['getPlayerMenuItems']() {
                if (_0x4ff462.default.injured) {
                    return this.menuItemsPedsPlayerInjured;
                } else {
                    return _0x4ff462.default.tied || _0x4ff462.default.cuffed ? this.menuItemsTiedOrCuffed : this.menuItemsPedsPlayer;
                }
            }
            ['disableControls']() {
                mp.game.player.disableFiring(true);
                mp.game.controls.disableControlAction(0, 22, true);
                mp.game.controls.disableControlAction(0, 23, true);
                mp.game.controls.disableControlAction(0, 25, true);
                mp.game.controls.disableControlAction(0, 44, true);
                mp.game.controls.disableControlAction(2, 75, true);
                mp.game.controls.disableControlAction(2, 140, true);
                mp.game.controls.disableControlAction(2, 141, true);
            }
        }
        _0x281d27.default = new _0x48c4de();
    }, {
        '../player/player': 262
    }],
    258: [function (_0x1a902f, _0x364744, _0x5938b1) {
        'use strict';

        Object.defineProperty(_0x5938b1, '__esModule', {
            value: true
        });
        var _0x383c4f = _0x1a902f('../player/player');
        var _0x283e5c = _0x383c4f && _0x383c4f.__esModule ? _0x383c4f : {
            default: _0x383c4f
        };
        class _0x4e4387 {
            constructor() {
                this.closestStreamingVehicles = [];
                mp.events.add('entityStreamOut', _0x4a6ea7 => {
                    if (_0x4a6ea7.type == 'vehicle') {
                        let _0x15e08d = this.closestStreamingVehicles.indexOf(_0x4a6ea7);
                        if (_0x15e08d > -1) {
                            this.closestStreamingVehicles.splice(_0x15e08d, 1);
                        }
                    }
                });
                var _0x29d5fb = this;
                setInterval(function () {
                    if (_0x29d5fb != null && _0x283e5c.default.vehicleSync && _0x29d5fb.closestStreamingVehicles != null) {
                        mp.vehicles.forEachInStreamRange(_0x452e3c => {
                            if (_0x452e3c.type == 'vehicle') {
                                let _0x35604e = _0x452e3c.position;
                                let _0x32d1a5 = _0x283e5c.default.getDistance(_0x35604e);
                                if (_0x32d1a5 < 80 && !_0x29d5fb.closestStreamingVehicles.includes(_0x452e3c)) {
                                    mp.events.callRemote('requestVehicleSyncData', _0x452e3c);
                                    _0x29d5fb.closestStreamingVehicles.push(_0x452e3c);
                                }
                            }
                        });
                    }
                }, 1500);
            }
        }
        _0x5938b1.default = new _0x4e4387();
    }, {
        '../player/player': 262
    }],
    259: [function (_0x1130ac, _0x1460ce, _0x372672) {
        arguments[4][3][0].apply(_0x372672, arguments);
    }, {
        dup: 3
    }],
    260: [function (_0x243ced, _0x58dfbe, _0xa52cc1) {
        arguments[4][4][0].apply(_0xa52cc1, arguments);
    }, {
        '../../player/player': 262,
        './contact': 259,
        dup: 4
    }],
    261: [function (_0x2bec69, _0x73b7d3, _0x43bae0) {
        'use strict';

        var _0x55767e = _0x2bec69('../app/apps');
        var _0x56a9df = _0x55767e && _0x55767e.__esModule ? _0x55767e : {
            default: _0x55767e
        };
        var _0x243c97 = _0x2bec69('../player/player');
        var _0x54284a = _0x243c97 && _0x243c97.__esModule ? _0x243c97 : {
            default: _0x243c97
        };
        var _0x54d84b = _0x2bec69('../windows/windows');
        var _0x3fb64b = _0x54d84b && _0x54d84b.__esModule ? _0x54d84b : {
            default: _0x54d84b
        };
        const _0x262cea = async _0x4effd9 => {
            mp.game.streaming.requestClipSet(_0x4effd9);
            while (!mp.game.streaming.hasClipSetLoaded(_0x4effd9)) {
                await mp.game.waitAsync(5);
            }
        };
        mp.events.add('changeCrouchingState', (_0x59eb4c, _0x52804e) => {
            if (_0x59eb4c != null && _0x59eb4c.type === 'player' && 'move_ped_crouched' && 0.25 && 'move_ped_crouched_strafing') {
                if (_0x52804e) {
                    _0x59eb4c.setMovementClipset('move_ped_crouched', 0.25);
                    _0x59eb4c.setStrafeClipset('move_ped_crouched_strafing');
                } else {
                    _0x59eb4c.resetMovementClipset(0.25);
                    _0x59eb4c.resetStrafeClipset();
                }
            }
        });
        mp.events.add('PlaySet', _0x660ea0 => {
            _0x4ced1f(mp.players.local, _0x660ea0);
        });
        mp.events.add('PlayNoSet', () => {
            mp.players.local.resetMovementClipset(0);
        });
        mp.events.add('PlayNoAnim', () => {
            mp.events.callRemote('PlayAnimFromNMenu', '0');
        });
        function _0x4ced1f(_0x18f27d, _0x192580) {
            if (!mp.game.streaming.hasClipSetLoaded(_0x192580)) {
                mp.game.streaming.requestClipSet(_0x192580);
                while (!mp.game.streaming.hasClipSetLoaded(_0x192580)) {
                    mp.game.wait(0);
                }
            }
            _0x18f27d.setMovementClipset(_0x192580, 0);
        }
        mp.events.add('loadCrouchClipsets', async () => {
            await _0x262cea('move_ped_crouched');
            await _0x262cea('move_ped_crouched_strafing');
        });
        mp.keys.bind(17, false, () => {
            if (_0x3fb64b.default.visibleWindow != null || _0x56a9df.default.componentVisibleApp.Smartphone || _0x56a9df.default.componentVisibleApp.Computer || _0x56a9df.default.componentVisibleApp.Ipad || _0x54284a.default.chatFlag || _0x54284a.default.injured) {
                return;
            }
            mp.events.callRemote('toggleCrouch');
        });
    }, {
        '../app/apps': 8,
        '../player/player': 262,
        '../windows/windows': 278
    }],
    262: [function (_0x5f8556, _0x2e1dd3, _0x438821) {
        'use strict';

        Object.defineProperty(_0x438821, '__esModule', {
            value: true
        });
        var _0x375b1d = _0x5f8556('./contacts/contacts');
        var _0x41c75c = _0x375b1d && _0x375b1d.__esModule ? _0x375b1d : {
            default: _0x375b1d
        };
        var _0x375345 = _0x5f8556('./telefonHistory/historys');
        var _0x2612a1 = _0x375345 && _0x375345.__esModule ? _0x375345 : {
            default: _0x375345
        };
        var _0x525bc5 = _0x5f8556('../interfaces/hud/hud');
        var _0x198ce3 = _0x525bc5 && _0x525bc5.__esModule ? _0x525bc5 : {
            default: _0x525bc5
        };
        var _0x1eed02 = _0x5f8556('../utils/utils');
        var _0x595806 = _0x1eed02 && _0x1eed02.__esModule ? _0x1eed02 : {
            default: _0x1eed02
        };
        var _0x1eac47 = _0x5f8556('../interfaces/hud/player-panel');
        var _0x536cea = _0x1eac47 && _0x1eac47.__esModule ? _0x1eac47 : {
            default: _0x1eac47
        };
        var _0x14b697 = _0x5f8556('../interfaces/hud/playernotification');
        var _0x3242ed = _0x14b697 && _0x14b697.__esModule ? _0x14b697 : {
            default: _0x14b697
        };
        var _0x39c9e4 = _0x5f8556('../raycast/raycast');
        var _0x174709 = _0x39c9e4 && _0x39c9e4.__esModule ? _0x39c9e4 : {
            default: _0x39c9e4
        };
        class _0x8d8777 {
            constructor() {
                this.firstName = undefined;
                this.lastName = undefined;
                this.superjump = undefined;
                this.playerId = undefined;
                this.academicPoints = undefined;
                this.business = undefined;
                this.gwdNote = undefined;
                this.zwdNote = undefined;
                this.money = undefined;
                this.blackmoney = undefined;
                this.sport = undefined;
                this.hunger = undefined;
                this.thirst = undefined;
                this.stress = undefined;
                this.wanteds = undefined;
                this.house = undefined;
                this.team = undefined;
                this.teamRank = undefined;
                this.gvmpTeamRank = undefined;
                this.level = undefined;
                this.injured = undefined;
                this.duty = undefined;
                this.cuffed = undefined;
                this.tied = undefined;
                this.aduty = undefined;
                this.gamedesignduty = undefined;
                this.inventory = undefined;
                this.lastMusicEvent = undefined;
                this.chatFlag = false;
                this.voiceHash = '';
                this.hasDamageFX = '';
                this.state = 0;
                this.rank = 0;
                this.anametags = false;
                this.phone = undefined;
                this.phonelautlos = false;
                this.contacts = new _0x41c75c.default();
                this.historys = new _0x2612a1.default();
                this.weaponAmmo = [];
                this.cduty = false;
                this.currentWeapon = undefined;
                this.job = undefined;
                this.jobsSkill = undefined;
                this.isPetFollowing = undefined;
                this.Krankenversicherung = undefined;
                this.activeRingtone = '';
                this.gui;
                this.natives = {
                    SWITCH_OUT_PLAYER: '0xAAB3200ED59016BC',
                    SWITCH_IN_PLAYER: '0xD8295AF639FD9CB8',
                    IS_PLAYER_SWITCH_IN_PROGRESS: '0xD9D2CFFF49FAB35F'
                };
                this.animations = [];
                this.marker = null;
                this.playerSync = true;
                this.vehicleSync = true;
                this.shortCutBeingUsed = false;
                this.isCarrying = false;
                this.allowHandy = true;
                this.spawnedDrugPed = null;
                this.progressbar = false;
                this.health = 100;
                this.ready = false;
                this.wasRagdoll = {};
                this.collided = {};
                this.HasCollided = false;
                this.HasRagdall = false;
                this.isOpeningDoor = false;
                this.isInWater = false;
                this.acMark1 = undefined;
                this.acMark2 = undefined;
                this.custommarkers = [];
                this.customObjects = [];
                this.weaponSwitchAmmo = [];
                this.currentCheckpoint = null;
                this.buildingmode = false;
                this.buildingspeed = 0.1;
                this.buildingobject = undefined;
                this.attachmentsync = false;
                this.openVoiceSettings = false;
                this.lastSeenArmor = 0;
                this.noClip = {
                    enabled: false,
                    speed: 1
                };
                const _0x21ecaa = ['Set_Pent_Tint_Shell', 'Set_Pent_Pattern_01', 'Set_Pent_Spa_Bar_Open', 'Set_Pent_Media_Bar_Open', 'Set_Pent_Dealer', 'Set_Pent_Arcade_Modern', 'Set_Pent_Bar_Clutter', 'Set_Pent_Clutter_01', 'set_pent_bar_light_01', 'set_pent_bar_party_0', 'hei_dlc_windows_casino', 'vw_dlc_casino_door', 'hei_dlc_casino_door'];
                setInterval(function () {
                    if (mp.game.gameplay.getProfileSetting(0) == 0) {
                        mp.game.cam.shakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.4);
                    }
                }, 150);
                setInterval(() => {
                    mp.game.invoke('0x9E4CFFF989258472');
                    mp.game.invoke('0xF4F2C0D4EE209E20');
                }, 25000);
                setInterval(() => {
                    let _0x4cc4e4 = mp.game.graphics.getScreenAspectRatio(true);
                    if (_0x4cc4e4 < 1.5) {
                        mp.events.callRemote('wrongScreenScale', _0x4cc4e4);
                    }
                }, 20000);
                const _0x538e51 = {
                    interiorName: 'bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo',
                    interiorID: 247041,
                    props: {
                        table: ['meth_lab_empty', 'meth_lab_setup'],
                        boiler: ['', 'meth_lab_basic', 'meth_lab_upgrade'],
                        security: ['', 'meth_lab_security_high']
                    }
                };
                const _0x1dc0b0 = {
                    arcade: {
                        interiorName: 'ch_DLC_Arcade',
                        Id: 278273,
                        props: {
                            grundraum: [['entity_set_arcade_set_derelict', 'entity_set_arcade_set_derelict_carpet', 'entity_set_arcade_set_derelict_clean_up'], ['entity_set_arcade_set_derelict'], ['entity_set_arcade_set_ceiling_flat', 'entity_set_ret_light_no_neon'], ['entity_set_arcade_set_ceiling_beams', 'entity_set_hip_light_no_neon']],
                            spiegel: [[''], ['entity_set_arcade_set_ceiling_mirror']],
                            einrichtungsstyle: [[''], ['entity_set_floor_option_01', 'entity_set_mural_neon_option_01', 'entity_set_mural_option_01'], ['entity_set_floor_option_02', 'entity_set_mural_neon_option_02', 'entity_set_mural_option_02'], ['entity_set_floor_option_03', 'entity_set_mural_neon_option_03', 'entity_set_mural_option_03'], ['entity_set_floor_option_04', 'entity_set_mural_neon_option_04', 'entity_set_mural_option_04'], ['entity_set_floor_option_05', 'entity_set_mural_neon_option_05', 'entity_set_mural_option_05'], ['entity_set_floor_option_06', 'entity_set_mural_neon_option_06', 'entity_set_mural_option_06'], ['entity_set_floor_option_07', 'entity_set_mural_neon_option_07', 'entity_set_mural_option_07'], ['entity_set_floor_option_08', 'entity_set_mural_neon_option_08', 'entity_set_mural_option_08']],
                            inneneinrichtung: [[''], ['entity_set_big_screen', 'entity_set_screens', 'entity_set_constant_geometry']],
                            spielautomaten: [[''], ['entity_set_arcade_set_streetx4']],
                            rewards: ['', 'entity_set_arcade_set_trophy_brawler', 'entity_set_arcade_set_trophy_cabs', 'entity_set_arcade_set_trophy_claw', 'entity_set_arcade_set_trophy_gunner', 'entity_set_arcade_set_trophy_king', 'entity_set_arcade_set_trophy_love', 'entity_set_arcade_set_trophy_monkey', 'entity_set_arcade_set_trophy_patriot', 'entity_set_arcade_set_trophy_racer', 'entity_set_arcade_set_trophy_retro', 'entity_set_arcade_set_trophy_strife', 'entity_set_arcade_set_trophy_teller']
                        },
                        allprops: ['entity_set_arcade_set_ceiling_beams', 'entity_set_arcade_set_ceiling_flat', 'entity_set_arcade_set_ceiling_mirror', 'entity_set_arcade_set_derelict', 'entity_set_arcade_set_derelict_carpet', 'entity_set_arcade_set_derelict_clean_up', 'entity_set_arcade_set_streetx4', 'entity_set_arcade_set_trophy_brawler', 'entity_set_arcade_set_trophy_cabs', 'entity_set_arcade_set_trophy_claw', 'entity_set_arcade_set_trophy_gunner', 'entity_set_arcade_set_trophy_king', 'entity_set_arcade_set_trophy_love', 'entity_set_arcade_set_trophy_monkey', 'entity_set_arcade_set_trophy_patriot', 'entity_set_arcade_set_trophy_racer', 'entity_set_arcade_set_trophy_retro', 'entity_set_arcade_set_trophy_strife', 'entity_set_arcade_set_trophy_teller', 'entity_set_big_screen', 'entity_set_constant_geometry', 'entity_set_floor_option_01', 'entity_set_floor_option_02', 'entity_set_floor_option_03', 'entity_set_floor_option_04', 'entity_set_floor_option_05', 'entity_set_floor_option_06', 'entity_set_floor_option_07', 'entity_set_floor_option_08', 'entity_set_hip_light_no_neon', 'entity_set_mural_neon_option_01', 'entity_set_mural_neon_option_02', 'entity_set_mural_neon_option_03', 'entity_set_mural_neon_option_04', 'entity_set_mural_neon_option_05', 'entity_set_mural_neon_option_06', 'entity_set_mural_neon_option_07', 'entity_set_mural_neon_option_08', 'entity_set_mural_option_01', 'entity_set_mural_option_02', 'entity_set_mural_option_03', 'entity_set_mural_option_04', 'entity_set_mural_option_05', 'entity_set_mural_option_06', 'entity_set_mural_option_07', 'entity_set_mural_option_08', 'entity_set_ret_light_no_neon', 'entity_set_screens']
                    },
                    plan: {
                        interiorName: 'ch_DLC_Plan',
                        Id: 278529,
                        props: {
                            kellerraum: [['set_plan_pre_setup', 'set_plan_wall'], ['set_plan_wall'], ['set_plan_garage', 'set_plan_setup', 'set_plan_computer']],
                            Mechanic: [[''], ['set_plan_mechanic']],
                            Hacker: [[''], ['set_plan_hacker']],
                            Weapons: [[''], ['set_plan_weapons']],
                            Wardrobe: [[''], ['set_plan_bed']],
                            CasinoPlan: [[''], ['set_plan_casino']],
                            CasinoDoor: [[''], ['set_plan_vault']]
                        },
                        allprops: ['set_plan_pre_setup', 'set_plan_wall', 'set_plan_setup', 'set_plan_computer', 'set_plan_mechanic', 'set_plan_hacker', 'set_plan_weapons', 'set_plan_bed', 'set_plan_garage', 'set_plan_casino', 'set_plan_vault']
                    }
                };
                const _0x4d0e71 = {
                    interiorName: 'ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_',
                    interiorID: 271617,
                    props: {
                        interrior: [[''], ['Int01_ba_Style01'], ['Int01_ba_Style02'], ['Int01_ba_Style03']],
                        drinks: [[''], [''], ['Int01_ba_booze_01'], ['Int01_ba_booze_02'], ['Int01_ba_booze_03']],
                        lights: [[''], [''], ['dj_01_lights_01'], ['dj_01_lights_02'], ['dj_01_lights_03'], ['dj_02_lights_01'], ['dj_02_lights_02'], ['dj_02_lights_03'], ['dj_03_lights_01'], ['dj_03_lights_02'], ['dj_03_lights_03'], ['dj_04_lights_01'], ['dj_04_lights_02'], ['dj_04_lights_03']],
                        effects: [[''], [''], ['dj_01_lights_04'], ['dj_02_lights_04'], ['dj_03_lights_04'], ['dj_04_lights_04']],
                        clubname: [[''], [''], ['Int01_ba_clubname_01'], ['Int01_ba_clubname_02'], ['Int01_ba_clubname_03'], ['Int01_ba_clubname_04'], ['Int01_ba_clubname_05'], ['Int01_ba_clubname_06'], ['Int01_ba_clubname_07'], ['Int01_ba_clubname_08'], ['Int01_ba_clubname_09']],
                        entrylights: [[''], [''], ['Int01_ba_trad_lights']],
                        security: [[''], [''], ['Int01_ba_security_upgrade']]
                    },
                    allprops: ['Int01_ba_Style01', 'Int01_ba_Style02', 'Int01_ba_Style03', 'Int01_ba_booze_01', 'Int01_ba_booze_02', 'Int01_ba_booze_03', 'dj_01_lights_01', 'dj_01_lights_02', 'dj_01_lights_03', 'dj_02_lights_01', 'dj_02_lights_02', 'dj_02_lights_03', 'dj_03_lights_01', 'dj_03_lights_02', 'dj_03_lights_03', 'dj_04_lights_01', 'dj_04_lights_02', 'dj_04_lights_03', 'dj_01_lights_04', 'dj_02_lights_04', 'dj_03_lights_04', 'dj_04_lights_04', 'Int01_ba_clubname_01', 'Int01_ba_clubname_02', 'Int01_ba_clubname_03', 'Int01_ba_clubname_04', 'Int01_ba_clubname_05', 'Int01_ba_clubname_06', 'Int01_ba_clubname_07', 'Int01_ba_clubname_08', 'Int01_ba_clubname_09', 'Int01_ba_trad_lights', 'Int01_ba_security_upgrade']
                };
                const _0x123a1c = {
                    interiorID: 269313,
                    ipls: ['sm_smugdlc_interior_placement', 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_', 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_', 'xm_x17dlc_int_placement', 'xm_x17dlc_int_placement_interior_0_x17dlc_int_base_ent_milo_', 'xm_x17dlc_int_placement_interior_10_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_11_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_12_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_13_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_14_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_15_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_16_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_17_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_18_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_19_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_1_x17dlc_int_base_loop_milo_', 'xm_x17dlc_int_placement_interior_20_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_21_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_22_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_23_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_24_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_25_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_26_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_27_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_28_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_29_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_2_x17dlc_int_bse_tun_milo_', 'xm_x17dlc_int_placement_interior_30_v_apart_midspaz_milo_', 'xm_x17dlc_int_placement_interior_31_v_studio_lo_milo_', 'xm_x17dlc_int_placement_interior_32_v_garagem_milo_', 'xm_x17dlc_int_placement_interior_33_x17dlc_int_02_milo_', 'xm_x17dlc_int_placement_interior_34_x17dlc_int_lab_milo_', 'xm_x17dlc_int_placement_interior_35_x17dlc_int_tun_entry_milo_', 'xm_x17dlc_int_placement_interior_3_x17dlc_int_base_milo_', 'xm_x17dlc_int_placement_interior_4_x17dlc_int_facility_milo_', 'xm_x17dlc_int_placement_interior_5_x17dlc_int_facility2_milo_', 'xm_x17dlc_int_placement_interior_6_x17dlc_int_silo_01_milo_', 'xm_x17dlc_int_placement_interior_7_x17dlc_int_silo_02_milo_', 'xm_x17dlc_int_placement_interior_8_x17dlc_int_sub_milo_', 'xm_x17dlc_int_placement_interior_9_x17dlc_int_01_milo_', 'xm_x17dlc_int_placement_strm_0', 'xm_prop_x17_tem_control_01', 'xm_prop_x17_l_door_glass_01', 'xm_prop_x17_l_door_frame_01', 'xm_prop_x17_l_glass_01', 'xm_prop_x17_l_glass_02', 'xm_prop_x17_l_glass_03', 'xm_prop_x17_l_frame_01', 'xm_prop_x17_l_frame_02', 'xm_prop_x17_l_frame_03', 'xm_bunkerentrance_door', 'xm_hatch_01_cutscene', 'xm_hatch_02_cutscene', 'xm_hatch_03_cutscene', 'xm_hatch_04_cutscene', 'xm_hatch_06_cutscene', 'xm_hatch_07_cutscene', 'xm_hatch_08_cutscene', 'xm_hatch_09_cutscene', 'xm_hatch_10_cutscene', 'xm_hatch_closed', 'xm_hatches_terrain', 'xm_hatches_terrain_lod', 'xm_mpchristmasadditions', 'xm_siloentranceclosed_x17'],
                    props: ['set_int_02_shell', 'set_int_02_lounge1', 'set_int_02_sleep', 'set_int_02_security', 'set_int_02_cannon', 'set_int_02_decal_01', 'set_int_02_trophy1', 'Set_Int_02_Parts_Panther1', 'Set_Int_02_Parts_Riot1', 'Set_Int_02_Parts_Cheno1', 'Set_Int_02_Parts_Thruster1', 'Set_Int_02_Parts_Avenger1', 'set_int_02_clutter1', 'set_int_02_clutter2', 'set_int_02_clutter3', 'set_int_02_clutter4', 'set_int_02_clutter5', 'set_int_02_crewemblem', 'set_int_02_paramedic_complete', 'set_int_02_forcedentry_complete', 'set_int_02_aqualungs_complete', 'set_int_02_daylightrob_complete', 'set_int_02_burglary_complete', 'set_int_02_flightrecord_complete', 'Set_Int_02_outfit_serverfarm']
                };
                mp.events.add('loadDoomsDayBunker', () => {
                    _0x123a1c.props.forEach(_0xb4b6c4 => {
                        mp.game.interior.enableInteriorProp(269313, _0xb4b6c4);
                        mp.game.invoke('0xC1F1920BAF281317', 269313, _0xb4b6c4, 1);
                    });
                    _0x123a1c.ipls.forEach(_0x1d8129 => {
                        mp.game.streaming.requestIpl(_0x1d8129);
                    });
                    mp.game.interior.refreshInterior(269313);
                });
                mp.events.add('unloadDoomsDayBunker', () => {
                    _0x123a1c.props.forEach(_0x580c44 => {
                        mp.game.interior.disableInteriorProp(269313, _0x580c44);
                    });
                });
                mp.events.add('unloadNightclubInterrior', () => {
                    _0x4d0e71.allprops.forEach(_0x56f5ac => {
                        mp.game.interior.disableInteriorProp(271617, _0x56f5ac);
                    });
                    mp.game.interior.refreshInterior(271617);
                });
                mp.events.add('loadNightclubInterrior', (_0x512f6e, _0x263dfa, _0x2ef476, _0x1fe996, _0x5ab433, _0x303678, _0x51e509) => {
                    mp.game.streaming.requestIpl('ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_');
                    _0x4d0e71.allprops.forEach(_0x1a702d => {
                        mp.game.interior.disableInteriorProp(271617, _0x1a702d);
                    });
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.interrior[parseInt(_0x512f6e)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.drinks[parseInt(_0x263dfa)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.lights[parseInt(_0x2ef476)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.effects[parseInt(_0x1fe996)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.clubname[parseInt(_0x5ab433)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.entrylights[parseInt(_0x303678)]);
                    mp.game.interior.enableInteriorProp(271617, _0x4d0e71.props.security[parseInt(_0x51e509)]);
                    mp.game.interior.refreshInterior(271617);
                });
                const _0x3a22c2 = {
                    interiorName: 'bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo',
                    interiorID: 247809,
                    props: ['counterfeit_setup', 'counterfeit_upgrade_equip', 'counterfeit_security', 'money_cutter', 'counterfeit_cashpile100a', 'counterfeit_cashpile100b', 'counterfeit_cashpile100c', 'counterfeit_cashpile100d']
                };
                const _0x3e95ad = {
                    interiorName: 'imp_sm_13_cargarage_a',
                    interiorID: 255489,
                    props: {
                        room: ['garage_decor_04', 'numbering_style03_n1', 'lighting_option08']
                    }
                };
                const _0x365a43 = {
                    interiorName: 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_',
                    interiorID: 260353,
                    props: ['set_tint_shell', 'set_floor_1', 'set_floor_decal_3', 'set_modarea', 'set_office_modern', 'set_bedroom_modern', 'set_bedroom_tint', 'set_lightning_hangar_c', 'set_lightning_wall_tint01']
                };
                function _0x5ca481(_0x2828ca, _0x4736bf, _0x2e8a9a, _0x2bd8ad = false) {
                    return new mp.Vector3(_0x2828ca.x + _0x4736bf.x * _0x2e8a9a, _0x2828ca.y + _0x4736bf.y * _0x2e8a9a, _0x2bd8ad === true ? _0x2828ca.z : _0x2828ca.z + _0x4736bf.z * _0x2e8a9a);
                }
                function _0x256f92(_0x39c806) {
                    let _0x22780f = {
                        x: _0x39c806.x * (Math.PI / 180),
                        y: _0x39c806.y * (Math.PI / 180),
                        z: _0x39c806.z * (Math.PI / 180) + Math.PI / 2
                    };
                    let _0x4051bb = {
                        x: Math.cos(_0x22780f.z),
                        y: Math.sin(_0x22780f.z),
                        z: Math.sin(_0x22780f.x)
                    };
                    return _0x4051bb;
                }
                function _0xb952b0(_0x2dd72d) {
                    let _0x357224 = {
                        x: _0x2dd72d.x * (Math.PI / 180),
                        y: _0x2dd72d.y * (Math.PI / 180),
                        z: _0x2dd72d.z * (Math.PI / 180)
                    };
                    var _0x43faf4 = {
                        x: Math.cos(_0x357224.z),
                        y: Math.sin(_0x357224.z),
                        z: Math.sin(_0x357224.x)
                    };
                    return _0x43faf4;
                }
                mp.game.streaming.requestIpl('hei_dlc_casino_door');
                mp.game.streaming.requestIpl('hei_dlc_windows_casino');
                mp.game.streaming.requestIpl('TrevorsTrailerTidy');
                mp.game.streaming.requestIpl('Bunker_Style_A');
                mp.game.streaming.requestIpl('upgrade_bunker_set');
                mp.game.streaming.requestIpl('security_upgrade');
                mp.game.streaming.requestIpl('Office_Upgrade_set');
                mp.game.streaming.requestIpl('gun_wall_blocker');
                mp.game.streaming.requestIpl('gun_range_lights');
                mp.game.streaming.requestIpl('gun_locker_upgrade');
                mp.game.streaming.requestIpl('Gun_schematic_set');
                mp.game.streaming.requestIpl('gr_grdlc_interior_placement_interior_1_grdlc_int_02_milo_');
                const _0x41b6d5 = {
                    yannikipls: ['apa_v_mp_h_01_a', 'apa_v_mp_h_01_c', 'apa_v_mp_h_01_b', 'apa_v_mp_h_02_a', 'apa_v_mp_h_02_c', 'apa_v_mp_h_02_b', 'apa_v_mp_h_03_a', 'apa_v_mp_h_03_c', 'apa_v_mp_h_03_b', 'apa_v_mp_h_04_a', 'apa_v_mp_h_04_c', 'apa_v_mp_h_04_b', 'apa_v_mp_h_05_a', 'apa_v_mp_h_05_c', 'apa_v_mp_h_05_b', 'apa_v_mp_h_06_a', 'apa_v_mp_h_06_c', 'apa_v_mp_h_06_b', 'apa_v_mp_h_07_a', 'apa_v_mp_h_07_c', 'apa_v_mp_h_07_b', 'apa_v_mp_h_08_a', 'apa_v_mp_h_08_c', 'apa_v_mp_h_08_b']
                };
                _0x41b6d5.yannikipls.forEach(_0x5e9800 => {
                    mp.game.streaming.requestIpl(_0x5e9800);
                });
                const _0xc53c78 = mp.game.interior.getInteriorAtCoords(976.636, 70.295, 115.164);
                _0x21ecaa.forEach(_0x47ff0b => {
                    mp.game.interior.enableInteriorProp(_0xc53c78, _0x47ff0b);
                    mp.game.invoke('0xC1F1920BAF281317', _0xc53c78, _0x47ff0b, 1);
                });
                mp.game.interior.refreshInterior(_0xc53c78);
                mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                mp.game.interior.refreshInterior(255489);
                function _0x21ae12(_0x4e4392, _0x35dce1) {
                    this.id = _0x4e4392;
                    this.ammo = _0x35dce1;
                }
                mp.events.add('OnPlayerReady', _0x30fdd9 => {
                    mp.gui.chat.show(false);
                    mp.gui.chat.activate(false);
                });
                mp.events.add('stopAnimationSlowForAll', _0x588be0 => {
                    _0x588be0.clearTasks();
                });
                mp.events.add('stopAnimationSlow', () => {
                    mp.players.local.clearTasks();
                });
                mp.events.add('updateAduty', _0x16cf40 => {
                    this.aduty = _0x16cf40;
                    _0x536cea.default.setAduty(_0x16cf40);
                });
                mp.events.add('updateGameDesignDuty', _0x226eb1 => {
                    this.gamedesignduty = _0x226eb1;
                });
                mp.events.add('setActiveRingtone', _0xbe708e => {
                    this.activeRingtone = _0xbe708e;
                });
                mp.events.add('setActiveRingtoneVolume', _0x2dbb27 => {
                    this.activeRingtoneVolume = _0x2dbb27;
                });
                mp.events.add('nagelband', () => {
                    if (this.isInAnyVehicle(true)) {
                        let _0x277a1a = mp.players.local.vehicle;
                        if (_0x277a1a != null) {
                            _0x277a1a.setTyreBurst(0, false, 1000);
                            _0x277a1a.setTyreBurst(1, false, 1000);
                            _0x277a1a.setTyreBurst(4, false, 1000);
                            _0x277a1a.setTyreBurst(5, false, 1000);
                        }
                    }
                });
                mp.events.add('createObject', _0x1ff828 => {
                    this.buildingmode = true;
                    this.buildingobject = [];
                    this.buildingobject.hash = _0x1ff828;
                    this.buildingobject.pos = mp.players.local.position;
                    this.buildingobject.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    this.buildingobject.obj = mp.objects.new(_0x1ff828, this.buildingobject.pos, {
                        rotation: this.buildingobject.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    mp.game.graphics.notify('object created.');
                });
                mp.events.add('closeObjectEditor', _0x125a56 => {
                    this.buildingmode = false;
                    this.buildingobject = [];
                });
                mp.events.add('responsePushToTalkSound', _0x1139cf => {
                    _0x536cea.default.responsePPTSound(_0x1139cf);
                });
                mp.events.add('isPlayerSwimming', () => {
                    if (mp.players.local.isSwimmingUnderWater() || mp.players.local.isSwimming()) {
                        mp.events.callRemote('swimmingOrDivingResponse', true);
                    } else {
                        mp.events.callRemote('swimmingOrDivingResponse', false);
                    }
                });
                mp.events.add('updateWanteds', _0x3b7873 => {
                    this.wanteds = _0x3b7873;
                    _0x536cea.default.setWanteds(_0x3b7873);
                });
                mp.events.add('updateMoney', _0x295134 => {
                    this.money = _0x295134;
                    _0x536cea.default.setMoney(_0x295134);
                });
                mp.events.add('updateSport', _0x485a2f => {
                    this.sport = _0x485a2f;
                    _0x536cea.default.setSport(_0x485a2f);
                });
                mp.events.add('updateHunger', _0x4ee1a2 => {
                    this.hunger = _0x4ee1a2;
                    _0x536cea.default.setHunger(_0x4ee1a2);
                });
                mp.events.add('updateThirst', _0x2dc2f3 => {
                    this.thirst = _0x2dc2f3;
                    _0x536cea.default.setThirst(_0x2dc2f3);
                });
                mp.events.add('updateStress', _0x4d3daa => {
                    this.stress = _0x4d3daa;
                    _0x536cea.default.setStress(_0x4d3daa);
                });
                mp.events.add('updateAirRadio', _0x15f77d => {
                    _0x536cea.default.setAirRadio(_0x15f77d);
                });
                mp.events.add('setAirRadio', _0x2e4351 => {
                    _0x536cea.default.setAirRadioState(_0x2e4351);
                });
                mp.events.add('updateBlackMoney', _0x17a80c => {
                    this.blackmoney = _0x17a80c;
                    _0x536cea.default.setBlackmoney(_0x17a80c);
                });
                mp.events.add('updateTeamId', _0x5ea778 => {
                    this.team = _0x5ea778;
                });
                mp.events.add('updateTeamRank', _0x588f23 => {
                    this.teamRank = _0x588f23;
                });
                mp.events.add('loadisland', _0x6d76f6 => {
                    mp.game.invoke('0x9A9D1BA639675CF1', 'HeistIsland', _0x6d76f6);
                    mp.game.invoke('0x5E1460624D194A38', _0x6d76f6);
                });
                mp.events.add('updateGvmpTeamRank', _0x31c628 => {
                    this.gvmpTeamRank = _0x31c628;
                });
                mp.events.add('updateInjured', _0x8cc915 => {
                    this.injured = _0x8cc915;
                });
                mp.events.add('updateDuty', _0x4281f8 => {
                    this.duty = _0x4281f8;
                });
                mp.events.add('setcustommarks', (_0x47bf65, _0x303af6, _0x473d15) => {
                    if (this.custommarkers[_0x47bf65] == null) {
                        this.custommarkers[_0x47bf65] = [];
                    }
                    if (this.custommarkers[_0x47bf65].length > 0) {
                        this.custommarkers[_0x47bf65].forEach(_0x49447c => {
                            _0x49447c.mark.destroy();
                        });
                    }
                    this.custommarkers[_0x47bf65] = JSON.parse(_0x473d15);
                    if (this.custommarkers[_0x47bf65].length > 0) {
                        this.custommarkers[_0x47bf65].forEach(_0x4c5b1f => {
                            _0x4c5b1f.mark = mp.blips.new(_0x4c5b1f.id, _0x4c5b1f.pos, {
                                name: _0x4c5b1f.name,
                                color: _0x4c5b1f.color,
                                shortRange: _0x303af6
                            });
                        });
                    }
                });
                mp.events.add('clearcustommarks', _0x3627a4 => {
                    if (this.custommarkers[_0x3627a4] == null) {
                        this.custommarkers[_0x3627a4] = [];
                        return;
                    }
                    if (this.custommarkers[_0x3627a4].length > 0) {
                        this.custommarkers[_0x3627a4].forEach(_0x315c7c => {
                            _0x315c7c.mark.destroy();
                        });
                    }
                    this.custommarkers[_0x3627a4] = [];
                });
                mp.events.add('setCheckpoint', (_0xcee943, _0x5e4434, _0x41d65a) => {
                    if (this.currentCheckpoint != null) {
                        this.currentCheckpoint.destroy();
                        this.currentCheckpoint = null;
                    }
                    this.currentCheckpoint = mp.markers.new(1, new mp.Vector3(_0xcee943, _0x5e4434, _0x41d65a - 1), 1.2, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [255, 0, 0, 255],
                        visible: true,
                        dimension: 0
                    });
                });
                mp.events.add('clearCheckpoint', () => {
                    if (this.currentCheckpoint != null) {
                        this.currentCheckpoint.destroy();
                        this.currentCheckpoint = null;
                        return;
                    }
                });
                mp.events.add('createCustomObjects', (_0x314ada, _0x50ebf9) => {
                    if (this.customObjects[_0x314ada] == null) {
                        this.customObjects[_0x314ada] = [];
                    }
                    if (this.customObjects[_0x314ada].length > 0) {
                        this.customObjects[_0x314ada].forEach(_0x503aef => {
                            _0x503aef.destroy();
                        });
                    }
                    let _0x572dd8 = JSON.parse(_0x50ebf9);
                    let _0x332f5d = [];
                    if (_0x572dd8 !== undefined && _0x572dd8.length > 0) {
                        _0x572dd8.forEach(_0x1719e2 => {
                            _0x332f5d.push(mp.objects.new(_0x1719e2.objectid, _0x1719e2.pos, {
                                rotation: _0x1719e2.rot,
                                alpha: 255,
                                dimension: 0
                            }));
                        });
                        this.customObjects[_0x314ada] = _0x332f5d;
                    }
                });
                mp.events.add('removeCustomObjects', _0x2dc1c3 => {
                    if (this.customObjects[_0x2dc1c3] == null) {
                        this.customObjects[_0x2dc1c3] = [];
                        return;
                    }
                    if (this.customObjects[_0x2dc1c3].length > 0) {
                        this.customObjects[_0x2dc1c3].forEach(_0x148c43 => {
                            _0x148c43.destroy();
                        });
                    }
                    this.customObjects[_0x2dc1c3] = [];
                });
                mp.events.add('removeAcMark', () => {
                    if (this.acMark1 !== undefined) {
                        this.acMark1.destroy();
                        this.acMark1 = undefined;
                    }
                    if (this.acMark2 !== undefined) {
                        this.acMark2.destroy();
                        this.acMark2 = undefined;
                    }
                });
                mp.events.add('setAcMark', (_0xc4f83a, _0x503a24) => {
                    this.acMark1 = mp.blips.new(682, _0xc4f83a, {
                        name: 'AC1',
                        color: 2,
                        shortRange: false
                    });
                    this.acMark2 = mp.blips.new(682, _0x503a24, {
                        name: 'AC2',
                        color: 1,
                        shortRange: false
                    });
                });
                mp.events.add('updateCuffed', _0x231939 => {
                    this.cuffed = _0x231939;
                });
                mp.events.add('updateTied', _0x344c48 => {
                    this.tied = _0x344c48;
                });
                mp.events.add('updateVoiceState', _0x884ee5 => {
                    this.state = _0x884ee5;
                });
                mp.events.add('setCurrentWeapon', _0x514f1c => {
                    this.currentWeapon = _0x514f1c;
                });
                mp.events.add('emptyWeaponAmmo', _0x40f97f => {
                    this.currentWeapon = 0;
                    this.weaponAmmo = [];
                    for (var _0x22fbec in this.weaponAmmo) { }
                });
                mp.events.add('setPlayerGpsMarker', (_0xe60ced, _0xeb90c6) => {
                    mp.game.ui.setNewWaypoint(_0xe60ced, _0xeb90c6);
                });
                mp.events.add('getWeaponAmmo', () => {
                    mp.events.callRemote('getWeaponAmmoAnswer', this.weaponAmmo);
                });
                mp.events.add('fillWeaponAmmo', (_0x35d84c, _0x4f13e0) => {
                    this.weaponAmmo.push(new _0x21ae12(_0x35d84c, _0x4f13e0));
                });
                mp.events.add('updateWeaponAmmo', (_0x496c6c, _0x46d37e) => {
                    for (var _0x49abb7 in this.weaponAmmo) {
                        if (this.weaponAmmo[_0x49abb7].id != _0x496c6c) {
                            continue;
                        }
                        this.weaponAmmo[_0x49abb7].ammo = _0x46d37e;
                    }
                });
                mp.events.add('playerWeaponShot', (_0x100ac6, _0x482eb2) => {
                    for (var _0x1e3e13 in this.weaponAmmo) {
                        if (this.weaponAmmo[_0x1e3e13].id != this.currentWeapon) {
                            continue;
                        }
                        this.weaponAmmo[_0x1e3e13].ammo = this.weaponAmmo[_0x1e3e13].ammo - 1;
                    }
                });
                mp.events.add('onPlayerLoaded', (_0x2d692d, _0x516aae, _0x2b078e, _0x2a739a, _0x54c579, _0x2fc8d7, _0x589f76, _0xd526f7, _0x1f23bb, _0x25f0ee, _0x10a28b, _0x463470, _0x357d6b, _0x1c2c7c, _0x1533c8, _0x57689b, _0x1f726a, _0xc0324a, _0x53c678, _0xe6dbe, _0x18ed36, _0x4370d9, _0x2696b6, _0x3dca24, _0x3a30bc, _0x55f537, _0x5e0f78, _0xc56526, _0x362d55, _0x582d8e, _0xc0bbc, _0x106d11, _0x25b7dd, _0x10f84b) => {
                    this.firstName = _0x2d692d;
                    this.lastName = _0x516aae;
                    this.playerId = _0x2b078e;
                    this.academicPoints = _0x2a739a;
                    this.business = _0x54c579;
                    this.gwdNote = _0x2fc8d7;
                    this.zwdNote = _0x582d8e;
                    this.money = _0x589f76;
                    this.wanteds = _0xd526f7;
                    this.superjump = false;
                    this.house = _0x1f23bb;
                    this.team = _0x25f0ee;
                    this.teamRank = _0x10a28b;
                    this.level = _0x463470;
                    this.injured = _0x357d6b;
                    this.duty = _0x1c2c7c;
                    this.tied = _0x1533c8;
                    this.cuffed = _0x57689b;
                    this.voiceHash = _0x1f726a;
                    this.state = _0xc0324a;
                    this.phone = _0x53c678;
                    this.job = _0xe6dbe;
                    this.jobsSkill = _0x18ed36;
                    this.insurance = _0x362d55;
                    this.animations = JSON.parse(_0x4370d9);
                    this.gvmpTeamRank = _0x2696b6;
                    this.playerSync = _0x3a30bc;
                    this.vehicleSync = _0x55f537;
                    this.blackmoney = _0x5e0f78;
                    this.attachmentsync = true;
                    this.activeRingtone = _0xc56526;
                    this.activeRingtoneVolume = 0.3;
                    this.stress = _0x106d11;
                    this.sport = _0xc0bbc;
                    this.hunger = _0x25b7dd;
                    this.thirst = _0x10f84b;
                    this.anametags = false;
                    mp.discord.update('Visual Roleplay', this.firstName + '_' + this.lastName + ' | Visum: ' + this.level);
                    _0x198ce3.default.setVisible(true);
                    _0x536cea.default.setMoney(_0x589f76);
                    _0x536cea.default.setBlackmoney(_0x5e0f78);
                    _0x536cea.default.setWanteds(_0xd526f7);
                    _0x536cea.default.setSport(_0xc0bbc);
                    _0x536cea.default.setStress(_0x106d11);
                    _0x536cea.default.setHunger(_0x25b7dd);
                    _0x536cea.default.setThirst(_0x10f84b);
                    mp.game.controls.useDefaultVehicleEntering = false;
                    _0x30cecc();
                    this.ready = true;
                });
                mp.events.add('DestroyBlips', _0x30cecc);
                function _0x30cecc() {
                    mp.game.invoke('0xB98236CAAECEF897', true);
                    let _0x47b71f = mp.game.invoke('0x1BEDE233E6CD2A1F', 5);
                    while (mp.game.invoke('0xA6DB27D19ECBB7DA', _0x47b71f)) {
                        mp.game.ui.removeBlip(_0x47b71f);
                        _0x47b71f = mp.game.invoke('0x14F96AA50D6FBEA7', 5);
                    }
                    mp.game.wait(50);
                }
                mp.events.add('loadClientIpl', _0x46d259 => {
                    mp.game.streaming.requestIpl(_0x46d259);
                });
                mp.events.add('setVoiceHash', _0x151a75 => {
                    this.voiceHash = _0x151a75;
                });
                mp.events.add('unloadClientIpl', _0x53eea4 => {
                    mp.game.streaming.removeIpl(_0x53eea4);
                });
                mp.events.add('updateWeather', _0x3420c1 => {
                    mp.game.gameplay.setWeatherTypeNowPersist(_0x3420c1);
                });
                mp.events.add('setWeatherTransition', (_0x51e314, _0x10d3b0) => {
                    mp.game.gameplay.setWeatherTypeOverTime(_0x51e314, _0x10d3b0);
                });
                let _0x48debe;
                let _0x5e2e1f;
                mp.keys.bind(85, true, () => {
                    if (!this.gamedesignduty) {
                        return;
                    }
                    if (_0x48debe != 0) {
                        mp.events.callRemote('TryToCreateDoor', _0x48debe, _0x2c1b06);
                        _0x48debe = 0;
                    }
                });
                mp.events.add('render', () => {
                    mp.game.player.setHealthRechargeMultiplier(0);
                    mp.vehicles.forEachInStreamRange(_0x22e023 => {
                        ;
                        if (_0x22e023.getVariable('lockedStatus') == true && _0x22e023.getDoorLockStatus() == 0 || _0x22e023.getVariable('lockedStatus') == true && _0x22e023.getDoorLockStatus() == 1) {
                            _0x22e023.setDoorsLocked(2);
                        }
                    });
                    let _0xd93eee = _0x174709.default.createRaycast();
                    if (_0xd93eee != null) {
                        let _0x102245 = this.getDistance(_0xd93eee.position);
                        if (_0xd93eee.entity.isAPed()) {
                            if (!_0x102245 || _0x102245 < 0 || _0x102245 > 2) {
                                return;
                            }
                            mp.game.graphics.drawMarker(25, _0xd93eee.entity.position.x, _0xd93eee.entity.position.y, _0xd93eee.entity.position.z - 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 52, 192, 216, 255, false, false, 0, false, null, null, false);
                        }
                    }
                    mp.players.forEachInStreamRange(_0x3dc825 => {
                        if (_0x3dc825 != mp.players.local && _0x3dc825.getVariable('PaintballTeam') != null && _0x3dc825.getVariable('PaintballTeam') != 0 && mp.players.local.getVariable('PaintballTeam') != 0 && _0x3dc825.getVariable('PaintballTeam') == mp.players.local.getVariable('PaintballTeam')) {
                            var _0x7365d7 = mp.players.local.position;
                            const _0x394143 = _0x3dc825.position;
                            const _0x8f861 = (1 - 0.8 * this.getDistance(_0x7365d7, _0x394143) / 100) * 0.4;
                            mp.game.graphics.drawText('Team ' + _0x3dc825.getVariable('PaintballTeam') + '  ~w~' + _0x3dc825.name, [_0x394143.x, _0x394143.y, _0x394143.z + 1.1], {
                                font: 4,
                                color: [255, 255, 255, 185],
                                scale: [_0x8f861, _0x8f861],
                                outline: true
                            });
                        }
                    });
                    if (this.anametags) {
                        mp.players.forEachInStreamRange(_0x431f9d => {
                            var _0x141ae8 = mp.players.local.position;
                            const _0x5bd1bf = _0x431f9d.position;
                            const _0x29504a = (1 - 0.8 * this.getDistance(_0x141ae8, _0x5bd1bf) / 100) * 0.4;
                            mp.game.graphics.drawText('~g~' + _0x431f9d.getHealth() + ' ~w~' + _0x431f9d.name + ' ~b~' + _0x431f9d.getArmour(), [_0x5bd1bf.x, _0x5bd1bf.y, _0x5bd1bf.z + 1.1], {
                                font: 4,
                                color: [255, 255, 255, 185],
                                scale: [_0x29504a, _0x29504a],
                                outline: true
                            });
                        });
                    }
                });
                mp.events.add('setPaintballPlayerTeam', _0x1bce0a => {
                    mp.game.player.setTeam(_0x1bce0a);
                });
                mp.events.add('render', () => {
                    if (this.ready == false) {
                        return;
                    }
                    mp.players.local.setStealthMovement(false, '0');
                    mp.game.player.setWeaponDamageModifier(0);
                    mp.game.player.setMeleeWeaponDamageModifier(0);
                    mp.game.player.setMeleeWeaponDefenseModifier(0);
                    if (mp.players.local.vehicle != null) {
                        let _0x25dc2b = mp.vehicles.atRemoteId(mp.players.local.vehicle.remoteId);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_MG'), _0x25dc2b.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_MISSILE'), _0x25dc2b.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_CANNON'), _0x25dc2b.handle, mp.players.local.handle);
                        mp.game.invoke('0xF4FC6A6F67D8D856', true, mp.game.joaat('VEHICLE_WEAPON_HUNTER_BARRAGE'), _0x25dc2b.handle, mp.players.local.handle);
                        mp.game.ui.setRadarZoom(1100);
                    } else {
                        mp.game.ui.setRadarZoom(1100);
                    }
                    if (this.gamedesignduty) {
                        const _0xe874b2 = mp.players.local.getBoneCoords(12844, 0.5, 0, 0);
                        const _0x5e0814 = new mp.Vector3(0, 0, 75);
                        const _0x4f3bd7 = mp.raycasting.testPointToPoint(_0xe874b2, _0x5e0814);
                        if (!_0x4f3bd7) {
                            mp.game.graphics.drawLine(_0xe874b2.x, _0xe874b2.y, _0xe874b2.z, _0x5e0814.x, _0x5e0814.y, _0x5e0814.z, 255, 255, 255, 255);
                        } else {
                            mp.game.graphics.drawLine(_0xe874b2.x, _0xe874b2.y, _0xe874b2.z, _0x5e0814.x, _0x5e0814.y, _0x5e0814.z, 255, 0, 0, 255);
                        }
                        let _0x1e5a76 = mp.game.player.isFreeAiming();
                        if (_0x1e5a76) {
                            let _0x1a1e26 = mp.game.player.getEntityIsFreeAimingAt();
                            if (_0x1a1e26 == 0) {
                                return;
                            }
                            let _0x1a06a2 = mp.game.invoke('0x9F47B058362C84B5', _0x1a1e26);
                            let _0x2c1b06 = mp.game.invokeVector3('0x3FEF770D40960D5A', _0x1a1e26, false);
                            mp.game.graphics.notify('Drücke U um die Tür zwischenzuspeichern! Erstelle die Tür dann mit /createdoor TeamIds Locked | Beispiel: /createdoor 1,2 true');
                            _0x48debe = _0x1a06a2;
                            _0x5e2e1f = _0x2c1b06;
                        }
                    }
                    let _0x981bd = mp.game.player.isFreeAiming();
                    if (_0x981bd) {
                        let _0x1a314c = mp.game.player.getEntityIsFreeAimingAt();
                        if (_0x1a314c == undefined) {
                            return;
                        }
                        if (_0x1a314c == 0) {
                            return;
                        }
                        if (_0x1a314c.type == 'player' && _0x1a314c.getVariable('Invincible') == true) {
                            mp.game.player.disableFiring(true);
                        }
                    }
                    if (mp.game.invoke('0x26AF0E8E30BD2A2C', mp.players.local.handle, true)) {
                        this.isOpeningDoor = true;
                    } else if (this.isOpeningDoor) {
                        this.isOpeningDoor = false;
                        this.checkAnimations(mp.players.local);
                    }
                    if (mp.players.local.isInWater() && this.isInWater === false) {
                        this.isInWater = true;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    } else if (mp.players.local.isInWater() === false && this.isInWater === true) {
                        this.isInWater = false;
                        mp.events.callRemote('UpdatePlayerWaterState', true);
                    }
                    if (mp.players.local.hasCollidedWithAnything()) {
                        this.HasCollided = true;
                    } else if (this.HasCollided === true) {
                        this.HasCollided = false;
                        this.checkAnimations(mp.players.local);
                    }
                    if (mp.players.local.isRagdoll()) {
                        this.HasRagdall = true;
                    } else {
                        if (this.HasRagdall === true) {
                            this.HasRagdall = false;
                            let _0x5112ec = this;
                            setTimeout(function () {
                                _0x5112ec.checkAnimations(mp.players.local);
                            }, 2000);
                        }
                    }
                    if (!this.injured) {
                        if (this.hasDamageFX == '' && mp.players.local.getHealth() <= 10) {
                            mp.events.call('setTimecycleModifier', 'glasses_red');
                            this.hasDamageFX = 'glasses_red';
                        } else if (this.hasDamageFX == 'glasses_red' && mp.players.local.getHealth() > 10) {
                            mp.events.call('setTimecycleModifier', 'default');
                            this.hasDamageFX = '';
                        }
                    }
                    if (mp.players.local.getVariable('Seatbelt') != null) {
                        mp.players.local.setConfigFlag(32, mp.players.local.getVariable('Seatbelt'));
                    }
                    mp.game.object.doorControl(-2023754432, 116.61631, -1990.5763, 18.491354, true, 0, 50, 0);
                    mp.game.object.doorControl(-2023754432, 109.32936, -2015.5326, 18.491426, true, 0, 50, 0);
                    mp.game.object.doorControl(703855057, 122.22226, -1995.4512, 18.305435, true, 0, 50, 0);
                    mp.game.object.doorControl(132154435, 1973, 3815, 34, true, 0, 50, 0);
                    if (this.aduty) {
                        var _0x5cc479 = {
                            "F5": 0x147,
                            "FORWARD": 0x20,
                            "BACKWARD": 0x21,
                            "LEFT": 0x22,
                            "RIGHT": 0x23,
                            "UP": 0x16,
                            "DOWN": 0x24,
                            "SHIFT": 0x15
                        };
                        if (mp.players.local.vehicle != null) {
                            mp.game.invoke('0xB59E4BD37AE292DB', mp.players.local.vehicle.id, 5);
                        }
                        if (mp.game.controls.isDisabledControlJustPressed(0, 327) || mp.game.controls.isDisabledControlJustPressed(0, 110)) {
                            this.noClip.enabled = !this.noClip.enabled;
                            mp.events.callRemote('vanish', this.noClip.enabled);
                            mp.players.local.freezePosition(this.noClip.enabled);
                            if (!this.noClip.enabled && mp.game.controls.isDisabledControlJustPressed(0, 327)) {
                                var _0x99f865 = mp.players.local.position;
                                var _0x5f0060 = mp.game.gameplay.getGroundZFor3dCoord(_0x99f865.x, _0x99f865.y, _0x99f865.z, 0, false);
                                mp.players.local.setCoordsNoOffset(_0x99f865.x, _0x99f865.y, _0x5f0060 + 1, false, false, false);
                            }
                        }
                        if (this.noClip.enabled) {
                            let _0x42a574 = mp.players.local.position;
                            let _0x22e5ab = this.noClip.speed;
                            let _0x51c5ee = mp.game.cam.getGameplayCamRot(2);
                            let _0x25c70d = _0x256f92(_0x51c5ee);
                            let _0x1ccb2b = _0xb952b0(_0x51c5ee);
                            if (mp.game.controls.isDisabledControlPressed(0, _0x5cc479.SHIFT)) {
                                _0x22e5ab = _0x22e5ab * 3;
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, 32)) {
                                _0x42a574 = _0x5ca481(_0x42a574, _0x25c70d, _0x22e5ab);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x5cc479.BACKWARD)) {
                                _0x42a574 = _0x5ca481(_0x42a574, _0x25c70d, -_0x22e5ab);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x5cc479.LEFT)) {
                                _0x42a574 = _0x5ca481(_0x42a574, _0x1ccb2b, -_0x22e5ab, true);
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, _0x5cc479.RIGHT)) {
                                _0x42a574 = _0x5ca481(_0x42a574, _0x1ccb2b, _0x22e5ab, true);
                            }
                            let _0x9a3cb3 = 0;
                            if (mp.game.controls.isDisabledControlPressed(0, 22)) {
                                _0x9a3cb3 += _0x22e5ab;
                            }
                            if (mp.game.controls.isDisabledControlPressed(0, 36)) {
                                _0x9a3cb3 -= _0x22e5ab;
                            }
                            if (!(new mp.Vector3(_0x42a574.x, _0x42a574.y, _0x42a574.z + _0x9a3cb3).x === mp.players.local.position.x && new mp.Vector3(_0x42a574.x, _0x42a574.y, _0x42a574.z + _0x9a3cb3).y === mp.players.local.position.y && new mp.Vector3(_0x42a574.x, _0x42a574.y, _0x42a574.z + _0x9a3cb3).z === mp.players.local.position.z)) {
                                mp.players.local.setCoordsNoOffset(_0x42a574.x, _0x42a574.y, _0x42a574.z + _0x9a3cb3, false, false, false);
                            }
                        }
                    } else {
                        if (mp.players.local.vehicle != null) {
                            mp.game.invoke('0xB59E4BD37AE292DB', mp.players.local.vehicle.id, 1.8);
                        }
                    }
                });
                mp.events.add('setPlayerDamageMultiplier', _0x5e5444 => {
                    mp.game.player.setWeaponDamageModifier(_0x5e5444);
                });
                mp.events.add('setNMenuItems', _0x3920c => {
                    this.animations = JSON.parse(_0x3920c);
                });
                mp.events.add('setRunSprintMultiplierFor', _0x357cf8 => {
                    mp.game.player.setRunSprintMultiplierFor(_0x357cf8);
                });
                mp.events.add('onPlayerContactsLoaded', _0x1033bd => {
                    this.contacts.parseContacts(_0x1033bd);
                });
                mp.events.add('setPlayerAduty', _0x1d2303 => {
                    mp.players.local.setInvincible(_0x1d2303);
                    this.anametags = _0x1d2303;
                    _0x536cea.default.setAduty(_0x1d2303);
                });
                mp.events.add('loadMethInterior', (_0x1f15d2, _0x580352, _0x11f4d0) => {
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo');
                    _0x538e51.props.table.forEach(_0x38f5d7 => {
                        mp.game.interior.disableInteriorProp(247041, _0x38f5d7);
                    });
                    _0x538e51.props.boiler.forEach(_0xe695ee => {
                        mp.game.interior.disableInteriorProp(247041, _0xe695ee);
                    });
                    _0x538e51.props.security.forEach(_0x440ac5 => {
                        mp.game.interior.disableInteriorProp(247041, _0x440ac5);
                    });
                    mp.game.interior.enableInteriorProp(247041, _0x538e51.props.table[_0x1f15d2]);
                    mp.game.interior.enableInteriorProp(247041, _0x538e51.props.boiler[_0x580352]);
                    mp.game.interior.enableInteriorProp(247041, _0x538e51.props.security[_0x11f4d0]);
                    mp.game.interior.refreshInterior(247041);
                });
                mp.events.add('carmod', (_0x5127ee, _0x274b0e, _0xf7ea62) => {
                    if (_0x5127ee == null) {
                        return;
                    }
                    _0x5127ee.setMod(parseInt(_0x274b0e), parseInt(_0xf7ea62));
                });
                mp.events.add('livery', (_0x31ed0f, _0x3ec3b0) => {
                    mp.game.invoke('0x60BF608F1B8CD1B6', _0x31ed0f.handle, _0x3ec3b0);
                });
                mp.events.add('startAlarm', (_0x2047f3, _0x42df28) => {
                    var _0x161069 = mp.game.audio.prepareAlarm(_0x2047f3);
                    while (!_0x161069) {
                        mp.game.wait(0);
                    }
                    mp.game.audio.startAlarm(_0x2047f3, false);
                });
                mp.events.add('stopAlarm', _0x20882a => {
                    mp.game.audio.stopAlarm(_0x20882a, true);
                });
                mp.events.add('unloadMethInterior', () => {
                    _0x538e51.props.table.forEach(_0x23b0af => {
                        mp.game.interior.disableInteriorProp(247041, _0x23b0af);
                    });
                    _0x538e51.props.boiler.forEach(_0x3946c7 => {
                        mp.game.interior.disableInteriorProp(247041, _0x3946c7);
                    });
                    _0x538e51.props.security.forEach(_0x82b284 => {
                        mp.game.interior.disableInteriorProp(247041, _0x82b284);
                    });
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo');
                    mp.game.interior.refreshInterior(247041);
                });
                mp.events.add('loadblackmoneyInterior', () => {
                    mp.game.streaming.requestIpl('bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo');
                    _0x3a22c2.props.forEach(_0x3d8f4d => {
                        mp.game.interior.enableInteriorProp(247809, _0x3d8f4d);
                    });
                    mp.game.interior.refreshInterior(247809);
                });
                mp.events.add('unloadblackmoneyInterior', () => {
                    _0x3a22c2.props.forEach(_0x50be6a => {
                        mp.game.interior.disableInteriorProp(247809, _0x50be6a);
                    });
                    mp.game.interior.refreshInterior(247809);
                });
                mp.events.add('loadguenther', () => {
                    mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                    _0x3e95ad.props.room.forEach(_0x20affc => {
                        mp.game.interior.enableInteriorProp(255489, _0x20affc);
                    });
                    mp.game.interior.refreshInterior(255489);
                });
                mp.events.add('unloadguenther', () => {
                    mp.game.streaming.requestIpl('imp_sm_13_cargarage_a');
                    _0x3e95ad.props.room.forEach(_0x1c71d3 => {
                        mp.game.interior.disableInteriorProp(255489, _0x1c71d3);
                    });
                    mp.game.interior.refreshInterior(255489);
                });
                mp.events.add('loadlschangar', () => {
                    mp.game.streaming.requestIpl('sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_');
                    _0x365a43.props.forEach(_0x5f3f47 => {
                        mp.game.interior.enableInteriorProp(260353, _0x5f3f47);
                        mp.game.invoke('0xC1F1920BAF281317', 260353, _0x5f3f47, 2);
                    });
                    mp.game.interior.refreshInterior(260353);
                });
                mp.events.add('unloadlschangar', () => {
                    _0x365a43.props.forEach(_0x597865 => {
                        mp.game.interior.disableInteriorProp(260353, _0x597865);
                    });
                    mp.game.streaming.requestIpl('sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_');
                    mp.game.interior.refreshInterior(260353);
                });
                mp.events.add('updatesuperjump', _0x526cbc => {
                    this.superjump = _0x526cbc;
                });
                mp.events.add('loadplanningroom', (_0x177ae4, _0x1d03ab, _0x52c3be, _0x29e080, _0x488f21, _0x4f2034, _0x4d27fb, _0x3e1d35, _0x3cfdf1, _0x14dae7, _0x3f24c3, _0x2736c4, _0x30b80a) => {
                    mp.game.streaming.requestIpl(_0x1dc0b0.arcade.interiorName);
                    mp.game.streaming.requestIpl(_0x1dc0b0.plan.interiorName);
                    _0x1dc0b0.arcade.allprops.forEach(_0x6568cd => {
                        mp.game.interior.disableInteriorProp(_0x1dc0b0.arcade.Id, _0x6568cd);
                    });
                    _0x1dc0b0.plan.allprops.forEach(_0x160944 => {
                        mp.game.interior.disableInteriorProp(_0x1dc0b0.plan.Id, _0x160944);
                    });
                    _0x1dc0b0.arcade.props.grundraum[parseInt(_0x177ae4)].forEach(_0x45f1ae => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x45f1ae);
                    });
                    _0x1dc0b0.arcade.props.spiegel[parseInt(_0x1d03ab)].forEach(_0x24fff6 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x24fff6);
                    });
                    _0x1dc0b0.arcade.props.einrichtungsstyle[parseInt(_0x52c3be)].forEach(_0x281e91 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x281e91);
                    });
                    _0x1dc0b0.arcade.props.inneneinrichtung[parseInt(_0x29e080)].forEach(_0x3eae50 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x3eae50);
                    });
                    _0x1dc0b0.arcade.props.spielautomaten[parseInt(_0x488f21)].forEach(_0x3e4b03 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x3e4b03);
                    });
                    var _0x10981c = JSON.parse(_0x4f2034);
                    _0x10981c.forEach(_0x51fc5b => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.arcade.Id, _0x1dc0b0.arcade.props.rewards[parseInt(_0x51fc5b)]);
                    });
                    _0x1dc0b0.plan.props.kellerraum[parseInt(_0x4d27fb)].forEach(_0x11be81 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x11be81);
                    });
                    _0x1dc0b0.plan.props.Mechanic[parseInt(_0x3e1d35)].forEach(_0xe4f49f => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0xe4f49f);
                    });
                    _0x1dc0b0.plan.props.Hacker[parseInt(_0x3cfdf1)].forEach(_0x11d0a0 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x11d0a0);
                    });
                    _0x1dc0b0.plan.props.Weapons[parseInt(_0x14dae7)].forEach(_0x434140 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x434140);
                    });
                    _0x1dc0b0.plan.props.Wardrobe[parseInt(_0x3f24c3)].forEach(_0x346b97 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x346b97);
                    });
                    _0x1dc0b0.plan.props.CasinoPlan[parseInt(_0x2736c4)].forEach(_0x4dff37 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x4dff37);
                    });
                    _0x1dc0b0.plan.props.CasinoDoor[parseInt(_0x30b80a)].forEach(_0x450f10 => {
                        mp.game.interior.enableInteriorProp(_0x1dc0b0.plan.Id, _0x450f10);
                    });
                    mp.game.interior.refreshInterior(_0x1dc0b0.arcade.Id);
                    mp.game.interior.refreshInterior(_0x1dc0b0.plan.Id);
                });
                mp.events.add('attachmeto', (_0x231d6a, _0x3f02cb) => {
                    _0x231d6a.attachTo(_0x3f02cb.handle, _0x3f02cb.getBoneIndex(28422), 0, 0, 0, 0, 0, 0, false, false, false, false, 2, true);
                });
                mp.events.add('attachfoodobj', (_0x3c2979, _0x5c0aba) => {
                    var _0x48cba3 = [];
                    _0x48cba3.hash = _0x3c2979;
                    _0x48cba3.pos = mp.players.local.position;
                    _0x48cba3.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    _0x48cba3.obj = mp.objects.new(_0x3c2979, _0x48cba3.pos, {
                        rotation: _0x48cba3.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    setTimeout(function () {
                        _0x48cba3.obj.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(18905), 0.15, 0.04, 0.025, 15, 175, 0, true, true, false, true, 1, true);
                        setTimeout(function () {
                            _0x48cba3.obj.detach(true, false);
                            _0x48cba3.obj.position = new mp.Vector3(0, 0, 0);
                            mp.game.object.deleteObject(_0x48cba3.obj);
                        }, _0x5c0aba);
                    }, 200);
                });
                mp.events.add('attachdrinkobj', (_0xcc5ce0, _0x2fe8ff) => {
                    var _0x12a06d = [];
                    _0x12a06d.hash = _0xcc5ce0;
                    _0x12a06d.pos = mp.players.local.position;
                    _0x12a06d.rot = new mp.Vector3(0, 0, mp.players.local.heading);
                    _0x12a06d.obj = mp.objects.new(_0xcc5ce0, _0x12a06d.pos, {
                        rotation: _0x12a06d.rot,
                        alpha: 255,
                        dimension: mp.players.local.dimension
                    });
                    setTimeout(function () {
                        _0x12a06d.obj.attachTo(mp.players.local.handle, mp.players.local.getBoneIndex(18905), 0.13, 0.005, 0.02, 270, 175, 20, true, true, false, true, 1, true);
                        setTimeout(function () {
                            _0x12a06d.obj.detach(true, false);
                            _0x12a06d.obj.position = new mp.Vector3(0, 0, 0);
                            mp.game.object.deleteObject(_0x12a06d.obj);
                        }, _0x2fe8ff);
                    }, 200);
                });
                mp.events.add('SpectatePlayer', _0x419fd3 => {
                    mp.players.local.attachTo(_0x419fd3.handle, _0x419fd3.getBoneIndex(-1), 0, 0, -1, 0, 0, 0, false, false, false, false, 2, true);
                });
                mp.events.add('StopSpectatePlayer', () => {
                    mp.players.local.detach(true, false);
                });
                mp.events.add('deattachme', _0x3ee701 => {
                    _0x3ee701.detach(true, false);
                });
                mp.events.add('unloadplanningroom', () => {
                    _0x1dc0b0.arcade.allprops.forEach(_0x20815b => {
                        mp.game.interior.disableInteriorProp(_0x1dc0b0.arcade.Id, _0x20815b);
                    });
                    mp.game.streaming.requestIpl(_0x1dc0b0.arcade.Name);
                    mp.game.interior.refreshInterior(_0x1dc0b0.arcade.Id);
                });
                mp.events.add('destroydrugped', () => {
                    if (this.spawnedDrugPed != null) {
                        this.spawnedDrugPed.destroy();
                        this.spawnedDrugPed = null;
                    }
                });
                mp.events.add('loadprop', (_0x82ac7a, _0xdc702a, _0x214e5a, _0x1e73f7, _0x4ff036) => {
                    var _0x3c08a3 = mp.game.interior.getInteriorAtCoords(parseFloat(_0x214e5a), parseFloat(_0x1e73f7), parseFloat(_0x4ff036));
                    mp.game.interior.enableInteriorProp(parseInt(_0x3c08a3), String(_0x82ac7a));
                    mp.game.invoke('0xC1F1920BAF281317', parseInt(_0x3c08a3), String(_0x82ac7a), parseInt(_0xdc702a));
                    mp.game.interior.refreshInterior(parseInt(_0x3c08a3));
                });
                mp.events.add('removeprop', (_0x18c142, _0x124632, _0x2aeeb6, _0x4b1d15) => {
                    var _0x1b3249 = mp.game.interior.getInteriorAtCoords(parseFloat(_0x124632), parseFloat(_0x2aeeb6), parseFloat(_0x4b1d15));
                    mp.game.interior.disableInteriorProp(parseInt(_0x1b3249), String(_0x18c142));
                    mp.game.interior.refreshInterior(parseInt(_0x1b3249));
                });
                var _0x146219 = [];
                mp.events.add('loadcheckpoint', () => {
                    for (let _0x7c7047 = 0; _0x7c7047 < 10; _0x7c7047++) {
                        let _0x265549 = mp.checkpoints.new(1, new mp.Vector3(20 * _0x7c7047, 20 * _0x7c7047, 100), 10, {
                            direction: new mp.Vector3(0, 0, 75),
                            color: [255, 255, 255, 255],
                            visible: true,
                            dimension: 0
                        });
                        _0x265549.destination = new mp.Vector3(20 * (_0x7c7047 + 1), 20 * (_0x7c7047 + 1), 100);
                        _0x146219.push(_0x265549);
                    }
                });
                mp.events.add('unloadcheckpoint', () => {
                    _0x146219.forEach(_0x31b0bb => {
                        _0x31b0bb.destroy();
                    });
                });
                var _0x363391;
                mp.events.add('startRace', (_0x579fff, _0x4aebaf, _0x416365, _0x4f1fed) => {
                    mp.game.ui.setNewWaypoint(_0x579fff, _0x4aebaf);
                    _0x363391 = mp.markers.new(4, new mp.Vector3(_0x579fff, _0x4aebaf, _0x416365), 5, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [0, 255, 0, 255],
                        visible: true,
                        dimension: _0x4f1fed
                    });
                });
                mp.events.add('endRace', () => {
                    if (_0x363391 != null) {
                        _0x363391.destroy();
                    }
                });
                var _0xef70ac;
                mp.events.add('setmark', (_0x4ecdbe, _0x5e9baf, _0x2b4609, _0x57f55d) => {
                    if (_0xef70ac != null) {
                        _0xef70ac.destroy();
                        _0xef70ac = null;
                    }
                    _0xef70ac = mp.markers.new(0, new mp.Vector3(_0x4ecdbe, _0x5e9baf, _0x2b4609), 1, {
                        direction: new mp.Vector3(0, 0, 0),
                        rotation: new mp.Vector3(0, 0, 0),
                        color: [255, 0, 0, 255],
                        visible: true,
                        dimension: _0x57f55d
                    });
                });
                mp.events.add('boom', (_0x1a4887, _0x2466e9, _0x81164c, _0x1778d1) => {
                    mp.game.invoke('0xE3AD2BDBAEE269AC', _0x1a4887, _0x2466e9, _0x81164c, parseInt(_0x1778d1), 1, 1, 0, 1065353216, 0);
                });
                mp.events.add('boom2', () => {
                    if (!mp.players.local.vehicle) {
                        return;
                    }
                    mp.game.invoke('0xBA71116ADF5B514C', mp.players.local.vehicle.handle, true, true);
                });
                mp.events.add('setPlayerCduty', _0x5d0d80 => {
                    this.cduty = _0x5d0d80;
                });
                mp.events.add('setPlayerNametags', _0x2bd421 => {
                    this.anametags = _0x2bd421;
                });
                mp.events.add('setPlayerVehicleMultiplier', _0x134d22 => {
                    if (!mp.players.local.vehicle) {
                        return;
                    }
                    mp.players.local.vehicle.setEnginePowerMultiplier(_0x134d22);
                    mp.players.local.vehicle.setInvincible(false);
                });
                mp.events.add('createPlayerMarker', _0x580a3e => {
                    this.marker = mp.markers.new(22, _0x580a3e, 2, {
                        color: [255, 255, 255, 100],
                        visible: true
                    });
                });
                mp.events.add('destroyPlayerMarker', () => {
                    this.marker.destroy();
                    this.marker = null;
                });
                mp.events.add('setSpawnProtection', _0x5ef6e3 => {
                    mp.players.local.setInvincible(_0x5ef6e3);
                });
                mp.events.add('setBlackout', _0x18b07e => {
                    for (let _0x2c5505 = 0; _0x2c5505 <= 16; _0x2c5505++) {
                        mp.game.graphics.setLightsState(_0x2c5505, _0x18b07e);
                    }
                });
                mp.events.add('enableInteriorProp', (_0x101f04, _0x59deac) => {
                    mp.game.interior.enableInteriorProp(_0x101f04, _0x59deac);
                });
                mp.events.add('startsoundplay', (_0x2b8282, _0x31f959) => {
                    mp.game.audio.playSoundFrontend(-1, _0x2b8282, _0x31f959, true);
                });
                mp.events.add('startmusicevent', async _0x5c2ecd => {
                    mp.events.call('stopmusicevent');
                    mp.game.audio.prepareMusicEvent(_0x5c2ecd);
                    await mp.game.waitAsync(1000);
                    mp.game.audio.triggerMusicEvent(_0x5c2ecd);
                    this.lastMusicEvent = _0x5c2ecd;
                });
                mp.events.add('stopmusicevent', () => {
                    if (this.lastMusicEvent !== undefined) {
                        mp.game.audio.cancelMusicEvent(this.lastMusicEvent);
                        this.lastMusicEvent = undefined;
                    }
                });
                mp.events.add('startScreenEffect', (_0x2f612a, _0x205da2, _0x53f429) => {
                    mp.game.graphics.startScreenEffect(_0x2f612a, _0x205da2, _0x53f429);
                    if (_0x2f612a == 'DefaultFlash') {
                        mp.game.graphics.transitionToBlurred(250);
                    }
                });
                mp.events.add('stopScreenEffect', _0x254710 => {
                    mp.game.graphics.stopScreenEffect(_0x254710);
                    if (_0x254710 == 'DefaultFlash') {
                        mp.game.graphics.transitionFromBlurred(250);
                    }
                });
                mp.events.add('setTimecycleModifier', _0x3b82be => {
                    mp.game.graphics.setTimecycleModifier(_0x3b82be);
                });
                mp.events.add('transitionFromBlurred', _0x38b8e5 => {
                    mp.game.graphics.transitionFromBlurred(_0x38b8e5);
                    mp.game.graphics.setTransitionTimecycleModifier('default', _0x38b8e5);
                });
                mp.events.add('transitionToBlurred', _0x3141ef => {
                    mp.game.graphics.transitionToBlurred(_0x3141ef);
                    mp.game.graphics.setTransitionTimecycleModifier('hud_def_blur_switch', _0x3141ef);
                });
                mp.events.add('refreshinterior', _0x4139f2 => {
                    mp.game.interior.refreshInterior(_0x4139f2);
                });
                mp.events.add('setTM', _0x2aa403 => {
                    mp.game.graphics.setSeethrough(_0x2aa403);
                });
                mp.events.add('setNS', _0x5d57c3 => {
                    mp.game.graphics.setNightvision(_0x5d57c3);
                });
                mp.events.add('getInteriorId', () => {
                    _0x3242ed.default.execute("pushPlayerNotification('" + mp.game.interior.getInteriorAtCoords(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z) + "', '5000')");
                });
                mp.events.add('disableInteriorProp', (_0x44500f, _0x2bb04d) => {
                    mp.game.interior.disableInteriorProp(_0x44500f, _0x2bb04d);
                });
                mp.events.add('entityStreamIn', _0x532af9 => {
                    try {
                        if (_0x532af9 != null && _0x532af9.doesExist() && (_0x532af9.type == 'player' || _0x532af9.type == 'vehicle') && _0x532af9.handle !== 0) {
                            if (_0x532af9.getVariable('handbrakeStatus') != null) {
                                if (_0x532af9.getVariable('handbrakeStatus') == true) {
                                    _0x532af9.setHandbrake(true);
                                } else {
                                    _0x532af9.setHandbrake(false);
                                }
                            }
                            if (_0x532af9.type == 'player') {
                                mp.events.callRemote('requestPlayerSyncData', _0x532af9);
                            }
                            if (_0x532af9.getVariable('Invincible') != null) {
                                _0x532af9.setInvincible(_0x532af9.getVariable('Invincible'));
                            }
                            if (_0x532af9.getVariable('Invisible') != null) {
                                if (_0x532af9.getVariable('Invisible') == true) {
                                    _0x532af9.setAlpha(0);
                                } else {
                                    _0x532af9.setAlpha(255);
                                }
                            }
                            if (_0x532af9.getVariable('Collision') != null) {
                                if (_0x532af9.getVariable('Collision') == true) {
                                    _0x532af9.setCollision(true, true);
                                } else {
                                    _0x532af9.setCollision(false, false);
                                }
                            }
                            if (_0x532af9.getVariable('PlayerTeam') != null) {
                                _0x532af9.setTeam(_0x532af9.getVariable('PlayerTeam'));
                            }
                            if (_0x532af9.getVariable('ShopCar') != null) {
                                _0x532af9.setInvincible(true);
                                _0x532af9.setOnGroundProperly();
                                _0x532af9.freezePosition(true);
                            }
                        }
                    } catch (_0x3f6edc) { }
                });
                mp.events.addDataHandler('handbrakeStatus', _0x3f9a5a => {
                    try {
                        if (_0x3f9a5a != null && _0x3f9a5a.doesExist() && _0x3f9a5a.type == 'vehicle' && _0x3f9a5a.handle !== 0 && _0x3f9a5a.getVariable('handbrakeStatus') != null) {
                            if (_0x3f9a5a.getVariable('handbrakeStatus') == true) {
                                _0x3f9a5a.setHandbrake(true);
                            } else {
                                _0x3f9a5a.setHandbrake(false);
                            }
                        }
                    } catch (_0x6d4eed) { }
                });
                mp.events.addDataHandler('Invincible', _0xb06754 => {
                    try {
                        if (_0xb06754 != null && _0xb06754.doesExist() && (_0xb06754.type == 'player' || _0xb06754.type == 'vehicle') && _0xb06754.handle !== 0) {
                            if (_0xb06754.getVariable('Invincible') != null) {
                                _0xb06754.setInvincible(_0xb06754.getVariable('Invincible'));
                            }
                        }
                    } catch (_0xd941b9) { }
                });
                mp.events.addDataHandler('Invisible', _0x1ebda2 => {
                    try {
                        if (_0x1ebda2 != null && _0x1ebda2.doesExist() && (_0x1ebda2.type == 'player' || _0x1ebda2.type == 'vehicle') && _0x1ebda2.handle !== 0) {
                            if (_0x1ebda2.getVariable('Invisible') != null) {
                                if (_0x1ebda2.getVariable('Invisible') == true) {
                                    _0x1ebda2.setAlpha(0);
                                } else {
                                    _0x1ebda2.setAlpha(255);
                                }
                            }
                        }
                    } catch (_0x379ee8) { }
                });
                mp.events.addDataHandler('Collision', _0x1f6a9f => {
                    try {
                        if (_0x1f6a9f != null && _0x1f6a9f.doesExist() && (_0x1f6a9f.type == 'player' || _0x1f6a9f.type == 'vehicle') && _0x1f6a9f.handle !== 0 && _0x1f6a9f.getVariable('Collision') != null) {
                            if (_0x1f6a9f.getVariable('Collision') == true) {
                                _0x1f6a9f.setCollision(true, true);
                            } else {
                                _0x1f6a9f.setCollision(false, false);
                            }
                        }
                    } catch (_0x82f12e) { }
                });
                mp.events.addDataHandler('PlayerTeam', _0x2526c1 => {
                    try {
                        if (_0x2526c1 != null && _0x2526c1.doesExist() && (_0x2526c1.type == 'player' || _0x2526c1.type == 'vehicle') && _0x2526c1.handle !== 0 && _0x2526c1.getVariable('PlayerTeam') != null) {
                            _0x2526c1.setTeam(_0x2526c1.getVariable('PlayerTeam'));
                        }
                    } catch (_0x513ce0) { }
                });
                mp.events.addDataHandler('ShopCar', _0x4bc062 => {
                    try {
                        if (_0x4bc062 != null && _0x4bc062.doesExist() && _0x4bc062.type == 'vehicle' && _0x4bc062.handle !== 0 && _0x4bc062.getVariable('ShopCar') != null) {
                            _0x4bc062.setInvincible(true);
                            _0x4bc062.setOnGroundProperly();
                            _0x4bc062.freezePosition(true);
                        }
                    } catch (_0x4b8036) { }
                });
                mp.events.add('responsePlayerSyncData', (_0x2828cb, _0x59dc70, _0x197707, _0x2026b9) => {
                    this.setPlayerDrunk(_0x2828cb, _0x59dc70);
                    try {
                        _0x197707 = JSON.parse(_0x197707);
                        _0x2828cb.__animationData = _0x197707;
                        if (_0x2828cb.__animationData.Active == true) {
                            this.checkAnimations(_0x2828cb);
                            _0x2828cb.setHeading(_0x2828cb.__animationData.Heading);
                        }
                    } catch (_0x19a8ff) { }
                    if (_0x2026b9) {
                        _0x2828cb.setMovementClipset('move_ped_crouched', 0.25);
                        _0x2828cb.setStrafeClipset('move_ped_crouched_strafing');
                    }
                });
                mp.events.add('SetOwnAnimData', _0x549b63 => {
                    try {
                        _0x549b63 = JSON.parse(_0x549b63);
                        mp.players.local.__animationData = _0x549b63;
                        this.checkAnimations(mp.players.local);
                    } catch (_0xc86cbf) { }
                });
                mp.events.add('TeleportToWaypoint', () => {
                    const _0x3f321a = mp.game.ui.getFirstBlipInfoId(8);
                    if (!mp.game.ui.doesBlipExist(_0x3f321a)) {
                        return;
                    }
                    const _0x15e7bc = mp.game.ui.getBlipInfoIdCoord(_0x3f321a);
                    if (!_0x15e7bc) {
                        return;
                    }
                    let _0x338c37 = mp.game.gameplay.getGroundZFor3DCoord(_0x15e7bc.x, _0x15e7bc.y, _0x15e7bc.z, false, false);
                    if (!_0x338c37) {
                        for (let _0x3d0295 = 1000; _0x3d0295 >= 0; _0x3d0295 -= 25) {
                            mp.game.streaming.requestCollisionAtCoord(_0x15e7bc.x, _0x15e7bc.y, _0x3d0295);
                            mp.game.wait(0);
                        }
                        _0x338c37 = mp.game.gameplay.getGroundZFor3DCoord(_0x15e7bc.x, _0x15e7bc.y, 1000, false, false);
                        if (!_0x338c37) {
                            return;
                        }
                    }
                    mp.players.local.position = new mp.Vector3(_0x15e7bc.x, _0x15e7bc.y, _0x338c37 + 0.5);
                });
                mp.events.add('SetAnimDataNear', (_0x55cbff, _0x3f6090) => {
                    try {
                        _0x3f6090 = JSON.parse(_0x3f6090);
                        _0x55cbff.__animationData = _0x3f6090;
                        this.checkAnimations(_0x55cbff);
                    } catch (_0x30ce0e) { }
                });
                mp.events.add('setPlayerDrunk', (_0x392423, _0x40474e) => {
                    this.setPlayerDrunk(_0x392423, _0x40474e);
                });
                mp.events.add('setCloth', (_0x58a64a, _0x5b7c53, _0x5bffce, _0xb47639) => {
                    if (_0x58a64a == null) {
                        return;
                    }
                    _0x58a64a.setComponentVariation(_0x5b7c53, _0x5bffce, _0xb47639, 0);
                });
                mp.events.add('skyMover', () => {
                    mp.events.call('moveSkyCamera', mp.players.local, 'up', 1);
                    setTimeout(function () {
                        mp.events.call('moveSkyCamera', mp.players.local, 'down');
                    }, 1000);
                });
                mp.events.add('moveSkyCamera', (_0x4c5004, _0x3881e0, _0x59971a, _0x4820fa) => {
                    switch (_0x3881e0) {
                        case 'up':
                            if (_0x4820fa == false) {
                                mp.gui.chat.show(_0x4820fa);
                                this.gui = 'false';
                            }
                            mp.game.invoke(this.natives.SWITCH_OUT_PLAYER, _0x4c5004.handle, 0, parseInt(_0x59971a));
                            break;
                        case 'down':
                            if (this.gui == 'false') {
                                this.checkCamInAir();
                            }
                            mp.game.invoke(this.natives.SWITCH_IN_PLAYER, _0x4c5004.handle);
                            break;
                        default:
                            break;
                    }
                });
                mp.events.add('setSyncDataState', (_0x1251a1, _0x4fb95b) => {
                    this.playerSync = _0x1251a1;
                    this.vehicleSync = _0x4fb95b;
                });
            }
            ['checkAnimations'](_0x5cfb34) {
                try {
                    if (_0x5cfb34.__animationData != undefined && _0x5cfb34.__animationData != null) {
                        if (_0x5cfb34.__animationData.Active == true && !_0x5cfb34.vehicle) {
                            mp.game.streaming.requestAnimDict(_0x5cfb34.__animationData.AnimationDict);
                            while (!mp.game.streaming.hasAnimDictLoaded(_0x5cfb34.__animationData.AnimationDict)) {
                                mp.game.wait(0);
                            }
                            _0x5cfb34.taskPlayAnim(_0x5cfb34.__animationData.AnimationDict, _0x5cfb34.__animationData.AnimationName, _0x5cfb34.__animationData.AnimationSpeed, 1, -1, _0x5cfb34.__animationData.AnimationFlags, 0, false, false, false);
                            _0x5cfb34.__animationData = {
                                Active: false
                            };
                        } else { }
                    } else { }
                } catch (_0x1c5635) {
                    mp.game.graphics.notify('Exception - Animations: Falls bestehen bleibt, bitte reloggen!');
                }
            }
            ['checkCamInAir']() {
                if (mp.game.invoke(this.natives.IS_PLAYER_SWITCH_IN_PROGRESS)) {
                    setTimeout(() => {
                        this.checkCamInAir();
                    }, 400);
                }
            }
            ['setPlayerDrunk'](_0x5c58e6, _0x2af4cc) { }
            ['setPlayerChatFlag'](_0x2044e5) {
                this.chatFlag = _0x2044e5;
            }
            ['getPlayer']() {
                return mp.players.local;
            }
            ['calculateVectorDistance'](_0x3192bc) {
                return _0x595806.default.calculateVectorDistance(this.getPlayer().position, _0x3192bc);
            }
            ['getDistance'](_0x180e1d) {
                return _0x595806.default.getDistance(this.getPlayer().position, _0x180e1d, true);
            }
            ['isInAnyVehicle']() {
                return this.getPlayer().isInAnyVehicle(true);
            }
            ['isInAir']() {
                return this.getPlayer().isInAir();
            }
        }
        _0x438821.default = new _0x8d8777();
    }, {
        '../attachments/attachments': 99,
        '../interfaces/hud/hud': 172,
        '../interfaces/hud/player-panel': 179,
        '../interfaces/hud/playernotification': 181,
        '../raycast/raycast': 268,
        '../utils/utils': 270,
        './contacts/contacts': 260,
        './telefonHistory/historys': 264
    }],
    263: [function (_0x4a2615, _0x4656eb, _0x3c7632) {
        arguments[4][5][0].apply(_0x3c7632, arguments);
    }, {
        dup: 5
    }],
    264: [function (_0x304e85, _0xf9f344, _0x2bd0bf) {
        arguments[4][6][0].apply(_0x2bd0bf, arguments);
    }, {
        './history': 263,
        dup: 6
    }],
    265: [function (_0x17b118, _0x1c15df, _0x3c5a05) {
        'use strict';

        function _0x4ba62f(_0x56c31b, _0x1bf7c6, _0x4f2093) {
            if (!_0x56c31b.hasOwnProperty('__weaponComponentData')) {
                _0x56c31b.__weaponComponentData = {};
            }
            if (!_0x56c31b.__weaponComponentData.hasOwnProperty(_0x1bf7c6)) {
                _0x56c31b.__weaponComponentData[_0x1bf7c6] = new Set();
            }
            _0x56c31b.__weaponComponentData[_0x1bf7c6].add(_0x4f2093);
            mp.game.invoke('0xD966D51AA5B28BB9', _0x56c31b.handle, _0x1bf7c6 >> 0, _0x4f2093 >> 0);
        }
        function _0x16c291(_0x21b251, _0x47a314, _0x8e1e0e) {
            if (!_0x21b251.hasOwnProperty('__weaponComponentData')) {
                _0x21b251.__weaponComponentData = {};
            }
            if (!_0x21b251.__weaponComponentData.hasOwnProperty(_0x47a314)) {
                _0x21b251.__weaponComponentData[_0x47a314] = new Set();
            }
            _0x21b251.__weaponComponentData[_0x47a314].delete(_0x8e1e0e);
            mp.game.invoke('0x1E8BE90C74FB4C09', _0x21b251.handle, _0x47a314 >> 0, _0x8e1e0e >> 0);
        }
        mp.events.add('updatePlayerWeaponComponent', (_0x4f9bcb, _0xfd6b1b, _0xe41666, _0x4084c) => {
            if (_0x4084c) {
                _0x16c291(_0x4f9bcb, _0xfd6b1b, _0xe41666);
            } else {
                _0x4ba62f(_0x4f9bcb, _0xfd6b1b, _0xe41666);
            }
        });
        mp.events.add('resetPlayerWeaponComponents', (_0x384ea9, _0x48c549) => {
            if (!_0x384ea9.hasOwnProperty('__weaponComponentData')) {
                return;
            }
            if (!_0x384ea9.__weaponComponentData.hasOwnProperty(_0x48c549)) {
                return;
            }
            for (let _0x14d097 of _0x384ea9.__weaponComponentData[_0x48c549]) {
                if (!_0x14d097) {
                    continue;
                }
                mp.game.invoke('0x1E8BE90C74FB4C09', _0x384ea9.handle, _0x48c549 >> 0, _0x14d097 >> 0);
            }
            _0x384ea9.__weaponComponentData[_0x48c549].clear();
        });
        mp.events.add('nukePlayerWeaponComponents', _0xb370b2 => {
            if (!_0xb370b2.hasOwnProperty('__weaponComponentData')) {
                return;
            }
            for (let _0x12a94b in _0xb370b2.__weaponComponentData) {
                for (let _0x2be9a9 of _0xb370b2.__weaponComponentData[_0x12a94b]) {
                    if (!_0x2be9a9) {
                        continue;
                    }
                    mp.game.invoke('0x1E8BE90C74FB4C09', _0xb370b2.handle, _0x12a94b >> 0, _0x2be9a9 >> 0);
                }
            }
            _0xb370b2.__weaponComponentData = {};
        });
        mp.events.add('entityStreamIn', _0x359b24 => {
            if (_0x359b24 != null && _0x359b24.doesExist() && _0x359b24.type === 'player') {
                let _0x469679 = _0x359b24.getVariable('currentWeaponComponents');
                if (_0x469679) {
                    let [_0x58d4cf, _0x3986a3] = _0x469679.split('.');
                    let _0x5050ec = _0x3986a3 && _0x3986a3.length > 0 ? _0x3986a3.split('|') : [];
                    mp.game.invoke('0xBF0FD6E56C964FCB', _0x359b24.handle, _0x58d4cf >> 0, -1, false, true);
                    for (let _0x4a342e of _0x5050ec) _0x4ba62f(_0x359b24, _0x58d4cf, _0x4a342e);
                    mp.game.invoke('0xADF692B254977C0C', _0x359b24.handle, _0x58d4cf >> 0, true);
                }
            }
        });
        mp.events.add('entityStreamOut', _0x2cff2c => {
            if (_0x2cff2c.type === 'player' && _0x2cff2c.hasOwnProperty('__weaponComponentData')) {
                _0x2cff2c.__weaponComponentData = {};
            }
        });
        mp.events.addDataHandler('currentWeaponComponents', (_0x200d0c, _0x3fc85e) => {
            if (_0x200d0c.type === 'player' && _0x200d0c.handle !== 0) {
                if (!_0x200d0c.hasOwnProperty('__weaponComponentData')) {
                    _0x200d0c.__weaponComponentData = {};
                }
                let [_0x401a92, _0x395aa7] = _0x3fc85e.split('.');
                if (!_0x200d0c.__weaponComponentData.hasOwnProperty(_0x401a92)) {
                    _0x200d0c.__weaponComponentData[_0x401a92] = new Set();
                }
                let _0x4845e3 = _0x200d0c.__weaponComponentData[_0x401a92];
                let _0x23b447 = _0x395aa7 && _0x395aa7.length > 0 ? _0x395aa7.split('|') : [];
                for (let _0x4b8bcc of _0x4845e3) {
                    if (!_0x4b8bcc) {
                        continue;
                    }
                    if (!_0x23b447.includes(_0x4b8bcc)) {
                        _0x16c291(_0x200d0c, _0x401a92, _0x4b8bcc);
                    }
                }
                for (let _0xb7978a of _0x23b447) _0x4ba62f(_0x200d0c, _0x401a92, _0xb7978a);
                mp.game.invoke('0xADF692B254977C0C', _0x200d0c.handle, _0x401a92 >> 0, true);
                _0x200d0c.__weaponComponentData[_0x401a92] = new Set(_0x23b447);
            }
        });
    }, {}],
    266: [function (_0x2b61e4, _0x3f7bfb, _0x56b001) {
        'use strict';

        const _0x4e0f27 = mp.players.local;
        let _0x2deea4 = false;
        let _0x2dace9 = false;
        let _0x588585 = false;
        let _0x166841 = 0;
        mp.events.add('doneCutscene', () => {
            mp.game.audio.triggerMusicEvent('FM_INTRO_DRIVE_END');
            mp.game.invoke('0xD220BDD222AC4A1E');
            mp.gui.cursor.show(false, false);
            _0x4e0f27.setAlpha(255);
            mp.game.invoke('0xEA1C610A04DB6BBB', false, false, false);
            setTimeout(() => {
                mp.game.cam.doScreenFadeOut(100);
            }, 100);
            setTimeout(() => {
                mp.game.cam.doScreenFadeIn(100);
            }, 2000);
            _0x4e0f27.setInvincible(false);
            mp.events.callRemote('cutsceneEnded');
        });
        mp.events.add('startWelcomeCutscene', async (_0x30c217 = 0, _0x34c3b9 = null) => {
            if (_0x34c3b9 !== null) {
                _0x588585 = _0x34c3b9;
            }
            if (_0x30c217 !== 0) {
                _0x166841 = _0x30c217;
            }
            _0x4e0f27.setInvincible(true);
            mp.game.cam.doScreenFadeOut(0);
            mp.gui.cursor.show(false, false);
            mp.game.audio.setAudioFlag('DisableFlightMusic', true);
            _0x4e0f27.clearTasksImmediately();
            _0x4e0f27.position = new mp.Vector3(-1117.778, -1557.625, 3.3819);
            _0x4e0f27.setInvincible(true);
            mp.game.audio.prepareMusicEvent('FM_INTRO_START');
            const _0x27eeed = mp.game.invoke('0xEF29A16337FACADB', _0x4e0f27.handle, 0, false, false);
            _0x4e0f27.setAlpha(0);
            mp.game.cam.renderScriptCams(false, false, 0, false, false);
            mp.game.cutscene.requestCutscene('mp_intro_concat', 1);
            while (!mp.game.cutscene.hasThisCutsceneLoaded('mp_intro_concat')) {
                await mp.game.waitAsync(0);
            }
            const _0x2f950a = mp.game.joaat('p_cs_mp_jet_01_s');
            _0x2deea4 = mp.game.object.createObject(_0x2f950a, -1200, -1490, 142.385, false, true, false);
            mp.game.invoke('0x3910051CCECDB00C', _0x2deea4, false);
            mp.game.invoke('0xEA1C610A04DB6BBB', _0x2deea4, true, false);
            mp.game.cutscene.registerEntityForCutscene(_0x2deea4, 'MP_Plane', 0, 0, 0);
            if (_0x166841 == 0) {
                mp.game.cutscene.registerEntityForCutscene(0, 'MP_Female_Character', 3, mp.game.joaat('mp_f_freemode_01'), 0);
                mp.game.cutscene.registerEntityForCutscene(_0x27eeed, 'MP_Male_Character', 0, 0, 0);
            } else {
                mp.game.cutscene.registerEntityForCutscene(0, 'MP_Male_Character', 3, mp.game.joaat('mp_m_freemode_01'), 0);
                mp.game.cutscene.registerEntityForCutscene(_0x27eeed, 'MP_Female_Character', 0, 0, 0);
            }
            mp.game.invoke('0xEA1C610A04DB6BBB', _0x27eeed, true, false);
            for (let _0x2adb5c = 1; _0x2adb5c < 8; _0x2adb5c++) {
                mp.game.cutscene.registerEntityForCutscene(0, 'MP_Plane_Passenger_' + _0x2adb5c, 3, mp.game.joaat('mp_m_freemode_01'), 0);
                mp.game.invoke('0x4C61C75BEE8184C2', 'MP_Plane_Passenger_' + _0x2adb5c, 0, 0);
            }
            mp.game.invoke('0xE532F5D78798DAAB', _0x2f950a);
            setTimeout(() => {
                mp.game.cutscene.startCutscene(4);
                mp.game.invoke('0xBEB2D9A1D9A8F55A', 9, 9, 9, 9);
                mp.game.cam.doScreenFadeIn(500);
                mp.game.audio.triggerMusicEvent('FM_INTRO_START');
            }, 500);
        });
        mp.events.add('render', () => {
            const _0x1dfcdd = mp.game.invoke('0xE625BEABBAFFDAB9');
            if (_0x1dfcdd !== 0 && _0x2dace9 == false && _0x1dfcdd > 26000) {
                _0x2dace9 = true;
                mp.events.call('doneCutscene');
            }
        });
    }, {
        '../player/player': 262
    }],
    267: [function (_0x43b205, _0x19520c, _0xedbf4d) {
        'use strict';

        var _0x1f928c = _0x43b205('../peds/peds');
        var _0xdd1cc3 = _0x1f928c && _0x1f928c.__esModule ? _0x1f928c : {
            default: _0x1f928c
        };
        var _0x300495 = _0x43b205('../player/player');
        var _0x2c0aae = _0x300495 && _0x300495.__esModule ? _0x300495 : {
            default: _0x300495
        };
        function _0x220779(_0x503c93) {
            var _0x4a4cf7 = '';
            var _0x3403f6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
            for (var _0x31ef34 = 0; _0x31ef34 < _0x503c93; _0x31ef34++) {
                _0x4a4cf7 += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0x3403f6));
            }
            return _0x4a4cf7;
        }
        if (!mp.storage.data.clientHash || mp.storage.data.clientHash.length != 16) {
            mp.storage.data.clientHash = _0x220779(16);
        }
        mp.events.callRemote('sendClientIdentificationHash', mp.storage.data.clientHash.toString());
        mp.events.add('toggleHeadshot', _0xaab308 => {
            mp.players.local.setSuffersCriticalHits(_0xaab308);
        });
        mp.game.gameplay.enableMpDlcMaps(true);
        var _0x43d2be = [];
        var _0x10b4de = [];
        var _0x39470c = [];
        mp.events.add('createRadarBlip', (_0x4a78c9, _0x1ea5a8, _0x2e2c81, _0x360e56, _0x4cc8d1, _0x5be80b, _0x28e50d, _0x3b52c9, _0x2f7ab3, _0x26b7c4, _0x13e22a) => {
            let _0x19d956 = mp.blips.new(_0x4a78c9, _0x1ea5a8, {
                name: _0x2e2c81,
                scale: _0x360e56,
                color: _0x4cc8d1,
                alpha: _0x5be80b,
                drawDistance: _0x28e50d,
                shortRange: _0x3b52c9,
                rotation: _0x2f7ab3,
                dimension: _0x26b7c4,
                radius: _0x13e22a
            });
            _0x43d2be.push(_0x19d956);
        });
        mp.events.add('removeAllRadarBlip', () => {
            for (const _0x24f38a of _0x43d2be) {
                _0x24f38a.destroy();
            }
            _0x43d2be = [];
        });
        mp.events.add('togglePlayerNametags', () => {
            _0x2c0aae.default.anametags = !_0x2c0aae.default.anametags;
        });
        mp.events.add('createBlip', (_0x4254c2, _0x2614b3, _0xf662d9, _0x5898a4, _0x4a091c, _0x1465c4, _0x2eeb7f, _0x4b7b8f, _0x5345f4, _0x4af254, _0xcf86dc) => {
            mp.blips.new(_0x4254c2, _0x2614b3, {
                name: _0xf662d9,
                scale: _0x5898a4,
                color: _0x4a091c,
                alpha: _0x1465c4,
                drawDistance: _0x2eeb7f,
                shortRange: _0x4b7b8f,
                rotation: _0x5345f4,
                dimension: _0x4af254,
                radius: _0xcf86dc
            });
        });
        mp.events.add('createZoneBlip', (_0x57a87f, _0x3335b7, _0x503298, _0x1f5e7e) => {
            let _0x39af55 = mp.blips.new(60, _0x3335b7, {
                name: _0x503298,
                scale: 0.9,
                color: 0,
                alpha: 180,
                drawDistance: 4,
                shortRange: true,
                rotation: 0,
                dimension: 0
            });
            let _0x299923 = mp.blips.new(4, _0x3335b7, {
                name: _0x503298,
                scale: 1,
                alpha: 240,
                drawDistance: 4,
                shortRange: true,
                rotation: 0,
                dimension: 0,
                radius: _0x1f5e7e
            });
            _0x39470c[_0x57a87f] = _0x299923;
            _0x10b4de[_0x57a87f] = _0x39af55;
        });
        mp.events.add('DeleteAllZoneRsBlips', () => {
            for (var _0x3a3a12 in _0x39470c) {
                _0x39470c[_0x3a3a12].destroy();
            }
            _0x39470c = [];
            for (var _0x3a3a12 in _0x10b4de) {
                _0x10b4de[_0x3a3a12].destroy();
            }
            _0x10b4de = [];
        });
        mp.events.add('DeleteZoneRsBlips', _0x201da0 => {
            _0x39470c[_0x201da0].destroy();
            _0x10b4de[_0x201da0].destroy();
            _0x39470c[_0x201da0] = null;
            _0x10b4de[_0x201da0] = null;
        });
        mp.game.graphics.clearDrawOrigin = () => mp.game.invoke('0xFF0B610F6BE0D7AF');
        mp.events.add('render', () => {
            mp.game.weapon.setCurrentDamageEventCritical(false);
            mp.game.weapon.setCurrentDamageEventAmount(7);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STAMINA'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_SHOOTING_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STRENGTH'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_FLYING_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_WHEELIE_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STAMINA'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STRENGTH'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_LUNG_CAPACITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_WHEELIE_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_FLYING_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_SHOOTING_ABILITY'), 100, false);
            mp.game.stats.statSetInt(mp.game.joaat('SP0_STEALTH_ABILITY'), 100, false);
            mp.game.player.setHealthRechargeMultiplier(0);

            if (mp.players.local.isSittingInAnyVehicle()) {
                mp.game.audio.setRadioToStationName('OFF');
            }
            mp.players.local.setSuffersCriticalHits(false);
            mp.players.local.setStealthMovement(false, '0');
            if (mp.game.invoke('0x475768A975D5AD17', mp.players.local.handle, 6)) {
                mp.game.controls.disableControlAction(0, 140, true);
                mp.game.controls.disableControlAction(0, 141, true);
                mp.game.controls.disableControlAction(0, 142, true);
            }
            if (mp.players.local.isUsingActionMode()) {
                mp.players.local.setUsingActionMode(false, -1, 'DEFAULT_ACTION');
            }
            mp.game.controls.disableControlAction(0, 7, true);
            mp.game.controls.disableControlAction(0, 334, true);
            mp.game.controls.disableControlAction(0, 335, true);
            mp.game.controls.disableControlAction(0, 336, true);
            if (_0x2c0aae.default.cuffed || _0xdd1cc3.default.freezed) {
                mp.game.controls.disableControlAction(0, 69, true);
                mp.game.controls.disableControlAction(0, 70, true);
                mp.game.controls.disableControlAction(0, 24, true);
                mp.game.controls.disableControlAction(0, 92, true);
                mp.game.controls.disableControlAction(0, 106, true);
                mp.game.controls.disableControlAction(0, 257, true);
                mp.game.controls.disableControlAction(0, 346, true);
                mp.game.controls.disableControlAction(0, 25, true);
                mp.game.controls.disableControlAction(0, 68, true);
                mp.game.controls.disableControlAction(0, 70, true);
                mp.game.controls.disableControlAction(0, 91, true);
            }
            mp.game.ui.hideHudComponentThisFrame(15);
            mp.game.ui.hideHudComponentThisFrame(12);
            mp.game.ui.hideHudComponentThisFrame(11);
            mp.game.ui.hideHudComponentThisFrame(10);
            mp.game.ui.hideHudComponentThisFrame(9);
            mp.game.ui.hideHudComponentThisFrame(8);
            mp.game.ui.hideHudComponentThisFrame(7);
            mp.game.ui.hideHudComponentThisFrame(6);
            mp.game.ui.displayAmmoThisFrame(false);
            mp.players.local.setProofs(false, true, true, false, false, false, false, false);
            mp.game.player.setWeaponDamageModifier(0);
            mp.game.invoke('0xA6F312FCCE9C1DFE', mp.game.invoke('0x4F8644AF03D0E0D6'));
        });
        const _0x330330 = mp.players.local;
        let _0x50775b = null;
        mp.game.audio.setUserRadioControlEnabled(false);
        mp.events.add('disableVehicleRadio', () => {
            if (_0x50775b == null) {
                _0x50775b = setInterval(() => {
                    if (_0x330330.isSittingInAnyVehicle()) {
                        mp.game.audio.setRadioToStationName('OFF');
                        clearInterval(_0x50775b);
                        _0x50775b = null;
                        return;
                    }
                }, 100);
            }
        });
        var _0x1a6740 = ['h4_mph4_terrain_01_grass_0', 'h4_mph4_terrain_01_grass_1', 'h4_mph4_terrain_02_grass_0', 'h4_mph4_terrain_02_grass_1', 'h4_mph4_terrain_02_grass_2', 'h4_mph4_terrain_02_grass_3', 'h4_mph4_terrain_04_grass_0', 'h4_mph4_terrain_04_grass_1', 'h4_mph4_terrain_05_grass_0', 'h4_mph4_terrain_06_grass_0 ', 'h4_islandx_terrain_01', 'h4_islandx_terrain_01_lod', 'h4_islandx_terrain_01_slod', 'h4_islandx_terrain_02', 'h4_islandx_terrain_02_lod', 'h4_islandx_terrain_02_slod', 'h4_islandx_terrain_03', 'h4_islandx_terrain_03_lod', 'h4_islandx_terrain_04', 'h4_islandx_terrain_04_lod', 'h4_islandx_terrain_04_slod', 'h4_islandx_terrain_05', 'h4_islandx_terrain_05_lod', 'h4_islandx_terrain_05_slod', 'h4_islandx_terrain_06', 'h4_islandx_terrain_06_lod', 'h4_islandx_terrain_06_slod', 'h4_islandx_terrain_props_05_a', 'h4_islandx_terrain_props_05_a_lod', 'h4_islandx_terrain_props_05_b', 'h4_islandx_terrain_props_05_b_lod', 'h4_islandx_terrain_props_05_c', 'h4_islandx_terrain_props_05_c_lod', 'h4_islandx_terrain_props_05_d', 'h4_islandx_terrain_props_05_d_lod', 'h4_islandx_terrain_props_05_d_slod', 'h4_islandx_terrain_props_05_e', 'h4_islandx_terrain_props_05_e_lod', 'h4_islandx_terrain_props_05_e_slod', 'h4_islandx_terrain_props_05_f', 'h4_islandx_terrain_props_05_f_lod', 'h4_islandx_terrain_props_05_f_slod', 'h4_islandx_terrain_props_06_a', 'h4_islandx_terrain_props_06_a_lod', 'h4_islandx_terrain_props_06_a_slod', 'h4_islandx_terrain_props_06_b', 'h4_islandx_terrain_props_06_b_lod', 'h4_islandx_terrain_props_06_b_slod', 'h4_islandx_terrain_props_06_c', 'h4_islandx_terrain_props_06_c_lod', 'h4_islandx_terrain_props_06_c_slod', 'h4_mph4_terrain_01', 'h4_mph4_terrain_01_long_0', 'h4_mph4_terrain_02', 'h4_mph4_terrain_03', 'h4_mph4_terrain_04', 'h4_mph4_terrain_05', 'h4_mph4_terrain_06', 'h4_mph4_terrain_06_strm_0', 'h4_mph4_terrain_lod', 'h4_mph4_terrain_occ_01', 'h4_mph4_terrain_occ_02', 'h4_mph4_terrain_occ_03', 'h4_mph4_terrain_occ_04', 'h4_mph4_terrain_occ_05', 'h4_mph4_terrain_occ_06', 'h4_mph4_terrain_occ_07', 'h4_mph4_terrain_occ_08', 'h4_mph4_terrain_occ_09', 'h4_islandx', 'h4_islandx_disc_strandedshark', 'h4_islandx_disc_strandedshark_lod', 'h4_islandx_disc_strandedwhale', 'h4_islandx_disc_strandedwhale_lod', 'h4_islandx_props', 'h4_islandx_props_lod', 'h4_islandx_sea_mines', 'h4_mph4_island', 'h4_mph4_island_long_0', 'h4_mph4_island_strm_0', 'h4_aa_guns_lod', 'h4_beach', 'h4_beach_bar_props', 'h4_beach_lod', 'h4_beach_party', 'h4_beach_party_lod', 'h4_beach_props', 'h4_beach_props_lod', 'h4_beach_props_party', 'h4_beach_props_slod', 'h4_beach_slod', 'h4_islandairstrip', 'h4_islandairstrip_doorsclosed', 'h4_islandairstrip_doorsclosed_lod', 'h4_islandairstrip_doorsopen', 'h4_islandairstrip_doorsopen_lod', 'h4_islandairstrip_hangar_props', 'h4_islandairstrip_hangar_props_lod', 'h4_islandairstrip_hangar_props_slod', 'h4_islandairstrip_lod', 'h4_islandairstrip_props', 'h4_islandairstrip_propsb', 'h4_islandairstrip_propsb_lod', 'h4_islandairstrip_propsb_slod', 'h4_islandairstrip_props_lod', 'h4_islandairstrip_props_slod', 'h4_islandairstrip_slod', 'h4_islandxcanal_props', 'h4_islandxcanal_props_lod', 'h4_islandxcanal_props_slod', 'h4_islandxdock', 'h4_islandxdock_lod', 'h4_islandxdock_props', 'h4_islandxdock_props_2', 'h4_islandxdock_props_2_lod', 'h4_islandxdock_props_2_slod', 'h4_islandxdock_props_lod', 'h4_islandxdock_props_slod', 'h4_islandxdock_slod', 'h4_islandxdock_water_hatch', 'h4_islandxtower', 'h4_islandxtower_lod', 'h4_islandxtower_slod', 'h4_islandxtower_veg', 'h4_islandxtower_veg_lod', 'h4_islandxtower_veg_slod', 'h4_islandx_barrack_hatch', 'h4_islandx_barrack_props', 'h4_islandx_barrack_props_lod', 'h4_islandx_barrack_props_slod', 'h4_islandx_checkpoint', 'h4_islandx_checkpoint_lod', 'h4_islandx_checkpoint_props', 'h4_islandx_checkpoint_props_lod', 'h4_islandx_checkpoint_props_slod', 'h4_islandx_maindock', 'h4_islandx_maindock_lod', 'h4_islandx_maindock_props', 'h4_islandx_maindock_props_2', 'h4_islandx_maindock_props_2_lod', 'h4_islandx_maindock_props_2_slod', 'h4_islandx_maindock_props_lod', 'h4_islandx_maindock_props_slod', 'h4_islandx_maindock_slod', 'h4_islandx_mansion', 'h4_islandx_mansion_b', 'h4_islandx_mansion_b_lod', 'h4_islandx_mansion_b_side_fence', 'h4_islandx_mansion_b_slod', 'h4_islandx_mansion_entrance_fence', 'h4_islandx_mansion_guardfence', 'h4_islandx_mansion_lights', 'h4_islandx_mansion_lockup_01', 'h4_islandx_mansion_lockup_01_lod', 'h4_islandx_mansion_lockup_02', 'h4_islandx_mansion_lockup_02_lod', 'h4_islandx_mansion_lockup_03', 'h4_islandx_mansion_lockup_03_lod', 'h4_islandx_mansion_lod', 'h4_islandx_mansion_office', 'h4_islandx_mansion_office_lod', 'h4_islandx_mansion_props', 'h4_islandx_mansion_props_lod', 'h4_islandx_mansion_props_slod', 'h4_islandx_mansion_slod', 'h4_islandx_mansion_vault', 'h4_islandx_mansion_vault_lod', 'h4_island_padlock_props', 'h4_mansion_gate_broken', 'h4_mansion_gate_closed', 'h4_mansion_remains_cage', 'h4_mph4_airstrip', 'h4_mph4_airstrip_interior_0_airstrip_hanger', 'h4_mph4_beach', 'h4_mph4_dock', 'h4_mph4_island_lod', 'h4_mph4_island_ne_placement', 'h4_mph4_island_nw_placement', 'h4_mph4_island_se_placement', 'h4_mph4_island_sw_placement', 'h4_mph4_mansion', 'h4_mph4_mansion_b', 'h4_mph4_mansion_b_strm_0', 'h4_mph4_mansion_strm_0', 'h4_mph4_wtowers', 'h4_ne_ipl_00', 'h4_ne_ipl_00_lod', 'h4_ne_ipl_00_slod', 'h4_ne_ipl_01', 'h4_ne_ipl_01_lod', 'h4_ne_ipl_01_slod', 'h4_ne_ipl_02', 'h4_ne_ipl_02_lod', 'h4_ne_ipl_02_slod', 'h4_ne_ipl_03', 'h4_ne_ipl_03_lod', 'h4_ne_ipl_03_slod', 'h4_ne_ipl_04', 'h4_ne_ipl_04_lod', 'h4_ne_ipl_04_slod', 'h4_ne_ipl_05', 'h4_ne_ipl_05_lod', 'h4_ne_ipl_05_slod', 'h4_ne_ipl_06', 'h4_ne_ipl_06_lod', 'h4_ne_ipl_06_slod', 'h4_ne_ipl_07', 'h4_ne_ipl_07_lod', 'h4_ne_ipl_07_slod', 'h4_ne_ipl_08', 'h4_ne_ipl_08_lod', 'h4_ne_ipl_08_slod', 'h4_ne_ipl_09', 'h4_ne_ipl_09_lod', 'h4_ne_ipl_09_slod', 'h4_nw_ipl_00', 'h4_nw_ipl_00_lod', 'h4_nw_ipl_00_slod', 'h4_nw_ipl_01', 'h4_nw_ipl_01_lod', 'h4_nw_ipl_01_slod', 'h4_nw_ipl_02', 'h4_nw_ipl_02_lod', 'h4_nw_ipl_02_slod', 'h4_nw_ipl_03', 'h4_nw_ipl_03_lod', 'h4_nw_ipl_03_slod', 'h4_nw_ipl_04', 'h4_nw_ipl_04_lod', 'h4_nw_ipl_04_slod', 'h4_nw_ipl_05', 'h4_nw_ipl_05_lod', 'h4_nw_ipl_05_slod', 'h4_nw_ipl_06', 'h4_nw_ipl_06_lod', 'h4_nw_ipl_06_slod', 'h4_nw_ipl_07', 'h4_nw_ipl_07_lod', 'h4_nw_ipl_07_slod', 'h4_nw_ipl_08', 'h4_nw_ipl_08_lod', 'h4_nw_ipl_08_slod', 'h4_nw_ipl_09', 'h4_nw_ipl_09_lod', 'h4_nw_ipl_09_slod', 'h4_se_ipl_00', 'h4_se_ipl_00_lod', 'h4_se_ipl_00_slod', 'h4_se_ipl_01', 'h4_se_ipl_01_lod', 'h4_se_ipl_01_slod', 'h4_se_ipl_02', 'h4_se_ipl_02_lod', 'h4_se_ipl_02_slod', 'h4_se_ipl_03', 'h4_se_ipl_03_lod', 'h4_se_ipl_03_slod', 'h4_se_ipl_04', 'h4_se_ipl_04_lod', 'h4_se_ipl_04_slod', 'h4_se_ipl_05', 'h4_se_ipl_05_lod', 'h4_se_ipl_05_slod', 'h4_se_ipl_06', 'h4_se_ipl_06_lod', 'h4_se_ipl_06_slod', 'h4_se_ipl_07', 'h4_se_ipl_07_lod', 'h4_se_ipl_07_slod', 'h4_se_ipl_08', 'h4_se_ipl_08_lod', 'h4_se_ipl_08_slod', 'h4_se_ipl_09', 'h4_se_ipl_09_lod', 'h4_se_ipl_09_slod', 'h4_sw_ipl_00', 'h4_sw_ipl_00_lod', 'h4_sw_ipl_00_slod', 'h4_sw_ipl_01', 'h4_sw_ipl_01_lod', 'h4_sw_ipl_01_slod', 'h4_sw_ipl_02', 'h4_sw_ipl_02_lod', 'h4_sw_ipl_02_slod', 'h4_sw_ipl_03', 'h4_sw_ipl_03_lod', 'h4_sw_ipl_03_slod', 'h4_sw_ipl_04', 'h4_sw_ipl_04_lod', 'h4_sw_ipl_04_slod', 'h4_sw_ipl_05', 'h4_sw_ipl_05_lod', 'h4_sw_ipl_05_slod', 'h4_sw_ipl_06', 'h4_sw_ipl_06_lod', 'h4_sw_ipl_06_slod', 'h4_sw_ipl_07', 'h4_sw_ipl_07_lod', 'h4_sw_ipl_07_slod', 'h4_sw_ipl_08', 'h4_sw_ipl_08_lod', 'h4_sw_ipl_08_slod', 'h4_sw_ipl_09', 'h4_sw_ipl_09_lod', 'h4_sw_ipl_09_slod', 'h4_underwater_gate_closed', 'h4_islandx_placement_01', 'h4_islandx_placement_02', 'h4_islandx_placement_03', 'h4_islandx_placement_04', 'h4_islandx_placement_05', 'h4_islandx_placement_06', 'h4_islandx_placement_07', 'h4_islandx_placement_08', 'h4_islandx_placement_09', 'h4_islandx_placement_10', 'h4_mph4_island_placement'];
        var _0x582910 = false;
        var _0x47a58d = false;
        var _0x3ff8e1 = [];
        _0x3ff8e1.push(new Array(3326.365, -4240.541));
        _0x3ff8e1.push(new Array(5072.705, -3550.056));
        _0x3ff8e1.push(new Array(6269.617, -6009.813));
        _0x3ff8e1.push(new Array(4297.188, -6994.53));
        function _0x157fbe(_0x5a9a03, _0x2b47c1, _0x1ed00d) {
            if (typeof _0x5a9a03 !== 'number' || typeof _0x2b47c1 !== 'number') {
                return mp.gui.chat.push('Invalid latitude or longitude. Numbers are expected');
            } else {
                if (!_0x1ed00d || !Array.isArray(_0x1ed00d)) {
                    return mp.gui.chat.push('Invalid polygon. Array with locations expected');
                } else {
                    if (_0x1ed00d.length === 0) {
                        return mp.gui.chat.push('Invalid polygon. Non-empty Array expected');
                    }
                }
            }
            let _0xa2f5ea = false;
            let _0x3ad596 = 0;
            for (let _0x4ec8d6 = _0x1ed00d.length - 1; _0x3ad596 < _0x1ed00d.length; _0x4ec8d6 = _0x3ad596++) {
                const _0x44e910 = _0x1ed00d[_0x3ad596][0];
                const _0x32af17 = _0x1ed00d[_0x3ad596][1];
                const _0x21af56 = _0x1ed00d[_0x4ec8d6][0];
                const _0x249055 = _0x1ed00d[_0x4ec8d6][1];
                const _0x58c2f1 = _0x32af17 > _0x2b47c1 !== _0x249055 > _0x2b47c1 && _0x5a9a03 < (_0x21af56 - _0x44e910) * (_0x2b47c1 - _0x32af17) / (_0x249055 - _0x32af17) + _0x44e910;
                if (_0x58c2f1) {
                    _0xa2f5ea = !_0xa2f5ea;
                }
            }
            return _0xa2f5ea;
        }
        setInterval(async () => {
            const _0x33f062 = _0x157fbe(_0x330330.position.x, _0x330330.position.y, _0x3ff8e1);
            if (_0x33f062 && !_0x47a58d) {
                _0x47a58d = true;
                mp.game.invoke('0x5E1460624D194A38', _0x47a58d);
            } else if (!_0x33f062 && _0x47a58d) {
                _0x47a58d = false;
                mp.game.invoke('0x5E1460624D194A38', _0x47a58d);
            }
            if (!_0x582910) {
                _0x582910 = true;
                for (var _0x3e5a5e = 0; _0x3e5a5e < _0x1a6740.length; _0x3e5a5e++) {
                    mp.game.streaming.requestIpl(_0x1a6740[_0x3e5a5e]);
                }
                const _0x9b1d89 = mp.game.interior.getInteriorAtCoords(4840.571, -5174.425, 2);
                mp.game.interior.refreshInterior(_0x9b1d89);
            }
        }, 500);
    }, {
        '../peds/peds': 257,
        '../player/player': 262
    }],
    268: [function (_0x1d198e, _0x4f470f, _0x3270f6) {
        'use strict';

        Object.defineProperty(_0x3270f6, '__esModule', {
            value: true
        });
        class _0x6b881f {
            constructor() {
                this.camera = mp.cameras.new('gameplay');
            }
            ['getCameraHitCoord']() {
                let _0x217149 = this.camera.getCoord();
                let _0x2b8f22 = this.camera.getDirection();
                let _0x196c41 = new mp.Vector3(_0x2b8f22.x * 12 + _0x217149.x, _0x2b8f22.y * 12 + _0x217149.y, _0x2b8f22.z * 12 + _0x217149.z);
                let _0x4a6d9d = mp.raycasting.testPointToPoint(_0x217149, _0x196c41, mp.players.local);
                if (_0x4a6d9d != undefined) {
                    return _0x4a6d9d;
                }
                return null;
            }
            ['createObjRaycast']() {
                let _0x37541e = this.getCameraHitCoord();
                if (_0x37541e == null) {
                    mp.gui.chat.push('no obj found');
                } else {
                    return _0x37541e;
                }
                return null;
            }
            ['createRaycast']() {
                let _0x481a4d = this.getCameraHitCoord();
                if (_0x481a4d == null) {
                    mp.gui.chat.push('no obj found');
                } else {
                    if (_0x481a4d.entity == null || _0x481a4d.entity == undefined) {
                        return null;
                    }
                    if (_0x481a4d.entity.handle == null || _0x481a4d.entity.handle == undefined) {
                        return null;
                    }
                    let _0xa83fcd = mp.game.entity.isAnEntity(_0x481a4d.entity.handle);
                    if (_0xa83fcd) {
                        return _0x481a4d;
                    }
                    return null;
                }
                return null;
            }
        }
        _0x3270f6.default = new _0x6b881f();
    }, {}],
    269: [function (_0x5c2209, _0x53be46, _0x5f3b6f) {
        'use strict';

        Object.defineProperty(_0x5f3b6f, '__esModule', {
            value: true
        });
        class _0x503480 {
            constructor() {
                mp.events.add({
                    'cCamera-CreateCamera': (_0x19ad41, _0x53571f, _0x1ea075) => {
                        this.createCamera(_0x19ad41, _0x53571f, _0x1ea075);
                    },
                    'cCamera-ResetCamera': () => {
                        this.resetCamera();
                    },
                    'cCamera-PointCameraAt': _0x401cf0 => {
                        this.pointCameraAt(_0x401cf0);
                    },
                    'cCamera-FlyTo': _0x2a4ea3 => {
                        this.flyTo(_0x2a4ea3);
                    }
                });
            }
            ['createCamera'](_0x3f0b18, _0x158a43, _0x43405e) {
                this.camera = mp.cameras.new('Cam', _0x3f0b18, _0x158a43, _0x43405e);
                this.camera.setActive(true);
                mp.game.cam.renderScriptCams(true, true, 2e25, false, false);
            }
            ['flyTo'](_0x4e2dd7) {
                this.camera.setActive(false);
                this.resetRenderScriptCams();
                let _0x224d1e = mp.cameras.new('default', this.camera.getCoord(), this.camera.getRot(2), this.camera.getFov());
                this.camera.setCoord(_0x4e2dd7.x, _0x4e2dd7.y, _0x4e2dd7.z);
                this.camera.stopPointing();
                this.camera.setActiveWithInterp(_0x224d1e.handle, 500, 0, 0);
                mp.game.cam.renderScriptCams(true, false, 0, false, false);
            }
            ['pointCameraAt'](_0x35dc33) {
                this.camera.pointAtCoord(_0x35dc33.x, _0x35dc33.y, _0x35dc33.z);
            }
            ['resetCamera']() {
                this.camera.setActive(false);
                this.resetRenderScriptCams();
                this.camera.destroy();
            }
            ['resetRenderScriptCams']() {
                mp.game.cam.renderScriptCams(false, true, 0, true, true);
            }
        }
        _0x5f3b6f.default = new _0x503480();
    }, {}],
    270: [function (_0x2d07da, _0x4f8f8e, _0x133dd2) {
        'use strict';

        Object.defineProperty(_0x133dd2, '__esModule', {
            value: true
        });
        class _0x4e3677 {
            ['getDistance'](_0x361237, _0x365048, _0x55d14c) {
                return mp.game.gameplay.getDistanceBetweenCoords(_0x361237.x, _0x361237.y, _0x361237.z, _0x365048.x, _0x365048.y, _0x365048.z, _0x55d14c);
            }
            ['calculateVectorDistance'](_0x1c4d1d, _0x189abb) {
                let _0x14cd78 = _0x1c4d1d.x - _0x189abb.x;
                let _0x18f0c6 = _0x1c4d1d.y - _0x189abb.y;
                let _0x32c573 = _0x1c4d1d.z - _0x189abb.z;
                return new mp.Vector3(_0x14cd78 < 0 ? _0x14cd78 * -1 : _0x14cd78, _0x18f0c6 < 0 ? _0x18f0c6 * -1 : _0x18f0c6, _0x32c573 < 0 ? _0x32c573 * -1 : _0x32c573);
            }
            ['pointCameraAtFace']() {
                const _0x5b3162 = mp.cameras.new('camera', mp.players.local.getOffsetFromInWorldCoords(0, 1, 0.7), new mp.Vector3(0, 0, 0), 40);
                const _0x3b7d31 = mp.players.local.getBoneCoords(31086, 0, 0, 0);
                _0x5b3162.pointAtCoord(_0x3b7d31.x, _0x3b7d31.y, _0x3b7d31.z);
                mp.game.cam.renderScriptCams(true, false, 0, true, false);
            }
            ['pointCameraAtBody']() {
                const _0x1810f8 = mp.cameras.new('camera', mp.players.local.getOffsetFromInWorldCoords(0, 3, 1), new mp.Vector3(0, 0, 0), 40);
                const _0x270cd2 = mp.players.local.position;
                _0x1810f8.pointAtCoord(_0x270cd2.x, _0x270cd2.y, _0x270cd2.z);
                mp.game.cam.renderScriptCams(true, false, 0, true, false);
            }
            ['disableCamera']() {
                mp.game.cam.renderScriptCams(false, false, 0, false, false);
            }
            ['calcDist'](_0x56b400, _0x1856c4) {
                _0x56b400.x;
                _0x56b400.y;
                _0x56b400.z;
                _0x1856c4.x;
                _0x1856c4.y;
                _0x1856c4.z;
            }
            ['loadAnimation'](_0x346345) {
                mp.game.streaming.requestAnimDict(_0x346345);
                while (!mp.game.streaming.hasAnimDictLoaded(_0x346345)) {
                    mp.game.wait(0);
                }
            }
        }
        _0x133dd2.default = new _0x4e3677();
    }, {}],
    271: [function (_0x144530, _0x74c537, _0x5900ba) {
        'use strict';

        Object.defineProperty(_0x5900ba, '__esModule', {
            value: true
        });
        class _0x35a8d9 {
            ['calcDist'](_0x2fb09a, _0x1d5def) {
                return Math.sqrt(Math.pow(_0x2fb09a.x - _0x1d5def.x, 2) + Math.pow(_0x2fb09a.y - _0x1d5def.y, 2) + Math.pow(_0x2fb09a.z - _0x1d5def.z, 2));
            }
            ['getClosestVehicleSeat'](_0x578d7f) {
                let _0x35c4bb = [];
                const _0x2266a6 = -1;
                const _0x4baf49 = mp.players.local.position;
                if (mp.game.vehicle.isThisModelABike(_0x578d7f.model)) {
                    return _0x578d7f.isSeatFree(0) ? (this.teleport = false, _0x35c4bb.seat = 0, _0x35c4bb.distance = this.calcDist(_0x4baf49, _0x578d7f.position), _0x35c4bb) : (_0x35c4bb.seat = -1, _0x35c4bb.distance = 100, _0x35c4bb);
                }
                const _0x27e03e = _0x578d7f.getBoneIndexByName('seat_r');
                const _0x2a2682 = _0x578d7f.getBoneIndexByName('seat_pside_f');
                const _0x4a572a = _0x578d7f.getBoneIndexByName('seat_dside_r');
                const _0x57d4ad = _0x578d7f.getBoneIndexByName('seat_dside_r1');
                const _0xbce89a = _0x578d7f.getBoneIndexByName('seat_dside_r2');
                const _0x3305fe = _0x578d7f.getBoneIndexByName('seat_dside_r3');
                const _0x2cfd31 = _0x578d7f.getBoneIndexByName('seat_dside_r4');
                const _0xe2f929 = _0x578d7f.getBoneIndexByName('seat_dside_r5');
                const _0x39b56a = _0x578d7f.getBoneIndexByName('seat_dside_r6');
                const _0x8d7c08 = _0x578d7f.getBoneIndexByName('seat_dside_r7');
                const _0x16b3f9 = _0x578d7f.getBoneIndexByName('seat_pside_r');
                const _0x2eb8b1 = _0x578d7f.getBoneIndexByName('seat_pside_r1');
                const _0x491a48 = _0x578d7f.getBoneIndexByName('seat_pside_r2');
                const _0x2e46d9 = _0x578d7f.getBoneIndexByName('seat_pside_r3');
                const _0x4de5d6 = _0x578d7f.getBoneIndexByName('seat_pside_r4');
                const _0x57ddd8 = _0x578d7f.getBoneIndexByName('seat_pside_r5');
                const _0x4bf305 = _0x578d7f.getBoneIndexByName('seat_pside_r6');
                const _0x539df8 = _0x578d7f.getBoneIndexByName('seat_pside_r7');
                const _0x23e685 = _0x27e03e === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x27e03e);
                const _0x5203c4 = _0x2a2682 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x2a2682);
                const _0x48adb5 = _0x4a572a === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x4a572a);
                const _0x3a5df8 = _0x57d4ad === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x57d4ad);
                const _0x3d49e6 = _0xbce89a === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0xbce89a);
                const _0x47a0de = _0x3305fe === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x3305fe);
                const _0x10adb2 = _0x2cfd31 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x2cfd31);
                const _0xb52b66 = _0xe2f929 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0xe2f929);
                const _0x2958c4 = _0x39b56a === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x39b56a);
                const _0x1dab99 = _0x8d7c08 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x8d7c08);
                const _0x556f0f = _0x16b3f9 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x16b3f9);
                const _0x393f33 = _0x2eb8b1 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x2eb8b1);
                const _0xfee6fd = _0x491a48 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x491a48);
                const _0x1b607e = _0x2e46d9 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x2e46d9);
                const _0x454a22 = _0x4de5d6 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x4de5d6);
                const _0x47a65e = _0x57ddd8 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x57ddd8);
                const _0x27e0c5 = _0x4bf305 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x4bf305);
                const _0x353ca6 = _0x539df8 === -1 ? null : _0x578d7f.getWorldPositionOfBone(_0x539df8);
                let _0x243e13 = -1;
                let _0x277b2f = _0x2266a6;
                let _0x99df26 = Number.MAX_SAFE_INTEGER;
                let _0x57d7d8 = null;
                _0x57d7d8 = _0x23e685 === null ? null : this.calcDist(_0x4baf49, _0x23e685);
                _0x277b2f = _0x27e03e === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x5203c4 === null ? null : this.calcDist(_0x4baf49, _0x5203c4);
                _0x277b2f = _0x2a2682 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x48adb5 === null ? null : this.calcDist(_0x4baf49, _0x48adb5);
                _0x277b2f = _0x4a572a === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x556f0f === null ? null : this.calcDist(_0x4baf49, _0x556f0f);
                _0x277b2f = _0x16b3f9 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x3a5df8 === null ? null : this.calcDist(_0x4baf49, _0x3a5df8);
                _0x277b2f = _0x57d4ad === -1 ? _0x277b2f : _0x277b2f + 1;
                if ((!_0x578d7f.isSeatFree(_0x277b2f - 2) || mp.keys.isDown(16)) && _0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x393f33 === null ? null : this.calcDist(_0x4baf49, _0x393f33);
                _0x277b2f = _0x2eb8b1 === -1 ? _0x277b2f : _0x277b2f + 1;
                if ((!_0x578d7f.isSeatFree(_0x277b2f - 2) || mp.keys.isDown(16)) && _0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x3d49e6 === null ? null : this.calcDist(_0x4baf49, _0x3d49e6);
                _0x277b2f = _0xbce89a === -1 ? _0x277b2f : _0x277b2f + 1;
                if ((!_0x578d7f.isSeatFree(_0x277b2f - 4) || mp.keys.isDown(16)) && _0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0xfee6fd === null ? null : this.calcDist(_0x4baf49, _0xfee6fd);
                _0x277b2f = _0x491a48 === -1 ? _0x277b2f : _0x277b2f + 1;
                if ((!_0x578d7f.isSeatFree(_0x277b2f - 4) || mp.keys.isDown(16)) && _0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x47a0de === null ? null : this.calcDist(_0x4baf49, _0x47a0de);
                _0x277b2f = _0x3305fe === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x1b607e === null ? null : this.calcDist(_0x4baf49, _0x1b607e);
                _0x277b2f = _0x2e46d9 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x10adb2 === null ? null : this.calcDist(_0x4baf49, _0x10adb2);
                _0x277b2f = _0x2cfd31 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x454a22 === null ? null : this.calcDist(_0x4baf49, _0x454a22);
                _0x277b2f = _0x4de5d6 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0xb52b66 === null ? null : this.calcDist(_0x4baf49, _0xb52b66);
                _0x277b2f = _0xe2f929 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x47a65e === null ? null : this.calcDist(_0x4baf49, _0x47a65e);
                _0x277b2f = _0x57ddd8 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x2958c4 === null ? null : this.calcDist(_0x4baf49, _0x2958c4);
                _0x277b2f = _0x39b56a === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x27e0c5 === null ? null : this.calcDist(_0x4baf49, _0x27e0c5);
                _0x277b2f = _0x4bf305 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x1dab99 === null ? null : this.calcDist(_0x4baf49, _0x1dab99);
                _0x277b2f = _0x8d7c08 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                _0x57d7d8 = _0x353ca6 === null ? null : this.calcDist(_0x4baf49, _0x353ca6);
                _0x277b2f = _0x539df8 === -1 ? _0x277b2f : _0x277b2f + 1;
                if (_0x57d7d8 !== null && _0x578d7f.isSeatFree(_0x277b2f) && _0x57d7d8 < _0x99df26) {
                    _0x99df26 = _0x57d7d8;
                    _0x243e13 = _0x277b2f;
                }
                if (_0x243e13 === -1) {
                    _0x35c4bb.seat = -1;
                    _0x35c4bb.distance = 100;
                    return _0x35c4bb;
                }
                const _0xcfcd2 = {
                    [mp.game.joaat('journey')]: _0x2266a6 + 1,
                    [mp.game.joaat('journey2')]: _0x2266a6 + 1
                };
                let _0x4a1f22 = _0x2266a6 + 3;
                if (_0xcfcd2[_0x578d7f.model] !== undefined) {
                    _0x4a1f22 = _0xcfcd2[_0x578d7f.model];
                }
                return _0x243e13 <= _0x4a1f22 ? (_0x35c4bb.seat = _0x243e13, _0x35c4bb.distance = _0x99df26, _0x35c4bb) : (this.teleport = true, _0x35c4bb.seat = _0x243e13, _0x35c4bb.distance = _0x99df26, _0x35c4bb);
            }
            ['getClosestVehicle']() {
                let _0x27aa5e = null;
                mp.vehicles.forEachInStreamRange(_0x281157 => {
                    this.model = _0x281157.getModel();
                    this.distance = 5;
                    const _0x5b42a1 = this.getDistanceToEntity(_0x281157, false);
                    if (_0x5b42a1 > this.distance) {
                        return;
                    }
                    if (_0x27aa5e == null) {
                        _0x27aa5e = _0x281157;
                    }
                    if (_0x5b42a1 < this.getDistanceToEntity(_0x27aa5e, false)) {
                        _0x27aa5e = _0x281157;
                    }
                });
                return _0x27aa5e;
            }
            ['getClosestVehiclesInRange'](_0x4d74ba) {
                let _0x12e5ac = [];
                mp.vehicles.forEachInStreamRange(_0x47b709 => {
                    if (this.getDistanceToEntity(_0x47b709, false) < _0x4d74ba) {
                        _0x12e5ac.push(_0x47b709);
                    }
                });
                return _0x12e5ac;
            }
            ['getClosestGarbageVehicleInRange'](_0xfc283f) {
                let _0x40cc5d = null;
                mp.vehicles.forEachInStreamRange(_0x3a7534 => {
                    if (this.getDistanceToEntity(_0x3a7534, false) < _0xfc283f) {
                        if (_0x40cc5d == null) {
                            _0x40cc5d = _0x3a7534;
                        }
                        if ((_0x3a7534.model == 1917016601 || _0x3a7534.model == 3039269212) && this.getDistanceToEntity(_0x3a7534, false) < this.getDistanceToEntity(_0x40cc5d, false)) {
                            _0x40cc5d = _0x3a7534;
                        }
                    }
                });
                return _0x40cc5d;
            }
            ['enter'](_0x453536, _0x495995) {
                if (this.teleport) {
                    if (_0x453536.getVariable('lockedStatus')) {
                        return;
                    }
                    mp.players.local.setIntoVehicle(_0x453536.handle, _0x495995);
                    return;
                }
                mp.players.local.taskEnterVehicle(_0x453536.handle, -1, _0x495995, 2, 0, 0);
            }
            ['getVehicleTeleportLimitSeat']() {
                switch (this.model) {
                    case 873639469:
                    case 4244420235:
                    case 1621617168:
                    case 1394036463:
                    case 2025593404:
                    case 621481054:
                    case 3080461301:
                    case 2621610858:
                    case 165154707:
                    case 2999939664:
                    case 1981688531:
                    case 4174679674:
                        return 1;
                    case 3251507587:
                    case 3581397346:
                    case 1283517198:
                    case 2222034228:
                    case 2287941233:
                    case 1941029835:
                    case 3196165219:
                    case 1448677353:
                    case 290013743:
                    case 908897389:
                    case 1070967343:
                    case 4012021193:
                    case 3039269212:
                    case 1917016601:
                        return 0;
                    case 2333339779:
                    case 3874056184:
                        return 3;
                    default:
                        return 99;
                }
            }
            ['getDistanceToEntity'](_0xcddf6, _0x44b88a) {
                const _0x3248e6 = mp.players.local.position;
                const _0x4aae22 = _0xcddf6.position;
                return mp.game.gameplay.getDistanceBetweenCoords(_0x3248e6.x, _0x3248e6.y, _0x3248e6.z, _0x4aae22.x, _0x4aae22.y, _0x4aae22.z, _0x44b88a);
            }
            ['getDistance'](_0x3ed77c) {
                const _0x2365e2 = mp.players.local.position;
                return mp.game.gameplay.getDistanceBetweenCoords(_0x2365e2.x, _0x2365e2.y, _0x2365e2.z, _0x3ed77c.x, _0x3ed77c.y, _0x3ed77c.z, false);
            }
        }
        _0x5900ba.default = _0x35a8d9;
    }, {}],
    272: [function (_0x221b4e, _0x1cb339, _0x3a5e7a) {
        'use strict';
    }, {
        '../player/player': 262
    }],
    273: [function (_0x1565e3, _0x3e19f3, _0x3ef21d) {
        'use strict';

        Object.defineProperty(_0x3ef21d, '__esModule', {
            value: true
        });
        class _0x437e58 {
            constructor() {
                this.localPlayer = mp.players.local;
                this.maxSpeed = 15;
                this.minHeight = 15;
                this.maxHeight = 45;
                this.maxAngle = 15;
            }
            ['startRappel']() {
                const _0x355301 = this.localPlayer.vehicle;
                if (!_0x355301) {
                    return;
                }
                if (!mp.game.invoke('0x4E417C547182C84D', _0x355301.handle)) {
                    return;
                }
                if (_0x355301.getSpeed() > this.maxSpeed) {
                    return;
                }
                if (_0x355301.getPedInSeat(-1) === this.localPlayer.handle || _0x355301.getPedInSeat(0) === this.localPlayer.handle) {
                    return;
                }
                const _0x3e6b42 = this.localPlayer.getScriptTaskStatus(-275944640);
                if (_0x3e6b42 === 0 || _0x3e6b42 === 1) {
                    return;
                }
                const _0x1f8cb4 = _0x355301.getHeightAboveGround();
                if (_0x1f8cb4 < this.minHeight || _0x1f8cb4 > this.maxHeight) {
                    return;
                }
                if (!_0x355301.isUpright(this.maxAngle) || _0x355301.isUpsidedown()) {
                    return;
                }
                this.localPlayer.clearTasks();
                this.localPlayer.taskRappelFromHeli(10);
            }
        }
        _0x3ef21d.default = new _0x437e58();
    }, {}],
    274: [function (_0x5e250e, _0x4ea6c8, _0x3f308d) {
        'use strict';

        Object.defineProperty(_0x3f308d, '__esModule', {
            value: true
        });
        var _0x914d51 = _0x5e250e('../player/player');
        var _0x48324c = _0x914d51 && _0x914d51.__esModule ? _0x914d51 : {
            default: _0x914d51
        };
        class _0x2fb1a9 {
            constructor() {
                this.lastSireneStateCheck = null;
                this.doorstate = false;
                this.menuItemsInCar = [{
                    text: 'Motor an/aus',
                    event: 'ToggleEngine',
                    server: true,
                    args: ''
                }, {
                    text: 'Türen auf/zu',
                    event: 'ToggleDoor',
                    server: true,
                    args: ''
                }, {
                    text: 'Kofferraum auf/zu',
                    event: 'ToggleTrunk',
                    server: true,
                    args: ''
                }, {
                    text: 'Handbremse',
                    event: 'Handbreak',
                    server: true,
                    args: ''
                }, {
                    text: 'Rauswerfen',
                    event: 'Eject',
                    server: true,
                    args: ''
                }];
                this.menuItemsOutOfCar = [{
                    text: 'Kofferraum auf/zu',
                    event: 'ToggleTrunkOutside',
                    server: true,
                    args: ''
                }, {
                    text: 'Türen auf/zu',
                    event: 'ToggleDoorOutside',
                    server: true,
                    args: ''
                }, {
                    text: 'Reparieren',
                    event: 'Repair',
                    server: true,
                    args: ''
                }, {
                    text: 'Tanken',
                    event: 'Refuel',
                    server: true,
                    args: ''
                }, {
                    text: 'Einparken',
                    event: 'Park',
                    server: true,
                    args: ''
                }];
                this.menuItemsOutOfCarCops = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Schlüssel',
                    description: 'Fahrzeug auf/abschließen',
                    icon: 'img/icons/vehicle/key.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_LOCK_OUTSIDE',
                    arg: ''
                }, {
                    label: 'Kofferraum',
                    description: 'Öffnet/Schließt den Kofferraum',
                    icon: 'img/icons/vehicle/trunk.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_DOOR_OUTSIDE',
                    arg: '5'
                }, {
                    label: 'Durchsuchen',
                    description: 'Fahrzeug Durchsuchen',
                    icon: 'img/icons/player/search.png',
                    id: 'REQUEST_VEHICLE_FRISK',
                    arg: ''
                }, {
                    label: 'Tankstelle',
                    description: 'Betanken Sie das Fahrzeug',
                    icon: 'img/icons/vehicle/gasstation.png',
                    id: 'REQUEST_VEHICLE_FILL_FUEL',
                    arg: ''
                }, {
                    label: 'Information',
                    description: 'Informationen zum Fahrzeug',
                    icon: 'img/icons/vehicle/information.png',
                    id: 'REQUEST_VEHICLE_INFORMATION',
                    arg: ''
                }, {
                    label: 'Reparieren',
                    description: 'Reparieren Sie das Fahrzeug',
                    icon: 'img/icons/vehicle/repair.png',
                    id: 'REQUEST_VEHICLE_REPAIR',
                    arg: ''
                }];
                this.menuItemsOutOfCarDpos = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Schlüssel',
                    description: 'Fahrzeug auf/abschließen',
                    icon: 'img/icons/vehicle/key.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_LOCK_OUTSIDE',
                    arg: ''
                }, {
                    label: 'Kofferraum',
                    description: 'Öffnet/Schließt den Kofferraum',
                    icon: 'img/icons/vehicle/trunk.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_DOOR_OUTSIDE',
                    arg: '5'
                }, {
                    label: 'Tankstelle',
                    description: 'Betanken Sie das Fahrzeug',
                    icon: 'img/icons/vehicle/gasstation.png',
                    id: 'REQUEST_VEHICLE_FILL_FUEL',
                    arg: ''
                }, {
                    label: 'Information',
                    description: 'Informationen zum Fahrzeug',
                    icon: 'img/icons/vehicle/information.png',
                    id: 'REQUEST_VEHICLE_INFORMATION',
                    arg: ''
                }, {
                    label: 'Reparieren',
                    description: 'Reparieren Sie das Fahrzeug',
                    icon: 'img/icons/vehicle/repair.png',
                    id: 'REQUEST_VEHICLE_REPAIR',
                    arg: ''
                }];
                this.menuItemsInCarCops = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Schlüssel',
                    description: 'Fahrzeug auf/abschließen',
                    icon: 'img/icons/vehicle/key.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_LOCK',
                    arg: ''
                }, {
                    label: 'Rauswerfen',
                    description: 'Wirft jemanden aus dem Fahrzeug',
                    icon: 'img/icons/vehicle/eject.png',
                    id: 'REQUEST_VEHICLE_EJECT',
                    arg: ''
                }, {
                    label: 'Kofferraum',
                    description: 'Öffnet/Schließt den Kofferraum',
                    icon: 'img/icons/vehicle/trunk.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_DOOR',
                    arg: '5'
                }, {
                    label: 'Radio',
                    description: 'Stelle das Radio ein',
                    icon: 'img/icons/vehicle/radio.png',
                    id: 'LOCAL_ACTION',
                    arg: 'RadioOff'
                }, {
                    label: 'Anschnallgurt',
                    description: 'Schnalle dich an',
                    icon: 'img/icons/vehicle/seatbelt.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_SEATBELT',
                    arg: ''
                }, {
                    label: 'Motor',
                    description: 'Startet/Stopt den Motor',
                    icon: 'img/icons/vehicle/engine.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_ENGINE',
                    arg: ''
                }];
                this.menuItemsInCarDpos = [{
                    label: 'Exit',
                    description: 'Schließt das Menü',
                    icon: 'img/icons/exit.png',
                    id: 'donothing',
                    arg: ''
                }, {
                    label: 'Schlüssel',
                    description: 'Fahrzeug auf/abschließen',
                    icon: 'img/icons/vehicle/key.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_LOCK',
                    arg: ''
                }, {
                    label: 'Rauswerfen',
                    description: 'Wirft jemanden aus dem Fahrzeug',
                    icon: 'img/icons/vehicle/eject.png',
                    id: 'REQUEST_VEHICLE_EJECT',
                    arg: ''
                }, {
                    label: 'Kofferraum',
                    description: 'Öffnet/Schließt den Kofferraum',
                    icon: 'img/icons/vehicle/trunk.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_DOOR',
                    arg: '5'
                }, {
                    label: 'Motor',
                    description: 'Startet/Stopt den Motor',
                    icon: 'img/icons/vehicle/engine.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_ENGINE',
                    arg: ''
                }, {
                    label: 'Anschnallgurt',
                    description: 'Schnalle dich an',
                    icon: 'img/icons/vehicle/seatbelt.png',
                    id: 'REQUEST_VEHICLE_TOGGLE_SEATBELT',
                    arg: ''
                }, {
                    label: 'Radio',
                    description: 'Stelle das Radio ein',
                    icon: 'img/icons/vehicle/radio.png',
                    id: 'LOCAL_ACTION',
                    arg: 'RadioOff'
                }, {
                    label: 'Hoch/Runter',
                    description: 'Tieflader Rampe hoch/runter',
                    icon: 'img/icons/vehicle/aufladen.png',
                    id: 'REQUEST_VEHICLE_FlATBED_LOAD_TOGGLE',
                    arg: 'dposclient'
                }, {
                    label: 'An/Ab',
                    description: 'Tieflader Seil an/ab',
                    icon: 'img/icons/vehicle/aufladen.png',
                    id: 'REQUEST_VEHICLE_FlATBED_ROPE_TOGGLE',
                    arg: 'dposclient'
                }];
                let _0x54fa28 = -1;
                let _0x26e97b = -1;
                let _0x3fe0d2 = -1;
                mp.events.add('syncTuning', (_0x586b59, _0x1f8c99, _0x5178e0) => {
                    if (_0x586b59 == null) {
                        return;
                    }
                    let _0x51247f = _0x586b59.getExtraColours(1, 1);
                    if (parseInt(_0x1f8c99) == 14 || parseInt(_0x1f8c99) == 16 || parseInt(_0x1f8c99) == 18) {
                        _0x586b59.setMod(parseInt(_0x1f8c99), _0x5178e0);
                    } else {
                        if (parseInt(_0x1f8c99) == 22) {
                            if (_0x5178e0 == -1) {
                                _0x586b59.toggleMod(22, false);
                                mp.game.invoke('0xE41033B25D003A07', _0x586b59.handle, 255);
                            } else {
                                _0x586b59.toggleMod(22, true);
                            }
                        } else {
                            if (parseInt(_0x1f8c99) == 46) {
                                mp.game.invoke('0x57C51E6BAD752696', _0x586b59.handle, _0x5178e0);
                            } else {
                                if (parseInt(_0x1f8c99) == 80) {
                                    mp.game.invoke('0xE41033B25D003A07', _0x586b59.handle, _0x5178e0);
                                } else {
                                    if (parseInt(_0x1f8c99) == 81) {
                                        _0x586b59.setNumberPlateTextIndex(parseInt(_0x5178e0));
                                    } else {
                                        if (parseInt(_0x1f8c99) == 95) {
                                            _0x54fa28 = _0x5178e0;
                                        } else {
                                            if (parseInt(_0x1f8c99) == 96) {
                                                _0x26e97b = _0x5178e0;
                                            } else {
                                                if (parseInt(_0x1f8c99) == 97) {
                                                    _0x3fe0d2 = _0x5178e0;
                                                } else {
                                                    if (parseInt(_0x1f8c99) == 98) {
                                                        _0x586b59.setExtraColours(_0x5178e0, _0x51247f.wheelColor);
                                                    } else {
                                                        if (parseInt(_0x1f8c99) == 99) {
                                                            _0x586b59.setExtraColours(_0x51247f.pearlescentColor, _0x5178e0);
                                                        } else if (parseInt(_0x1f8c99) == 1337) {
                                                            _0x586b59.setWheelType(_0x5178e0);
                                                        } else {
                                                            mp.game.invoke('0x6AF0636DDEDCB6DD', _0x586b59.handle, parseInt(_0x1f8c99), _0x5178e0, false);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (_0x54fa28 != -1 && _0x26e97b != -1 && _0x3fe0d2 != -1) {
                        _0x586b59.toggleMod(20, true);
                        if (_0x54fa28 == 1 && _0x26e97b == 1 && _0x3fe0d2 == 1) {
                            _0x54fa28 = 1;
                            _0x26e97b = 1;
                            _0x3fe0d2 = 1;
                        }
                        _0x586b59.setTyreSmokeColor(_0x54fa28, _0x26e97b, _0x3fe0d2);
                        _0x54fa28 = -1;
                        _0x26e97b = -1;
                        _0x3fe0d2 = -1;
                    }
                });
                mp.events.add('syncVehicleDoor', (_0x34b5d6, _0x266167, _0x1ecac4) => {
                    if (_0x34b5d6 == null) {
                        return;
                    }
                    if (_0x1ecac4 == true) {
                        _0x34b5d6.setDoorOpen(_0x266167, false, false);
                    } else {
                        _0x34b5d6.setDoorShut(_0x266167, false);
                    }
                });
                mp.events.add('syncVehicleDoors', (_0x1eeb51, _0x42d2f5, _0x4f2f34) => {
                    if (_0x1eeb51 == null) {
                        return;
                    }
                    if (_0x4f2f34 == true) {
                        _0x42d2f5.forEach(_0x275fe6 => {
                            _0x1eeb51.setDoorOpen(_0x275fe6, false, false);
                        });
                    } else {
                        _0x42d2f5.forEach(_0x5ac8fd => {
                            _0x1eeb51.setDoorShut(_0x5ac8fd, false);
                        });
                    }
                });
                mp.events.add('shuffleseat', (_0x28b39e, _0xda1010) => {
                    if (_0x28b39e.isInAnyVehicle(false)) {
                        if (_0x28b39e == null || _0x28b39e.vehicle == null || !_0x28b39e.vehicle.isSeatFree(_0xda1010)) {
                            return;
                        }
                        _0x28b39e.taskShuffleToNextVehicleSeat(_0x28b39e.vehicle.handle);
                    }
                });
                setInterval(() => {
                    if (mp.players.local.vehicle != null && mp.players.local.isInAnyVehicle(false) && (mp.players.local.vehicle.isSirenOn() != this.lastSireneStateCheck || this.lastSireneStateCheck == null)) {
                        this.lastSireneStateCheck = mp.players.local.vehicle.isSirenOn();
                        mp.events.callRemote('syncSireneStatus', mp.players.local.vehicle, mp.players.local.vehicle.isSirenOn(), mp.players.local.vehicle.isSirenSoundOn());
                    }
                }, 500);
                mp.events.add('refreshSireneState', async (_0x554efc, _0x396b86, _0x384518) => {
                    if (_0x554efc == null || !_0x554efc.doesExist()) {
                        return;
                    }
                    await mp.game.waitAsync(100);
                    _0x554efc.setSiren(_0x396b86);
                    _0x554efc.setSirenSound(_0x384518);
                });
                mp.events.add('entityStreamIn', async _0xe4131e => {
                    if (_0xe4131e != null && _0xe4131e.doesExist() && _0xe4131e.type == 'vehicle' && _0xe4131e.getVariable('ShopCar') == null) {
                        _0xe4131e.setInvincible(false);
                        await mp.game.waitAsync(100);
                        mp.events.callRemote('requestSireneStatus', _0xe4131e);
                    }
                });
                mp.events.add('responseVehicleSyncData', (_0x520a18, _0x2e0eba, _0x54956a, _0x51ba41) => {
                    if (_0x520a18 == null) {
                        return;
                    }
                    let _0x45fbbc = _0x520a18.getExtraColours(1, 1);
                    let _0x495934 = _0x45fbbc.pearlescentColor;
                    let _0x2e6cc6 = _0x45fbbc.wheelColor;
                    let _0x1b0370 = -1;
                    let _0x42eb76 = -1;
                    let _0x145337 = -1;
                    const _0x26249d = JSON.parse(_0x2e0eba);
                    for (const _0x4ef4ee in _0x26249d) {
                        if (parseInt(_0x4ef4ee) == 14 || parseInt(_0x4ef4ee) == 16 || parseInt(_0x4ef4ee) == 18) {
                            _0x520a18.setMod(parseInt(_0x4ef4ee), _0x26249d[_0x4ef4ee]);
                        } else {
                            if (parseInt(_0x4ef4ee) == 22) {
                                if (_0x26249d[_0x4ef4ee] == -1) {
                                    _0x520a18.toggleMod(22, false);
                                    mp.game.invoke('0xE41033B25D003A07', _0x520a18.handle, 255);
                                } else {
                                    _0x520a18.toggleMod(22, true);
                                }
                            } else {
                                if (parseInt(_0x4ef4ee) == 46) {
                                    mp.game.invoke('0x57C51E6BAD752696', _0x520a18.handle, _0x26249d[_0x4ef4ee]);
                                } else {
                                    if (parseInt(_0x4ef4ee) == 80) {
                                        mp.game.invoke('0xE41033B25D003A07', _0x520a18.handle, _0x26249d[_0x4ef4ee]);
                                    } else {
                                        if (parseInt(_0x4ef4ee) == 81) {
                                            _0x520a18.setNumberPlateTextIndex(_0x26249d[_0x4ef4ee]);
                                        } else {
                                            if (parseInt(_0x4ef4ee) == 95) {
                                                _0x1b0370 = _0x26249d[_0x4ef4ee];
                                            } else {
                                                if (parseInt(_0x4ef4ee) == 96) {
                                                    _0x42eb76 = _0x26249d[_0x4ef4ee];
                                                } else {
                                                    if (parseInt(_0x4ef4ee) == 97) {
                                                        _0x145337 = _0x26249d[_0x4ef4ee];
                                                    } else {
                                                        if (parseInt(_0x4ef4ee) == 98) {
                                                            _0x495934 = _0x26249d[_0x4ef4ee];
                                                        } else if (parseInt(_0x4ef4ee) == 99) {
                                                            _0x2e6cc6 = _0x26249d[_0x4ef4ee];
                                                        } else {
                                                            mp.game.invoke('0x6AF0636DDEDCB6DD', _0x520a18.handle, parseInt(_0x4ef4ee), _0x26249d[_0x4ef4ee], false);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _0x520a18.setExtraColours(_0x495934, _0x2e6cc6);
                    if (_0x1b0370 != -1 || _0x42eb76 != -1 || _0x145337 != -1) {
                        _0x520a18.toggleMod(20, true);
                        if (_0x54fa28 == 1 && _0x26e97b == 1 && _0x3fe0d2 == 1) {
                            _0x54fa28 = 1;
                            _0x26e97b = 1;
                            _0x3fe0d2 = 1;
                        }
                        _0x520a18.setTyreSmokeColor(_0x1b0370, _0x42eb76, _0x145337);
                    }
                    const _0x890b2 = JSON.parse(_0x54956a);
                    for (const _0x3a056b in _0x890b2) {
                        if (_0x890b2[_0x3a056b] == true) {
                            _0x520a18.setDoorOpen(parseInt(_0x3a056b), false, false);
                        }
                    }
                    if (_0x51ba41 > 0) {
                        mp.game.invoke('0x60BF608F1B8CD1B6', _0x520a18.handle, _0x51ba41);
                    }
                });
            }
            ['getVehicleItems']() {
                return _0x48324c.default.isInAnyVehicle(false) ? this.menuItemsInCar : this.menuItemsOutOfCar;
            }
        }
        _0x3f308d.default = new _0x2fb1a9();
    }, {
        '../player/player': 262
    }],
    275: [function (_0x4d151f, _0x55f1a7, _0x4feda7) {
        'use strict';

        _0x4d151f('./vehicle-module');
        _0x4d151f('./flatbed');
    }, {
        './flatbed': 272,
        './vehicle-module': 274
    }],
    276: [function (_0x686865, _0x35a052, _0x17eada) {
        'use strict';

        Object.defineProperty(_0x17eada, '__esModule', {
            value: true
        });
        class _0x257299 {
            constructor() {
                this.radioChatPlayers = '';
                this.radioAirFunkPlayers = '';
                this.serverId = 1;
                this.voiceChannel = '';
                this.voicePassword = '';
                this.streamingRangePlayer = [];
                this.phonePartner = '';
                mp.events.add('SetRadioTalkUwe', _0x248172 => {
                    mp.events.callRemote('SetRadioTalkUwe', _0x248172);
                });
                mp.events.add('leaveFunk', () => {
                    mp.events.callRemote('LeaveRadioChannel');
                });
            }
        }
        _0x17eada.default = new _0x257299();
    }, {
        '../app/apps': 8,
        '../apps/callManage': 17,
        '../browser/browser': 100,
        '../player/player': 262
    }],
    277: [function (_0x133fed, _0x3be01f, _0x34c743) {
        'use strict';

        Object.defineProperty(_0x34c743, '__esModule', {
            value: true
        });
        var _0x289ab6 = _0x133fed('./windows');
        var _0x300105 = _0x289ab6 && _0x289ab6.__esModule ? _0x289ab6 : {
            default: _0x289ab6
        };
        var _0x1c142b = _0x133fed('../components/component');
        var _0x3e401d = _0x1c142b && _0x1c142b.__esModule ? _0x1c142b : {
            default: _0x1c142b
        };
        var _0x4f5348 = _0x133fed('../peds/peds');
        var _0xe92afc = _0x4f5348 && _0x4f5348.__esModule ? _0x4f5348 : {
            default: _0x4f5348
        };
        var _0x301944 = _0x133fed('../browser/browser');
        var _0x437c37 = _0x301944 && _0x301944.__esModule ? _0x301944 : {
            default: _0x301944
        };
        class _0x1b5aab extends _0x3e401d.default {
            constructor(_0x494763, ..._0x324fad) {
                super(_0x494763, ..._0x324fad);
                _0x300105.default.windows.set(_0x494763, this);
                this.cursorVisible = false;
                this.hudVisible = true;
            }
            ['setCurserVisible'](_0x56b40f) {
                this.cursorVisible = _0x56b40f;
            }
            ['setHudVisible'](_0x1fce2f) {
                this.hudVisible = _0x1fce2f;
            }
            ['setChatVisible'](_0x49bd89) {
                this.chatVisible = _0x49bd89;
            }
            ['show'](_0x50e566) {
                console.log('window opening; ' + this.name + ' with ' + _0x50e566 + ' args.');
                this.args = _0x50e566;
                mp.gui.cursor.visible = this.cursorVisible;
                mp.game.ui.displayHud(this.hudVisible);
                _0xe92afc.default.disableAllControls(true);
                this.onShow();
                _0x300105.default.show(this.name, _0x50e566);
                if (this.name == 'Bank') {
                    mp.gui.cursor.visible = true;
                }
            }
            ['isVisible']() {
                return _0x300105.default.visibleWindow === this.name;
            }
            ['onShow']() { }
            ['close'](_0x4292e5 = false) {
                if (!_0x4292e5) {
                    _0x437c37.default.execute("window.events.ShowIF(\"\")");
                }
                this.cursorVisible = mp.gui.cursor.visible;
                if (this.cursorVisible) {
                    mp.gui.cursor.visible = false;
                }
                if (!this.hudVisible) {
                    mp.game.ui.displayHud(true);
                }
                _0xe92afc.default.disableAllControls(false);
                this.onClose();
                if (this.name == 'Phone') {
                    _0x437c37.default.execute('events.Phone(0)');
                    _0x300105.default.visibleWindow = null;
                } else {
                    _0x300105.default.close(this.name);
                }
            }
            ['onClose']() { }
        }
        _0x34c743.default = _0x1b5aab;
    }, {
        '../browser/browser': 100,
        '../components/component': 110,
        '../peds/peds': 257,
        './windows': 278
    }],
    278: [function (_0x67d266, _0x13969e, _0x5c0e67) {
        'use strict';

        Object.defineProperty(_0x5c0e67, '__esModule', {
            value: true
        });
        var _0x2bb033 = _0x67d266('../browser/browser');
        var _0x4bffe7 = _0x2bb033 && _0x2bb033.__esModule ? _0x2bb033 : {
            default: _0x2bb033
        };
        class _0x5abb97 {
            constructor() {
                this.windows = new Map();
                this.visibleWindow = null;
                mp.events.add('openWindow', (_0xfc807, _0x1766c8) => {
                    mp.console.logWarning('window opened from client; ' + _0xfc807, true, true);
                    if (!this.windows.has(_0xfc807)) {
                        return;
                    }
                    let _0x319a6f = this.windows.get(_0xfc807);
                    _0x319a6f.show(_0x1766c8);
                });
                mp.events.add('onWindowClosed', _0x330604 => {
                    mp.console.logWarning('window closed from client; ' + _0x330604, true, true);
                    if (!this.windows.has(_0x330604)) {
                        return;
                    }
                    let _0x1f6c34 = this.windows.get(_0x330604);
                    _0x1f6c34.close(true);
                    this.close(_0x330604);
                });
                mp.events.add('closeWindow', _0x34bf3a => {
                    mp.console.logWarning('window closed from client; ' + _0x34bf3a, true, true);
                    if (!this.windows.has(_0x34bf3a)) {
                        return;
                    }
                    let _0x490cec = this.windows.get(_0x34bf3a);
                    _0x490cec.close();
                });
                mp.events.add('closeAllWindow', () => {
                    this.windows.forEach(_0x5271f5 => {
                        if (_0x5271f5.isVisible()) {
                            _0x5271f5.close();
                        }
                    });
                });
            }
            ['show'](_0x4320b2, _0x106369) {
                this.visibleWindow = _0x4320b2;
                if (_0x4320b2 == 'Phone') {
                    _0x4bffe7.default.execute('events.Phone(1)');
                } else {
                    if (_0x4320b2 == 'Chat') {
                        _0x4bffe7.default.execute('events.ShowChat(true)');
                    } else if (_0x106369 && _0x106369.length > 0) {
                        _0x4bffe7.default.execute("window.events.ShowIF(\"" + _0x4320b2 + "\", '" + _0x106369 + "')");
                    } else {
                        _0x4bffe7.default.execute("window.events.ShowIF(\"" + _0x4320b2 + "\")");
                    }
                }
            }
            ['close'](_0x728292) {
                if (this.visibleWindow === _0x728292) {
                    this.visibleWindow = null;
                }
            }
        }
        _0x5c0e67.default = new _0x5abb97();
    }, {
        '../browser/browser': 100
    }]
}, {}, [1]);