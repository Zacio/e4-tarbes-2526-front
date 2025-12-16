import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { type FC, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useController, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

const Formulaire: FC = () => {

    //user form with mui components
    //the form must handle : firstName, lastName, email, phone, address, and a select menu with roles admin and guest
    
    const { handleSubmit, control } = useForm<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        role: string;
        age: number,
        subscribedAt : Date
    }>()
    const[date, setDate] = useState<Date | null>(new Date())
    
    const onSubmit = (data: any) => {
        console.log(data);
    }

    const handleDate = (date: Date | null) => {
    setDate(date);
  };




    return (
        <Box>
            <Typography variant="h6">Formulaire utilisateur</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: "Le prénom est requis" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                                <TextField
                                    label="Prénom"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </Grid>
                        )}
                    />
                    <Controller
                        control={control}
                        name="lastName"
                        rules={{ required: "Le nom est requis" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                                <TextField
                                    label="Nom"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </Grid>
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: "L'email est requis" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                                <TextField
                                    label="Email"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </Grid>
                        )}
                    />
                    <Controller
                        control={control}
                        name="phone"
                        rules={{ required: "Le téléphone est requis" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                                <TextField
                                    label="Téléphone"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </Grid>
                        )}
                    />
                    <Controller
                        control={control}
                        name="address"
                        rules={{ required: "L'adresse est requise" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                                <TextField
                                    label="Adresse"
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </Grid>
                        )}
                    />
                    <Controller
                        control={control}
                        name="role"
                        rules={{ required: "Le rôle est requis" }}
                        render={({ field, fieldState }) => (
                            <Grid size={12}>
                            <FormControl error={!!fieldState.error}>
                                <InputLabel>Role</InputLabel>
                                <Select
                                    label="Role"
                                    {...field}
                                >
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="guest">Guest</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        )}
                    />

                    <Grid size={12}>
                        <Controller
                            control={control}
                            name="subscribedAt"
                            render={
                                ({field, fieldState}) =>
                                    (<DatePicker
                                        
                                        selected={field.value = date ?? new Date}
                                        placeholderText="Select a date"
                                        onChange={handleDate}
                                    />)
                                
                            }
                        />
                    </Grid>
                    <Grid size={12}>
                        <Button type="submit" variant="contained">Add user!</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}
export default Formulaire